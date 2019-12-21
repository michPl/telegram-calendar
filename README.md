# Telegram

[![Build Status](https://travis-ci.com/michPl/telegram-calendar.svg?token=MxJ3sEw6pDuswtREaQhk&branch=master)](https://travis-ci.com/michPl/telegram-calendar)

Simple and easy service to create a calendar in telegram

## Options
| name              | type       | default    | description          |
|-------------------|------------|------------|----------------------|
| weekDayNames      | string[]   | ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] | Week days names                                                    |
| monthNames        | string[]   | ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] | Months names             |
| averageYears      | number     | 14 | Years count which used for creating years buttons ([input year - averageYears, input year + averageYears]) |
| callbackDataType  | string                   | 'calendar' | Will be send as type                                                                 |
| ignoreButtonValue | string or number         | 0          | Value of the button for empty buttons                                                |
| minDate           | string or number or Date | null       | Min date                                                                             |
| maxDate           | string or number or Date | null       | Max date                                                                             |
