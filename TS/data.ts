export interface CountryInfo {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: [number, number];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra?: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini?: { [year: string]: number };
  car: {
    signs: string[];
    side: string;
  };
  fifa?: string;
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  coatOfArms: Record<string, unknown>;
  startOfWeek: string;
  capitalInfo: {
    latlng: [number, number];
  };
  postalCode?: {
    format: string;
    regex?: string;
  };
}
export interface cardData {
  name: string;
  population: number;
  capital: string[];
  region: string;
  flag: string;
}

const data: CountryInfo[] = [
  {
    name: {
      common: 'South Georgia',
      official: 'South Georgia and the South Sandwich Islands',
      nativeName: {
        eng: {
          official: 'South Georgia and the South Sandwich Islands',
          common: 'South Georgia',
        },
      },
    },
    tld: ['.gs'],
    cca2: 'GS',
    ccn3: '239',
    cca3: 'SGS',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      SHP: {
        name: 'Saint Helena pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['00'],
    },
    capital: ['King Edward Point'],
    altSpellings: ['GS', 'South Georgia and the South Sandwich Islands'],
    region: 'Antarctic',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جورجيا الجنوبية وجزر ساندوتش الجنوبية',
        common: 'جورجيا الجنوبية',
      },
      bre: {
        official: 'Georgia ar Su hag Inizi Sandwich ar Su',
        common: 'Georgia ar Su hag Inizi Sandwich ar Su',
      },
      ces: {
        official: 'Jižní Georgie a Jižní Sandwichovy ostrovy',
        common: 'Jižní Georgie a Jižní Sandwichovy ostrovy',
      },
      cym: {
        official: 'South Georgia and the South Sandwich Islands',
        common: 'South Georgia',
      },
      deu: {
        official: 'Südgeorgien und die Südlichen Sandwichinseln',
        common: 'Südgeorgien und die Südlichen Sandwichinseln',
      },
      est: {
        official: 'Lõuna-Georgia ja Lõuna-Sandwichi saared',
        common: 'Lõuna-Georgia ja Lõuna-Sandwichi saared',
      },
      fin: {
        official: 'Etelä-Georgia ja Eteläiset Sandwichsaaret',
        common: 'Etelä-Georgia ja Eteläiset Sandwichsaaret',
      },
      fra: {
        official: 'Géorgie du Sud et les îles Sandwich du Sud',
        common: 'Géorgie du Sud-et-les Îles Sandwich du Sud',
      },
      hrv: {
        official: 'Južna Džordžija i Otoci Južni Sendvič',
        common: 'Južna Georgija i otočje Južni Sandwich',
      },
      hun: {
        official: 'Déli-Georgia és Déli-Sandwich-szigetek',
        common: 'Déli-Georgia és Déli-Sandwich-szigetek',
      },
      ita: {
        official: 'Georgia del Sud e isole Sandwich del Sud',
        common: 'Georgia del Sud e Isole Sandwich Meridionali',
      },
      jpn: {
        official: 'サウスジョージア·サウスサンドウィッチ諸島',
        common: 'サウスジョージア・サウスサンドウィッチ諸島',
      },
      kor: {
        official: '조지아',
        common: '조지아',
      },
      nld: {
        official: 'Zuid-Georgië en de Zuidelijke Sandwich-eilanden',
        common: 'Zuid-Georgia en Zuidelijke Sandwicheilanden',
      },
      per: {
        official: 'جزایر جورجیای جنوبی و ساندویچ جنوبی',
        common: 'جزایر جورجیای جنوبی و ساندویچ جنوبی',
      },
      pol: {
        official: 'Georgia Południowa i Sandwich Południowy',
        common: 'Georgia Południowa i Sandwich Południowy',
      },
      por: {
        official: 'Geórgia do Sul e Sandwich do Sul',
        common: 'Ilhas Geórgia do Sul e Sandwich do Sul',
      },
      rus: {
        official: 'Южная Георгия и Южные Сандвичевы острова',
        common: 'Южная Георгия и Южные Сандвичевы острова',
      },
      slk: {
        official: 'Južná Georgia a Južné Sandwichove ostrovy',
        common: 'Južná Georgia a Južné Sandwichove ostrovy',
      },
      spa: {
        official: 'Georgia del Sur y las Islas Sandwich del Sur',
        common: 'Islas Georgias del Sur y Sandwich del Sur',
      },
      srp: {
        official: 'Јужна Џорџија и Јужна Сендвичка Острва',
        common: 'Јужна Џорџија и Јужна Сендвичка Острва',
      },
      swe: {
        official: 'Sydgeorgien',
        common: 'Sydgeorgien',
      },
      tur: {
        official: 'Güney Georgia ve Güney Sandwich Adaları',
        common: 'Güney Georgia ve Güney Sandwich Adaları',
      },
      urd: {
        official: 'جنوبی جارجیا و جزائر جنوبی سینڈوچ',
        common: 'جنوبی جارجیا',
      },
      zho: {
        official: '南乔治亚岛和南桑威奇群岛',
        common: '南乔治亚',
      },
    },
    latlng: [-54.5, -37.0],
    landlocked: false,
    area: 3903.0,
    demonyms: {
      eng: {
        f: 'South Georgian South Sandwich Islander',
        m: 'South Georgian South Sandwich Islander',
      },
    },
    flag: '🇬🇸',
    maps: {
      googleMaps: 'https://goo.gl/maps/mJzdaBwKBbm2B81q9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1983629',
    },
    population: 30,
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC-02:00'],
    continents: ['Antarctica'],
    flags: {
      png: 'https://flagcdn.com/w320/gs.png',
      svg: 'https://flagcdn.com/gs.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-54.28, -36.5],
    },
  },
  {
    name: {
      common: 'Grenada',
      official: 'Grenada',
      nativeName: {
        eng: {
          official: 'Grenada',
          common: 'Grenada',
        },
      },
    },
    tld: ['.gd'],
    cca2: 'GD',
    ccn3: '308',
    cca3: 'GRD',
    cioc: 'GRN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XCD: {
        name: 'Eastern Caribbean dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['473'],
    },
    capital: ["St. George's"],
    altSpellings: ['GD'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'غرينادا',
        common: 'غرينادا',
      },
      bre: {
        official: 'Grenada',
        common: 'Grenada',
      },
      ces: {
        official: 'Grenada',
        common: 'Grenada',
      },
      cym: {
        official: 'Grenada',
        common: 'Grenada',
      },
      deu: {
        official: 'Grenada',
        common: 'Grenada',
      },
      est: {
        official: 'Grenada',
        common: 'Grenada',
      },
      fin: {
        official: 'Grenada',
        common: 'Grenada',
      },
      fra: {
        official: 'Grenade',
        common: 'Grenade',
      },
      hrv: {
        official: 'Grenada',
        common: 'Grenada',
      },
      hun: {
        official: 'Grenada',
        common: 'Grenada',
      },
      ita: {
        official: 'Grenada',
        common: 'Grenada',
      },
      jpn: {
        official: 'グレナダ',
        common: 'グレナダ',
      },
      kor: {
        official: '그레나다',
        common: '그레나다',
      },
      nld: {
        official: 'Grenada',
        common: 'Grenada',
      },
      per: {
        official: 'گرنادا',
        common: 'گرنادا',
      },
      pol: {
        official: 'Grenada',
        common: 'Grenada',
      },
      por: {
        official: 'Grenada',
        common: 'Granada',
      },
      rus: {
        official: 'Гренада',
        common: 'Гренада',
      },
      slk: {
        official: 'Grenada',
        common: 'Grenada',
      },
      spa: {
        official: 'Granada',
        common: 'Grenada',
      },
      srp: {
        official: 'Гренада',
        common: 'Гренада',
      },
      swe: {
        official: 'Grenada',
        common: 'Grenada',
      },
      tur: {
        official: 'Grenada',
        common: 'Grenada',
      },
      urd: {
        official: 'گریناڈا',
        common: 'گریناڈا',
      },
      zho: {
        official: '格林纳达',
        common: '格林纳达',
      },
    },
    latlng: [12.11666666, -61.66666666],
    landlocked: false,
    area: 344.0,
    demonyms: {
      eng: {
        f: 'Grenadian',
        m: 'Grenadian',
      },
      fra: {
        f: 'Grenadienne',
        m: 'Grenadien',
      },
    },
    flag: '🇬🇩',
    maps: {
      googleMaps: 'https://goo.gl/maps/rqWyfUAt4xhvk1Zy9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/550727',
    },
    population: 112519,
    fifa: 'GRN',
    car: {
      signs: ['WG'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/gd.png',
      svg: 'https://flagcdn.com/gd.svg',
      alt: 'The flag of Grenada features a large central rectangular area surrounded by a red border, with three five-pointed yellow stars centered on the top and bottom borders. The central rectangle is divided diagonally into four alternating triangular areas of yellow at the top and bottom and green on the hoist and fly sides, and a five-pointed yellow star on a red circle is superimposed at its center. A symbolic nutmeg pod is situated on the green hoist-side triangle.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gd.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gd.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [32.38, -64.68],
    },
  },
  {
    name: {
      common: 'Switzerland',
      official: 'Swiss Confederation',
      nativeName: {
        fra: {
          official: 'Confédération suisse',
          common: 'Suisse',
        },
        gsw: {
          official: 'Schweizerische Eidgenossenschaft',
          common: 'Schweiz',
        },
        ita: {
          official: 'Confederazione Svizzera',
          common: 'Svizzera',
        },
        roh: {
          official: 'Confederaziun svizra',
          common: 'Svizra',
        },
      },
    },
    tld: ['.ch'],
    cca2: 'CH',
    ccn3: '756',
    cca3: 'CHE',
    cioc: 'SUI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CHF: {
        name: 'Swiss franc',
        symbol: 'Fr.',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['1'],
    },
    capital: ['Bern'],
    altSpellings: [
      'CH',
      'Swiss Confederation',
      'Schweiz',
      'Suisse',
      'Svizzera',
      'Svizra',
    ],
    region: 'Europe',
    subregion: 'Western Europe',
    languages: {
      fra: 'French',
      gsw: 'Swiss German',
      ita: 'Italian',
      roh: 'Romansh',
    },
    translations: {
      ara: {
        official: 'الاتحاد السويسري',
        common: 'سويسرا',
      },
      bre: {
        official: 'Kengevredad Suis',
        common: 'Suis',
      },
      ces: {
        official: 'Švýcarská konfederace',
        common: 'Švýcarsko',
      },
      cym: {
        official: 'Swiss Confederation',
        common: 'Switzerland',
      },
      deu: {
        official: 'Schweizerische Eidgenossenschaft',
        common: 'Schweiz',
      },
      est: {
        official: 'Šveitsi Konföderatsioon',
        common: 'Šveits',
      },
      fin: {
        official: 'Sveitsin valaliitto',
        common: 'Sveitsi',
      },
      fra: {
        official: 'Confédération suisse',
        common: 'Suisse',
      },
      hrv: {
        official: 'švicarska Konfederacija',
        common: 'Švicarska',
      },
      hun: {
        official: 'Svájc',
        common: 'Svájc',
      },
      ita: {
        official: 'Confederazione svizzera',
        common: 'Svizzera',
      },
      jpn: {
        official: 'スイス連邦',
        common: 'スイス',
      },
      kor: {
        official: '스위스 연방',
        common: '스위스',
      },
      nld: {
        official: 'Zwitserse Confederatie',
        common: 'Zwitserland',
      },
      per: {
        official: 'کنفدراسیون سوئیس',
        common: 'سوئیس',
      },
      pol: {
        official: 'Konfederacja Szwajcarska',
        common: 'Szwajcaria',
      },
      por: {
        official: 'Confederação Suíça',
        common: 'Suíça',
      },
      rus: {
        official: 'Швейцарская Конфедерация',
        common: 'Швейцария',
      },
      slk: {
        official: 'Švajčiarska konfederácia',
        common: 'Švajčiarsko',
      },
      spa: {
        official: 'Confederación Suiza',
        common: 'Suiza',
      },
      srp: {
        official: 'Швајцарска Конфедерација',
        common: 'Швајцарска',
      },
      swe: {
        official: 'Schweiziska edsförbundet',
        common: 'Schweiz',
      },
      tur: {
        official: 'İsviçre Konfederasyonu',
        common: 'İsviçre',
      },
      urd: {
        official: 'سوئیس  متحدہ',
        common: 'سویٹذرلینڈ',
      },
      zho: {
        official: '瑞士联邦',
        common: '瑞士',
      },
    },
    latlng: [47.0, 8.0],
    landlocked: true,
    borders: ['AUT', 'FRA', 'ITA', 'LIE', 'DEU'],
    area: 41284.0,
    demonyms: {
      eng: {
        f: 'Swiss',
        m: 'Swiss',
      },
      fra: {
        f: 'Suisse',
        m: 'Suisse',
      },
    },
    flag: '🇨🇭',
    maps: {
      googleMaps: 'https://goo.gl/maps/uVuZcXaxSx5jLyEC9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/51701',
    },
    population: 8654622,
    gini: {
      '2018': 33.1,
    },
    fifa: 'SUI',
    car: {
      signs: ['CH'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/ch.png',
      svg: 'https://flagcdn.com/ch.svg',
      alt: 'The flag of Switzerland is square shaped. It features a white Swiss cross centered on a red field.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ch.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ch.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [46.92, 7.47],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Sierra Leone',
      official: 'Republic of Sierra Leone',
      nativeName: {
        eng: {
          official: 'Republic of Sierra Leone',
          common: 'Sierra Leone',
        },
      },
    },
    tld: ['.sl'],
    cca2: 'SL',
    ccn3: '694',
    cca3: 'SLE',
    cioc: 'SLE',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SLL: {
        name: 'Sierra Leonean leone',
        symbol: 'Le',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['32'],
    },
    capital: ['Freetown'],
    altSpellings: ['SL', 'Republic of Sierra Leone'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جمهورية سيراليون',
        common: 'سيراليون',
      },
      bre: {
        official: 'Republik Sierra Leone',
        common: 'Sierra Leone',
      },
      ces: {
        official: 'Republika Sierra Leone',
        common: 'Sierra Leone',
      },
      cym: {
        official: 'Republic of Sierra Leone',
        common: 'Sierra Leone',
      },
      deu: {
        official: 'Republik Sierra Leone',
        common: 'Sierra Leone',
      },
      est: {
        official: 'Sierra Leone Vabariik',
        common: 'Sierra Leone',
      },
      fin: {
        official: 'Sierra Leonen tasavalta',
        common: 'Sierra Leone',
      },
      fra: {
        official: 'République de Sierra Leone',
        common: 'Sierra Leone',
      },
      hrv: {
        official: 'Republika Sijera Leone',
        common: 'Sijera Leone',
      },
      hun: {
        official: 'Sierra Leone Köztársaság',
        common: 'Sierra Leone',
      },
      ita: {
        official: 'Repubblica della Sierra Leone',
        common: 'Sierra Leone',
      },
      jpn: {
        official: 'シエラレオネ共和国',
        common: 'シエラレオネ',
      },
      kor: {
        official: '시에라리온 공화국',
        common: '시에라리온',
      },
      nld: {
        official: 'Republiek Sierra Leone',
        common: 'Sierra Leone',
      },
      per: {
        official: 'جمهوری سیرالئون',
        common: 'سیرالئون',
      },
      pol: {
        official: 'Sierra Leone',
        common: 'Sierra Leone',
      },
      por: {
        official: 'República da Serra Leoa',
        common: 'Serra Leoa',
      },
      rus: {
        official: 'Республика Сьерра-Леоне',
        common: 'Сьерра-Леоне',
      },
      slk: {
        official: 'Sierraleonská republika',
        common: 'Sierra Leone',
      },
      spa: {
        official: 'República de Sierra Leona',
        common: 'Sierra Leone',
      },
      srp: {
        official: 'Република Сијера Леоне',
        common: 'Сијера Леоне',
      },
      swe: {
        official: 'Republiken Sierra Leone',
        common: 'Sierra Leone',
      },
      tur: {
        official: 'Sierra Leone Cumhuriyeti',
        common: 'Sierra Leone',
      },
      urd: {
        official: 'جمہوریہ سیرالیون',
        common: 'سیرالیون',
      },
      zho: {
        official: '塞拉利昂共和国',
        common: '塞拉利昂',
      },
    },
    latlng: [8.5, -11.5],
    landlocked: false,
    borders: ['GIN', 'LBR'],
    area: 71740.0,
    demonyms: {
      eng: {
        f: 'Sierra Leonean',
        m: 'Sierra Leonean',
      },
      fra: {
        f: 'Sierra-leonaise',
        m: 'Sierra-leonais',
      },
    },
    flag: '🇸🇱',
    maps: {
      googleMaps: 'https://goo.gl/maps/jhacar85oq9QaeKB7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192777',
    },
    population: 7976985,
    gini: {
      '2018': 35.7,
    },
    fifa: 'SLE',
    car: {
      signs: ['WAL'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/sl.png',
      svg: 'https://flagcdn.com/sl.svg',
      alt: 'The flag of Sierra Leone is composed of three equal horizontal bands of green, white and blue.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sl.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sl.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [8.48, -13.23],
    },
  },
  {
    name: {
      common: 'Hungary',
      official: 'Hungary',
      nativeName: {
        hun: {
          official: 'Magyarország',
          common: 'Magyarország',
        },
      },
    },
    tld: ['.hu'],
    cca2: 'HU',
    ccn3: '348',
    cca3: 'HUN',
    cioc: 'HUN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      HUF: {
        name: 'Hungarian forint',
        symbol: 'Ft',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['6'],
    },
    capital: ['Budapest'],
    altSpellings: ['HU'],
    region: 'Europe',
    subregion: 'Central Europe',
    languages: {
      hun: 'Hungarian',
    },
    translations: {
      ara: {
        official: 'الجمهورية المجرية',
        common: 'المجر',
      },
      bre: {
        official: 'Hungaria',
        common: 'Hungaria',
      },
      ces: {
        official: 'Maďarsko',
        common: 'Maďarsko',
      },
      cym: {
        official: 'Hungary',
        common: 'Hungary',
      },
      deu: {
        official: 'Ungarn',
        common: 'Ungarn',
      },
      est: {
        official: 'Ungari',
        common: 'Ungari',
      },
      fin: {
        official: 'Unkari',
        common: 'Unkari',
      },
      fra: {
        official: 'Hongrie',
        common: 'Hongrie',
      },
      hrv: {
        official: 'Madžarska',
        common: 'Mađarska',
      },
      hun: {
        official: 'Magyarország',
        common: 'Magyarország',
      },
      ita: {
        official: 'Ungheria',
        common: 'Ungheria',
      },
      jpn: {
        official: 'ハンガリー',
        common: 'ハンガリー',
      },
      kor: {
        official: '헝가리',
        common: '헝가리',
      },
      nld: {
        official: 'Hongarije',
        common: 'Hongarije',
      },
      per: {
        official: 'مجارستان',
        common: 'مجارستان',
      },
      pol: {
        official: 'Węgry',
        common: 'Węgry',
      },
      por: {
        official: 'Hungria',
        common: 'Hungria',
      },
      rus: {
        official: 'Венгрия',
        common: 'Венгрия',
      },
      slk: {
        official: 'Maďarsko',
        common: 'Maďarsko',
      },
      spa: {
        official: 'Hungría',
        common: 'Hungría',
      },
      srp: {
        official: 'Мађарска',
        common: 'Мађарска',
      },
      swe: {
        official: 'Ungern',
        common: 'Ungern',
      },
      tur: {
        official: 'Macaristan',
        common: 'Macaristan',
      },
      urd: {
        official: 'مجارستان',
        common: 'مجارستان',
      },
      zho: {
        official: '匈牙利',
        common: '匈牙利',
      },
    },
    latlng: [47.0, 20.0],
    landlocked: true,
    borders: ['AUT', 'HRV', 'ROU', 'SRB', 'SVK', 'SVN', 'UKR'],
    area: 93028.0,
    demonyms: {
      eng: {
        f: 'Hungarian',
        m: 'Hungarian',
      },
      fra: {
        f: 'Hongroise',
        m: 'Hongrois',
      },
    },
    flag: '🇭🇺',
    maps: {
      googleMaps: 'https://goo.gl/maps/9gfPupm5bffixiFJ6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/21335',
    },
    population: 9749763,
    gini: {
      '2018': 29.6,
    },
    fifa: 'HUN',
    car: {
      signs: ['H'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/hu.png',
      svg: 'https://flagcdn.com/hu.svg',
      alt: 'The flag of Hungary is composed of three equal horizontal bands of red, white and green.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/hu.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/hu.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [47.5, 19.08],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Taiwan',
      official: 'Republic of China (Taiwan)',
      nativeName: {
        zho: {
          official: '中華民國',
          common: '台灣',
        },
      },
    },
    tld: ['.tw', '.台灣', '.台湾'],
    cca2: 'TW',
    ccn3: '158',
    cca3: 'TWN',
    cioc: 'TPE',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      TWD: {
        name: 'New Taiwan dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['86'],
    },
    capital: ['Taipei'],
    altSpellings: [
      'TW',
      'Táiwān',
      'Republic of China',
      '中華民國',
      'Zhōnghuá Mínguó',
      'Chinese Taipei',
    ],
    region: 'Asia',
    subregion: 'Eastern Asia',
    languages: {
      zho: 'Chinese',
    },
    translations: {
      ara: {
        official: 'جمهورية الصين (تايوان)',
        common: 'تايوان',
      },
      bre: {
        official: 'Republik Sina (Taiwan)',
        common: 'Taiwan',
      },
      ces: {
        official: 'Čínská republika',
        common: 'Tchaj-wan',
      },
      cym: {
        official: 'Republic of China (Taiwan)',
        common: 'Taiwan',
      },
      deu: {
        official: 'Republik China (Taiwan)',
        common: 'Taiwan',
      },
      est: {
        official: 'Taiwani',
        common: 'Taiwan',
      },
      fin: {
        official: 'Kiinan tasavalta',
        common: 'Taiwan',
      },
      fra: {
        official: 'République de Chine (Taïwan)',
        common: 'Taïwan',
      },
      hrv: {
        official: 'Republika Kina',
        common: 'Tajvan',
      },
      hun: {
        official: 'Kínai Köztársaság',
        common: 'Tajvan',
      },
      ita: {
        official: 'Repubblica cinese (Taiwan)',
        common: 'Taiwan',
      },
      jpn: {
        official: '中華民国',
        common: '台湾',
      },
      kor: {
        official: '중화민국',
        common: '대만',
      },
      nld: {
        official: 'Republiek China (Taiwan)',
        common: 'Taiwan',
      },
      per: {
        official: 'جمهوری چین',
        common: 'تایوان',
      },
      pol: {
        official: 'Republika Chińska (Tajwan)',
        common: 'Tajwan',
      },
      por: {
        official: 'República da China',
        common: 'Ilha Formosa',
      },
      rus: {
        official: 'Китайская Республика',
        common: 'Тайвань',
      },
      slk: {
        official: 'Čínska republika',
        common: 'Taiwan',
      },
      spa: {
        official: 'República de China en Taiwán',
        common: 'Taiwán',
      },
      srp: {
        official: 'Република Кина',
        common: 'Тајван',
      },
      swe: {
        official: 'Republiken Kina',
        common: 'Taiwan',
      },
      tur: {
        official: 'Çin Cumhuriyeti (Tayvan)',
        common: 'Tayvan',
      },
      urd: {
        official: 'جمہوریہ چین (تائیوان)',
        common: 'تائیوان',
      },
    },
    latlng: [23.5, 121.0],
    landlocked: false,
    area: 36193.0,
    demonyms: {
      eng: {
        f: 'Taiwanese',
        m: 'Taiwanese',
      },
      fra: {
        f: 'Taïwanaise',
        m: 'Taïwanais',
      },
    },
    flag: '🇹🇼',
    maps: {
      googleMaps: 'https://goo.gl/maps/HgMKFQjNadF3Wa6B6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/449220',
    },
    population: 23503349,
    fifa: 'TPE',
    car: {
      signs: ['RC'],
      side: 'right',
    },
    timezones: ['UTC+08:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/tw.png',
      svg: 'https://flagcdn.com/tw.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tw.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tw.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [25.03, 121.52],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Wallis and Futuna',
      official: 'Territory of the Wallis and Futuna Islands',
      nativeName: {
        fra: {
          official: 'Territoire des îles Wallis et Futuna',
          common: 'Wallis et Futuna',
        },
      },
    },
    tld: ['.wf'],
    cca2: 'WF',
    ccn3: '876',
    cca3: 'WLF',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      XPF: {
        name: 'CFP franc',
        symbol: '₣',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['81'],
    },
    capital: ['Mata-Utu'],
    altSpellings: [
      'WF',
      'Territory of the Wallis and Futuna Islands',
      'Territoire des îles Wallis et Futuna',
    ],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'إقليم جزر واليس وفوتونا',
        common: 'واليس وفوتونا',
      },
      bre: {
        official: 'Tiriad Inizi Wallis ha Futuna',
        common: 'Wallis ha Futuna',
      },
      ces: {
        official: 'Teritorium ostrovů Wallis a Futuna',
        common: 'Wallis a Futuna',
      },
      cym: {
        official: 'Territory of the Wallis and Futuna Islands',
        common: 'Wallis and Futuna',
      },
      deu: {
        official: 'Gebiet der Wallis und Futuna',
        common: 'Wallis und Futuna',
      },
      est: {
        official: 'Wallise ja Futuna ala',
        common: 'Wallis ja Futuna',
      },
      fin: {
        official: 'Wallisin ja Futunan yhteisö',
        common: 'Wallis ja Futuna',
      },
      fra: {
        official: 'Territoire des îles Wallis et Futuna',
        common: 'Wallis-et-Futuna',
      },
      hrv: {
        official: 'Teritoriju Wallis i Futuna',
        common: 'Wallis i Fortuna',
      },
      hun: {
        official: 'Wallis és Futuna',
        common: 'Wallis és Futuna',
      },
      ita: {
        official: 'Territorio delle Isole Wallis e Futuna',
        common: 'Wallis e Futuna',
      },
      jpn: {
        official: 'ウォリス·フツナ諸島の領土',
        common: 'ウォリス・フツナ',
      },
      kor: {
        official: '왈리스 퓌튀나',
        common: '왈리스 퓌튀나',
      },
      nld: {
        official: 'Grondgebied van de Wallis en Futuna',
        common: 'Wallis en Futuna',
      },
      per: {
        official: 'جزایر والیس و فوتونا',
        common: 'والیس و فوتونا',
      },
      pol: {
        official: 'Terytorium Wysp Wallis i Futuna',
        common: 'Wallis i Futuna',
      },
      por: {
        official: 'Território das Ilhas Wallis e Futuna',
        common: 'Wallis e Futuna',
      },
      rus: {
        official: 'Территория Уоллис и Футуна острова',
        common: 'Уоллис и Футуна',
      },
      slk: {
        official: 'Teritórium ostrovov Wallis a Futuna',
        common: 'Wallis a Futuna',
      },
      spa: {
        official: 'Territorio de las Islas Wallis y Futuna',
        common: 'Wallis y Futuna',
      },
      srp: {
        official: 'Територија државе Валис и Футуна',
        common: 'Валис и Футуна',
      },
      swe: {
        official: 'Territoriet Wallis- och Futunaöarna',
        common: 'Wallis- och Futunaöarna',
      },
      tur: {
        official: 'Wallis ve Futuna Adaları Bölgesi',
        common: 'Wallis ve Futuna Adaları Bölgesi',
      },
      urd: {
        official: 'سر زمینِ والس و فتونہ جزائر',
        common: 'والس و فتونہ',
      },
      zho: {
        official: '瓦利斯和富图纳群岛',
        common: '瓦利斯和富图纳群岛',
      },
    },
    latlng: [-13.3, -176.2],
    landlocked: false,
    area: 142.0,
    demonyms: {
      eng: {
        f: 'Wallis and Futuna Islander',
        m: 'Wallis and Futuna Islander',
      },
    },
    flag: '🇼🇫',
    maps: {
      googleMaps: 'https://goo.gl/maps/CzVqK74QYtbHv65r5',
      openStreetMaps: 'https://www.openstreetmap.org/relation/3412448',
    },
    population: 11750,
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC+12:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/wf.png',
      svg: 'https://flagcdn.com/wf.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-13.95, -171.93],
    },
    postalCode: {
      format: '#####',
      regex: '^(986\\d{2})$',
    },
  },
  {
    name: {
      common: 'Barbados',
      official: 'Barbados',
      nativeName: {
        eng: {
          official: 'Barbados',
          common: 'Barbados',
        },
      },
    },
    tld: ['.bb'],
    cca2: 'BB',
    ccn3: '052',
    cca3: 'BRB',
    cioc: 'BAR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BBD: {
        name: 'Barbadian dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['246'],
    },
    capital: ['Bridgetown'],
    altSpellings: ['BB'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'باربادوس',
        common: 'باربادوس',
      },
      bre: {
        official: 'Barbados',
        common: 'Barbados',
      },
      ces: {
        official: 'Barbados',
        common: 'Barbados',
      },
      cym: {
        official: 'Barbados',
        common: 'Barbados',
      },
      deu: {
        official: 'Barbados',
        common: 'Barbados',
      },
      est: {
        official: 'Barbados',
        common: 'Barbados',
      },
      fin: {
        official: 'Barbados',
        common: 'Barbados',
      },
      fra: {
        official: 'Barbade',
        common: 'Barbade',
      },
      hrv: {
        official: 'Barbados',
        common: 'Barbados',
      },
      hun: {
        official: 'Barbados',
        common: 'Barbados',
      },
      ita: {
        official: 'Barbados',
        common: 'Barbados',
      },
      jpn: {
        official: 'バルバドス',
        common: 'バルバドス',
      },
      kor: {
        official: '바베이도스',
        common: '바베이도스',
      },
      nld: {
        official: 'Barbados',
        common: 'Barbados',
      },
      per: {
        official: 'باربادوس',
        common: 'باربادوس',
      },
      pol: {
        official: 'Barbados',
        common: 'Barbados',
      },
      por: {
        official: 'Barbados',
        common: 'Barbados',
      },
      rus: {
        official: 'Барбадос',
        common: 'Барбадос',
      },
      slk: {
        official: 'Barbados',
        common: 'Barbados',
      },
      spa: {
        official: 'Barbados',
        common: 'Barbados',
      },
      srp: {
        official: 'Барбадос',
        common: 'Барбадос',
      },
      swe: {
        official: 'Barbados',
        common: 'Barbados',
      },
      tur: {
        official: 'Barbados',
        common: 'Barbados',
      },
      urd: {
        official: 'بارباڈوس',
        common: 'بارباڈوس',
      },
      zho: {
        official: '巴巴多斯',
        common: '巴巴多斯',
      },
    },
    latlng: [13.16666666, -59.53333333],
    landlocked: false,
    area: 430.0,
    demonyms: {
      eng: {
        f: 'Barbadian',
        m: 'Barbadian',
      },
      fra: {
        f: 'Barbadienne',
        m: 'Barbadien',
      },
    },
    flag: '🇧🇧',
    maps: {
      googleMaps: 'https://goo.gl/maps/2m36v8STvbGAWd9c7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/547511',
    },
    population: 287371,
    fifa: 'BRB',
    car: {
      signs: ['BDS'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/bb.png',
      svg: 'https://flagcdn.com/bb.svg',
      alt: 'The flag of Barbados is composed of three equal vertical bands of ultramarine, gold and ultramarine. The head of a black trident is centered in the gold band.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bb.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bb.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [13.1, -59.62],
    },
    postalCode: {
      format: 'BB#####',
      regex: '^(?:BB)*(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Pitcairn Islands',
      official: 'Pitcairn Group of Islands',
      nativeName: {
        eng: {
          official: 'Pitcairn Group of Islands',
          common: 'Pitcairn Islands',
        },
      },
    },
    tld: ['.pn'],
    cca2: 'PN',
    ccn3: '612',
    cca3: 'PCN',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      NZD: {
        name: 'New Zealand dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['4'],
    },
    capital: ['Adamstown'],
    altSpellings: [
      'PN',
      'Pitcairn',
      'Pitcairn Henderson Ducie and Oeno Islands',
    ],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جزر بيتكيرن',
        common: 'جزر بيتكيرن',
      },
      bre: {
        official: 'Inizi Pitcairn, Henderson, Ducie hag Oeno',
        common: 'Inizi Pitcairn',
      },
      ces: {
        official: 'Pitcairnovy ostrovy',
        common: 'Pitcairnovy ostrovy',
      },
      cym: {
        official: 'Pitcairn Group of Islands',
        common: 'Pitcairn Islands',
      },
      deu: {
        official: 'Pitcairninseln',
        common: 'Pitcairninseln',
      },
      est: {
        official: 'Pitcairni, Hendersoni, Ducie ja Oeno saar',
        common: 'Pitcairn',
      },
      fin: {
        official: 'Pitcairn',
        common: 'Pitcairn',
      },
      fra: {
        official: "Groupe d'îles Pitcairn",
        common: 'Îles Pitcairn',
      },
      hrv: {
        official: 'Pitcairn skupine otoka',
        common: 'Pitcairnovo otočje',
      },
      hun: {
        official: 'Pitcairn-szigetek',
        common: 'Pitcairn-szigetek',
      },
      ita: {
        official: 'Pitcairn gruppo di isole',
        common: 'Isole Pitcairn',
      },
      jpn: {
        official: '島のピトケアングループ',
        common: 'ピトケアン',
      },
      kor: {
        official: '핏케언 제도',
        common: '핏케언 제도',
      },
      nld: {
        official: 'Pitcairn groep eilanden',
        common: 'Pitcairneilanden',
      },
      per: {
        official: 'جزایر پیت‌کرن',
        common: 'جزایر پیت‌کرن',
      },
      pol: {
        official: 'Wyspy Pitcairn, Henderson, Ducie i Oeno',
        common: 'Pitcairn',
      },
      por: {
        official: 'Pitcairn grupo de ilhas',
        common: 'Ilhas Pitcairn',
      },
      rus: {
        official: 'Питкэрн группа островов',
        common: 'Острова Питкэрн',
      },
      slk: {
        official: 'Pitcairnove ostrovy',
        common: 'Pitcairnove ostrovy',
      },
      spa: {
        official: 'Grupo de Islas Pitcairn',
        common: 'Islas Pitcairn',
      },
      srp: {
        official: 'Острва Питкерн, Хендерсон, Дуци и Оин',
        common: 'Острва Питкерн',
      },
      swe: {
        official: 'Pitcairnöarna',
        common: 'Pitcairnöarna',
      },
      tur: {
        official: 'Pitcairn, Henderson, Ducie ve Oeno Adaları',
        common: 'Pitcairn Adaları',
      },
      urd: {
        official: 'پٹکیرن جزائر',
        common: 'جزائر پٹکیرن',
      },
      zho: {
        official: '皮特凯恩群岛',
        common: '皮特凯恩群岛',
      },
    },
    latlng: [-25.06666666, -130.1],
    landlocked: false,
    area: 47.0,
    demonyms: {
      eng: {
        f: 'Pitcairn Islander',
        m: 'Pitcairn Islander',
      },
      fra: {
        f: 'Pitcairnaise',
        m: 'Pitcairnais',
      },
    },
    flag: '🇵🇳',
    maps: {
      googleMaps: 'https://goo.gl/maps/XGJMnMAigXjXcxSa7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2185375',
    },
    population: 56,
    car: {
      signs: ['GB'],
      side: 'left',
    },
    timezones: ['UTC-08:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/pn.png',
      svg: 'https://flagcdn.com/pn.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-25.07, -130.08],
    },
  },
  {
    name: {
      common: 'Ivory Coast',
      official: "Republic of Côte d'Ivoire",
      nativeName: {
        fra: {
          official: "République de Côte d'Ivoire",
          common: "Côte d'Ivoire",
        },
      },
    },
    tld: ['.ci'],
    cca2: 'CI',
    ccn3: '384',
    cca3: 'CIV',
    cioc: 'CIV',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XOF: {
        name: 'West African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['25'],
    },
    capital: ['Yamoussoukro'],
    altSpellings: [
      'CI',
      "Côte d'Ivoire",
      'Ivory Coast',
      "Republic of Côte d'Ivoire",
      "République de Côte d'Ivoire",
    ],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية ساحل العاج',
        common: 'ساحل العاج',
      },
      bre: {
        official: 'Republik Aod an Olifant',
        common: 'Aod an Olifant',
      },
      ces: {
        official: 'Republika Pobřeží slonoviny',
        common: 'Pobřeží slonoviny',
      },
      cym: {
        official: "Republic of Côte d'Ivoire",
        common: 'Ivory Coast',
      },
      deu: {
        official: "Republik Côte d'Ivoire",
        common: 'Elfenbeinküste',
      },
      est: {
        official: 'Côte d’Ivoire’i Vabariik',
        common: 'Elevandiluurannik',
      },
      fin: {
        official: 'Norsunluurannikon tasavalta',
        common: 'Norsunluurannikko',
      },
      fra: {
        official: "République de Côte d' Ivoire",
        common: "Côte d'Ivoire",
      },
      hrv: {
        official: "Republika Côte d'Ivoire",
        common: 'Obala Bjelokosti',
      },
      hun: {
        official: 'Elefántcsontparti Köztársaság',
        common: 'Elefántcsontpart',
      },
      ita: {
        official: "Repubblica della Costa d'Avorio",
        common: "Costa d'Avorio",
      },
      jpn: {
        official: 'コートジボワール共和国',
        common: 'コートジボワール',
      },
      kor: {
        official: '코트디부아르 공화국',
        common: '코트디부아르',
      },
      nld: {
        official: 'Republiek Ivoorkust',
        common: 'Ivoorkust',
      },
      per: {
        official: 'جمهوری ساحل عاج',
        common: 'ساحل عاج',
      },
      pol: {
        official: 'Republika WybrzeŻa Kości Słoniowej',
        common: 'WybrzeŻe Kości Słoniowej',
      },
      por: {
        official: "República da Côte d'Ivoire",
        common: 'Costa do Marfim',
      },
      rus: {
        official: "Республика Кот-д'Ивуаре",
        common: 'Кот-д’Ивуар',
      },
      slk: {
        official: 'Republika Pobrežie Slonoviny',
        common: 'Pobržie Slonoviny',
      },
      spa: {
        official: "República de Côte d'Ivoire",
        common: 'Costa de Marfil',
      },
      srp: {
        official: 'Република Обала Слоноваче',
        common: 'Обала Слоноваче',
      },
      swe: {
        official: 'Republiken Elfenbenskusten',
        common: 'Elfenbenskusten',
      },
      tur: {
        official: 'Fildişi Sahili',
        common: 'Fildişi Sahili',
      },
      urd: {
        official: 'جمہوریہ کوت دیواغ',
        common: 'آئیوری کوسٹ',
      },
      zho: {
        official: '科特迪瓦共和国',
        common: '科特迪瓦',
      },
    },
    latlng: [8.0, -5.0],
    landlocked: false,
    borders: ['BFA', 'GHA', 'GIN', 'LBR', 'MLI'],
    area: 322463.0,
    demonyms: {
      eng: {
        f: 'Ivorian',
        m: 'Ivorian',
      },
      fra: {
        f: 'Ivoirienne',
        m: 'Ivoirien',
      },
    },
    flag: '🇨🇮',
    maps: {
      googleMaps: 'https://goo.gl/maps/wKsmN7f5qAeNtGjP6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192779',
    },
    population: 26378275,
    gini: {
      '2015': 41.5,
    },
    fifa: 'CIV',
    car: {
      signs: ['CI'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ci.png',
      svg: 'https://flagcdn.com/ci.svg',
      alt: 'The flag of Ivory Coast is composed of three equal vertical bands of orange, white and green.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ci.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ci.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [6.82, -5.27],
    },
  },
  {
    name: {
      common: 'Tunisia',
      official: 'Tunisian Republic',
      nativeName: {
        ara: {
          official: 'الجمهورية التونسية',
          common: 'تونس',
        },
      },
    },
    tld: ['.tn'],
    cca2: 'TN',
    ccn3: '788',
    cca3: 'TUN',
    cioc: 'TUN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      TND: {
        name: 'Tunisian dinar',
        symbol: 'د.ت',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['16'],
    },
    capital: ['Tunis'],
    altSpellings: ['TN', 'Republic of Tunisia', 'al-Jumhūriyyah at-Tūnisiyyah'],
    region: 'Africa',
    subregion: 'Northern Africa',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'الجمهورية التونسية',
        common: 'تونس',
      },
      bre: {
        official: 'Republik Tunizian',
        common: 'Tunizia',
      },
      ces: {
        official: 'Tuniská republika',
        common: 'Tunisko',
      },
      cym: {
        official: 'Tunisian Republic',
        common: 'Tunisia',
      },
      deu: {
        official: 'Tunesische Republik',
        common: 'Tunesien',
      },
      est: {
        official: 'Tuneesia Vabariik',
        common: 'Tuneesia',
      },
      fin: {
        official: 'Tunisian tasavalta',
        common: 'Tunisia',
      },
      fra: {
        official: 'République tunisienne',
        common: 'Tunisie',
      },
      hrv: {
        official: 'Tuniski Republika',
        common: 'Tunis',
      },
      hun: {
        official: 'Tunéziai Köztársaság',
        common: 'Tunézia',
      },
      ita: {
        official: 'Repubblica tunisina',
        common: 'Tunisia',
      },
      jpn: {
        official: 'チュニジア共和国',
        common: 'チュニジア',
      },
      kor: {
        official: '튀니지 공화국',
        common: '튀니지',
      },
      nld: {
        official: 'Republiek Tunesië',
        common: 'Tunesië',
      },
      per: {
        official: 'جمهوری تونس',
        common: 'تونس',
      },
      pol: {
        official: 'Republika Tunezyjska',
        common: 'Tunezja',
      },
      por: {
        official: 'República da Tunísia',
        common: 'Tunísia',
      },
      rus: {
        official: 'Тунисской Республики',
        common: 'Тунис',
      },
      slk: {
        official: 'Tuniská republika',
        common: 'Tunisko',
      },
      spa: {
        official: 'República de Túnez',
        common: 'Túnez',
      },
      srp: {
        official: 'Тунишанска Република',
        common: 'Тунис',
      },
      swe: {
        official: 'Republiken Tunisien',
        common: 'Tunisien',
      },
      tur: {
        official: 'Tunus Cumhuriyeti',
        common: 'Tunus',
      },
      urd: {
        official: 'جمہوریہ تونس',
        common: 'تونس',
      },
      zho: {
        official: '突尼斯共和国',
        common: '突尼斯',
      },
    },
    latlng: [34.0, 9.0],
    landlocked: false,
    borders: ['DZA', 'LBY'],
    area: 163610.0,
    demonyms: {
      eng: {
        f: 'Tunisian',
        m: 'Tunisian',
      },
      fra: {
        f: 'Tunisienne',
        m: 'Tunisien',
      },
    },
    flag: '🇹🇳',
    maps: {
      googleMaps: 'https://goo.gl/maps/KgUmpZdUuNRaougs8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192757',
    },
    population: 11818618,
    gini: {
      '2015': 32.8,
    },
    fifa: 'TUN',
    car: {
      signs: ['TN'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/tn.png',
      svg: 'https://flagcdn.com/tn.svg',
      alt: 'The flag of Tunisia has a red field. A white circle bearing a five-pointed red star within a fly-side facing red crescent is situated at the center of the field.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [36.8, 10.18],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Italy',
      official: 'Italian Republic',
      nativeName: {
        ita: {
          official: 'Repubblica italiana',
          common: 'Italia',
        },
      },
    },
    tld: ['.it'],
    cca2: 'IT',
    ccn3: '380',
    cca3: 'ITA',
    cioc: 'ITA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['9'],
    },
    capital: ['Rome'],
    altSpellings: ['IT', 'Italian Republic', 'Repubblica italiana'],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      ita: 'Italian',
    },
    translations: {
      ara: {
        official: 'الجمهورية الإيطالية',
        common: 'إيطاليا',
      },
      bre: {
        official: 'Republik Italia',
        common: 'Italia',
      },
      ces: {
        official: 'Italská republika',
        common: 'Itálie',
      },
      cym: {
        official: 'Italian Republic',
        common: 'Italy',
      },
      deu: {
        official: 'Italienische Republik',
        common: 'Italien',
      },
      est: {
        official: 'Itaalia Vabariik',
        common: 'Itaalia',
      },
      fin: {
        official: 'Italian tasavalta',
        common: 'Italia',
      },
      fra: {
        official: 'République italienne',
        common: 'Italie',
      },
      hrv: {
        official: 'talijanska Republika',
        common: 'Italija',
      },
      hun: {
        official: 'Olasz Köztársaság',
        common: 'Olaszország',
      },
      ita: {
        official: 'Repubblica italiana',
        common: 'Italia',
      },
      jpn: {
        official: 'イタリア共和国',
        common: 'イタリア',
      },
      kor: {
        official: '이탈리아 공화국',
        common: '이탈리아',
      },
      nld: {
        official: 'Italiaanse Republiek',
        common: 'Italië',
      },
      per: {
        official: 'جمهوری ایتالیا',
        common: 'ایتالیا',
      },
      pol: {
        official: 'Republika Włoska',
        common: 'Włochy',
      },
      por: {
        official: 'República Italiana',
        common: 'Itália',
      },
      rus: {
        official: 'итальянская Республика',
        common: 'Италия',
      },
      slk: {
        official: 'Talianska republika',
        common: 'Taliansko',
      },
      spa: {
        official: 'República Italiana',
        common: 'Italia',
      },
      srp: {
        official: 'Италијанска Република',
        common: 'Италија',
      },
      swe: {
        official: 'Republiken Italien',
        common: 'Italien',
      },
      tur: {
        official: 'İtalyan Cumhuriyeti',
        common: 'İtalya',
      },
      urd: {
        official: 'جمہوریہ اطالیہ',
        common: 'اطالیہ',
      },
      zho: {
        official: '意大利共和国',
        common: '意大利',
      },
    },
    latlng: [42.83333333, 12.83333333],
    landlocked: false,
    borders: ['AUT', 'FRA', 'SMR', 'SVN', 'CHE', 'VAT'],
    area: 301336.0,
    demonyms: {
      eng: {
        f: 'Italian',
        m: 'Italian',
      },
      fra: {
        f: 'Italienne',
        m: 'Italien',
      },
    },
    flag: '🇮🇹',
    maps: {
      googleMaps: 'https://goo.gl/maps/8M1K27TDj7StTRTq8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/365331',
    },
    population: 59554023,
    gini: {
      '2017': 35.9,
    },
    fifa: 'ITA',
    car: {
      signs: ['I'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/it.png',
      svg: 'https://flagcdn.com/it.svg',
      alt: 'The flag of Italy is composed of three equal vertical bands of green, white and red.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/it.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/it.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [41.9, 12.48],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Benin',
      official: 'Republic of Benin',
      nativeName: {
        fra: {
          official: 'République du Bénin',
          common: 'Bénin',
        },
      },
    },
    tld: ['.bj'],
    cca2: 'BJ',
    ccn3: '204',
    cca3: 'BEN',
    cioc: 'BEN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XOF: {
        name: 'West African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['29'],
    },
    capital: ['Porto-Novo'],
    altSpellings: ['BJ', 'Republic of Benin', 'République du Bénin'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية بنين',
        common: 'بنين',
      },
      bre: {
        official: 'Republik Benin',
        common: 'Benin',
      },
      ces: {
        official: 'Beninská republika',
        common: 'Benin',
      },
      cym: {
        official: 'Gweriniaeth Benin',
        common: 'Benin',
      },
      deu: {
        official: 'Republik Benin',
        common: 'Benin',
      },
      est: {
        official: 'Benini Vabariik',
        common: 'Benin',
      },
      fin: {
        official: 'Beninin tasavalta',
        common: 'Benin',
      },
      fra: {
        official: 'République du Bénin',
        common: 'Bénin',
      },
      hrv: {
        official: 'Republika Benin',
        common: 'Benin',
      },
      hun: {
        official: 'Benini Köztársaság',
        common: 'Benin',
      },
      ita: {
        official: 'Repubblica del Benin',
        common: 'Benin',
      },
      jpn: {
        official: 'ベナン共和国',
        common: 'ベナン',
      },
      kor: {
        official: '베냉 공화국',
        common: '베냉',
      },
      nld: {
        official: 'Republiek Benin',
        common: 'Benin',
      },
      per: {
        official: 'جمهوری بنین',
        common: 'بنین',
      },
      pol: {
        official: 'Benin',
        common: 'Benin',
      },
      por: {
        official: 'República do Benin',
        common: 'Benin',
      },
      rus: {
        official: 'Республика Бенин',
        common: 'Бенин',
      },
      slk: {
        official: 'Beninská republika',
        common: 'Benin',
      },
      spa: {
        official: 'República de Benin',
        common: 'Benín',
      },
      srp: {
        official: 'Република Бенин',
        common: 'Бенин',
      },
      swe: {
        official: 'Republiken Benin',
        common: 'Benin',
      },
      tur: {
        official: 'Benin Cumhuriyeti',
        common: 'Benin',
      },
      urd: {
        official: 'جمہوریہ بینن',
        common: 'بینن',
      },
      zho: {
        official: '贝宁共和国',
        common: '贝宁',
      },
    },
    latlng: [9.5, 2.25],
    landlocked: false,
    borders: ['BFA', 'NER', 'NGA', 'TGO'],
    area: 112622.0,
    demonyms: {
      eng: {
        f: 'Beninese',
        m: 'Beninese',
      },
      fra: {
        f: 'Béninoise',
        m: 'Béninois',
      },
    },
    flag: '🇧🇯',
    maps: {
      googleMaps: 'https://goo.gl/maps/uMw1BsHEXQYgVFFu6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192784',
    },
    population: 12123198,
    gini: {
      '2015': 47.8,
    },
    fifa: 'BEN',
    car: {
      signs: ['DY'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/bj.png',
      svg: 'https://flagcdn.com/bj.svg',
      alt: 'The flag of Benin features a green vertical band on its hoist side that takes up about two-fifth the width of the field and two equal horizontal bands of yellow and red adjoining the vertical band.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bj.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bj.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [6.48, 2.62],
    },
  },
  {
    name: {
      common: 'Indonesia',
      official: 'Republic of Indonesia',
      nativeName: {
        ind: {
          official: 'Republik Indonesia',
          common: 'Indonesia',
        },
      },
    },
    tld: ['.id'],
    cca2: 'ID',
    ccn3: '360',
    cca3: 'IDN',
    cioc: 'INA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      IDR: {
        name: 'Indonesian rupiah',
        symbol: 'Rp',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['2'],
    },
    capital: ['Jakarta'],
    altSpellings: ['ID', 'Republic of Indonesia', 'Republik Indonesia'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      ind: 'Indonesian',
    },
    translations: {
      ara: {
        official: 'جمهورية إندونيسيا',
        common: 'إندونيسيا',
      },
      bre: {
        official: 'Republik Indonezia',
        common: 'Indonezia',
      },
      ces: {
        official: 'Indonéská republika',
        common: 'Indonésie',
      },
      cym: {
        official: 'Republic of Indonesia',
        common: 'Indonesia',
      },
      deu: {
        official: 'Republik Indonesien',
        common: 'Indonesien',
      },
      est: {
        official: 'Indoneesia Vabariik',
        common: 'Indoneesia',
      },
      fin: {
        official: 'Indonesian tasavalta',
        common: 'Indonesia',
      },
      fra: {
        official: "République d'Indonésie",
        common: 'Indonésie',
      },
      hrv: {
        official: 'Republika Indonezija',
        common: 'Indonezija',
      },
      hun: {
        official: 'Indonéz Köztársaság',
        common: 'Indonézia',
      },
      ita: {
        official: 'Repubblica di Indonesia',
        common: 'Indonesia',
      },
      jpn: {
        official: 'インドネシア共和国',
        common: 'インドネシア',
      },
      kor: {
        official: '인도네시아 공화국',
        common: '인도네시아',
      },
      nld: {
        official: 'Republiek Indonesië',
        common: 'Indonesië',
      },
      per: {
        official: 'جمهوری اندونزی',
        common: 'اندونزی',
      },
      pol: {
        official: 'Republika Indonezji',
        common: 'Indonezja',
      },
      por: {
        official: 'República da Indonésia',
        common: 'Indonésia',
      },
      rus: {
        official: 'Республика Индонезия',
        common: 'Индонезия',
      },
      slk: {
        official: 'Indonézska republika',
        common: 'Indonézia',
      },
      spa: {
        official: 'República de Indonesia',
        common: 'Indonesia',
      },
      srp: {
        official: 'Република Индонезија',
        common: 'Индонезија',
      },
      swe: {
        official: 'Republiken Indonesien',
        common: 'Indonesien',
      },
      tur: {
        official: 'Endonezya Cumhuriyeti',
        common: 'Endonezya',
      },
      urd: {
        official: 'جمہوریہ انڈونیشیا',
        common: 'انڈونیشیا',
      },
      zho: {
        official: '印度尼西亚共和国',
        common: '印度尼西亚',
      },
    },
    latlng: [-5.0, 120.0],
    landlocked: false,
    borders: ['TLS', 'MYS', 'PNG'],
    area: 1904569.0,
    demonyms: {
      eng: {
        f: 'Indonesian',
        m: 'Indonesian',
      },
      fra: {
        f: 'Indonésienne',
        m: 'Indonésien',
      },
    },
    flag: '🇮🇩',
    maps: {
      googleMaps: 'https://goo.gl/maps/9gfPupm5bffixiFJ6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/21335',
    },
    population: 273523621,
    gini: {
      '2019': 38.2,
    },
    fifa: 'IDN',
    car: {
      signs: ['RI'],
      side: 'left',
    },
    timezones: ['UTC+07:00', 'UTC+08:00', 'UTC+09:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/id.png',
      svg: 'https://flagcdn.com/id.svg',
      alt: 'The flag of Indonesia is composed of two equal horizontal bands of red and white.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/id.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/id.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-6.17, 106.82],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Cape Verde',
      official: 'Republic of Cabo Verde',
      nativeName: {
        por: {
          official: 'República de Cabo Verde',
          common: 'Cabo Verde',
        },
      },
    },
    tld: ['.cv'],
    cca2: 'CV',
    ccn3: '132',
    cca3: 'CPV',
    cioc: 'CPV',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CVE: {
        name: 'Cape Verdean escudo',
        symbol: 'Esc',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['38'],
    },
    capital: ['Praia'],
    altSpellings: ['CV', 'Republic of Cabo Verde', 'República de Cabo Verde'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      por: 'Portuguese',
    },
    translations: {
      ara: {
        official: 'جمهورية كابو فيردي',
        common: 'كابو فيردي',
      },
      bre: {
        official: 'Republik Kab Glas',
        common: 'Kab Glas',
      },
      ces: {
        official: 'Kapverdská republika',
        common: 'Kapverdy',
      },
      cym: {
        official: 'Gweriniaeth Cabo Verde',
        common: 'Penrhyn Verde',
      },
      deu: {
        official: 'Republik Cabo Verde',
        common: 'Kap Verde',
      },
      est: {
        official: 'Cabo Verde Vabariik',
        common: 'Roheneemesaared',
      },
      fin: {
        official: 'Kap Verden tasavalta',
        common: 'Kap Verde',
      },
      fra: {
        official: 'République du Cap-Vert',
        common: 'Îles du Cap-Vert',
      },
      hrv: {
        official: 'Republika Cabo Verde',
        common: 'Zelenortska Republika',
      },
      hun: {
        official: 'Zöld-foki Köztársaság',
        common: 'Zöld-foki Köztársaság',
      },
      ita: {
        official: 'Repubblica di Capo Verde',
        common: 'Capo Verde',
      },
      jpn: {
        official: 'カーボベルデ共和国',
        common: 'カーボベルデ',
      },
      kor: {
        official: '카보베르데 공화국',
        common: '카보베르데',
      },
      nld: {
        official: 'Republiek van Cabo Verde',
        common: 'Kaapverdië',
      },
      per: {
        official: 'جمهوری کبو ورد',
        common: 'دماغهٔ سبز',
      },
      pol: {
        official: 'Republika Zielonego Przylądka',
        common: 'Republika Zielonego Przylądka',
      },
      por: {
        official: 'República de Cabo Verde',
        common: 'Cabo Verde',
      },
      rus: {
        official: 'Республика Кабо -Верде',
        common: 'Кабо-Верде',
      },
      slk: {
        official: 'Kapverdská republika',
        common: 'Kapverdy',
      },
      spa: {
        official: 'República de Cabo Verde',
        common: 'Cabo Verde',
      },
      srp: {
        official: 'Зеленортска Република',
        common: 'Зеленортска Острва',
      },
      swe: {
        official: 'Republiken Kap Verde',
        common: 'Kap Verde',
      },
      tur: {
        official: 'Yeşil Burun Cumhuriyeti',
        common: 'Yeşil Burun',
      },
      urd: {
        official: 'جمہوریہ کیپ ورڈی',
        common: 'کیپ ورڈی',
      },
      zho: {
        official: '佛得角共和国',
        common: '佛得角',
      },
    },
    latlng: [16.5388, -23.0418],
    landlocked: false,
    area: 4033.0,
    demonyms: {
      eng: {
        f: 'Cape Verdian',
        m: 'Cape Verdian',
      },
      fra: {
        f: 'Cap-verdienne',
        m: 'Cap-verdien',
      },
    },
    flag: '🇨🇻',
    maps: {
      googleMaps: 'https://goo.gl/maps/Kc9vy5ChjuiAgMfXA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/535774',
    },
    population: 555988,
    gini: {
      '2015': 42.4,
    },
    fifa: 'CPV',
    car: {
      signs: ['CV'],
      side: 'right',
    },
    timezones: ['UTC-01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/cv.png',
      svg: 'https://flagcdn.com/cv.svg',
      alt: 'The flag of Cape Verde is composed of five horizontal bands of blue, white, red, white and blue in the ratio of 6:1:1:1:3. A ring of ten five-pointed yellow stars is centered at three-eighth of the height from the bottom edge and three-eighth of the width from the hoist end of the field.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cv.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cv.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [14.92, -23.52],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Saint Kitts and Nevis',
      official: 'Federation of Saint Christopher and Nevis',
      nativeName: {
        eng: {
          official: 'Federation of Saint Christopher and Nevis',
          common: 'Saint Kitts and Nevis',
        },
      },
    },
    tld: ['.kn'],
    cca2: 'KN',
    ccn3: '659',
    cca3: 'KNA',
    cioc: 'SKN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XCD: {
        name: 'Eastern Caribbean dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['869'],
    },
    capital: ['Basseterre'],
    altSpellings: ['KN', 'Federation of Saint Christopher and Nevis'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'اتحاد القديس كريستوفر ونيفيس',
        common: 'سانت كيتس ونيفيس',
      },
      bre: {
        official: 'Kevread Saint Kitts ha Nevis',
        common: 'Saint Kitts ha Nevis',
      },
      ces: {
        official: 'Federace Sv. Kryštof a Nevis',
        common: 'Svatý Kryštof a Nevis',
      },
      cym: {
        official: 'Federation of Saint Christopher and Nevis',
        common: 'Saint Kitts and Nevis',
      },
      deu: {
        official: 'Föderation von St. Kitts und Nevis',
        common: 'St. Kitts und Nevis',
      },
      est: {
        official: 'Saint Kittsi ja Nevise Föderatsioon',
        common: 'Saint Kitts ja Nevis',
      },
      fin: {
        official: 'Saint Christopherin ja Nevisin federaatio',
        common: 'Saint Kitts ja Nevis',
      },
      fra: {
        official: 'Fédération de Saint-Christophe-et-Niévès',
        common: 'Saint-Christophe-et-Niévès',
      },
      hrv: {
        official: 'Federacija Sv.Kristofora i Nevisa',
        common: 'Sveti Kristof i Nevis',
      },
      hun: {
        official: 'Saint Christopher és Nevis Államszövetség',
        common: 'Saint Kitts és Nevis',
      },
      ita: {
        official: 'Federazione di Saint Christopher e Nevis',
        common: 'Saint Kitts e Nevis',
      },
      jpn: {
        official: 'セントクリストファーNevis連盟',
        common: 'セントクリストファー・ネイビス',
      },
      kor: {
        official: '세인트키츠 네비스 연방',
        common: '세인트키츠 네비스',
      },
      nld: {
        official: 'Federatie van Saint Kitts en Nevis',
        common: 'Saint Kitts en Nevis',
      },
      per: {
        official: 'فدراسیون سنت کیتس و نویس',
        common: 'سنت کیتس و نویس',
      },
      pol: {
        official: 'Federacja Saint Kitts i Nevis',
        common: 'Saint Kitts i Nevis',
      },
      por: {
        official: 'Federação de São Cristóvão e Nevis',
        common: 'São Cristóvão e Nevis',
      },
      rus: {
        official: 'Федерация Сент-Кристофер и Н е в и с',
        common: 'Сент-Китс и Невис',
      },
      slk: {
        official: 'Feder໡cia Svätého Krištofa a Nevisu',
        common: 'Svätý Krištof a Nevis',
      },
      spa: {
        official: 'Federación de San Cristóbal y Nevis',
        common: 'San Cristóbal y Nieves',
      },
      srp: {
        official: 'Федерација Свети Кристофер и Невис',
        common: 'Сент Китс и Невис',
      },
      swe: {
        official: 'Federationen Saint Kitts och Nevis',
        common: 'Saint Kitts och Nevis',
      },
      tur: {
        official: 'Saint Kitts ve Nevis Federasyonu',
        common: 'Saint Kitts ve Nevis',
      },
      urd: {
        official: 'وفاقِ سینٹ کیٹز و ناویس',
        common: 'سینٹ کیٹز و ناویس',
      },
      zho: {
        official: '圣克里斯托弗和尼维斯联邦',
        common: '圣基茨和尼维斯',
      },
    },
    latlng: [17.33333333, -62.75],
    landlocked: false,
    area: 261.0,
    demonyms: {
      eng: {
        f: 'Kittitian or Nevisian',
        m: 'Kittitian or Nevisian',
      },
      fra: {
        f: 'Kittitienne-et-nevicienne',
        m: 'Kittitien-et-nevicien',
      },
    },
    flag: '🇰🇳',
    maps: {
      googleMaps: 'https://goo.gl/maps/qiaVwcLVTXX3eoTNA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/536899',
    },
    population: 53192,
    fifa: 'SKN',
    car: {
      signs: ['KN'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/kn.png',
      svg: 'https://flagcdn.com/kn.svg',
      alt: 'The flag of Saint Kitts and Nevis features two large five-pointed white stars within a yellow-edged black diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. Above and beneath this band are a green and red triangle respectively.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/kn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/kn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [17.3, -62.72],
    },
  },
  {
    name: {
      common: 'Laos',
      official: "Lao People's Democratic Republic",
      nativeName: {
        lao: {
          official: 'ສາທາລະນະ ຊາທິປະໄຕ ຄົນລາວ ຂອງ',
          common: 'ສປປລາວ',
        },
      },
    },
    tld: ['.la'],
    cca2: 'LA',
    ccn3: '418',
    cca3: 'LAO',
    cioc: 'LAO',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      LAK: {
        name: 'Lao kip',
        symbol: '₭',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['56'],
    },
    capital: ['Vientiane'],
    altSpellings: [
      'LA',
      'Lao',
      "Lao People's Democratic Republic",
      'Sathalanalat Paxathipatai Paxaxon Lao',
    ],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      lao: 'Lao',
    },
    translations: {
      ara: {
        official: 'جمهورية لاوس الديمقراطية الشعبية',
        common: 'لاوس',
      },
      bre: {
        official: 'Republik Demokratel ar Bobl Lao',
        common: 'Laos',
      },
      ces: {
        official: 'Laoská lidově demokratická republika',
        common: 'Laos',
      },
      cym: {
        official: "Lao People's Democratic Republic",
        common: 'Laos',
      },
      deu: {
        official: 'Demokratische Volksrepublik Laos',
        common: 'Laos',
      },
      est: {
        official: 'Laose Demokraatlik Rahvavabariik',
        common: 'Laos',
      },
      fin: {
        official: 'Laosin demokraattinen kansantasavalta',
        common: 'Laos',
      },
      fra: {
        official: 'République démocratique populaire lao',
        common: 'Laos',
      },
      hrv: {
        official: 'Narodna Demokratska Republika',
        common: 'Laos',
      },
      hun: {
        official: 'Laoszi Népi Demokratikus Köztársaság',
        common: 'Laosz',
      },
      ita: {
        official: 'Repubblica democratica popolare del Laos',
        common: 'Laos',
      },
      jpn: {
        official: 'ラオス人民民主共和国',
        common: 'ラオス人民民主共和国',
      },
      kor: {
        official: '라오 인민 민주 공화국',
        common: '라오스',
      },
      nld: {
        official: 'Lao Democratische Volksrepubliek',
        common: 'Laos',
      },
      per: {
        official: 'جمهوری دموکراتیک خلق لائوس',
        common: 'لائوس',
      },
      pol: {
        official: 'Laotańska Republika Ludowo-Demokratyczna',
        common: 'Laos',
      },
      por: {
        official: 'Laos, República Democrática',
        common: 'Laos',
      },
      rus: {
        official: 'Лаосская Народно-Демократическая Республика',
        common: 'Лаос',
      },
      slk: {
        official: 'Laoská ľudovodemokratická republika',
        common: 'Laos',
      },
      spa: {
        official: 'República Democrática Popular Lao',
        common: 'Laos',
      },
      srp: {
        official: 'Лаошка Народна Демократска Република',
        common: 'Лаос',
      },
      swe: {
        official: 'Demokratiska folkrepubliken Laos',
        common: 'Laos',
      },
      tur: {
        official: 'Laos Demokratik Halk Cumhuriyeti',
        common: 'Laos',
      },
      urd: {
        official: 'عوامی جمہوری جمہوریہ لاؤ',
        common: 'لاؤس',
      },
      zho: {
        official: '老挝人民民主共和国',
        common: '老挝',
      },
    },
    latlng: [18.0, 105.0],
    landlocked: true,
    borders: ['MMR', 'KHM', 'CHN', 'THA', 'VNM'],
    area: 236800.0,
    demonyms: {
      eng: {
        f: 'Laotian',
        m: 'Laotian',
      },
      fra: {
        f: 'Laotienne',
        m: 'Laotien',
      },
    },
    flag: '🇱🇦',
    maps: {
      googleMaps: 'https://goo.gl/maps/F3asVB7sRKgSnwbE7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/49903',
    },
    population: 7275556,
    gini: {
      '2018': 38.8,
    },
    fifa: 'LAO',
    car: {
      signs: ['LAO'],
      side: 'right',
    },
    timezones: ['UTC+07:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/la.png',
      svg: 'https://flagcdn.com/la.svg',
      alt: 'The flag of Laos is composed of three horizontal bands of red, blue and red. The blue band is twice the height of the red bands and bears a white circle at its center.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/la.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/la.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [17.97, 102.6],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Caribbean Netherlands',
      official: 'Bonaire, Sint Eustatius and Saba',
      nativeName: {
        nld: {
          official: 'Bonaire, Sint Eustatius en Saba',
          common: 'Caribisch Nederland',
        },
        pap: {
          official: 'Boneiru, Sint Eustatius y Saba',
          common: 'Boneiru, Sint Eustatius y Saba',
        },
      },
    },
    tld: ['.bq', '.nl'],
    cca2: 'BQ',
    ccn3: '535',
    cca3: 'BES',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['99'],
    },
    capital: ['Kralendijk'],
    altSpellings: ['BES islands'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
      nld: 'Dutch',
      pap: 'Papiamento',
    },
    translations: {
      ara: {
        official: 'بونير وسينت أوستاتيوس وسابا',
        common: 'الجزر الكاريبية الهولندية',
      },
      bre: {
        official: 'Bonaire, Sint Eustatius ha Saba',
        common: 'Bonaire, Sint Eustatius ha Saba',
      },
      ces: {
        official: 'Karibské Nizozemsko',
        common: 'Karibské Nizozemsko',
      },
      cym: {
        official: 'Bonaire, Sint Eustatius and Saba',
        common: 'Caribbean Netherlands',
      },
      deu: {
        official: 'Bonaire, Sint Eustatius und Saba',
        common: 'Karibische Niederlande',
      },
      est: {
        official: 'Bonaire, Sint Eustatius ja Saba',
        common: 'Bonaire, Sint Eustatius ja Saba',
      },
      fin: {
        official: 'Bonaire, Sint Eustatius ja Saba',
        common: 'Bonaire, Sint Eustatius ja Saba',
      },
      fra: {
        official: 'Bonaire, Saint-Eustache et Saba',
        common: 'Pays-Bas caribéens',
      },
      hrv: {
        official: 'Bonaire, Sint Eustatius i Saba',
        common: 'Bonaire, Sint Eustatius i Saba',
      },
      hun: {
        official: 'Bonaire',
        common: 'Bonaire',
      },
      ita: {
        official: 'Bonaire, Sint Eustatius e Saba',
        common: 'Paesi Bassi caraibici',
      },
      jpn: {
        official: 'ボネール、シント・ユースタティウスおよびサバ',
        common: 'ボネール、シント・ユースタティウスおよびサバ',
      },
      kor: {
        official: '보네르, 신트외스타티위스, 사바',
        common: '카리브 네덜란드',
      },
      nld: {
        official: 'Bonaire, Sint Eustatius en Saba',
        common: 'Caribisch Nederland',
      },
      per: {
        official: 'جزایر کارائیب هلند',
        common: 'جزایر کارائیب هلند',
      },
      pol: {
        official: 'Bonaire, Sint Eustatius i Saba',
        common: 'Antyle Holenderskie',
      },
      por: {
        official: 'Bonaire, Saba e Santo Eustáquio',
        common: 'Países Baixos Caribenhos',
      },
      rus: {
        official: 'Бонэйр, Синт-Эстатиус и Саба',
        common: 'Карибские Нидерланды',
      },
      slk: {
        official: 'Bonaire, Sint Eustatius a Saba',
        common: 'Bonaire, Sint Eustatius a Saba',
      },
      spa: {
        official: 'Bonaire, San Eustaquio y Saba',
        common: 'Caribe Neerlandés',
      },
      srp: {
        official: 'Бонер, Свети Еустахије и Саба',
        common: 'Карипска Холандија',
      },
      swe: {
        official: 'Bonaire, Sint Eustatius and Saba',
        common: 'Karibiska Nederländerna',
      },
      tur: {
        official: 'Karayip Hollandası',
        common: 'Karayip Hollandası',
      },
      urd: {
        official: 'بونایر، سینٹ ایوسٹائیس اور سابا',
        common: 'کیریبین نیدرلینڈز',
      },
      zho: {
        official: '荷蘭加勒比區',
        common: '荷蘭加勒比區',
      },
    },
    latlng: [12.18, -68.25],
    landlocked: false,
    area: 328.0,
    demonyms: {
      eng: {
        f: 'Dutch',
        m: 'Dutch',
      },
      fra: {
        f: 'Néerlandaise',
        m: 'Néerlandais',
      },
    },
    flag: '🇧🇶',
    maps: {
      googleMaps: 'https://goo.gl/maps/4XVes1P6uEDTz77WA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1216720',
    },
    population: 25987,
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/bq.png',
      svg: 'https://flagcdn.com/bq.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bq.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bq.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [12.14, -68.27],
    },
  },
  {
    name: {
      common: 'Uganda',
      official: 'Republic of Uganda',
      nativeName: {
        eng: {
          official: 'Republic of Uganda',
          common: 'Uganda',
        },
        swa: {
          official: 'Republic of Uganda',
          common: 'Uganda',
        },
      },
    },
    tld: ['.ug'],
    cca2: 'UG',
    ccn3: '800',
    cca3: 'UGA',
    cioc: 'UGA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      UGX: {
        name: 'Ugandan shilling',
        symbol: 'Sh',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['56'],
    },
    capital: ['Kampala'],
    altSpellings: ['UG', 'Republic of Uganda', 'Jamhuri ya Uganda'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      eng: 'English',
      swa: 'Swahili',
    },
    translations: {
      ara: {
        official: 'جمهورية أوغندا',
        common: 'أوغندا',
      },
      bre: {
        official: 'Republik Ouganda',
        common: 'Ouganda',
      },
      ces: {
        official: 'Ugandská republika',
        common: 'Uganda',
      },
      cym: {
        official: 'Republic of Uganda',
        common: 'Uganda',
      },
      deu: {
        official: 'Republik Uganda',
        common: 'Uganda',
      },
      est: {
        official: 'Uganda Vabariik',
        common: 'Uganda',
      },
      fin: {
        official: 'Ugandan tasavalta',
        common: 'Uganda',
      },
      fra: {
        official: "République de l'Ouganda",
        common: 'Ouganda',
      },
      hrv: {
        official: 'Republika Uganda',
        common: 'Uganda',
      },
      hun: {
        official: 'Ugandai Köztársaság',
        common: 'Uganda',
      },
      ita: {
        official: 'Repubblica di Uganda',
        common: 'Uganda',
      },
      jpn: {
        official: 'ウガンダ共和国',
        common: 'ウガンダ',
      },
      kor: {
        official: '우간다 공화국',
        common: '우간다',
      },
      nld: {
        official: 'Republiek Uganda',
        common: 'Oeganda',
      },
      per: {
        official: 'جمهوری اوگاندا',
        common: 'اوگاندا',
      },
      pol: {
        official: 'Republika Ugandy',
        common: 'Uganda',
      },
      por: {
        official: 'República do Uganda',
        common: 'Uganda',
      },
      rus: {
        official: 'Республика Уганда',
        common: 'Уганда',
      },
      slk: {
        official: 'Ugandská republika',
        common: 'Uganda',
      },
      spa: {
        official: 'República de Uganda',
        common: 'Uganda',
      },
      srp: {
        official: 'Република Уганда',
        common: 'Уганда',
      },
      swe: {
        official: 'Republiken Uganda',
        common: 'Uganda',
      },
      tur: {
        official: 'Uganda Cumhuriyeti',
        common: 'Uganda',
      },
      urd: {
        official: 'جمہوریہ یوگنڈا',
        common: 'یوگنڈا',
      },
      zho: {
        official: '乌干达共和国',
        common: '乌干达',
      },
    },
    latlng: [1.0, 32.0],
    landlocked: true,
    borders: ['COD', 'KEN', 'RWA', 'SSD', 'TZA'],
    area: 241550.0,
    demonyms: {
      eng: {
        f: 'Ugandan',
        m: 'Ugandan',
      },
      fra: {
        f: 'Ougandaise',
        m: 'Ougandais',
      },
    },
    flag: '🇺🇬',
    maps: {
      googleMaps: 'https://goo.gl/maps/Y7812hFiGa8LD9N68',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192796',
    },
    population: 45741000,
    gini: {
      '2016': 42.8,
    },
    fifa: 'UGA',
    car: {
      signs: ['EAU'],
      side: 'left',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ug.png',
      svg: 'https://flagcdn.com/ug.svg',
      alt: 'The flag of Uganda is composed of six equal horizontal bands of black, yellow, red, black, yellow and red. A white circle bearing a hoist-side facing grey red-crested crane is superimposed in the center of the field.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ug.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ug.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [0.32, 32.55],
    },
  },
  {
    name: {
      common: 'Andorra',
      official: 'Principality of Andorra',
      nativeName: {
        cat: {
          official: "Principat d'Andorra",
          common: 'Andorra',
        },
      },
    },
    tld: ['.ad'],
    cca2: 'AD',
    ccn3: '020',
    cca3: 'AND',
    cioc: 'AND',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['76'],
    },
    capital: ['Andorra la Vella'],
    altSpellings: ['AD', 'Principality of Andorra', "Principat d'Andorra"],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      cat: 'Catalan',
    },
    translations: {
      ara: {
        official: 'إمارة أندورا',
        common: 'أندورا',
      },
      bre: {
        official: 'Priñselezh Andorra',
        common: 'Andorra',
      },
      ces: {
        official: 'Andorrské knížectví',
        common: 'Andorra',
      },
      cym: {
        official: 'Tywysogaeth Andorra',
        common: 'Andorra',
      },
      deu: {
        official: 'Fürstentum Andorra',
        common: 'Andorra',
      },
      est: {
        official: 'Andorra Vürstiriik',
        common: 'Andorra',
      },
      fin: {
        official: 'Andorran ruhtinaskunta',
        common: 'Andorra',
      },
      fra: {
        official: "Principauté d'Andorre",
        common: 'Andorre',
      },
      hrv: {
        official: 'Kneževina Andora',
        common: 'Andora',
      },
      hun: {
        official: 'Andorra',
        common: 'Andorra',
      },
      ita: {
        official: 'Principato di Andorra',
        common: 'Andorra',
      },
      jpn: {
        official: 'アンドラ公国',
        common: 'アンドラ',
      },
      kor: {
        official: '안도라 공국',
        common: '안도라',
      },
      nld: {
        official: 'Prinsdom Andorra',
        common: 'Andorra',
      },
      per: {
        official: 'شاهزاده‌نشین آندورا',
        common: 'آندورا',
      },
      pol: {
        official: 'Księstwo Andory',
        common: 'Andora',
      },
      por: {
        official: 'Principado de Andorra',
        common: 'Andorra',
      },
      rus: {
        official: 'Княжество Андорра',
        common: 'Андорра',
      },
      slk: {
        official: 'Andorrské kniežatstvo',
        common: 'Andorra',
      },
      spa: {
        official: 'Principado de Andorra',
        common: 'Andorra',
      },
      srp: {
        official: 'Кнежевина Андора',
        common: 'Андора',
      },
      swe: {
        official: 'Furstendömet Andorra',
        common: 'Andorra',
      },
      tur: {
        official: 'Andorra Prensliği',
        common: 'Andorra',
      },
      urd: {
        official: 'اماراتِ انڈورا',
        common: 'انڈورا',
      },
      zho: {
        official: '安道尔公国',
        common: '安道尔',
      },
    },
    latlng: [42.5, 1.5],
    landlocked: true,
    borders: ['FRA', 'ESP'],
    area: 468.0,
    demonyms: {
      eng: {
        f: 'Andorran',
        m: 'Andorran',
      },
      fra: {
        f: 'Andorrane',
        m: 'Andorran',
      },
    },
    flag: '🇦🇩',
    maps: {
      googleMaps: 'https://goo.gl/maps/JqAnacWE2qEznKgw7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/9407',
    },
    population: 77265,
    fifa: 'AND',
    car: {
      signs: ['AND'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/ad.png',
      svg: 'https://flagcdn.com/ad.svg',
      alt: 'The flag of Andorra features three equal vertical bands of blue, yellow and red, with the coat of arms of Andorra centered in the yellow band.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ad.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ad.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [42.5, 1.52],
    },
    postalCode: {
      format: 'AD###',
      regex: '^(?:AD)*(\\d{3})$',
    },
  },
  {
    name: {
      common: 'Burundi',
      official: 'Republic of Burundi',
      nativeName: {
        fra: {
          official: 'République du Burundi',
          common: 'Burundi',
        },
        run: {
          official: "Republika y'Uburundi ",
          common: 'Uburundi',
        },
      },
    },
    tld: ['.bi'],
    cca2: 'BI',
    ccn3: '108',
    cca3: 'BDI',
    cioc: 'BDI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BIF: {
        name: 'Burundian franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['57'],
    },
    capital: ['Gitega'],
    altSpellings: [
      'BI',
      'Republic of Burundi',
      "Republika y'Uburundi",
      'République du Burundi',
    ],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      fra: 'French',
      run: 'Kirundi',
    },
    translations: {
      ara: {
        official: 'جمهورية بوروندي',
        common: 'بوروندي',
      },
      bre: {
        official: 'Republik Burundi',
        common: 'Burundi',
      },
      ces: {
        official: 'Burundská republika',
        common: 'Burundi',
      },
      cym: {
        official: 'Gweriniaeth Bwrwndi',
        common: 'Bwrwndi',
      },
      deu: {
        official: 'Republik Burundi',
        common: 'Burundi',
      },
      est: {
        official: 'Burundi Vabariik',
        common: 'Burundi',
      },
      fin: {
        official: 'Burundin tasavalta',
        common: 'Burundi',
      },
      fra: {
        official: 'République du Burundi',
        common: 'Burundi',
      },
      hrv: {
        official: 'Burundi',
        common: 'Burundi',
      },
      hun: {
        official: 'Burundi',
        common: 'Burundi',
      },
      ita: {
        official: 'Repubblica del Burundi',
        common: 'Burundi',
      },
      jpn: {
        official: 'ブルンジ共和国',
        common: 'ブルンジ',
      },
      kor: {
        official: '부룬디',
        common: '부룬디',
      },
      nld: {
        official: 'Republiek Burundi',
        common: 'Burundi',
      },
      per: {
        official: 'جمهوری بوروندی',
        common: 'بوروندی',
      },
      pol: {
        official: 'Republika Burundi',
        common: 'Burundi',
      },
      por: {
        official: 'República do Burundi',
        common: 'Burundi',
      },
      rus: {
        official: 'Республика Бурунди',
        common: 'Бурунди',
      },
      slk: {
        official: 'Burundská republika',
        common: 'Burundi',
      },
      spa: {
        official: 'República de Burundi',
        common: 'Burundi',
      },
      srp: {
        official: 'Република Бурунди',
        common: 'Бурунди',
      },
      swe: {
        official: 'Republiken Burundi',
        common: 'Burundi',
      },
      tur: {
        official: 'Burundi Cumhuriyeti',
        common: 'Burundi',
      },
      urd: {
        official: 'جمہوریہ برونڈی',
        common: 'برونڈی',
      },
      zho: {
        official: '布隆迪共和国',
        common: '布隆迪',
      },
    },
    latlng: [-3.5, 30.0],
    landlocked: true,
    borders: ['COD', 'RWA', 'TZA'],
    area: 27834.0,
    demonyms: {
      eng: {
        f: 'Burundian',
        m: 'Burundian',
      },
      fra: {
        f: 'Burundaise',
        m: 'Burundais',
      },
    },
    flag: '🇧🇮',
    maps: {
      googleMaps: 'https://goo.gl/maps/RXPWoRrB9tfrJpUG7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/195269',
    },
    population: 11890781,
    gini: {
      '2013': 38.6,
    },
    fifa: 'BDI',
    car: {
      signs: ['RU'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/bi.png',
      svg: 'https://flagcdn.com/bi.svg',
      alt: 'The flag of Burundi is divided by a white diagonal cross into four alternating triangular areas of red at the top and bottom, and green on the hoist and fly sides. A white circle, with three green-edged red six-pointed stars arranged to form a triangle, is superimposed at the center of the cross.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bi.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bi.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-3.43, 29.93],
    },
  },
  {
    name: {
      common: 'South Africa',
      official: 'Republic of South Africa',
      nativeName: {
        afr: {
          official: 'Republiek van Suid-Afrika',
          common: 'South Africa',
        },
        eng: {
          official: 'Republic of South Africa',
          common: 'South Africa',
        },
        nbl: {
          official: 'IRiphabliki yeSewula Afrika',
          common: 'Sewula Afrika',
        },
        nso: {
          official: 'Rephaboliki ya Afrika-Borwa ',
          common: 'Afrika-Borwa',
        },
        sot: {
          official: 'Rephaboliki ya Afrika Borwa',
          common: 'Afrika Borwa',
        },
        ssw: {
          official: 'IRiphabhulikhi yeNingizimu Afrika',
          common: 'Ningizimu Afrika',
        },
        tsn: {
          official: 'Rephaboliki ya Aforika Borwa',
          common: 'Aforika Borwa',
        },
        tso: {
          official: 'Riphabliki ra Afrika Dzonga',
          common: 'Afrika Dzonga',
        },
        ven: {
          official: 'Riphabuḽiki ya Afurika Tshipembe',
          common: 'Afurika Tshipembe',
        },
        xho: {
          official: 'IRiphabliki yaseMzantsi Afrika',
          common: 'Mzantsi Afrika',
        },
        zul: {
          official: 'IRiphabliki yaseNingizimu Afrika',
          common: 'Ningizimu Afrika',
        },
      },
    },
    tld: ['.za'],
    cca2: 'ZA',
    ccn3: '710',
    cca3: 'ZAF',
    cioc: 'RSA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      ZAR: {
        name: 'South African rand',
        symbol: 'R',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['7'],
    },
    capital: ['Pretoria', 'Bloemfontein', 'Cape Town'],
    altSpellings: ['ZA', 'RSA', 'Suid-Afrika', 'Republic of South Africa'],
    region: 'Africa',
    subregion: 'Southern Africa',
    languages: {
      afr: 'Afrikaans',
      eng: 'English',
      nbl: 'Southern Ndebele',
      nso: 'Northern Sotho',
      sot: 'Southern Sotho',
      ssw: 'Swazi',
      tsn: 'Tswana',
      tso: 'Tsonga',
      ven: 'Venda',
      xho: 'Xhosa',
      zul: 'Zulu',
    },
    translations: {
      ara: {
        official: 'جمهورية جنوب أفريقيا',
        common: 'جنوب أفريقيا',
      },
      bre: {
        official: 'Republik Suafrika',
        common: 'Suafrika',
      },
      ces: {
        official: 'Jihoafrická republika',
        common: 'Jihoafrická republika',
      },
      cym: {
        official: 'Republic of South Africa',
        common: 'South Africa',
      },
      deu: {
        official: 'Republik Südafrika',
        common: 'Südafrika',
      },
      est: {
        official: 'Lõuna-Aafrika Vabariik',
        common: 'Lõuna-Aafrika Vabariik',
      },
      fin: {
        official: 'Etelä-Afrikan tasavalta',
        common: 'Etelä-Afrikka',
      },
      fra: {
        official: "République d'Afrique du Sud",
        common: 'Afrique du Sud',
      },
      hrv: {
        official: 'Južnoafrička Republika',
        common: 'Južna Afrika',
      },
      hun: {
        official: 'Dél-afrikai Köztársaság',
        common: 'Dél-afrikai Köztársaság',
      },
      ita: {
        official: 'Repubblica del Sud Africa',
        common: 'Sud Africa',
      },
      jpn: {
        official: '南アフリカ共和国',
        common: '南アフリカ',
      },
      kor: {
        official: '남아프리카 공화국',
        common: '남아프리카',
      },
      nld: {
        official: 'Republiek Zuid-Afrika',
        common: 'Zuid-Afrika',
      },
      per: {
        official: 'جمهوری آفریقای جنوبی',
        common: 'آفریقای جنوبی',
      },
      pol: {
        official: 'Republika Południowej Afryki',
        common: 'Południowa Afryka',
      },
      por: {
        official: 'República da África do Sul',
        common: 'África do Sul',
      },
      rus: {
        official: 'Южно-Африканская Республика',
        common: 'Южная Африка',
      },
      slk: {
        official: 'Juhoafrická republika',
        common: 'Južná Afrika',
      },
      spa: {
        official: 'República de Sudáfrica',
        common: 'Sudáfrica',
      },
      srp: {
        official: 'Република Јужна Африка',
        common: 'Јужноафричка Република',
      },
      swe: {
        official: 'Republiken Sydafrika',
        common: 'Sydafrika',
      },
      tur: {
        official: 'Güney Afrika Cumhuriyeti',
        common: 'Güney Afrika',
      },
      urd: {
        official: 'جمہوریہ جنوبی افریقا',
        common: 'جنوبی افریقا',
      },
      zho: {
        official: '南非共和国',
        common: '南非',
      },
    },
    latlng: [-29.0, 24.0],
    landlocked: false,
    borders: ['BWA', 'LSO', 'MOZ', 'NAM', 'SWZ', 'ZWE'],
    area: 1221037.0,
    demonyms: {
      eng: {
        f: 'South African',
        m: 'South African',
      },
      fra: {
        f: 'Sud-africaine',
        m: 'Sud-africain',
      },
    },
    flag: '🇿🇦',
    maps: {
      googleMaps: 'https://goo.gl/maps/CLCZ1R8Uz1KpYhRv6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/87565',
    },
    population: 59308690,
    gini: {
      '2014': 63.0,
    },
    fifa: 'RSA',
    car: {
      signs: ['ZA'],
      side: 'left',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/za.png',
      svg: 'https://flagcdn.com/za.svg',
      alt: 'The flag of South Africa is composed of two equal horizontal bands of red and blue, with a yellow-edged black isosceles triangle superimposed on the hoist side of the field. This triangle has its base centered on the hoist end, spans about two-fifth the width and two-third the height of the field, and is enclosed on its sides by the arms of a white-edged green horizontally oriented Y-shaped band which extends along the boundary of the red and blue bands to the fly end of the field.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/za.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/za.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-25.7, 28.22],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'France',
      official: 'French Republic',
      nativeName: {
        fra: {
          official: 'République française',
          common: 'France',
        },
      },
    },
    tld: ['.fr'],
    cca2: 'FR',
    ccn3: '250',
    cca3: 'FRA',
    cioc: 'FRA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['3'],
    },
    capital: ['Paris'],
    altSpellings: ['FR', 'French Republic', 'République française'],
    region: 'Europe',
    subregion: 'Western Europe',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'الجمهورية الفرنسية',
        common: 'فرنسا',
      },
      bre: {
        official: 'Republik Frañs',
        common: 'Frañs',
      },
      ces: {
        official: 'Francouzská republika',
        common: 'Francie',
      },
      cym: {
        official: 'French Republic',
        common: 'France',
      },
      deu: {
        official: 'Französische Republik',
        common: 'Frankreich',
      },
      est: {
        official: 'Prantsuse Vabariik',
        common: 'Prantsusmaa',
      },
      fin: {
        official: 'Ranskan tasavalta',
        common: 'Ranska',
      },
      fra: {
        official: 'République française',
        common: 'France',
      },
      hrv: {
        official: 'Francuska Republika',
        common: 'Francuska',
      },
      hun: {
        official: 'Francia Köztársaság',
        common: 'Franciaország',
      },
      ita: {
        official: 'Repubblica francese',
        common: 'Francia',
      },
      jpn: {
        official: 'フランス共和国',
        common: 'フランス',
      },
      kor: {
        official: '프랑스 공화국',
        common: '프랑스',
      },
      nld: {
        official: 'Franse Republiek',
        common: 'Frankrijk',
      },
      per: {
        official: 'جمهوری فرانسه',
        common: 'فرانسه',
      },
      pol: {
        official: 'Republika Francuska',
        common: 'Francja',
      },
      por: {
        official: 'República Francesa',
        common: 'França',
      },
      rus: {
        official: 'Французская Республика',
        common: 'Франция',
      },
      slk: {
        official: 'Francúzska republika',
        common: 'Francúzsko',
      },
      spa: {
        official: 'República francés',
        common: 'Francia',
      },
      srp: {
        official: 'Француска Република',
        common: 'Француска',
      },
      swe: {
        official: 'Republiken Frankrike',
        common: 'Frankrike',
      },
      tur: {
        official: 'Fransa Cumhuriyeti',
        common: 'Fransa',
      },
      urd: {
        official: 'جمہوریہ فرانس',
        common: 'فرانس',
      },
      zho: {
        official: '法兰西共和国',
        common: '法国',
      },
    },
    latlng: [46.0, 2.0],
    landlocked: false,
    borders: ['AND', 'BEL', 'DEU', 'ITA', 'LUX', 'MCO', 'ESP', 'CHE'],
    area: 551695.0,
    demonyms: {
      eng: {
        f: 'French',
        m: 'French',
      },
      fra: {
        f: 'Française',
        m: 'Français',
      },
    },
    flag: '🇫🇷',
    maps: {
      googleMaps: 'https://goo.gl/maps/g7QxxSFsWyTPKuzd7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1403916',
    },
    population: 67391582,
    gini: {
      '2018': 32.4,
    },
    fifa: 'FRA',
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: [
      'UTC-10:00',
      'UTC-09:30',
      'UTC-09:00',
      'UTC-08:00',
      'UTC-04:00',
      'UTC-03:00',
      'UTC+01:00',
      'UTC+02:00',
      'UTC+03:00',
      'UTC+04:00',
      'UTC+05:00',
      'UTC+10:00',
      'UTC+11:00',
      'UTC+12:00',
    ],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/fr.png',
      svg: 'https://flagcdn.com/fr.svg',
      alt: 'The flag of France is composed of three equal vertical bands of blue, white and red.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/fr.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/fr.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [48.87, 2.33],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Libya',
      official: 'State of Libya',
      nativeName: {
        ara: {
          official: 'الدولة ليبيا',
          common: '‏ليبيا',
        },
      },
    },
    tld: ['.ly'],
    cca2: 'LY',
    ccn3: '434',
    cca3: 'LBY',
    cioc: 'LBA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      LYD: {
        name: 'Libyan dinar',
        symbol: 'ل.د',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['18'],
    },
    capital: ['Tripoli'],
    altSpellings: ['LY', 'State of Libya', 'Dawlat Libya'],
    region: 'Africa',
    subregion: 'Northern Africa',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'دولة ليبيا',
        common: '‏ليبيا',
      },
      bre: {
        official: 'Stad Libia',
        common: 'Libia',
      },
      ces: {
        official: 'Stát Libye',
        common: 'Libye',
      },
      cym: {
        official: 'State of Libya',
        common: 'Libya',
      },
      deu: {
        official: 'Staat Libyen',
        common: 'Libyen',
      },
      est: {
        official: 'Liibüa',
        common: 'Liibüa',
      },
      fin: {
        official: 'Libyan valtio',
        common: 'Libya',
      },
      fra: {
        official: 'Grande République arabe libyenne populaire et socialiste',
        common: 'Libye',
      },
      hrv: {
        official: 'Država Libiji',
        common: 'Libija',
      },
      hun: {
        official: 'Líbia Állam',
        common: 'Líbia',
      },
      ita: {
        official: 'Stato della Libia',
        common: 'Libia',
      },
      jpn: {
        official: 'リビアの国家',
        common: 'リビア',
      },
      kor: {
        official: '리비아',
        common: '리비아',
      },
      nld: {
        official: 'Staat van Libië',
        common: 'Libië',
      },
      per: {
        official: 'دولت لیبی',
        common: 'لیبی',
      },
      pol: {
        official: 'Państwo Libia',
        common: 'Libia',
      },
      por: {
        official: 'Estado da Líbia',
        common: 'Líbia',
      },
      rus: {
        official: 'Государство Ливии',
        common: 'Ливия',
      },
      slk: {
        official: 'Líbya',
        common: 'Líbya',
      },
      spa: {
        official: 'Estado de Libia',
        common: 'Libia',
      },
      srp: {
        official: 'Држава Либија',
        common: 'Либија',
      },
      swe: {
        official: 'Staten Libyen',
        common: 'Libyen',
      },
      tur: {
        official: 'Libya Devleti',
        common: 'Libya',
      },
      urd: {
        official: 'ریاستِ لیبیا',
        common: 'لیبیا',
      },
      zho: {
        official: '利比亚国',
        common: '利比亚',
      },
    },
    latlng: [25.0, 17.0],
    landlocked: false,
    borders: ['DZA', 'TCD', 'EGY', 'NER', 'SDN', 'TUN'],
    area: 1759540.0,
    demonyms: {
      eng: {
        f: 'Libyan',
        m: 'Libyan',
      },
      fra: {
        f: 'Libyenne',
        m: 'Libyen',
      },
    },
    flag: '🇱🇾',
    maps: {
      googleMaps: 'https://goo.gl/maps/eLgGnaQWcJEdYRMy5',
      openStreetMaps: 'openstreetmap.org/relation/192758',
    },
    population: 6871287,
    fifa: 'LBY',
    car: {
      signs: ['LAR'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ly.png',
      svg: 'https://flagcdn.com/ly.svg',
      alt: 'The flag of Libya is composed of three horizontal bands of red, black and green, with the black band twice the height of the other two bands. At the center of the black band is a fly-side facing white crescent and a five-pointed white star placed just outside the crescent opening.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ly.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ly.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [32.88, 13.17],
    },
  },
  {
    name: {
      common: 'Mexico',
      official: 'United Mexican States',
      nativeName: {
        spa: {
          official: 'Estados Unidos Mexicanos',
          common: 'México',
        },
      },
    },
    tld: ['.mx'],
    cca2: 'MX',
    ccn3: '484',
    cca3: 'MEX',
    cioc: 'MEX',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MXN: {
        name: 'Mexican peso',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['2'],
    },
    capital: ['Mexico City'],
    altSpellings: [
      'MX',
      'Mexicanos',
      'United Mexican States',
      'Estados Unidos Mexicanos',
    ],
    region: 'Americas',
    subregion: 'North America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'الولايات المتحدة المكسيكية',
        common: 'المسكيك',
      },
      bre: {
        official: "Stadoù-Unanet Mec'hiko",
        common: "Mec'hiko",
      },
      ces: {
        official: 'Spojené státy mexické',
        common: 'Mexiko',
      },
      cym: {
        official: 'United Mexican States',
        common: 'Mexico',
      },
      deu: {
        official: 'Vereinigte Mexikanische Staaten',
        common: 'Mexiko',
      },
      est: {
        official: 'Mehhiko Ühendriigid',
        common: 'Mehhiko',
      },
      fin: {
        official: 'Meksikon yhdysvallat',
        common: 'Meksiko',
      },
      fra: {
        official: 'États-Unis du Mexique',
        common: 'Mexique',
      },
      hrv: {
        official: 'Sjedinjene Meksičke Države',
        common: 'Meksiko',
      },
      hun: {
        official: 'Mexikói Egyesült Államok',
        common: 'Mexikó',
      },
      ita: {
        official: 'Stati Uniti del Messico',
        common: 'Messico',
      },
      jpn: {
        official: 'メキシコ合衆国',
        common: 'メキシコ',
      },
      kor: {
        official: '멕시코 합중국',
        common: '멕시코',
      },
      nld: {
        official: 'Verenigde Mexicaanse Staten',
        common: 'Mexico',
      },
      per: {
        official: 'ایالات متحد مکزیک',
        common: 'مکزیک',
      },
      pol: {
        official: 'Meksykańskie Stany Zjednoczone',
        common: 'Meksyk',
      },
      por: {
        official: 'Estados Unidos Mexicanos',
        common: 'México',
      },
      rus: {
        official: 'Мексиканские Соединённые Штаты',
        common: 'Мексика',
      },
      slk: {
        official: 'Spojené štášy mexické',
        common: 'Mexiko',
      },
      spa: {
        official: 'Estados Unidos Mexicanos',
        common: 'México',
      },
      srp: {
        official: 'Сједињене Мексичке Државе',
        common: 'Мексико',
      },
      swe: {
        official: 'Mexikos förenta stater',
        common: 'Mexiko',
      },
      tur: {
        official: 'Birleşik Meksika Devletleri',
        common: 'Meksika',
      },
      urd: {
        official: 'ریاستہائے متحدہ میکسیکو',
        common: 'میکسیکو',
      },
      zho: {
        official: '墨西哥合众国',
        common: '墨西哥',
      },
    },
    latlng: [23.0, -102.0],
    landlocked: false,
    borders: ['BLZ', 'GTM', 'USA'],
    area: 1964375.0,
    demonyms: {
      eng: {
        f: 'Mexican',
        m: 'Mexican',
      },
      fra: {
        f: 'Mexicaine',
        m: 'Mexicain',
      },
    },
    flag: '🇲🇽',
    maps: {
      googleMaps: 'https://goo.gl/maps/s5g7imNPMDEePxzbA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/114686',
    },
    population: 128932753,
    gini: {
      '2018': 45.4,
    },
    fifa: 'MEX',
    car: {
      signs: ['MEX'],
      side: 'right',
    },
    timezones: ['UTC-08:00', 'UTC-07:00', 'UTC-06:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/mx.png',
      svg: 'https://flagcdn.com/mx.svg',
      alt: 'The flag of Mexico is composed of three equal vertical bands of green, white and red, with the national coat of arms centered in the white band.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mx.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mx.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [19.43, -99.13],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Gabon',
      official: 'Gabonese Republic',
      nativeName: {
        fra: {
          official: 'République gabonaise',
          common: 'Gabon',
        },
      },
    },
    tld: ['.ga'],
    cca2: 'GA',
    ccn3: '266',
    cca3: 'GAB',
    cioc: 'GAB',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XAF: {
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['41'],
    },
    capital: ['Libreville'],
    altSpellings: ['GA', 'Gabonese Republic', 'République Gabonaise'],
    region: 'Africa',
    subregion: 'Middle Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية الغابون',
        common: 'الغابون',
      },
      bre: {
        official: 'Republik Gabonat',
        common: 'Gabon',
      },
      ces: {
        official: 'Gabonská republika',
        common: 'Gabon',
      },
      cym: {
        official: 'Gabonese Republic',
        common: 'Gabon',
      },
      deu: {
        official: 'Gabunische Republik',
        common: 'Gabun',
      },
      est: {
        official: 'Gaboni Vabariik',
        common: 'Gabon',
      },
      fin: {
        official: 'Gabonin tasavalta',
        common: 'Gabon',
      },
      fra: {
        official: 'République gabonaise',
        common: 'Gabon',
      },
      hrv: {
        official: 'Gabon Republika',
        common: 'Gabon',
      },
      hun: {
        official: 'Gaboni Köztársaság',
        common: 'Gabon',
      },
      ita: {
        official: 'Repubblica gabonese',
        common: 'Gabon',
      },
      jpn: {
        official: 'ガボン共和国',
        common: 'ガボン',
      },
      kor: {
        official: '가봉 공화국',
        common: '가봉',
      },
      nld: {
        official: 'Republiek Gabon',
        common: 'Gabon',
      },
      per: {
        official: 'جمهوری گابُن',
        common: 'گابن',
      },
      pol: {
        official: 'Republika Gabońska',
        common: 'Gabon',
      },
      por: {
        official: 'República do Gabão',
        common: 'Gabão',
      },
      rus: {
        official: 'Габона Республика',
        common: 'Габон',
      },
      slk: {
        official: 'Gabonská republika',
        common: 'Gabon',
      },
      spa: {
        official: 'República de Gabón',
        common: 'Gabón',
      },
      srp: {
        official: 'Габонска Република',
        common: 'Габон',
      },
      swe: {
        official: 'Republiken Gabon',
        common: 'Gabon',
      },
      tur: {
        official: 'Gabon Cumhuriyeti',
        common: 'Gabon',
      },
      urd: {
        official: 'جمہوریہ گیبون',
        common: 'گیبون',
      },
      zho: {
        official: '加蓬共和国',
        common: '加蓬',
      },
    },
    latlng: [-1.0, 11.75],
    landlocked: false,
    borders: ['CMR', 'COG', 'GNQ'],
    area: 267668.0,
    demonyms: {
      eng: {
        f: 'Gabonese',
        m: 'Gabonese',
      },
      fra: {
        f: 'Gabonaise',
        m: 'Gabonais',
      },
    },
    flag: '🇬🇦',
    maps: {
      googleMaps: 'https://goo.gl/maps/vyRSkqw1H1fnq4ry6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192793',
    },
    population: 2225728,
    gini: {
      '2017': 38.0,
    },
    fifa: 'GAB',
    car: {
      signs: ['G'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ga.png',
      svg: 'https://flagcdn.com/ga.svg',
      alt: 'The flag of Gabon is composed of three equal horizontal bands of green, yellow and blue.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ga.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ga.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [0.38, 9.45],
    },
  },
  {
    name: {
      common: 'Northern Mariana Islands',
      official: 'Commonwealth of the Northern Mariana Islands',
      nativeName: {
        cal: {
          official: 'Commonwealth of the Northern Mariana Islands',
          common: 'Northern Mariana Islands',
        },
        cha: {
          official: 'Sankattan Siha Na Islas Mariånas',
          common: 'Na Islas Mariånas',
        },
        eng: {
          official: 'Commonwealth of the Northern Mariana Islands',
          common: 'Northern Mariana Islands',
        },
      },
    },
    tld: ['.mp'],
    cca2: 'MP',
    ccn3: '580',
    cca3: 'MNP',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['670'],
    },
    capital: ['Saipan'],
    altSpellings: [
      'MP',
      'Commonwealth of the Northern Mariana Islands',
      'Sankattan Siha Na Islas Mariånas',
    ],
    region: 'Oceania',
    subregion: 'Micronesia',
    languages: {
      cal: 'Carolinian',
      cha: 'Chamorro',
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'كومونولث جزر ماريانا الشمالية',
        common: 'جزر ماريانا الشمالية',
      },
      bre: {
        official: 'Kenglad Inizi Mariana an Norzh',
        common: 'Inizi Mariana an Norzh',
      },
      ces: {
        official: 'Společenství Severních Marian',
        common: 'Severní Mariany',
      },
      cym: {
        official: 'Commonwealth of the Northern Mariana Islands',
        common: 'Northern Mariana Islands',
      },
      deu: {
        official: 'Commonwealth der Nördlichen Marianen',
        common: 'Nördliche Marianen',
      },
      est: {
        official: 'Põhja-Mariaani Ühendus',
        common: 'Põhja-Mariaanid',
      },
      fin: {
        official: 'Pohjois-Mariaanit',
        common: 'Pohjois-Mariaanit',
      },
      fra: {
        official: 'Commonwealth des îles Mariannes du Nord',
        common: 'Îles Mariannes du Nord',
      },
      hrv: {
        official: 'Zajednica je Sjeverni Marijanski otoci',
        common: 'Sjevernomarijanski otoci',
      },
      hun: {
        official: 'Északi-Mariana-szigetek',
        common: 'Északi-Mariana-szigetek',
      },
      ita: {
        official: 'Commonwealth delle Isole Marianne Settentrionali',
        common: 'Isole Marianne Settentrionali',
      },
      jpn: {
        official: '北マリアナ諸島',
        common: '北マリアナ諸島',
      },
      kor: {
        official: '북마리아나 제도',
        common: '북마리아나 제도',
      },
      nld: {
        official: 'Commonwealth van de Noordelijke Marianen',
        common: 'Noordelijke Marianeneilanden',
      },
      per: {
        official: 'جزایر ماریانای شمالی',
        common: 'جزایر ماریانای شمالی',
      },
      pol: {
        official: 'Wspólnota Marianów Północnych',
        common: 'Mariany Północne',
      },
      por: {
        official: 'Comunidade das Ilhas Marianas do Norte',
        common: 'Marianas Setentrionais',
      },
      rus: {
        official: 'Содружество Северных Марианских островов',
        common: 'Северные Марианские острова',
      },
      slk: {
        official: 'Spoločenstvo ostrovov Severné Mariány',
        common: 'Severné Mariány',
      },
      spa: {
        official: 'Mancomunidad de las Islas Marianas del Norte',
        common: 'Islas Marianas del Norte',
      },
      srp: {
        official: 'Комонвелт Северна Маријанска Острва',
        common: 'Северна Маријанска Острва',
      },
      swe: {
        official: 'Nordmarianerna',
        common: 'Nordmarianerna',
      },
      tur: {
        official: 'Kuzey Mariana Adaları Milletler Topluluğu',
        common: 'Kuzey Mariana Adaları',
      },
      urd: {
        official: 'دولتِ مشترکہ جزائر شمالی ماریانا',
        common: 'جزائر شمالی ماریانا',
      },
      zho: {
        official: '北马里亚纳群岛',
        common: '北马里亚纳群岛',
      },
    },
    latlng: [15.2, 145.75],
    landlocked: false,
    area: 464.0,
    demonyms: {
      eng: {
        f: 'American',
        m: 'American',
      },
      fra: {
        f: 'Américaine',
        m: 'Américan',
      },
    },
    flag: '🇲🇵',
    maps: {
      googleMaps: 'https://goo.gl/maps/cpZ67knoRAcfu1417',
      openStreetMaps: 'https://www.openstreetmap.org/relation/306004',
    },
    population: 57557,
    car: {
      signs: ['USA'],
      side: 'right',
    },
    timezones: ['UTC+10:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/mp.png',
      svg: 'https://flagcdn.com/mp.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [15.2, 145.75],
    },
  },
  {
    name: {
      common: 'North Macedonia',
      official: 'Republic of North Macedonia',
      nativeName: {
        mkd: {
          official: 'Република Северна Македонија',
          common: 'Македонија',
        },
      },
    },
    tld: ['.mk'],
    cca2: 'MK',
    ccn3: '807',
    cca3: 'MKD',
    cioc: 'MKD',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MKD: {
        name: 'denar',
        symbol: 'den',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['89'],
    },
    capital: ['Skopje'],
    altSpellings: [
      'MK',
      'The former Yugoslav Republic of Macedonia',
      'Republic of North Macedonia',
      'Macedonia, The Former Yugoslav Republic of',
      'Република Северна Македонија',
    ],
    region: 'Europe',
    subregion: 'Southeast Europe',
    languages: {
      mkd: 'Macedonian',
    },
    translations: {
      ara: {
        official: 'جمهورية شمال مقدونيا',
        common: 'شمال مقدونيا',
      },
      bre: {
        official: 'Republik Makedonia an Norzh',
        common: 'Makedonia an Norzh',
      },
      ces: {
        official: 'Republika Severní Makedonie',
        common: 'Severní Makedonie',
      },
      cym: {
        official: 'Republic of North Macedonia',
        common: 'North Macedonia',
      },
      deu: {
        official: 'Republik Nordmazedonien',
        common: 'Nordmazedonien',
      },
      est: {
        official: 'Põhja-Makedoonia Vabariik',
        common: 'Põhja-Makedoonia',
      },
      fin: {
        official: 'Pohjois-Makedonian tasavalta',
        common: 'Pohjois-Makedonia',
      },
      fra: {
        official: 'République de Macédoine du Nord',
        common: 'Macédoine du Nord',
      },
      hrv: {
        official: 'Republika Sjeverna Makedonija',
        common: 'Sjeverna Makedonija',
      },
      hun: {
        official: 'Észak-macedón Köztársaság',
        common: 'Észak-Macedónia',
      },
      ita: {
        official: 'Repubblica di Macedonia del Nord',
        common: 'Macedonia del Nord',
      },
      jpn: {
        official: '北マケドニア共和国',
        common: '北マケドニア ',
      },
      kor: {
        official: '북마케도니아 공화국',
        common: '북마케도니아',
      },
      nld: {
        official: 'Republiek Noord-Macedonië',
        common: 'Noord-Macedonië',
      },
      per: {
        official: 'جمهوری مقدونیه شمالی',
        common: 'مقدونیه شمالی',
      },
      pol: {
        official: 'Republika Macedonii Północnej',
        common: 'Macedonia Północna',
      },
      por: {
        official: 'República da Macedônia do Norte',
        common: 'Macedónia do Norte',
      },
      rus: {
        official: 'Республика Северная Македония',
        common: 'Северная Македония',
      },
      slk: {
        official: 'Severomacedónska republika',
        common: 'Severné Macedónsko',
      },
      spa: {
        official: 'República de Macedonia del Norte',
        common: 'Macedonia del Norte',
      },
      srp: {
        official: 'Република Северна Македонија',
        common: 'Северна Македонија',
      },
      swe: {
        official: 'Republiken Nordmakedonien',
        common: 'Nordmakedonien',
      },
      tur: {
        official: 'Kuzey Makedonya Cumhuriyeti',
        common: 'Kuzey Makedonya',
      },
      urd: {
        official: 'جمہوریہ مقدونیہ',
        common: 'شمالی مقدونیہ',
      },
      zho: {
        official: '北馬其頓共和國',
        common: '北馬其頓',
      },
    },
    latlng: [41.83333333, 22.0],
    landlocked: true,
    borders: ['ALB', 'BGR', 'GRC', 'UNK', 'SRB'],
    area: 25713.0,
    demonyms: {
      eng: {
        f: 'Macedonian',
        m: 'Macedonian',
      },
      fra: {
        f: 'Macédonienne',
        m: 'Macédonien',
      },
    },
    flag: '🇲🇰',
    maps: {
      googleMaps: 'https://goo.gl/maps/55Q8MEnF6ACdu3q79',
      openStreetMaps: 'https://www.openstreetmap.org/relation/53293',
    },
    population: 2077132,
    gini: {
      '2018': 33.0,
    },
    fifa: 'MKD',
    car: {
      signs: ['MK'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/mk.png',
      svg: 'https://flagcdn.com/mk.svg',
      alt: 'The flag of North Macedonia has a red field, at the center of which is a golden-yellow sun with eight broadening rays that extend to the edges of the field.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mk.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mk.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [42.0, 21.43],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'China',
      official: "People's Republic of China",
      nativeName: {
        zho: {
          official: '中华人民共和国',
          common: '中国',
        },
      },
    },
    tld: ['.cn', '.中国', '.中國', '.公司', '.网络'],
    cca2: 'CN',
    ccn3: '156',
    cca3: 'CHN',
    cioc: 'CHN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CNY: {
        name: 'Chinese yuan',
        symbol: '¥',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['6'],
    },
    capital: ['Beijing'],
    altSpellings: [
      'CN',
      'Zhōngguó',
      'Zhongguo',
      'Zhonghua',
      "People's Republic of China",
      '中华人民共和国',
      'Zhōnghuá Rénmín Gònghéguó',
    ],
    region: 'Asia',
    subregion: 'Eastern Asia',
    languages: {
      zho: 'Chinese',
    },
    translations: {
      ara: {
        official: 'جمهورية الصين الشعبية',
        common: 'الصين',
      },
      bre: {
        official: 'Republik Pobl Sina',
        common: 'Sina',
      },
      ces: {
        official: 'Čínská lidová republika',
        common: 'Čína',
      },
      cym: {
        official: 'Gweriniaeth Pobl Tsieina',
        common: 'Tsieina',
      },
      deu: {
        official: 'Volksrepublik China',
        common: 'China',
      },
      est: {
        official: 'Hiina Rahvavabariik',
        common: 'Hiina',
      },
      fin: {
        official: 'Kiinan kansantasavalta',
        common: 'Kiina',
      },
      fra: {
        official: 'République populaire de Chine',
        common: 'Chine',
      },
      hrv: {
        official: 'Narodna Republika Kina',
        common: 'Kina',
      },
      hun: {
        official: 'Kínai Népköztársaság',
        common: 'Kína',
      },
      ita: {
        official: 'Repubblica popolare cinese',
        common: 'Cina',
      },
      jpn: {
        official: '中華人民共和国',
        common: '中国',
      },
      kor: {
        official: '중화인민공화국',
        common: '중국',
      },
      nld: {
        official: 'Volksrepubliek China',
        common: 'China',
      },
      per: {
        official: 'جمهوری خلق چین',
        common: 'چین',
      },
      pol: {
        official: 'Chińska Republika Ludowa',
        common: 'Chiny',
      },
      por: {
        official: 'República Popular da China',
        common: 'China',
      },
      rus: {
        official: 'Народная Республика Китай',
        common: 'Китай',
      },
      slk: {
        official: 'Čínska ľudová republika',
        common: 'Čína',
      },
      spa: {
        official: 'República Popular de China',
        common: 'China',
      },
      srp: {
        official: 'Народна Република Кина',
        common: 'Кина',
      },
      swe: {
        official: 'Folkrepubliken Kina',
        common: 'Kina',
      },
      tur: {
        official: 'Çin Halk Cumhuriyeti',
        common: 'Çin',
      },
      urd: {
        official: 'عوامی جمہوریہ چین',
        common: 'چین',
      },
    },
    latlng: [35.0, 105.0],
    landlocked: false,
    borders: [
      'AFG',
      'BTN',
      'MMR',
      'HKG',
      'IND',
      'KAZ',
      'NPL',
      'PRK',
      'KGZ',
      'LAO',
      'MAC',
      'MNG',
      'PAK',
      'RUS',
      'TJK',
      'VNM',
    ],
    area: 9706961.0,
    demonyms: {
      eng: {
        f: 'Chinese',
        m: 'Chinese',
      },
      fra: {
        f: 'Chinoise',
        m: 'Chinois',
      },
    },
    flag: '🇨🇳',
    maps: {
      googleMaps: 'https://goo.gl/maps/p9qC6vgiFRRXzvGi7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/270056',
    },
    population: 1402112000,
    gini: {
      '2016': 38.5,
    },
    fifa: 'CHN',
    car: {
      signs: ['RC'],
      side: 'right',
    },
    timezones: ['UTC+08:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/cn.png',
      svg: 'https://flagcdn.com/cn.svg',
      alt: 'The flag of China has a red field. In the canton are five yellow five-pointed stars — a large star and four smaller stars arranged in a vertical arc on the fly side of the large star.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [39.92, 116.38],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Yemen',
      official: 'Republic of Yemen',
      nativeName: {
        ara: {
          official: 'الجمهورية اليمنية',
          common: 'اليَمَن',
        },
      },
    },
    tld: ['.ye'],
    cca2: 'YE',
    ccn3: '887',
    cca3: 'YEM',
    cioc: 'YEM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      YER: {
        name: 'Yemeni rial',
        symbol: '﷼',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['67'],
    },
    capital: ["Sana'a"],
    altSpellings: ['YE', 'Yemeni Republic', 'al-Jumhūriyyah al-Yamaniyyah'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'الجمهورية اليمنية',
        common: 'اليمن',
      },
      bre: {
        official: 'Republik Yemen',
        common: 'Yemen',
      },
      ces: {
        official: 'Jemenská republika',
        common: 'Jemen',
      },
      cym: {
        official: 'Republic of Yemen',
        common: 'Yemen',
      },
      deu: {
        official: 'Republik Jemen',
        common: 'Jemen',
      },
      est: {
        official: 'Jeemeni Vabariik',
        common: 'Jeemen',
      },
      fin: {
        official: 'Jemenin tasavalta',
        common: 'Jemen',
      },
      fra: {
        official: 'République du Yémen',
        common: 'Yémen',
      },
      hrv: {
        official: 'Republika Jemen',
        common: 'Jemen',
      },
      hun: {
        official: 'Jemeni Köztársaság',
        common: 'Jemen',
      },
      ita: {
        official: 'Repubblica dello Yemen',
        common: 'Yemen',
      },
      jpn: {
        official: 'イエメン共和国',
        common: 'イエメン',
      },
      kor: {
        official: '예멘 공화국',
        common: '예멘',
      },
      nld: {
        official: 'Republiek Jemen',
        common: 'Jemen',
      },
      per: {
        official: 'جمهوری یمن',
        common: 'یمن',
      },
      pol: {
        official: 'Republika Jemeńska',
        common: 'Jemen',
      },
      por: {
        official: 'República do Iêmen',
        common: 'Iémen',
      },
      rus: {
        official: 'Йеменская Республика',
        common: 'Йемен',
      },
      slk: {
        official: 'Jemenská republika',
        common: 'Jemen',
      },
      spa: {
        official: 'República de Yemen',
        common: 'Yemen',
      },
      srp: {
        official: 'Република Јемен',
        common: 'Јемен',
      },
      swe: {
        official: 'Republiken Jemen',
        common: 'Jemen',
      },
      tur: {
        official: 'Yemen Cumhuriyeti',
        common: 'Yemen',
      },
      urd: {
        official: 'جمہوریہ یمن',
        common: 'یمن',
      },
      zho: {
        official: '也门共和国',
        common: '也门',
      },
    },
    latlng: [15.0, 48.0],
    landlocked: false,
    borders: ['OMN', 'SAU'],
    area: 527968.0,
    demonyms: {
      eng: {
        f: 'Yemeni',
        m: 'Yemeni',
      },
      fra: {
        f: 'Yéménite',
        m: 'Yéménite',
      },
    },
    flag: '🇾🇪',
    maps: {
      googleMaps: 'https://goo.gl/maps/WCmE76HKcLideQQw7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/305092',
    },
    population: 29825968,
    gini: {
      '2014': 36.7,
    },
    fifa: 'YEM',
    car: {
      signs: ['YAR'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/ye.png',
      svg: 'https://flagcdn.com/ye.svg',
      alt: 'The flag of Yemen is composed of three equal horizontal bands of red, white and black.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ye.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ye.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [15.37, 44.19],
    },
  },
  {
    name: {
      common: 'Saint Barthélemy',
      official: 'Collectivity of Saint Barthélemy',
      nativeName: {
        fra: {
          official: 'Collectivité de Saint-Barthélemy',
          common: 'Saint-Barthélemy',
        },
      },
    },
    tld: ['.bl'],
    cca2: 'BL',
    ccn3: '652',
    cca3: 'BLM',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['90'],
    },
    capital: ['Gustavia'],
    altSpellings: [
      'BL',
      'St. Barthelemy',
      'Collectivity of Saint Barthélemy',
      'Collectivité de Saint-Barthélemy',
    ],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'التجمع الإقليمي لسانت بارتيليمي',
        common: 'سان بارتليمي',
      },
      bre: {
        official: 'Saint-Barthélemy',
        common: 'Saint-Barthélemy',
      },
      ces: {
        official: 'Svatý Bartoloměj',
        common: 'Svatý Bartoloměj',
      },
      cym: {
        official: 'Collectivity of Saint Barthélemy',
        common: 'Saint Barthélemy',
      },
      deu: {
        official: 'Gebietskörperschaft Saint-Barthélemy',
        common: 'Saint-Barthélemy',
      },
      est: {
        official: 'Saint-Barthélemy territoriaalühendus',
        common: 'Saint-Barthélemy',
      },
      fin: {
        official: 'Saint-Barthélemyn yhteisö',
        common: 'Saint-Barthélemy',
      },
      fra: {
        official: 'Collectivité de Saint-Barthélemy',
        common: 'Saint-Barthélemy',
      },
      hrv: {
        official: 'Kolektivnost sv Barthélemy',
        common: 'Saint Barthélemy',
      },
      hun: {
        official: 'Saint-Barthélemy',
        common: 'Saint-Barthélemy',
      },
      ita: {
        official: 'Collettività di Saint Barthélemy',
        common: 'Antille Francesi',
      },
      jpn: {
        official: 'サン·バルテルミー島の集合体',
        common: 'サン・バルテルミー',
      },
      kor: {
        official: '생바르텔레미',
        common: '생바르텔레미',
      },
      nld: {
        official: 'Gemeenschap Saint Barthélemy',
        common: 'Saint Barthélemy',
      },
      per: {
        official: 'سن بارتلمی',
        common: 'سن بارتلمی',
      },
      pol: {
        official: 'Saint-Barthélemy',
        common: 'Saint-Barthélemy',
      },
      por: {
        official: 'Coletividade de Saint Barthélemy',
        common: 'São Bartolomeu',
      },
      rus: {
        official: 'Коллективность Санкт -Бартельми',
        common: 'Сен-Бартелеми',
      },
      slk: {
        official: 'Svätý Bartolomej',
        common: 'Svätý Bartolomej',
      },
      spa: {
        official: 'Colectividad de San Barthélemy',
        common: 'San Bartolomé',
      },
      srp: {
        official: 'Сен Бартелеми',
        common: 'Територијални Kолектив Сен Бартелеми',
      },
      swe: {
        official: 'Saint-Barthélemy',
        common: 'Saint-Barthélemy',
      },
      tur: {
        official: 'Saint Barthélemy',
        common: 'Saint Barthélemy',
      },
      urd: {
        official: 'سینٹ بارتھیملے',
        common: 'سینٹ بارتھیملے',
      },
      zho: {
        official: '圣巴泰勒米集体',
        common: '圣巴泰勒米',
      },
    },
    latlng: [18.5, -63.41666666],
    landlocked: false,
    area: 21.0,
    demonyms: {
      eng: {
        f: 'Saint Barthélemy Islander',
        m: 'Saint Barthélemy Islander',
      },
      fra: {
        f: 'Barthéloméenne',
        m: 'Barthéloméen',
      },
    },
    flag: '🇧🇱',
    maps: {
      googleMaps: 'https://goo.gl/maps/Mc7GqH466S7AAk297',
      openStreetMaps: 'https://www.openstreetmap.org/relation/7552779',
    },
    population: 4255,
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/bl.png',
      svg: 'https://flagcdn.com/bl.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [17.88, -62.85],
    },
    postalCode: {
      format: '### ###',
    },
  },
  {
    name: {
      common: 'Guernsey',
      official: 'Bailiwick of Guernsey',
      nativeName: {
        eng: {
          official: 'Bailiwick of Guernsey',
          common: 'Guernsey',
        },
        fra: {
          official: 'Bailliage de Guernesey',
          common: 'Guernesey',
        },
        nfr: {
          official: 'Dgèrnésiais',
          common: 'Dgèrnésiais',
        },
      },
    },
    tld: ['.gg'],
    cca2: 'GG',
    ccn3: '831',
    cca3: 'GGY',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      GBP: {
        name: 'British pound',
        symbol: '£',
      },
      GGP: {
        name: 'Guernsey pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['4'],
    },
    capital: ['St. Peter Port'],
    altSpellings: ['GG', 'Bailiwick of Guernsey', 'Bailliage de Guernesey'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      eng: 'English',
      fra: 'French',
      nfr: 'Guernésiais',
    },
    translations: {
      ara: {
        official: 'غيرنزي',
        common: 'غيرنزي',
      },
      bre: {
        official: 'Gwernenez',
        common: 'Gwernenez',
      },
      ces: {
        official: 'Rychtářství Guernsey',
        common: 'Guernsey',
      },
      cym: {
        official: 'Bailiwick of Guernsey',
        common: 'Guernsey',
      },
      deu: {
        official: 'Vogtei Guernsey',
        common: 'Guernsey',
      },
      est: {
        official: 'Guernsey foogtkond',
        common: 'Guernsey',
      },
      fin: {
        official: 'Guernsey',
        common: 'Guernsey',
      },
      fra: {
        official: 'Bailliage de Guernesey',
        common: 'Guernesey',
      },
      hrv: {
        official: 'Struka Guernsey',
        common: 'Guernsey',
      },
      hun: {
        official: 'Guernsey',
        common: 'Guernsey',
      },
      ita: {
        official: 'Baliato di Guernsey',
        common: 'Guernsey',
      },
      jpn: {
        official: 'ガーンジーの得意分野',
        common: 'ガーンジー',
      },
      kor: {
        official: '건지 섬',
        common: '건지 섬',
      },
      nld: {
        official: 'Baljuwschap Guernsey',
        common: 'Guernsey',
      },
      per: {
        official: 'گرنزی',
        common: 'گرنزی',
      },
      pol: {
        official: 'Baliwat Guernsey',
        common: 'Guernsey',
      },
      por: {
        official: 'Bailiado de Guernsey',
        common: 'Guernsey',
      },
      rus: {
        official: 'Коронное владение Гернси',
        common: 'Гернси',
      },
      slk: {
        official: 'Guernsey',
        common: 'Guernsey',
      },
      spa: {
        official: 'Bailía de Guernsey',
        common: 'Guernsey',
      },
      srp: {
        official: 'Бејливик Гернзи',
        common: 'Гернзи',
      },
      swe: {
        official: 'Guernsey',
        common: 'Guernsey',
      },
      tur: {
        official: 'Guernsey Muhafızlığı',
        common: 'Guernsey',
      },
      urd: {
        official: 'گرنزی رودبار',
        common: 'گرنزی',
      },
      zho: {
        official: '根西岛',
        common: '根西岛',
      },
    },
    latlng: [49.46666666, -2.58333333],
    landlocked: false,
    area: 78.0,
    demonyms: {
      eng: {
        f: 'Channel Islander',
        m: 'Channel Islander',
      },
      fra: {
        f: 'Guernesiaise',
        m: 'Guernesiais',
      },
    },
    flag: '🇬🇬',
    maps: {
      googleMaps: 'https://goo.gl/maps/6kXnQU5QvEZMD9VB7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/270009',
    },
    population: 62999,
    car: {
      signs: ['GBG'],
      side: 'left',
    },
    timezones: ['UTC+00:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/gg.png',
      svg: 'https://flagcdn.com/gg.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gg.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gg.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [49.45, -2.54],
    },
    postalCode: {
      format: '@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA',
      regex:
        '^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$',
    },
  },
  {
    name: {
      common: 'Solomon Islands',
      official: 'Solomon Islands',
      nativeName: {
        eng: {
          official: 'Solomon Islands',
          common: 'Solomon Islands',
        },
      },
    },
    tld: ['.sb'],
    cca2: 'SB',
    ccn3: '090',
    cca3: 'SLB',
    cioc: 'SOL',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SBD: {
        name: 'Solomon Islands dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['77'],
    },
    capital: ['Honiara'],
    altSpellings: ['SB'],
    region: 'Oceania',
    subregion: 'Melanesia',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جزر سليمان',
        common: 'جزر سليمان',
      },
      bre: {
        official: 'Inizi Salomon',
        common: 'Inizi Salomon',
      },
      ces: {
        official: 'Šalamounovy ostrovy',
        common: 'Šalamounovy ostrovy',
      },
      cym: {
        official: 'Solomon Islands',
        common: 'Solomon Islands',
      },
      deu: {
        official: 'Salomonen',
        common: 'Salomonen',
      },
      est: {
        official: 'Saalomoni Saared',
        common: 'Saalomoni Saared',
      },
      fin: {
        official: 'Salomonsaaret',
        common: 'Salomonsaaret',
      },
      fra: {
        official: 'Îles Salomon',
        common: 'Îles Salomon',
      },
      hrv: {
        official: 'Solomonski Otoci',
        common: 'Solomonski Otoci',
      },
      hun: {
        official: 'Salamon-szigetek',
        common: 'Salamon-szigetek',
      },
      ita: {
        official: 'Isole Salomone',
        common: 'Isole Salomone',
      },
      jpn: {
        official: 'ソロモン諸島',
        common: 'ソロモン諸島',
      },
      kor: {
        official: '솔로몬 제도',
        common: '솔로몬 제도',
      },
      nld: {
        official: 'Solomon eilanden',
        common: 'Salomonseilanden',
      },
      per: {
        official: 'جزایر سلیمان',
        common: 'جزایر سلیمان',
      },
      pol: {
        official: 'Wyspy Salomona',
        common: 'Wyspy Salomona',
      },
      por: {
        official: 'Ilhas Salomão',
        common: 'Ilhas Salomão',
      },
      rus: {
        official: 'Соломоновы острова',
        common: 'Соломоновы Острова',
      },
      slk: {
        official: 'Salomonove ostrovy',
        common: 'Salomonove ostrovy',
      },
      spa: {
        official: 'islas Salomón',
        common: 'Islas Salomón',
      },
      srp: {
        official: 'Соломонска Острва',
        common: 'Соломонска Острва',
      },
      swe: {
        official: 'Salomonöarna',
        common: 'Salomonöarna',
      },
      tur: {
        official: 'Solomon Adaları',
        common: 'Solomon Adaları',
      },
      urd: {
        official: 'جزائر سلیمان',
        common: 'جزائر سلیمان',
      },
      zho: {
        official: '所罗门群岛',
        common: '所罗门群岛',
      },
    },
    latlng: [-8.0, 159.0],
    landlocked: false,
    area: 28896.0,
    demonyms: {
      eng: {
        f: 'Solomon Islander',
        m: 'Solomon Islander',
      },
      fra: {
        f: 'Salomonienne',
        m: 'Salomonien',
      },
    },
    flag: '🇸🇧',
    maps: {
      googleMaps: 'https://goo.gl/maps/JbPkx86Ywjv8C1n8A',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1857436',
    },
    population: 686878,
    gini: {
      '2012': 37.1,
    },
    fifa: 'SOL',
    car: {
      signs: ['SOL'],
      side: 'left',
    },
    timezones: ['UTC+11:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/sb.png',
      svg: 'https://flagcdn.com/sb.svg',
      alt: 'The flag of Solomon Islands features a thin yellow diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. Above and beneath this band are a blue and green triangle respectively. Five white five-pointed stars arranged in an X shape are situated on the hoist side of the upper blue triangle.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sb.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sb.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-9.43, 159.95],
    },
  },
  {
    name: {
      common: 'Svalbard and Jan Mayen',
      official: 'Svalbard og Jan Mayen',
      nativeName: {
        nor: {
          official: 'Svalbard og Jan Mayen',
          common: 'Svalbard og Jan Mayen',
        },
      },
    },
    tld: ['.sj'],
    cca2: 'SJ',
    ccn3: '744',
    cca3: 'SJM',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      NOK: {
        name: 'krone',
        symbol: 'kr',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['779'],
    },
    capital: ['Longyearbyen'],
    altSpellings: ['SJ', 'Svalbard and Jan Mayen Islands'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      nor: 'Norwegian',
    },
    translations: {
      ara: {
        official: 'سفالبارد ويان ماين',
        common: 'سفالبارد ويان ماين',
      },
      bre: {
        official: 'Svalbard ha Jan Mayen',
        common: 'Svalbard ha Jan Mayen',
      },
      ces: {
        official: 'Špicberky a Jan Mayen',
        common: 'Špicberky a Jan Mayen',
      },
      cym: {
        official: 'Svalbard og Jan Mayen',
        common: 'Svalbard and Jan Mayen',
      },
      deu: {
        official: 'Spitzbergen und Jan Mayen',
        common: 'Spitzbergen und Jan Mayen',
      },
      est: {
        official: 'Svalbard',
        common: 'Svalbard',
      },
      fin: {
        official: 'Huippuvuoret',
        common: 'Huippuvuoret',
      },
      fra: {
        official: 'Jan Mayen Svalbard',
        common: 'Svalbard et Jan Mayen',
      },
      hrv: {
        official: 'Svalbard og Jan Mayen',
        common: 'Svalbard i Jan Mayen',
      },
      hun: {
        official: 'Svalbard és Jan Mayen',
        common: 'Svalbard és Jan Mayen',
      },
      ita: {
        official: 'Svalbard og Jan Mayen',
        common: 'Svalbard e Jan Mayen',
      },
      jpn: {
        official: 'スバールバル諸島OGヤンマイエン',
        common: 'スヴァールバル諸島およびヤンマイエン島',
      },
      kor: {
        official: '스발바르 얀마옌 제도',
        common: '스발바르 얀마옌 제도',
      },
      nld: {
        official: 'Svalbard og Jan Mayen',
        common: 'Svalbard en Jan Mayen',
      },
      per: {
        official: 'سوالبارد و یان ماین',
        common: 'سوالبارد و یان ماین',
      },
      pol: {
        official: 'Svalbard i Jan Mayen',
        common: 'Svalbard i Jan Mayen',
      },
      por: {
        official: 'Svalbard og Jan Mayen',
        common: 'Ilhas Svalbard e Jan Mayen',
      },
      rus: {
        official: 'Свальбарда ог Ян-Майен',
        common: 'Шпицберген и Ян-Майен',
      },
      slk: {
        official: 'Svalbard a Jan Mayen',
        common: 'Svalbard a Jan Mayen',
      },
      spa: {
        official: 'Svalbard og Jan Mayen',
        common: 'Islas Svalbard y Jan Mayen',
      },
      srp: {
        official: 'Свалбард и Јан Мајен',
        common: 'Свалбард и Јан Мајен',
      },
      swe: {
        official: 'Svalbard och Jan Mayen',
        common: 'Svalbard och Jan Mayen',
      },
      tur: {
        official: 'Svalbard ve Jan Mayen',
        common: 'Svalbard ve Jan Mayen',
      },
      urd: {
        official: 'سوالبارڈ اور جان میئن',
        common: 'سوالبارڈ اور جان میئن',
      },
      zho: {
        official: '斯瓦尔巴特',
        common: '斯瓦尔巴特',
      },
    },
    latlng: [78.0, 20.0],
    landlocked: false,
    area: 61399.0,
    demonyms: {
      eng: {
        f: 'Norwegian',
        m: 'Norwegian',
      },
    },
    flag: '🇸🇯',
    maps: {
      googleMaps: 'https://goo.gl/maps/L2wyyn3cQ16PzQ5J8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1337397',
    },
    population: 2562,
    car: {
      signs: ['N'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/sj.png',
      svg: 'https://flagcdn.com/sj.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [78.22, 15.63],
    },
  },
  {
    name: {
      common: 'Faroe Islands',
      official: 'Faroe Islands',
      nativeName: {
        dan: {
          official: 'Færøerne',
          common: 'Færøerne',
        },
        fao: {
          official: 'Føroyar',
          common: 'Føroyar',
        },
      },
    },
    tld: ['.fo'],
    cca2: 'FO',
    ccn3: '234',
    cca3: 'FRO',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      DKK: {
        name: 'Danish krone',
        symbol: 'kr',
      },
      FOK: {
        name: 'Faroese króna',
        symbol: 'kr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['98'],
    },
    capital: ['Tórshavn'],
    altSpellings: ['FO', 'Føroyar', 'Færøerne'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      dan: 'Danish',
      fao: 'Faroese',
    },
    translations: {
      ara: {
        official: 'جزر فارو',
        common: 'جزر فارو',
      },
      bre: {
        official: 'Inizi Faero',
        common: 'Inizi Faero',
      },
      ces: {
        official: 'Faerské ostrovy',
        common: 'Faerské ostrovy',
      },
      cym: {
        official: 'Faroe Islands',
        common: 'Faroe Islands',
      },
      deu: {
        official: 'Färöer',
        common: 'Färöer-Inseln',
      },
      est: {
        official: 'Fääri saared',
        common: 'Fääri saared',
      },
      fin: {
        official: 'Färsaaret',
        common: 'Färsaaret',
      },
      fra: {
        official: 'Îles Féroé',
        common: 'Îles Féroé',
      },
      hrv: {
        official: 'Farski Otoci',
        common: 'Farski Otoci',
      },
      hun: {
        official: 'Feröer',
        common: 'Feröer',
      },
      ita: {
        official: 'Isole Faroe',
        common: 'Isole Far Oer',
      },
      jpn: {
        official: 'フェロー諸島',
        common: 'フェロー諸島',
      },
      kor: {
        official: '페로 제도',
        common: '페로 제도',
      },
      nld: {
        official: 'Faeröer',
        common: 'Faeröer',
      },
      per: {
        official: 'جزایر فاروئه',
        common: 'جزایر فاروئه',
      },
      pol: {
        official: 'Wyspy Owcze',
        common: 'Wyspy Owcze',
      },
      por: {
        official: 'Ilhas Faroe',
        common: 'Ilhas Faroé',
      },
      rus: {
        official: 'Фарерские острова',
        common: 'Фарерские острова',
      },
      slk: {
        official: 'Faerské ostrovy',
        common: 'Faerské ostrovy',
      },
      spa: {
        official: 'Islas Feroe',
        common: 'Islas Faroe',
      },
      srp: {
        official: 'Фарска острва',
        common: 'Фарска острва',
      },
      swe: {
        official: 'Färöarna',
        common: 'Färöarna',
      },
      tur: {
        official: 'Faroe Adaları',
        common: 'Faroe Adaları',
      },
      urd: {
        official: 'جزائر فارو',
        common: 'جزائر فارو',
      },
      zho: {
        official: '法罗群岛',
        common: '法罗群岛',
      },
    },
    latlng: [62.0, -7.0],
    landlocked: false,
    area: 1393.0,
    demonyms: {
      eng: {
        f: 'Faroese',
        m: 'Faroese',
      },
      fra: {
        f: 'Féroïenne',
        m: 'Féroïen',
      },
    },
    flag: '🇫🇴',
    maps: {
      googleMaps: 'https://goo.gl/maps/6sTru4SmHdEVcNkM6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/52939',
    },
    population: 48865,
    fifa: 'FRO',
    car: {
      signs: ['FO'],
      side: 'right',
    },
    timezones: ['UTC+00:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/fo.png',
      svg: 'https://flagcdn.com/fo.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/fo.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/fo.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [62.01, -6.77],
    },
    postalCode: {
      format: 'FO-###',
      regex: '^(?:FO)*(\\d{3})$',
    },
  },
  {
    name: {
      common: 'Uzbekistan',
      official: 'Republic of Uzbekistan',
      nativeName: {
        rus: {
          official: 'Республика Узбекистан',
          common: 'Узбекистан',
        },
        uzb: {
          official: "O'zbekiston Respublikasi",
          common: 'O‘zbekiston',
        },
      },
    },
    tld: ['.uz'],
    cca2: 'UZ',
    ccn3: '860',
    cca3: 'UZB',
    cioc: 'UZB',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      UZS: {
        name: 'Uzbekistani soʻm',
        symbol: "so'm",
      },
    },
    idd: {
      root: '+9',
      suffixes: ['98'],
    },
    capital: ['Tashkent'],
    altSpellings: [
      'UZ',
      'Republic of Uzbekistan',
      'O‘zbekiston Respublikasi',
      'Ўзбекистон Республикаси',
    ],
    region: 'Asia',
    subregion: 'Central Asia',
    languages: {
      rus: 'Russian',
      uzb: 'Uzbek',
    },
    translations: {
      ara: {
        official: 'جمهورية أوزباكستان',
        common: 'أوزباكستان',
      },
      bre: {
        official: 'Republik Ouzbekistan',
        common: 'Ouzbekistan',
      },
      ces: {
        official: 'Republika Uzbekistán',
        common: 'Uzbekistán',
      },
      cym: {
        official: 'Republic of Uzbekistan',
        common: 'Uzbekistan',
      },
      deu: {
        official: 'Republik Usbekistan',
        common: 'Usbekistan',
      },
      est: {
        official: 'Usbekistani Vabariik',
        common: 'Usbekistan',
      },
      fin: {
        official: 'Uzbekistanin tasavalta',
        common: 'Uzbekistan',
      },
      fra: {
        official: "République d'Ouzbékistan",
        common: 'Ouzbékistan',
      },
      hrv: {
        official: 'Republika Uzbekistan',
        common: 'Uzbekistan',
      },
      hun: {
        official: 'Üzbég Köztársaság',
        common: 'Üzbegisztán',
      },
      ita: {
        official: 'Repubblica di Uzbekistan',
        common: 'Uzbekistan',
      },
      jpn: {
        official: 'ウズベキスタン共和国',
        common: 'ウズベキスタン',
      },
      kor: {
        official: '우즈베키스탄 공화국',
        common: '우즈베키스탄',
      },
      nld: {
        official: 'Republiek Oezbekistan',
        common: 'Oezbekistan',
      },
      per: {
        official: 'جمهوری ازبکستان',
        common: 'ازبکستان',
      },
      pol: {
        official: 'Republika Uzbekistanu',
        common: 'Uzbekistan',
      },
      por: {
        official: 'República do Usbequistão',
        common: 'Uzbequistão',
      },
      rus: {
        official: 'Республика Узбекистан',
        common: 'Узбекистан',
      },
      slk: {
        official: 'Uzbecká republika',
        common: 'Uzbekistan',
      },
      spa: {
        official: 'República de Uzbekistán',
        common: 'Uzbekistán',
      },
      srp: {
        official: 'Република Узбекистан',
        common: 'Узбекистан',
      },
      swe: {
        official: 'Republiken Uzbekistan',
        common: 'Uzbekistan',
      },
      tur: {
        official: 'Özbekistan Cumhuriyeti',
        common: 'Özbekistan',
      },
      urd: {
        official: 'جمہوریہ ازبکستان',
        common: 'ازبکستان',
      },
      zho: {
        official: '乌兹别克斯坦共和国',
        common: '乌兹别克斯坦',
      },
    },
    latlng: [41.0, 64.0],
    landlocked: true,
    borders: ['AFG', 'KAZ', 'KGZ', 'TJK', 'TKM'],
    area: 447400.0,
    demonyms: {
      eng: {
        f: 'Uzbekistani',
        m: 'Uzbekistani',
      },
      fra: {
        f: 'Ouzbèke',
        m: 'Ouzbèke',
      },
    },
    flag: '🇺🇿',
    maps: {
      googleMaps: 'https://goo.gl/maps/AJpo6MjMx23qSWCz8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/196240',
    },
    population: 34232050,
    gini: {
      '2003': 35.3,
    },
    fifa: 'UZB',
    car: {
      signs: ['UZ'],
      side: 'right',
    },
    timezones: ['UTC+05:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/uz.png',
      svg: 'https://flagcdn.com/uz.svg',
      alt: 'The flag of Uzbekistan is composed of three equal horizontal bands of turquoise, white with red top and bottom edges, and green. On the hoist side of the turquoise band is a fly-side facing white crescent and twelve five-pointed white stars arranged just outside the crescent opening in three rows comprising three, four and five stars.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/uz.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/uz.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [41.32, 69.25],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Egypt',
      official: 'Arab Republic of Egypt',
      nativeName: {
        ara: {
          official: 'جمهورية مصر العربية',
          common: 'مصر',
        },
      },
    },
    tld: ['.eg', '.مصر'],
    cca2: 'EG',
    ccn3: '818',
    cca3: 'EGY',
    cioc: 'EGY',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EGP: {
        name: 'Egyptian pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['0'],
    },
    capital: ['Cairo'],
    altSpellings: ['EG', 'Arab Republic of Egypt'],
    region: 'Africa',
    subregion: 'Northern Africa',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'جمهورية مصر العربية',
        common: 'مصر',
      },
      bre: {
        official: 'Republik arab Egipt',
        common: 'Egipt',
      },
      ces: {
        official: 'Egyptská arabská republika',
        common: 'Egypt',
      },
      cym: {
        official: 'Gweriniaeth Arabaidd yr Aifft',
        common: 'Yr Aifft',
      },
      deu: {
        official: 'Arabische Republik Ägypten',
        common: 'Ägypten',
      },
      est: {
        official: 'Egiptuse Araabia Vabariik',
        common: 'Egiptus',
      },
      fin: {
        official: 'Egyptin arabitasavalta',
        common: 'Egypti',
      },
      fra: {
        official: "République arabe d'Égypte",
        common: 'Égypte',
      },
      hrv: {
        official: 'Arapska Republika Egipat',
        common: 'Egipat',
      },
      hun: {
        official: 'Egyiptomi Arab Köztársaság',
        common: 'Egyiptom',
      },
      ita: {
        official: "Repubblica araba d'Egitto",
        common: 'Egitto',
      },
      jpn: {
        official: 'エジプト·アラブ共和国',
        common: 'エジプト',
      },
      kor: {
        official: '이집트 아랍 공화국',
        common: '이집트',
      },
      nld: {
        official: 'Arabische Republiek Egypte',
        common: 'Egypte',
      },
      per: {
        official: 'جمهوری عربی مصر',
        common: 'مصر',
      },
      pol: {
        official: 'Arabska Republika Egiptu',
        common: 'Egipt',
      },
      por: {
        official: 'República Árabe do Egipto',
        common: 'Egito',
      },
      rus: {
        official: 'Арабская Республика Египет',
        common: 'Египет',
      },
      slk: {
        official: 'Egyptská arabská republika',
        common: 'Egypt',
      },
      spa: {
        official: 'República Árabe de Egipto',
        common: 'Egipto',
      },
      srp: {
        official: 'Арапска Република Египат',
        common: 'Египат',
      },
      swe: {
        official: 'Arabrepubliken Egypten',
        common: 'Egypten',
      },
      tur: {
        official: 'Mısır Arap Cumhuriyeti',
        common: 'Mısır',
      },
      urd: {
        official: 'مصری عرب جمہوریہ',
        common: 'مصر',
      },
      zho: {
        official: '阿拉伯埃及共和国',
        common: '埃及',
      },
    },
    latlng: [27.0, 30.0],
    landlocked: false,
    borders: ['ISR', 'LBY', 'PSE', 'SDN'],
    area: 1002450.0,
    demonyms: {
      eng: {
        f: 'Egyptian',
        m: 'Egyptian',
      },
      fra: {
        f: 'Égyptienne',
        m: 'Égyptien',
      },
    },
    flag: '🇪🇬',
    maps: {
      googleMaps: 'https://goo.gl/maps/uoDRhXbsqjG6L7VG7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1473947',
    },
    population: 102334403,
    gini: {
      '2017': 31.5,
    },
    fifa: 'EGY',
    car: {
      signs: ['ET'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/eg.png',
      svg: 'https://flagcdn.com/eg.svg',
      alt: "The flag of Egypt is composed of three equal horizontal bands of red, white and black, with Egypt's national emblem — a hoist-side facing gold eagle of Saladin — centered in the white band.",
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/eg.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/eg.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [30.05, 31.25],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Senegal',
      official: 'Republic of Senegal',
      nativeName: {
        fra: {
          official: 'République du Sénégal',
          common: 'Sénégal',
        },
      },
    },
    tld: ['.sn'],
    cca2: 'SN',
    ccn3: '686',
    cca3: 'SEN',
    cioc: 'SEN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XOF: {
        name: 'West African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['21'],
    },
    capital: ['Dakar'],
    altSpellings: ['SN', 'Republic of Senegal', 'République du Sénégal'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية السنغال',
        common: 'السنغال',
      },
      bre: {
        official: 'Republik Senegal',
        common: 'Senegal',
      },
      ces: {
        official: 'Senegalská republika',
        common: 'Senegal',
      },
      cym: {
        official: 'Republic of Senegal',
        common: 'Senegal',
      },
      deu: {
        official: 'Republik Senegal',
        common: 'Senegal',
      },
      est: {
        official: 'Senegali Vabariik',
        common: 'Senegal',
      },
      fin: {
        official: 'Senegalin tasavalta',
        common: 'Senegal',
      },
      fra: {
        official: 'République du Sénégal',
        common: 'Sénégal',
      },
      hrv: {
        official: 'Republika Senegal',
        common: 'Senegal',
      },
      hun: {
        official: 'Szenegáli Köztársaság',
        common: 'Szenegál',
      },
      ita: {
        official: 'Repubblica del Senegal',
        common: 'Senegal',
      },
      jpn: {
        official: 'セネガル共和国',
        common: 'セネガル',
      },
      kor: {
        official: '세네갈 공화국',
        common: '세네갈',
      },
      nld: {
        official: 'Republiek Senegal',
        common: 'Senegal',
      },
      per: {
        official: 'جمهوری سنگال',
        common: 'سنگال',
      },
      pol: {
        official: 'Senegal',
        common: 'Senegal',
      },
      por: {
        official: 'República do Senegal',
        common: 'Senegal',
      },
      rus: {
        official: 'Республика Сенегал',
        common: 'Сенегал',
      },
      slk: {
        official: 'Senegalská republika',
        common: 'Senegal',
      },
      spa: {
        official: 'República de Senegal',
        common: 'Senegal',
      },
      srp: {
        official: 'Република Сенегал',
        common: 'Сенегал',
      },
      swe: {
        official: 'Republiken Senegal',
        common: 'Senegal',
      },
      tur: {
        official: 'Senegal Cumhuriyeti',
        common: 'Senegal',
      },
      urd: {
        official: 'جمہوریہ سینیگال',
        common: 'سینیگال',
      },
      zho: {
        official: '塞内加尔共和国',
        common: '塞内加尔',
      },
    },
    latlng: [14.0, -14.0],
    landlocked: false,
    borders: ['GMB', 'GIN', 'GNB', 'MLI', 'MRT'],
    area: 196722.0,
    demonyms: {
      eng: {
        f: 'Senegalese',
        m: 'Senegalese',
      },
      fra: {
        f: 'Sénégalaise',
        m: 'Sénégalais',
      },
    },
    flag: '🇸🇳',
    maps: {
      googleMaps: 'https://goo.gl/maps/o5f1uD5nyihCL3HCA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192775',
    },
    population: 16743930,
    gini: {
      '2011': 40.3,
    },
    fifa: 'SEN',
    car: {
      signs: ['SN'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/sn.png',
      svg: 'https://flagcdn.com/sn.svg',
      alt: 'The flag of Senegal is composed of three equal vertical bands of green, golden-yellow and red, with a five-pointed green star centered in the golden-yellow band.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [14.73, -17.63],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Sri Lanka',
      official: 'Democratic Socialist Republic of Sri Lanka',
      nativeName: {
        sin: {
          official: 'ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජය',
          common: 'ශ්‍රී ලංකාව',
        },
        tam: {
          official: 'இலங்கை சனநாயக சோசலிசக் குடியரசு',
          common: 'இலங்கை',
        },
      },
    },
    tld: ['.lk', '.இலங்கை', '.ලංකා'],
    cca2: 'LK',
    ccn3: '144',
    cca3: 'LKA',
    cioc: 'SRI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      LKR: {
        name: 'Sri Lankan rupee',
        symbol: 'Rs  රු',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['4'],
    },
    capital: ['Sri Jayawardenepura Kotte'],
    altSpellings: [
      'LK',
      'ilaṅkai',
      'Democratic Socialist Republic of Sri Lanka',
    ],
    region: 'Asia',
    subregion: 'Southern Asia',
    languages: {
      sin: 'Sinhala',
      tam: 'Tamil',
    },
    translations: {
      ara: {
        official: 'جمهورية سريلانكا الديمقراطية الشعبية',
        common: 'سريلانكا',
      },
      bre: {
        official: 'Republik Demokratel ha Sokialour Sri Lanka',
        common: 'Sri Lanka',
      },
      ces: {
        official: 'Srílanská demokratická socialistická republika',
        common: 'Srí Lanka',
      },
      cym: {
        official: 'Democratic Socialist Republic of Sri Lanka',
        common: 'Sri Lanka',
      },
      deu: {
        official: 'Demokratische Sozialistische Republik Sri Lanka',
        common: 'Sri Lanka',
      },
      est: {
        official: 'Sri Lanka Demokraatlik Sotsialistlik Vabariik',
        common: 'Sri Lanka',
      },
      fin: {
        official: 'Sri Lankan demokraattinen sosialistinen tasavalta',
        common: 'Sri Lanka',
      },
      fra: {
        official: 'République démocratique socialiste du Sri Lanka',
        common: 'Sri Lanka',
      },
      hrv: {
        official: 'Demokratska Socijalističke Republike Šri Lanke',
        common: 'Šri Lanka',
      },
      hun: {
        official: 'Srí Lanka-i Demokratikus Szocialista Köztársaság',
        common: 'Srí Lanka',
      },
      ita: {
        official: 'Repubblica democratica socialista dello Sri Lanka',
        common: 'Sri Lanka',
      },
      jpn: {
        official: 'スリランカ民主社会主義共和国',
        common: 'スリランカ',
      },
      kor: {
        official: '스리랑카 민주 사회주의 공화국',
        common: '스리랑카',
      },
      nld: {
        official: 'Democratische Socialistische Republiek Sri Lanka',
        common: 'Sri Lanka',
      },
      per: {
        official: 'جمهوری دموکراتیک سوسیالیستی سری‌لانکا',
        common: 'سری‌لانکا',
      },
      pol: {
        official: 'Demokratyczno-Socjalistyczna Republika Sri Lanki',
        common: 'Sri Lanka',
      },
      por: {
        official: 'República Democrática Socialista do Sri Lanka',
        common: 'Sri Lanka',
      },
      rus: {
        official: 'Демократическая Социалистическая Республика Шри-Ланка',
        common: 'Шри-Ланка',
      },
      slk: {
        official: 'Srílanská demokratická socialistická republika',
        common: 'Srí Lanka',
      },
      spa: {
        official: 'República Democrática Socialista de Sri Lanka',
        common: 'Sri Lanka',
      },
      srp: {
        official: 'Демократска Социјалистичка Република Сри Ланка',
        common: 'Сри Ланка',
      },
      swe: {
        official: 'Demokratiska socialistiska republiken Sri Lanka',
        common: 'Sri Lanka',
      },
      tur: {
        official: 'Sri Lanka Demokratik Sosyalist Cumhuriyeti',
        common: 'Sri Lanka',
      },
      urd: {
        official: 'جمہوری و اشتراکی جمہوریہ سری لنکا',
        common: 'سری لنکا',
      },
      zho: {
        official: '斯里兰卡民主社会主义共和国',
        common: '斯里兰卡',
      },
    },
    latlng: [7.0, 81.0],
    landlocked: false,
    borders: ['IND'],
    area: 65610.0,
    demonyms: {
      eng: {
        f: 'Sri Lankan',
        m: 'Sri Lankan',
      },
      fra: {
        f: 'Sri-lankaise',
        m: 'Sri-lankais',
      },
    },
    flag: '🇱🇰',
    maps: {
      googleMaps: 'https://goo.gl/maps/VkPHoeFSfgzRQCDv8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/536807',
    },
    population: 21919000,
    gini: {
      '2016': 39.3,
    },
    fifa: 'SRI',
    car: {
      signs: ['CL'],
      side: 'left',
    },
    timezones: ['UTC+05:30'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/lk.png',
      svg: 'https://flagcdn.com/lk.svg',
      alt: 'The flag of Sri Lanka features two large adjacent but separate rectangular areas, centered on a golden-yellow field. The smaller hoist-side rectangle is divided into two equal vertical bands of teal and orange, and the larger fly-side rectangle is maroon with a centered golden-yellow lion holding a Kastane sword in its right fore-paw and four golden-yellow Bo leaves, one in each corner.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/lk.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/lk.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [6.89, 79.9],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Palestine',
      official: 'State of Palestine',
      nativeName: {
        ara: {
          official: 'دولة فلسطين',
          common: 'فلسطين',
        },
      },
    },
    tld: ['.ps', 'فلسطين.'],
    cca2: 'PS',
    ccn3: '275',
    cca3: 'PSE',
    cioc: 'PLE',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EGP: {
        name: 'Egyptian pound',
        symbol: 'E£',
      },
      ILS: {
        name: 'Israeli new shekel',
        symbol: '₪',
      },
      JOD: {
        name: 'Jordanian dinar',
        symbol: 'JD',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['70'],
    },
    capital: ['Ramallah', 'Jerusalem'],
    altSpellings: [
      'PS',
      'Palestine, State of',
      'State of Palestine',
      'Dawlat Filasṭin',
    ],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'دولة فلسطين',
        common: 'فلسطين',
      },
      bre: {
        official: 'Stad Palestina',
        common: 'Palestina',
      },
      ces: {
        official: 'Stát Palestina',
        common: 'Palestina',
      },
      cym: {
        official: 'State of Palestine',
        common: 'Palestine',
      },
      deu: {
        official: 'Staat Palästina',
        common: 'Palästina',
      },
      est: {
        official: 'Palestiina Riik',
        common: 'Palestiina',
      },
      fin: {
        official: 'Palestiinan valtio',
        common: 'Palestiina',
      },
      fra: {
        official: 'État de Palestine',
        common: 'Palestine',
      },
      hrv: {
        official: 'State of Palestine',
        common: 'Palestina',
      },
      hun: {
        official: 'Palesztin Autonómia',
        common: 'Palesztina',
      },
      ita: {
        official: 'Stato di Palestina',
        common: 'Palestina',
      },
      jpn: {
        official: 'パレスチナ自治政府',
        common: 'パレスチナ',
      },
      kor: {
        official: '팔레스타인국',
        common: '팔레스타인',
      },
      nld: {
        official: 'Staat Palestina',
        common: 'Palestijnse gebieden',
      },
      per: {
        official: 'دولت فلسطین',
        common: 'فلسطین',
      },
      pol: {
        official: 'Państwo Palestyna',
        common: 'Palestyna',
      },
      por: {
        official: 'Estado da Palestina',
        common: 'Palestina',
      },
      rus: {
        official: 'Государство Палестина',
        common: 'Палестина',
      },
      slk: {
        official: 'Palestínsky štát',
        common: 'Palestína',
      },
      spa: {
        official: 'Estado de Palestina',
        common: 'Palestina',
      },
      srp: {
        official: 'Држава Палестина',
        common: 'Палестина',
      },
      swe: {
        official: 'Palestina',
        common: 'Palestina',
      },
      tur: {
        official: 'Filistin Devleti',
        common: 'Filistin',
      },
      urd: {
        official: 'ریاستِ فلسطین',
        common: 'فلسطین',
      },
      zho: {
        official: '巴勒斯坦国',
        common: '巴勒斯坦',
      },
    },
    latlng: [31.9, 35.2],
    landlocked: false,
    borders: ['ISR', 'EGY', 'JOR'],
    area: 6220.0,
    demonyms: {
      eng: {
        f: 'Palestinian',
        m: 'Palestinian',
      },
      fra: {
        f: 'Palestinienne',
        m: 'Palestinien',
      },
    },
    flag: '🇵🇸',
    maps: {
      googleMaps: 'https://goo.gl/maps/QvTbkRdmdWEoYAmt5',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1703814',
    },
    population: 4803269,
    gini: {
      '2016': 33.7,
    },
    fifa: 'PLE',
    car: {
      signs: ['PS'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/ps.png',
      svg: 'https://flagcdn.com/ps.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ps.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ps.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [31.9, 35.2],
    },
  },
  {
    name: {
      common: 'Bangladesh',
      official: "People's Republic of Bangladesh",
      nativeName: {
        ben: {
          official: 'বাংলাদেশ গণপ্রজাতন্ত্রী',
          common: 'বাংলাদেশ',
        },
      },
    },
    tld: ['.bd'],
    cca2: 'BD',
    ccn3: '050',
    cca3: 'BGD',
    cioc: 'BAN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BDT: {
        name: 'Bangladeshi taka',
        symbol: '৳',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['80'],
    },
    capital: ['Dhaka'],
    altSpellings: [
      'BD',
      "People's Republic of Bangladesh",
      'Gônôprôjatôntri Bangladesh',
    ],
    region: 'Asia',
    subregion: 'Southern Asia',
    languages: {
      ben: 'Bengali',
    },
    translations: {
      ara: {
        official: 'جمهورية بنغلاديش الشعبية',
        common: 'بنغلاديش',
      },
      bre: {
        official: 'Republik pobl Bangladesh',
        common: 'Bangladesh',
      },
      ces: {
        official: 'Bangladéšská lidová republika',
        common: 'Bangladéš',
      },
      cym: {
        official: 'Gweriniaeth Pobl Bangladesh',
        common: 'Bangladesh',
      },
      deu: {
        official: 'Volksrepublik Bangladesch',
        common: 'Bangladesch',
      },
      est: {
        official: 'Bangladeshi Rahvavabariik',
        common: 'Bangladesh',
      },
      fin: {
        official: 'Bangladeshin kansantasavalta',
        common: 'Bangladesh',
      },
      fra: {
        official: 'La République populaire du Bangladesh',
        common: 'Bangladesh',
      },
      hrv: {
        official: 'Narodna Republika Bangladeš',
        common: 'Bangladeš',
      },
      hun: {
        official: 'Banglades',
        common: 'Banglades',
      },
      ita: {
        official: 'Repubblica popolare del Bangladesh',
        common: 'Bangladesh',
      },
      jpn: {
        official: 'バングラデシュ人民共和国',
        common: 'バングラデシュ',
      },
      kor: {
        official: '방글라데시 인민 공화국',
        common: '방글라데시',
      },
      nld: {
        official: 'Volksrepubliek Bangladesh',
        common: 'Bangladesh',
      },
      per: {
        official: 'جمهوری خلق بنگلادش',
        common: 'بنگلادش',
      },
      pol: {
        official: 'Ludowa Republika Bangladeszu',
        common: 'Bangladesz',
      },
      por: {
        official: 'República Popular do Bangladesh',
        common: 'Bangladesh',
      },
      rus: {
        official: 'Народная Республика Бангладеш',
        common: 'Бангладеш',
      },
      slk: {
        official: 'Bangladéšska ľudová republika',
        common: 'Bangladéš',
      },
      spa: {
        official: 'República Popular de Bangladesh',
        common: 'Bangladesh',
      },
      srp: {
        official: 'Народна Република Бангладеш',
        common: 'Бангладеш',
      },
      swe: {
        official: 'Folkrepubliken Bangladesh',
        common: 'Bangladesh',
      },
      tur: {
        official: 'Bangladeş Halk Cumhuriyeti',
        common: 'Bangladeş',
      },
      urd: {
        official: 'عوامی جمہوریہ بنگلہ دیش',
        common: 'بنگلہ دیش',
      },
      zho: {
        official: '孟加拉人民共和国',
        common: '孟加拉国',
      },
    },
    latlng: [24.0, 90.0],
    landlocked: false,
    borders: ['MMR', 'IND'],
    area: 147570.0,
    demonyms: {
      eng: {
        f: 'Bangladeshi',
        m: 'Bangladeshi',
      },
      fra: {
        f: 'Bangladaise',
        m: 'Bangladais',
      },
    },
    flag: '🇧🇩',
    maps: {
      googleMaps: 'https://goo.gl/maps/op6gmLbHcvv6rLhH6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/184640',
    },
    population: 164689383,
    gini: {
      '2016': 32.4,
    },
    fifa: 'BAN',
    car: {
      signs: ['BD'],
      side: 'left',
    },
    timezones: ['UTC+06:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/bd.png',
      svg: 'https://flagcdn.com/bd.svg',
      alt: 'The flag of Bangladesh has a dark green field bearing a large red circle that is offset slightly towards the hoist side of center.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bd.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bd.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [23.72, 90.4],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Peru',
      official: 'Republic of Peru',
      nativeName: {
        aym: {
          official: 'Piruw Suyu',
          common: 'Piruw',
        },
        que: {
          official: 'Piruw Ripuwlika',
          common: 'Piruw',
        },
        spa: {
          official: 'República del Perú',
          common: 'Perú',
        },
      },
    },
    tld: ['.pe'],
    cca2: 'PE',
    ccn3: '604',
    cca3: 'PER',
    cioc: 'PER',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      PEN: {
        name: 'Peruvian sol',
        symbol: 'S/ ',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['1'],
    },
    capital: ['Lima'],
    altSpellings: ['PE', 'Republic of Peru', 'República del Perú'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      aym: 'Aymara',
      que: 'Quechua',
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية بيرو',
        common: 'بيرو',
      },
      bre: {
        official: 'Republik Perou',
        common: 'Perou',
      },
      ces: {
        official: 'Peruánská republika',
        common: 'Peru',
      },
      cym: {
        official: 'Republic of Peru',
        common: 'Peru',
      },
      deu: {
        official: 'Republik Peru',
        common: 'Peru',
      },
      est: {
        official: 'Peruu Vabariik',
        common: 'Peruu',
      },
      fin: {
        official: 'Perun tasavalta',
        common: 'Peru',
      },
      fra: {
        official: 'République du Pérou',
        common: 'Pérou',
      },
      hrv: {
        official: 'Republika Peru',
        common: 'Peru',
      },
      hun: {
        official: 'Perui Köztársaság',
        common: 'Peru',
      },
      ita: {
        official: 'Repubblica del Perù',
        common: 'Perù',
      },
      jpn: {
        official: 'ペルー共和国',
        common: 'ペルー',
      },
      kor: {
        official: '페루 공화국',
        common: '페루',
      },
      nld: {
        official: 'Republiek Peru',
        common: 'Peru',
      },
      per: {
        official: 'جمهوری پرو',
        common: 'پرو',
      },
      pol: {
        official: 'Republika Peru',
        common: 'Peru',
      },
      por: {
        official: 'República do Peru',
        common: 'Perú',
      },
      rus: {
        official: 'Республика Перу',
        common: 'Перу',
      },
      slk: {
        official: 'Peruánska republika',
        common: 'Peru',
      },
      spa: {
        official: 'República de Perú',
        common: 'Perú',
      },
      srp: {
        official: 'Република Перу',
        common: 'Перу',
      },
      swe: {
        official: 'Republiken Peru',
        common: 'Peru',
      },
      tur: {
        official: 'Peru Cumhuriyeti',
        common: 'Peru',
      },
      urd: {
        official: 'جمہوریہ پیرو',
        common: 'پیرو',
      },
      zho: {
        official: '秘鲁共和国',
        common: '秘鲁',
      },
    },
    latlng: [-10.0, -76.0],
    landlocked: false,
    borders: ['BOL', 'BRA', 'CHL', 'COL', 'ECU'],
    area: 1285216.0,
    demonyms: {
      eng: {
        f: 'Peruvian',
        m: 'Peruvian',
      },
      fra: {
        f: 'Péruvienne',
        m: 'Péruvien',
      },
    },
    flag: '🇵🇪',
    maps: {
      googleMaps: 'https://goo.gl/maps/uDWEUaXNcZTng1fP6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/288247',
    },
    population: 32971846,
    gini: {
      '2019': 41.5,
    },
    fifa: 'PER',
    car: {
      signs: ['PE'],
      side: 'right',
    },
    timezones: ['UTC-05:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/pe.png',
      svg: 'https://flagcdn.com/pe.svg',
      alt: 'The flag of Peru is composed of three equal vertical bands of red, white and red, with the national emblem centered in the white band.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/pe.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/pe.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-12.05, -77.05],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Singapore',
      official: 'Republic of Singapore',
      nativeName: {
        eng: {
          official: 'Republic of Singapore',
          common: 'Singapore',
        },
        zho: {
          official: '新加坡共和国',
          common: '新加坡',
        },
        msa: {
          official: 'Republik Singapura',
          common: 'Singapura',
        },
        tam: {
          official: 'சிங்கப்பூர் குடியரசு',
          common: 'சிங்கப்பூர்',
        },
      },
    },
    tld: ['.sg', '.新加坡', '.சிங்கப்பூர்'],
    cca2: 'SG',
    ccn3: '702',
    cca3: 'SGP',
    cioc: 'SGP',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SGD: {
        name: 'Singapore dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['5'],
    },
    capital: ['Singapore'],
    altSpellings: ['SG', 'Singapura', 'Republik Singapura', '新加坡共和国'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      eng: 'English',
      zho: 'Chinese',
      msa: 'Malay',
      tam: 'Tamil',
    },
    translations: {
      ara: {
        official: 'جمهورية سنغافورة',
        common: 'سنغافورة',
      },
      bre: {
        official: 'Republik Singapour',
        common: 'Singapour',
      },
      ces: {
        official: 'Singapurská republika',
        common: 'Singapur',
      },
      cym: {
        official: 'Republic of Singapore',
        common: 'Singapore',
      },
      deu: {
        official: 'Republik Singapur',
        common: 'Singapur',
      },
      est: {
        official: 'Singapuri Vabariik',
        common: 'Singapur',
      },
      fin: {
        official: 'Singaporen tasavalta',
        common: 'Singapore',
      },
      fra: {
        official: 'République de Singapour',
        common: 'Singapour',
      },
      hrv: {
        official: 'Republika Singapur',
        common: 'Singapur',
      },
      hun: {
        official: 'Szingapúri Köztársaság',
        common: 'Szingapúr',
      },
      ita: {
        official: 'Repubblica di Singapore',
        common: 'Singapore',
      },
      jpn: {
        official: 'シンガポール共和国',
        common: 'シンガポール',
      },
      kor: {
        official: '싱가포르 공화국',
        common: '싱가포르',
      },
      nld: {
        official: 'Republiek Singapore',
        common: 'Singapore',
      },
      per: {
        official: 'جمهوری سنگاپور',
        common: 'سنگاپور',
      },
      pol: {
        official: 'Republika Singapuru',
        common: 'Singapur',
      },
      por: {
        official: 'República de Singapura',
        common: 'Singapura',
      },
      rus: {
        official: 'Республика Сингапур',
        common: 'Сингапур',
      },
      slk: {
        official: 'Singapurská republika',
        common: 'Singapur',
      },
      spa: {
        official: 'República de Singapur',
        common: 'Singapur',
      },
      srp: {
        official: 'Република Сингапур',
        common: 'Сингапур',
      },
      swe: {
        official: 'Republiken Singapore',
        common: 'Singapore',
      },
      tur: {
        official: 'Singapur Cumhuriyeti',
        common: 'Singapur',
      },
      urd: {
        official: 'جمہوریہ سنگاپور',
        common: 'سنگاپور',
      },
    },
    latlng: [1.36666666, 103.8],
    landlocked: false,
    area: 710.0,
    demonyms: {
      eng: {
        f: 'Singaporean',
        m: 'Singaporean',
      },
      fra: {
        f: 'Singapourienne',
        m: 'Singapourien',
      },
    },
    flag: '🇸🇬',
    maps: {
      googleMaps: 'https://goo.gl/maps/QbQt9Y9b5KFzsahV6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/536780',
    },
    population: 5685807,
    fifa: 'SIN',
    car: {
      signs: ['SGP'],
      side: 'left',
    },
    timezones: ['UTC+08:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/sg.png',
      svg: 'https://flagcdn.com/sg.svg',
      alt: 'The flag of Singapore is composed of two equal horizontal bands of red and white. On the hoist side of the red band is a fly-side facing white crescent which partially encloses five small five-pointed white stars arranged in the shape of a pentagon.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sg.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sg.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [1.28, 103.85],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Turkey',
      official: 'Republic of Turkey',
      nativeName: {
        tur: {
          official: 'Türkiye Cumhuriyeti',
          common: 'Türkiye',
        },
      },
    },
    tld: ['.tr'],
    cca2: 'TR',
    ccn3: '792',
    cca3: 'TUR',
    cioc: 'TUR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      TRY: {
        name: 'Turkish lira',
        symbol: '₺',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['0'],
    },
    capital: ['Ankara'],
    altSpellings: [
      'TR',
      'Turkiye',
      'Republic of Turkey',
      'Türkiye Cumhuriyeti',
    ],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      tur: 'Turkish',
    },
    translations: {
      ara: {
        official: 'الجمهورية التركية',
        common: 'تركيا',
      },
      bre: {
        official: 'Republik Turkia',
        common: 'Turkia',
      },
      ces: {
        official: 'Turecká republika',
        common: 'Turecko',
      },
      cym: {
        official: 'Republic of Turkey',
        common: 'Turkey',
      },
      deu: {
        official: 'Republik Türkei',
        common: 'Türkei',
      },
      est: {
        official: 'Türgi Vabariik',
        common: 'Türgi',
      },
      fin: {
        official: 'Turkin tasavalta',
        common: 'Turkki',
      },
      fra: {
        official: 'République de Turquie',
        common: 'Turquie',
      },
      hrv: {
        official: 'Republika Turska',
        common: 'Turska',
      },
      hun: {
        official: 'Török Köztársaság',
        common: 'Törökország',
      },
      ita: {
        official: 'Repubblica di Turchia',
        common: 'Turchia',
      },
      jpn: {
        official: 'トルコ共和国',
        common: 'トルコ',
      },
      kor: {
        official: '터키 공화국',
        common: '터키',
      },
      nld: {
        official: 'Republiek Turkije',
        common: 'Turkije',
      },
      per: {
        official: 'جمهوری ترکیه',
        common: 'ترکیه',
      },
      pol: {
        official: 'Republika Turcji',
        common: 'Turcja',
      },
      por: {
        official: 'República da Turquia',
        common: 'Turquia',
      },
      rus: {
        official: 'Республика Турции',
        common: 'Турция',
      },
      slk: {
        official: 'Turecká republika',
        common: 'Turecko',
      },
      spa: {
        official: 'República de Turquía',
        common: 'Turquía',
      },
      srp: {
        official: 'Турска Република',
        common: 'Турска',
      },
      swe: {
        official: 'Republiken Turkiet',
        common: 'Turkiet',
      },
      tur: {
        official: 'Türkiye Cumhuriyeti',
        common: 'Türkiye',
      },
      urd: {
        official: 'جمہوریہ ترکی',
        common: 'ترکی',
      },
      zho: {
        official: '土耳其共和国',
        common: '土耳其',
      },
    },
    latlng: [39.0, 35.0],
    landlocked: false,
    borders: ['ARM', 'AZE', 'BGR', 'GEO', 'GRC', 'IRN', 'IRQ', 'SYR'],
    area: 783562.0,
    demonyms: {
      eng: {
        f: 'Turkish',
        m: 'Turkish',
      },
      fra: {
        f: 'Turque',
        m: 'Turc',
      },
    },
    flag: '🇹🇷',
    maps: {
      googleMaps: 'https://goo.gl/maps/dXFFraiUDfcB6Quk6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/174737',
    },
    population: 84339067,
    gini: {
      '2019': 41.9,
    },
    fifa: 'TUR',
    car: {
      signs: ['TR'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Europe', 'Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/tr.png',
      svg: 'https://flagcdn.com/tr.svg',
      alt: 'The flag of Turkey has a red field bearing a large fly-side facing white crescent and a smaller five-pointed white star placed just outside the crescent opening. The white crescent and star are offset slightly towards the hoist side of center.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tr.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tr.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [39.93, 32.87],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
];

export default data;
