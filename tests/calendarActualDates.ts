const days = [
  [
    {
      text: '<',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-13\",\"action\":\"prev-month\"}'
    },
    {
      text: 'Dec 2013',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-13\",\"action\":\"select-year\"}'
    },
    {
      text: '>',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-13\",\"action\":\"next-month\"}'
    }
  ],
  [
    {
      text: 'Mo',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: 'Tu',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: 'We',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: 'Th',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: 'Fr',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: 'Sa',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: 'Su',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    }
  ],
  [
    {
      text: ' ',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: ' ',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: ' ',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: ' ',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: ' ',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: ' ',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: '1',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-01\",\"action\":null}'
    }
  ],
  [
    {
      text: '2',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-02\",\"action\":null}'
    },
    {
      text: '3',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-03\",\"action\":null}'
    },
    {
      text: '4',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-04\",\"action\":null}'
    },
    {
      text: '5',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-05\",\"action\":null}'
    },
    {
      text: '6',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-06\",\"action\":null}'
    },
    {
      text: '7',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-07\",\"action\":null}'
    },
    {
      text: '8',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-08\",\"action\":null}'
    }
  ],
  [
    {
      text: '9',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-09\",\"action\":null}'
    },
    {
      text: '10',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-10\",\"action\":null}'
    },
    {
      text: '11',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-11\",\"action\":null}'
    },
    {
      text: '12',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-12\",\"action\":null}'
    },
    {
      text: '13',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-13\",\"action\":null}'
    },
    {
      text: '14',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-14\",\"action\":null}'
    },
    {
      text: '15',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-15\",\"action\":null}'
    }
  ],
  [
    {
      text: '16',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-16\",\"action\":null}'
    },
    {
      text: '17',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-17\",\"action\":null}'
    },
    {
      text: '18',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-18\",\"action\":null}'
    },
    {
      text: '19',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-19\",\"action\":null}'
    },
    {
      text: '20',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-20\",\"action\":null}'
    },
    {
      text: '21',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-21\",\"action\":null}'
    },
    {
      text: '22',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-22\",\"action\":null}'
    }
  ],
  [
    {
      text: '23',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-23\",\"action\":null}'
    },
    {
      text: '24',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-24\",\"action\":null}'
    },
    {
      text: '25',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-25\",\"action\":null}'
    },
    {
      text: '26',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-26\",\"action\":null}'
    },
    {
      text: '27',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-27\",\"action\":null}'
    },
    {
      text: '28',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-28\",\"action\":null}'
    },
    {
      text: '29',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-29\",\"action\":null}'
    }
  ],
  [
    {
      text: '30',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-30\",\"action\":null}'
    },
    {
      text: '31',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-31\",\"action\":null}'
    },
    {
      text: ' ',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: ' ',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: ' ',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: ' ',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    },
    {
      text: ' ',
      callback_data: '{\"type\":\"calendar\",\"date\":0,\"action\":null}'
    }
  ]
];

const years = [
  [
    {
      text: '1999',
      callback_data: '{\"type\":\"calendar\",\"date\":\"1999-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2000',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2000-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2001',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2001-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2002',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2002-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2003',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2003-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2004',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2004-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2005',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2005-12-13\",\"action\":\"set-year\"}'
    }
  ],
  [
    {
      text: '2006',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2006-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2007',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2007-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2008',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2008-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2009',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2009-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2010',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2010-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2011',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2011-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2012',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2012-12-13\",\"action\":\"set-year\"}'
    }
  ],
  [
    {
      text: '2013',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2013-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2014',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2014-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2015',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2015-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2016',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2016-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2017',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2017-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2018',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2018-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2019',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2019-12-13\",\"action\":\"set-year\"}'
    }
  ],
  [
    {
      text: '2020',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2020-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2021',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2021-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2022',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2022-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2023',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2023-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2024',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2024-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2025',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2025-12-13\",\"action\":\"set-year\"}'
    },
    {
      text: '2026',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2026-12-13\",\"action\":\"set-year\"}'
    }
  ],
  [
    {
      text: '2027',
      callback_data: '{\"type\":\"calendar\",\"date\":\"2027-12-13\",\"action\":\"set-year\"}'
    }
  ]
];

export { days, years };
