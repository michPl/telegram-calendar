import { expect } from 'chai';
import { Calendar, IOptions, ICallbackButton, } from '../src';
import { days as testDays, years as testYears } from './data/calendarActualDates';

describe('Calendar', () => {
  let actualDays: ICallbackButton[][];
  let actualYears: ICallbackButton[][];

  beforeEach(() => {
    actualDays = testDays;
    actualYears = testYears;
  });

  describe('with default options', () => {
    it('successfully page', () => {
      const options: IOptions = {};
      const calendar = new Calendar(options);
      const date = new Date('2013-12-13');

      expect(actualDays).to.deep.equal(calendar.getPage(date));
    });

    it('successfully years', () => {
      const options: IOptions = {};
      const calendar = new Calendar(options);
      const date = new Date('2013-12-13');

      expect(actualYears).to.deep.equal(calendar.getYears(date));
    });

    it('wrong input date throws error for page', () => {
      const options: IOptions = {};
      const calendar = new Calendar(options);
      const date = 'wrong date';
      expect(() => calendar.getPage(date)).to.throw(`Invalid date: ${date}`);
    });

    it('wrong input date throws error for years', () => {
      const options: IOptions = {};
      const calendar = new Calendar(options);
      const date = 'wrong date';
      expect(() => calendar.getYears(date)).to.throw(`Invalid date: ${date}`);
    });
  });

  describe('set options', () => {
    describe('weekDayNames', () => {
      it('successfully', () => {
        const options: IOptions = { weekDayNames: ['1', '2', '3', '4', '5', '6', '7'] };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        const days = calendar.getPage(date);

        expect([
          { text: '1', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' },
          { text: '2', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' },
          { text: '3', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' },
          { text: '4', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' },
          { text: '5', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' },
          { text: '6', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' },
          { text: '7', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' }
        ]).to.deep.equal(days[1]);
      });

      it('count week days not equal 7 throws error', () => {
        const options: IOptions = { weekDayNames: ['1', '2', '3', '4', '5', '6'] };
        expect(() => new Calendar(options)).to.throw('Wrong week day names');
      });
    });

    describe('monthNames', () => {
      it('successfully', () => {
        const options: IOptions = { monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        const days = calendar.getPage(date);

        expect('12 2013').to.deep.equal(days[0][1].text);
      });

      it('count month names not equal 12 throws error', () => {
        const options: IOptions = { monthNames: ['1', '2', '3', '4', '5', '6'] };
        expect(() => new Calendar(options)).to.throw('Wrong month names');
      });
    });

    describe('minDate', () => {
      it('page when minDate less than input date for 1 day', () => {
        const options: IOptions = { minDate: '2013-12-12' };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        const days = calendar.getPage(date);
        const emptyButton = { text: ' ', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' };

        expect(emptyButton).to.deep.equal(days[0][0]);
        expect(emptyButton).to.deep.equal(days[4][0]);
        expect(emptyButton).to.deep.equal(days[4][1]);
        expect(emptyButton).to.deep.equal(days[4][2]);
        expect(actualDays[4][3]).to.deep.equal(days[4][3]);
        expect(actualDays[4][4]).to.deep.equal(days[4][4]);
        expect(actualDays[4][5]).to.deep.equal(days[4][5]);
        expect(actualDays[4][6]).to.deep.equal(days[4][6]);
        expect(actualDays[5]).to.deep.equal(days[5]);
        expect(actualDays[6]).to.deep.equal(days[6]);
        expect(actualDays[7]).to.deep.equal(days[7]);
      });

      it('years when minDate set', () => {
        const options: IOptions = { minDate: '2013-12-12' };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        const years = calendar.getYears(date);

        expect([testYears[2], testYears[3], testYears[4]]).to.deep.equal(years);
      });

      it('wrong minDate fixies by null', () => {
        const options: IOptions = { minDate: 'wrong date' };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        expect(actualDays).to.deep.equal(calendar.getPage(date));
      });

      it('input date less than minDate throws error for page', () => {
        const options: IOptions = { minDate: '2013-12-14' };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        expect(() => calendar.getPage(date)).to.throw(`Invalid date: ${date}`);
      });

      it('input date less than minDate throws error for years', () => {
        const options: IOptions = { minDate: '2013-12-14' };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        expect(() => calendar.getYears(date)).to.throw(`Invalid date: ${date}`);
      });
    });

    describe('maxDate', () => {
      it('page when maxDate more than input date for 1 day', () => {
        const options: IOptions = { maxDate: '2013-12-14' };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        const days = calendar.getPage(date);
        const emptyButton = { text: ' ', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' };

        expect(emptyButton).to.deep.equal(days[0][2]);
        expect(emptyButton).to.deep.equal(days[4][6]);
        expect(actualDays[2]).to.deep.equal(days[2]);
        expect(actualDays[3]).to.deep.equal(days[3]);

      });

      it('years when maxDate set', () => {
        const options: IOptions = { maxDate: '2026-12-12' };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        const years = calendar.getYears(date);

        expect([testYears[0], testYears[1], testYears[2], testYears[3]]).to.deep.equal(years);
      });

      it('wrong maxDate fixies by null', () => {
        const options: IOptions = { maxDate: 'wrong date' };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        expect(actualDays).to.deep.equal(calendar.getPage(date));
      });

      it('input date greater than minDate throws error for page', () => {
        const options: IOptions = { maxDate: '2013-12-12' };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        expect(() => calendar.getPage(date)).to.throw(`Invalid date: ${date}`);
      });

      it('input date greater than minDate throws error for years', () => {
        const options: IOptions = { maxDate: '2013-12-12' };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        expect(() => calendar.getYears(date)).to.throw(`Invalid date: ${date}`);
      });
    });

    describe('startFromSunday', () => {
      it('successfully with default week days', () => {
        const options: IOptions = { startFromSunday: true };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        const days = calendar.getPage(date);

        expect(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((name) => ({
          text: name,
          callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}',
        }))).to.deep.equal(days[1]);
        expect(['1', '2', '3', '4', '5', '6', '7'].map((dayNumber) => ({
          text: dayNumber,
          callback_data: `{\"type\":\"calendar\",\"date\":\"2013-12-0${dayNumber}\",\"action\":null}`,
        }))).to.deep.equal(days[2]);
      });

      it('successfully with changed week days', () => {
        const options: IOptions = {
          startFromSunday: true,
          weekDayNames: ['1', '2', '3', '4', '5', '6', '7'],
        };
        const calendar = new Calendar(options);
        const date = new Date('2013-12-13');
        const days = calendar.getPage(date);

        expect(['1', '2', '3', '4', '5', '6', '7'].map((name) => ({
          text: name,
          callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}',
        }))).to.deep.equal(days[1]);
        expect(['1', '2', '3', '4', '5', '6', '7'].map((dayNumber) => ({
          text: dayNumber,
          callback_data: `{\"type\":\"calendar\",\"date\":\"2013-12-0${dayNumber}\",\"action\":null}`,
        }))).to.deep.equal(days[2]);
      });

      it('successfully when month begins not from Sunday', () => {
        const options: IOptions = { startFromSunday: true };
        const calendar = new Calendar(options);
        const date = new Date('2016-07-11');
        const days = calendar.getPage(date);

        expect([
          { text: ' ', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' },
          { text: ' ', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' },
          { text: ' ', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' },
          { text: ' ', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' },
          { text: ' ', callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}' },
          { text: '1', callback_data: '{\"type\":\"calendar\",\"date\":\"2016-07-01\",\"action\":null}' },
          { text: '2', callback_data: '{\"type\":\"calendar\",\"date\":\"2016-07-02\",\"action\":null}' }
        ]).to.deep.equal(days[2]);
      });
    });

    it('minDate > maxDate throws error', () => {
      const options: IOptions = { maxDate: '2013-12-12', minDate: '2013-12-14' };
      expect(() => new Calendar(options)).to.throw('Max date lower than min date');
    });
  });

});
