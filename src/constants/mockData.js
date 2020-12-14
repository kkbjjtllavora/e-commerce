import {
    BADGE_GREEN,
    BADGE_BLUE,
    BADGE_ORANGE,
    BADGE_RED,
} from '../components/common/Badge';

const mockData = [
    {
        id: 1,
        asciiFace: '( ͡° ͜ʖ ͡°)',
        title: 'Haroon',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Sun Nov 1 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 2,
        asciiFace: '¯_(ツ)_/¯',
        title: 'Frazer',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Wed Nov 4 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 3,
        asciiFace: "̿̿ ̿̿ ̿̿ ̿'̿'̵͇̿̿з= ( ▀ ͜͞ʖ▀) =ε ̿̿",
        title: 'Farhan',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Thu Nov 5 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 4,
        asciiFace: '▄︻̷̿┻̿═━一',
        title: 'George',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Fri Nov 6 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 5,
        asciiFace: '( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)',
        title: 'Mohamed',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Mon Nov 9 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 6,
        asciiFace: 'ʕ•ᴥ•ʔ',
        title: 'Ismail',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Tue Nov 10 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 7,
        asciiFace: '(▀̿Ĺ̯▀̿ ̿)',
        title: 'Carl',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Nov 11 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 8,
        asciiFace: '(ง ͠° ͟ل͜ ͡°)ง',
        title: 'Lawrence',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Nov 12 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 9,
        asciiFace: '༼ つ ◕_◕ ༽つ',
        title: 'Gerald',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Tue Nov 17 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 10,
        asciiFace: 'ಠ_ಠ',
        title: 'Umar',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Fri Nov 20 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 11,
        asciiFace: '(づ｡◕‿‿◕｡)づ',
        title: 'Stephen',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Sat Nov 21 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 12,
        asciiFace: '[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]',
        title: 'Harris',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Sun Nov 22 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 13,
        asciiFace: '┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴',
        title: 'Maxim',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Mon Nov 23 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 14,
        asciiFace: '( ͡°╭͜ʖ╮͡° )',
        title: 'Jac',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Tue Nov 24 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 15,
        asciiFace: '(͡ ͡° ͜ つ ͡͡°)',
        title: 'Sienna',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Nov 25 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 16,
        asciiFace: '(• ε •)',
        title: 'Samuel',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Nov 26 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 17,
        asciiFace: '(ง-́)ง',
        title: 'Ted',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Sun Nov 29 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 18,
        asciiFace: '(ಥ﹏ಥ)',
        title: 'Hasan',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Tue Dec 1 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 19,
        asciiFace: "﴾͡๏̯͡๏﴿ O'RLY?",
        title: 'Aoife',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Dec 2 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 20,
        asciiFace: '(ノಠ益ಠ)ノ彡┻━┻',
        title: 'Ashley',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Dec 3 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 21,
        asciiFace: '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]',
        title: 'Yahya',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Fri Dec 4 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 22,
        asciiFace: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
        title: 'Andre',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Sun Dec 6 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 23,
        asciiFace: '(☞ﾟ∀ﾟ)☞',
        title: 'Joel',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Dec 9 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 24,
        asciiFace: '| (• ◡•)| (❍ᴥ❍ʋ)',
        title: 'Mitchell',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Dec 10 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 25,
        asciiFace: '(◕‿◕✿)',
        title: 'Yasin',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Sun Nov 1 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 26,
        asciiFace: '(ᵔᴥᵔ)',
        title: 'Jake',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Wed Nov 4 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 27,
        asciiFace: '(¬‿¬)',
        title: 'Adil',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Thu Nov 5 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 28,
        asciiFace: '(☞ﾟヮﾟ)☞ ☜',
        title: 'Rhys',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Fri Nov 6 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 29,
        asciiFace: '(づ￣ ³￣)づ',
        title: 'Charles',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Mon Nov 9 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 30,
        asciiFace: 'ლ(ಠ益ಠლ)',
        title: 'Euan',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Tue Nov 10 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 31,
        asciiFace: 'ಠ╭╮ಠ',
        title: 'Harold',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Nov 11 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 32,
        asciiFace: '/╲/╭( ͡° ͡° ͜ʖ ͡° ͡°',
        title: 'Aiden',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Nov 12 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 33,
        asciiFace: '(;´༎ຶД༎ຶ`)',
        title: 'Aron',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Tue Nov 17 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 34,
        asciiFace: '♪~ ᕕ(ᐛ)ᕗ',
        title: 'Jace',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Fri Nov 20 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 35,
        asciiFace: '♥‿♥',
        title: 'Curtis',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Mon Nov 2 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 36,
        asciiFace: '༼ つ  ͡° ͜ʖ ͡° ༽つ',
        title: 'Ibrahim',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Tue Nov 3 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 37,
        asciiFace: '༼ つ ಥ_ಥ ༽つ',
        title: 'Sam',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Thu Nov 5 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 38,
        asciiFace: '(╯°□°）╯︵ ┻━┻',
        title: 'Grover',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Sat Nov 8 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 39,
        asciiFace: '( ͡ᵔ ͜ʖ ͡ᵔ )',
        title: 'Alec',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Mon Nov 9 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 40,
        asciiFace: '(▀̿Ĺ̯▀̿ ̿)',
        title: 'Health & Lifestyle',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Tue Nov 10 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 41,
        asciiFace: 'ヾ(⌐■_■)ノ♪',
        title: 'Frederick ',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Wed Nov 11 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 42,
        asciiFace: '~(˘▾˘~)',
        title: 'Daniel',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Sat Nov 14 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 43,
        asciiFace: '◉_◉',
        title: 'Nora',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Sun Nov 15 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 44,
        asciiFace: '(•◡•) /',
        title: 'Jean',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Mon Nov 16 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 45,
        asciiFace: '(~˘▾˘)~',
        title: 'Kenneth',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Wed Nov 18 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 46,
        asciiFace: 'ᕙ(⇀‸↼‶)ᕗ',
        title: 'Zachary',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Mon Nov 23 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 47,
        asciiFace: 'ᕦ(ò_óˇ)ᕤ',
        title: 'Franky',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Thu Nov 26 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 48,
        asciiFace: '⚆ _ ⚆',
        title: 'Ricky',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Sat Nov 28 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 49,
        asciiFace: '(｡◕‿‿◕｡)',
        title: 'Eddie',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Sun Nov 29 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 50,
        asciiFace: 'ಥ_ಥ',
        title: 'Solomon',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Tue Dec 1 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 51,
        asciiFace: '（╯°□°）╯︵( .o.)',
        title: 'Vincent',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Dec 2 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 52,
        asciiFace: '(っ˘ڡ˘ς)',
        title: 'Nicolas',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Dec 3 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 53,
        asciiFace: 'ಠ⌣ಠ',
        title: 'Andres',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Sat Dec 5 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 54,
        asciiFace: 'ლ(´ڡ`ლ)',
        title: 'Morgan',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Tue Dec 8 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 55,
        asciiFace: '( ಠ ͜ʖರೃ)',
        title: 'Lloyd',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Dec 9 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 56,
        asciiFace: '( ಠ ͜ʖರೃ)',
        title: 'Ernest',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Dec 10 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 57,
        asciiFace: '╚(ಠ_ಠ)=┐',
        title: 'Carlos',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Fri Dec 11 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 58,
        asciiFace: '(─‿‿─)',
        title: 'Austin',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Sun Dec 13 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 59,
        asciiFace: 'ლ,ᔑ•ﺪ͟͠•ᔐ.ლ',
        title: 'Stella',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Mon Dec 14 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 60,
        asciiFace: '(´・ω・`)',
        title: 'Phillip',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Sat Nov 28 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 61,
        asciiFace: '┬─┬ノ( º _ ºノ)',
        title: 'Herbert',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Sun Nov 29 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 62,
        asciiFace: '٩◔̯◔۶',
        title: 'Dominic',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Wed Dec 2 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 63,
        asciiFace: '≧☉_☉≦',
        title: 'Steve',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Fri Dec 4 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 64,
        asciiFace: '〆(・∀・＠)',
        title: 'Hamzah',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Tue Dec 8 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 65,
        asciiFace: '〆(・∀・＠)',
        title: 'Yusuf',
        description:
            'Improve your communication skills and have better conversations.',
        badgeColor: BADGE_GREEN,
        createdAt: 'Wed Dec 9 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 66,
        asciiFace: '(/) (°,,°) (/)',
        title: 'Joss',
        description:
            'Our most popular material. New lessons added every day based on current events.',
        badgeColor: BADGE_BLUE,
        createdAt: 'Wed Dec 10 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '500.00',
    },
    {
        id: 67,
        asciiFace: '=U',
        title: 'Zak',
        description:
            'Increase your vocabulary and speaking skills by describing pictures.',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Sat Dec 12 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
    {
        id: 68,
        asciiFace: '(･.◤)',
        title: 'Marty',
        description:
            'Learn health-related vocabulary and expressions health-related issues',
        badgeColor: BADGE_RED,
        createdAt: 'Sun Dec 13 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '400.00',
    },
];

export default mockData;
