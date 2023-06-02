# Telegram

[![Build Status](https://travis-ci.com/michPl/telegram-calendar.svg?token=MxJ3sEw6pDuswtREaQhk&branch=master)](https://travis-ci.com/michPl/telegram-calendar)

Simple and easy service to create a calendar in telegram

![Demo days](https://github.com/michPl/telegram-calendar/blob/master/images/demo1.png "Demo days")
![Demo years](https://github.com/michPl/telegram-calendar/blob/master/images/demo2.png "Demo years")

## Options
| name              | type       | default    | description                                                                                                                                                            |
|-------------------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| weekDayNames      | string[]   | ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] | Week days names                                                                                                                                                        |
| monthNames        | string[]   | ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] | Months names                                                                                                                                                           |
| averageYears      | number     | 14 | Years count which used for creating years buttons ([input year - averageYears, input year + averageYears])                                                             |
| callbackDataType  | string                   | 'calendar' | Will be send as type                                                                                                                                                   |
| ignoreButtonValue | string or number         | 0          | Value of the button for empty buttons                                                                                                                                  |
| minDate           | string or number or Date | null       | Min date                                                                                                                                                               |
| maxDate           | string or number or Date | null       | Max date                                                                                                                                                               |
| startFromSunday   | boolean                  | false      | Does the week start on Sunday. If set, then the first day is Sunday. Note: if `true` and `weekDayNames` are changed, then the order of days from `weekDayNames` will be used | 


## Using sample
```JS
const {Calendar} = require('telegram-calendar');

const calendar = new Calendar();
telegramAdapter.send = {
  parse_mode: 'html',
  reply_markup: JSON.stringify({
    inline_keyboard: calendar.getPage(new Date())
  })
}
```

## Additional Information
If for any reason you want to change the contents of a buttons, you can inherit and override the createCallbackButton function. It implements as protected

```JS
const {Calendar} = require('telegram-calendar');

module.exports = class NewCalendar extends Calendar {
    createCallbackButton(name, value, action = null) {
        return {
            name,
            type: 'new type',
            date,
            action
        };
    }
};
```
