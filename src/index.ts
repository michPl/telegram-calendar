interface IOptions {
  weekDayNames?: string[];
  monthNames?: string[];
  averageYears?: number;
  callbackDataType?: string;
  ignoreButtonValue?: string | number;
}

interface IInputOptions extends IOptions {
  minDate?: string | number | Date;
  maxDate?: string | number | Date;
}

interface ICalendarOptions extends IOptions {
  minDate?: Date;
  maxDate?: Date;
  yearsInLine: number;
}

interface ICallbackButton {
  text: string;
  callback_data: string;
}

class CalendarService {
  private options: ICalendarOptions;

  constructor({ minDate = null, maxDate = null, ...options }: IInputOptions = {}) {
    const defaultOptions: ICalendarOptions = {
      weekDayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      minDate: this.sanitizeMinMaxDate(minDate),
      maxDate: this.sanitizeMinMaxDate(maxDate),
      averageYears: 14,
      callbackDataType: 'calendar',
      ignoreButtonValue: 0,
      yearsInLine: 7
    };

    this.options = {
      ...defaultOptions,
      ...options
    };

    if (!this.isValidMinMaxDate()) {
      throw new Error('Max date lower than min date');
    }

    if (!this.options.weekDayNames || this.options.weekDayNames.length !== 7) {
      throw new Error('Wrong week day names');
    }

    if (!this.options.monthNames || this.options.monthNames.length !== 12) {
      throw new Error('Wrong month names');
    }
  }

  private isDate(date: Date): boolean {
    return date instanceof Date && isFinite(date.getTime());
  }

  private sanitizeMinMaxDate(inputDate: string | number | Date): Date {
    if (!inputDate) return null;

    const date = new Date(inputDate);

    if (!this.isDate(date)) return null;

    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  private isValidMinMaxDate(): boolean {
    return !this.options.maxDate || !this.options.minDate || this.options.maxDate >= this.options.minDate;
  }

  protected createCallbackButton(
    name: string,
    value: string | number = this.options.ignoreButtonValue,
    action: string = null
  ): ICallbackButton {
    return {
      text: name,
      callback_data: JSON.stringify({
        type: this.options.callbackDataType,
        date: name.trim() ? value : this.options.ignoreButtonValue,
        action
      })
    };
  }

  private addHeader(date: Date): ICallbackButton[][] {
    const monthYear = `${this.options.monthNames[date.getMonth()]} ${date.getFullYear()}`;
    const header: ICallbackButton[] = [];
    const currentDate = this.formatAnswer(date);
    const result: ICallbackButton[][] = [];

    this.isInMinMonth(date) ?
      header.push(this.createCallbackButton(' ')) :
      header.push(this.createCallbackButton('<', currentDate, 'prev-month'));

    header.push(this.createCallbackButton(monthYear, currentDate, 'select-year'));

    this.isInMaxMonth(date) ?
      header.push(this.createCallbackButton(' ')) :
      header.push(this.createCallbackButton('>', currentDate, 'next-month'));

    result.push(header);
    result.push(this.options.weekDayNames.map(day => this.createCallbackButton(day)));
    return result;
  }

  private isDayAvailable(date: Date, month: number): boolean {
    if (this.options.minDate && date < this.options.minDate) return false;
    if (this.options.maxDate && date > this.options.maxDate) return false;
    if (date.getMonth() !== month) return false;

    return true;
  }

  private addDays(date: Date): ICallbackButton[][] {
    const firstDay = this.getStartOfMonth(date);
    const lastDay = this.getEndOfMonth(date);
    const month = date.getMonth();
    const isSunday = firstDay.getDay() === 0;
    const startDay = -firstDay.getDay() + (isSunday ? -5 : 2);
    const startDate = new Date(firstDay.getFullYear(), firstDay.getMonth(), startDay);
    const result: ICallbackButton[][] = [];

    let day = startDate;
    while (day <= lastDay) {
      const days: ICallbackButton[] = [];
      let newDay: Date;
      for (let i = 0; i < 7; i++) {
        newDay = this.addDay(day, i);
        (this.isDayAvailable(newDay, month)) ?
          days.push(this.createCallbackButton(String(newDay.getDate()), this.formatAnswer(newDay))) :
          days.push(this.createCallbackButton(' '));
      }
      day = new Date(this.addDay(newDay));
      result.push(days);
    }

    return result;
  }

  private leadingZero(data: number | string): string {
    return (`0${data}`).slice(-2);
  }

  private formatAnswer(date: Date): string {
    const month = this.leadingZero(date.getMonth() + 1);
    const day = this.leadingZero(date.getDate());

    return `${date.getFullYear()}-${month}-${day}`;
  }

  private addDay(date: Date, daysCount = 1): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + daysCount);
  }

  private getStartOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  private getEndOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  private isValidDate(date: Date): boolean {
    if (this.options.minDate && date < this.options.minDate) return false;
    if (this.options.maxDate && date > this.options.maxDate) return false;
    return true;
  }

  public getPage(inputDate: number | string | Date): ICallbackButton[][] {
    const date = new Date(inputDate);

    if (!this.isDate(date) || !this.isValidDate(date)) throw new Error(`Invalid date: ${inputDate}`);

    return [...this.addHeader(date), ...this.addDays(date)];
  }

  public getYears(inputDate: number | string | Date): ICallbackButton[][] {
    const date = new Date(inputDate);

    if (!this.isDate(date) || !this.isValidDate(date)) throw new Error(`Invalid date: ${inputDate}`);

    const minYear = this.getMinYear(date);
    const maxYear = this.getMaxYear(date);

    let i = minYear;
    const result: ICallbackButton[][] = [];
    while (i <= maxYear) {
      const string: ICallbackButton[] = [];
      for (let j = 0; j < this.options.yearsInLine && i <= maxYear; j++) {
        const newYear = new Date(i, date.getMonth(), date.getDate());
        string.push(
          this.createCallbackButton(String(i), this.formatAnswer(newYear), 'set-year')
        );
        i++;
      }
      result.push(string);
    }

    return result;
  }

  private getMaxYear(date: Date): number {
    const year = date.getFullYear() + this.options.averageYears;
    return (this.options.maxDate) ? Math.min(this.options.maxDate.getFullYear(), year) : year;
  }

  private getMinYear(date: Date): number {
    const year = date.getFullYear() - this.options.averageYears;
    return (this.options.minDate) ? Math.max(this.options.minDate.getFullYear(), year) : year;
  }

  private isInMinMonth(date: Date): boolean {
    return this.isSameMonth(this.options.minDate, date);
  }

  private isInMaxMonth(date: Date): boolean {
    return this.isSameMonth(this.options.maxDate, date);
  }

  private isSameMonth(optionsDate?: Date, date: Date = new Date()): boolean {
    if (!optionsDate) return false;

    return optionsDate.getFullYear() === date.getFullYear() && optionsDate.getMonth() === date.getMonth();
  }
}

export { CalendarService, IInputOptions as IOptions, ICallbackButton };
