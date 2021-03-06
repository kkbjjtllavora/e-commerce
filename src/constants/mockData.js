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
        badgeColor: BADGE_GREEN,
        createdAt: 'Sun Nov 1 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '3.25',
    },
    {
        id: 2,
        asciiFace: '¯_(ツ)_/¯',
        title: 'Frazer',
        badgeColor: BADGE_BLUE,
        createdAt: 'Wed Nov 4 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.30',
    },
    {
        id: 3,
        asciiFace: "̿̿ ̿̿ ̿̿ ̿'̿'̵͇̿̿з= ( ▀ ͜͞ʖ▀) =ε ̿̿",
        title: 'Farhan',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Thu Nov 5 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '5.52',
    },
    {
        id: 4,
        asciiFace: '▄︻̷̿┻̿═━一',
        title: 'George',
        badgeColor: BADGE_RED,
        createdAt: 'Fri Nov 6 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.52',
    },
    {
        id: 5,
        asciiFace: '( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)',
        title: 'Mohamed',
        badgeColor: BADGE_GREEN,
        createdAt: 'Mon Nov 9 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.26',
    },
    {
        id: 6,
        asciiFace: 'ʕ•ᴥ•ʔ',
        title: 'Ismail',
        badgeColor: BADGE_BLUE,
        createdAt: 'Tue Nov 10 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '6.25',
    },
    {
        id: 7,
        asciiFace: '(▀̿Ĺ̯▀̿ ̿)',
        title: 'Carl',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Nov 11 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '7.85',
    },
    {
        id: 8,
        asciiFace: '(ง ͠° ͟ل͜ ͡°)ง',
        title: 'Lawrence',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Nov 12 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '1.25',
    },
    {
        id: 9,
        asciiFace: '༼ つ ◕_◕ ༽つ',
        title: 'Gerald',
        badgeColor: BADGE_GREEN,
        createdAt: 'Tue Nov 17 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '8.52',
    },
    {
        id: 10,
        asciiFace: 'ಠ_ಠ',
        title: 'Umar',
        badgeColor: BADGE_BLUE,
        createdAt: 'Fri Nov 20 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '9.25',
    },
    {
        id: 11,
        asciiFace: '(づ｡◕‿‿◕｡)づ',
        title: 'Stephen',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Sat Nov 21 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.20',
    },
    {
        id: 12,
        asciiFace: '[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]',
        title: 'Harris',
        badgeColor: BADGE_RED,
        createdAt: 'Sun Nov 22 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '5.25',
    },
    {
        id: 13,
        asciiFace: '┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴',
        title: 'Maxim',
        badgeColor: BADGE_GREEN,
        createdAt: 'Mon Nov 23 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '6.25',
    },
    {
        id: 14,
        asciiFace: '( ͡°╭͜ʖ╮͡° )',
        title: 'Jac',
        badgeColor: BADGE_BLUE,
        createdAt: 'Tue Nov 24 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '1.63',
    },
    {
        id: 15,
        asciiFace: '(͡ ͡° ͜ つ ͡͡°)',
        title: 'Sienna',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Nov 25 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '5.23',
    },
    {
        id: 16,
        asciiFace: '(• ε •)',
        title: 'Samuel',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Nov 26 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.36',
    },
    {
        id: 17,
        asciiFace: '(ง-́)ง',
        title: 'Ted',
        badgeColor: BADGE_GREEN,
        createdAt: 'Sun Nov 29 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '7.25',
    },
    {
        id: 18,
        asciiFace: '(ಥ﹏ಥ)',
        title: 'Hasan',
        badgeColor: BADGE_BLUE,
        createdAt: 'Tue Dec 1 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '6.35',
    },
    {
        id: 19,
        asciiFace: "﴾͡๏̯͡๏﴿ O'RLY?",
        title: 'Aoife',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Dec 2 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '1.25',
    },
    {
        id: 20,
        asciiFace: '(ノಠ益ಠ)ノ彡┻━┻',
        title: 'Ashley',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Dec 3 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '3.69',
    },
    {
        id: 21,
        asciiFace: '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]',
        title: 'Yahya',
        badgeColor: BADGE_GREEN,
        createdAt: 'Fri Dec 4 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '8.52',
    },
    {
        id: 22,
        asciiFace: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
        title: 'Andre',
        badgeColor: BADGE_BLUE,
        createdAt: 'Sun Dec 6 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '5.63',
    },
    {
        id: 23,
        asciiFace: '(☞ﾟ∀ﾟ)☞',
        title: 'Joel',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Dec 9 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '7.56',
    },
    {
        id: 24,
        asciiFace: '| (• ◡•)| (❍ᴥ❍ʋ)',
        title: 'Mitchell',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Dec 10 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '8.25',
    },
    {
        id: 25,
        asciiFace: '(◕‿◕✿)',
        title: 'Yasin',
        badgeColor: BADGE_GREEN,
        createdAt: 'Sun Nov 1 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '9.23',
    },
    {
        id: 26,
        asciiFace: '(ᵔᴥᵔ)',
        title: 'Jake',
        badgeColor: BADGE_BLUE,
        createdAt: 'Wed Nov 4 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '2.03',
    },
    {
        id: 27,
        asciiFace: '(¬‿¬)',
        title: 'Adil',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Thu Nov 5 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.58',
    },
    {
        id: 28,
        asciiFace: '(☞ﾟヮﾟ)☞ ☜',
        title: 'Rhys',
        badgeColor: BADGE_RED,
        createdAt: 'Fri Nov 6 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '6.25',
    },
    {
        id: 29,
        asciiFace: '(づ￣ ³￣)づ',
        title: 'Charles',
        badgeColor: BADGE_GREEN,
        createdAt: 'Mon Nov 9 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '7.58',
    },
    {
        id: 30,
        asciiFace: 'ლ(ಠ益ಠლ)',
        title: 'Euan',
        badgeColor: BADGE_BLUE,
        createdAt: 'Tue Nov 10 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '7.56',
    },
    {
        id: 31,
        asciiFace: 'ಠ╭╮ಠ',
        title: 'Harold',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Nov 11 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '9.36',
    },
    {
        id: 32,
        asciiFace: '/╲/╭( ͡° ͡° ͜ʖ ͡° ͡°',
        title: 'Aiden',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Nov 12 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.58',
    },
    {
        id: 33,
        asciiFace: '(;´༎ຶД༎ຶ`)',
        title: 'Aron',
        badgeColor: BADGE_GREEN,
        createdAt: 'Tue Nov 17 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '1.25',
    },
    {
        id: 34,
        asciiFace: '♪~ ᕕ(ᐛ)ᕗ',
        title: 'Jace',
        badgeColor: BADGE_BLUE,
        createdAt: 'Fri Nov 20 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '8.85',
    },
    {
        id: 35,
        asciiFace: '♥‿♥',
        title: 'Curtis',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Mon Nov 2 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '9.99',
    },
    {
        id: 36,
        asciiFace: '༼ つ  ͡° ͜ʖ ͡° ༽つ',
        title: 'Ibrahim',
        badgeColor: BADGE_RED,
        createdAt: 'Tue Nov 3 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '7.58',
    },
    {
        id: 37,
        asciiFace: '༼ つ ಥ_ಥ ༽つ',
        title: 'Sam',
        badgeColor: BADGE_GREEN,
        createdAt: 'Thu Nov 5 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '300.00',
    },
    {
        id: 38,
        asciiFace: '(╯°□°）╯︵ ┻━┻',
        title: 'Grover',
        badgeColor: BADGE_BLUE,
        createdAt: 'Sat Nov 8 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '5.55',
    },
    {
        id: 39,
        asciiFace: '( ͡ᵔ ͜ʖ ͡ᵔ )',
        title: 'Alec',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Mon Nov 9 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '6.25',
    },
    {
        id: 40,
        asciiFace: '(▀̿Ĺ̯▀̿ ̿)',
        title: 'Health & Lifestyle',
        badgeColor: BADGE_RED,
        createdAt: 'Tue Nov 10 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '7.45',
    },
    {
        id: 41,
        asciiFace: 'ヾ(⌐■_■)ノ♪',
        title: 'Frederick ',
        badgeColor: BADGE_GREEN,
        createdAt: 'Wed Nov 11 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '7.85',
    },
    {
        id: 42,
        asciiFace: '~(˘▾˘~)',
        title: 'Daniel',
        badgeColor: BADGE_BLUE,
        createdAt: 'Sat Nov 14 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '9.65',
    },
    {
        id: 43,
        asciiFace: '◉_◉',
        title: 'Nora',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Sun Nov 15 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '6.23',
    },
    {
        id: 44,
        asciiFace: '(•◡•) /',
        title: 'Jean',
        badgeColor: BADGE_RED,
        createdAt: 'Mon Nov 16 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '8.25',
    },
    {
        id: 45,
        asciiFace: '(~˘▾˘)~',
        title: 'Kenneth',
        badgeColor: BADGE_GREEN,
        createdAt: 'Wed Nov 18 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '3.36',
    },
    {
        id: 46,
        asciiFace: 'ᕙ(⇀‸↼‶)ᕗ',
        title: 'Zachary',
        badgeColor: BADGE_BLUE,
        createdAt: 'Mon Nov 23 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '6.89',
    },
    {
        id: 47,
        asciiFace: 'ᕦ(ò_óˇ)ᕤ',
        title: 'Franky',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Thu Nov 26 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '7.85',
    },
    {
        id: 48,
        asciiFace: '⚆ _ ⚆',
        title: 'Ricky',
        badgeColor: BADGE_RED,
        createdAt: 'Sat Nov 28 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.25',
    },
    {
        id: 49,
        asciiFace: '(｡◕‿‿◕｡)',
        title: 'Eddie',
        badgeColor: BADGE_GREEN,
        createdAt: 'Sun Nov 29 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '1.25',
    },
    {
        id: 50,
        asciiFace: 'ಥ_ಥ',
        title: 'Solomon',
        badgeColor: BADGE_BLUE,
        createdAt: 'Tue Dec 1 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '6.23',
    },
    {
        id: 51,
        asciiFace: '（╯°□°）╯︵( .o.)',
        title: 'Vincent',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Dec 2 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '8.25',
    },
    {
        id: 52,
        asciiFace: '(っ˘ڡ˘ς)',
        title: 'Nicolas',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Dec 3 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '6.23',
    },
    {
        id: 53,
        asciiFace: 'ಠ⌣ಠ',
        title: 'Andres',
        badgeColor: BADGE_GREEN,
        createdAt: 'Sat Dec 5 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.25',
    },
    {
        id: 54,
        asciiFace: 'ლ(´ڡ`ლ)',
        title: 'Morgan',
        badgeColor: BADGE_BLUE,
        createdAt: 'Tue Dec 8 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '1.25',
    },
    {
        id: 55,
        asciiFace: '( ಠ ͜ʖರೃ)',
        title: 'Lloyd',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Wed Dec 9 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '2.58',
    },
    {
        id: 56,
        asciiFace: '( ಠ ͜ʖರೃ)',
        title: 'Ernest',
        badgeColor: BADGE_RED,
        createdAt: 'Thu Dec 10 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.55',
    },
    {
        id: 57,
        asciiFace: '╚(ಠ_ಠ)=┐',
        title: 'Carlos',
        badgeColor: BADGE_GREEN,
        createdAt: 'Fri Dec 11 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '3.36',
    },
    {
        id: 58,
        asciiFace: '(─‿‿─)',
        title: 'Austin',
        badgeColor: BADGE_BLUE,
        createdAt: 'Sun Dec 13 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '3.56',
    },
    {
        id: 59,
        asciiFace: 'ლ,ᔑ•ﺪ͟͠•ᔐ.ლ',
        title: 'Stella',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Mon Dec 14 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '7.58',
    },
    {
        id: 60,
        asciiFace: '(´・ω・`)',
        title: 'Phillip',
        badgeColor: BADGE_RED,
        createdAt: 'Sat Nov 28 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.25',
    },
    {
        id: 61,
        asciiFace: '┬─┬ノ( º _ ºノ)',
        title: 'Herbert',
        badgeColor: BADGE_GREEN,
        createdAt: 'Sun Nov 29 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.25',
    },
    {
        id: 62,
        asciiFace: '٩◔̯◔۶',
        title: 'Dominic',
        badgeColor: BADGE_BLUE,
        createdAt: 'Wed Dec 2 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '6.36',
    },
    {
        id: 63,
        asciiFace: '≧☉_☉≦',
        title: 'Steve',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Fri Dec 4 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.58',
    },
    {
        id: 64,
        asciiFace: '〆(・∀・＠)',
        title: 'Hamzah',
        badgeColor: BADGE_RED,
        createdAt: 'Tue Dec 8 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '1.25',
    },
    {
        id: 65,
        asciiFace: '〆(・∀・＠)',
        title: 'Yusuf',
        badgeColor: BADGE_GREEN,
        createdAt: 'Wed Dec 9 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '8.56',
    },
    {
        id: 66,
        asciiFace: '(/) (°,,°) (/)',
        title: 'Joss',
        badgeColor: BADGE_BLUE,
        createdAt: 'Wed Dec 10 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '2.30',
    },
    {
        id: 67,
        asciiFace: '=U',
        title: 'Zak',
        badgeColor: BADGE_ORANGE,
        createdAt: 'Sat Dec 12 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '4.52',
    },
    {
        id: 68,
        asciiFace: '(･.◤)',
        title: 'Marty',
        badgeColor: BADGE_RED,
        createdAt: 'Sun Dec 13 2020 07:07:13 GMT+0800 (Taipei Standard Time)',
        price: '5.23',
    },
];

export default mockData;
