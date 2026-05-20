import { createI18n } from 'vue-i18n'

const messages = {
    ru: {
        heroTitle1: 'Не знаешь реальную цену скина?',
        heroTitle2: 'обновляет рынок каждые 10 минут.',
        heroDesc: 'Актуальные цены, графики и аналитика рынка CS2 в реальном времени',

        updatePrices: 'Обновление цен каждые 10 минут',
        platforms: '100+ площадок и источников',
        analytics: 'Точные данные и аналитика',
        history: 'История цен и тренды',

        loading: 'Загрузка скинов...',
        marketSummary: 'Рыночная сводка',
        marketVolume: 'Общий объем рынка',

        activeSkins: 'Активных скинов на продаже',
        tracked: 'Отслеживается',

        todayUpdates: 'Обновлений сегодня',
        lastUpdate: 'Последнее обновление 2 мин. назад',

        platformsTitle: 'Площадки',
        dataSources: 'Источников данных',

        accurateData: 'Точные данные',
        accurateDataDesc: 'Собираем цены с 100+ площадок и источников',

        fastUpdates: 'Частое обновление',
        fastUpdatesDesc: 'Цена обновляется каждые 10 минут',

        chartsAnalytics: 'Графики и аналитика',
        chartsAnalyticsDesc: 'История цен, тренды и рыночные индикаторы',

        notifications: 'Уведомления',
        notificationsDesc: 'Настраивайте оповещения о изменении цен',
        footerMarket: 'МАРКЕТ',
        footerHelp: 'ПОМОЩЬ',
        footerUseful: 'ПОЛЕЗНОЕ',

        sellSkins: 'Продать скины CS2',
        buySkins: 'Купить скины CS2',
        tradeSkins: 'Обменять скины CS2',

        faq: 'FAQ',
        sellAll: 'Как продать все скины CS2 в стиме сразу',
        howItWorks: 'Как это работает',
        guarantees: 'Гарантии',
        contacts: 'Контакты',

        blog: 'Блог',
        reviews: 'Отзывы о нас',
        agreement: 'Пользовательское соглашение',
        privacy: 'Политика конфиденциальности',
        api: 'API',

        footerDesc: 'Актуальные цены, графики и аналитика рынка CS2 в реальном времени',

        footerCompany: 'Веб-сайт SkinTick управляется компанией Ин-Гейм Солюшн ПТЕ, ЛТД.',

        footerRights: '© 2017-2026 SkinTick, все права защищены',
        footerRights2: 'Powered by Steam. Not affiliated with Valve Corp.',
        headerSkins: 'Скины',
        headerAnalytics: 'Аналитика',
        headerGuarantees: 'Гарантии',
        headerFaq: 'FAQ',

        searchPlaceholder: 'Поиск скина...',

        login: 'Войти',
        register: 'Регистрация',
        skinsBadge: 'SKINTICK / СКИНЫ',
        skinsTitle: 'Каталог скинов CS2',
        skinsDesc: 'Отслеживайте актуальные цены, тренды и динамику рынка в реальном времени.',

        searchSkin: 'Поиск скина...',

        all: 'Все',
        rifles: 'Винтовки',
        pistols: 'Пистолеты',
        snipers: 'Снайперские',
        shotguns: 'Дробовики и ПП',

        sortPopular: 'По популярности',
        sortExpensive: 'Цена: дорогие',
        sortCheap: 'Цена: дешёвые',
        sortGrowth: 'По росту цены',

        buyLink: 'Перейти к покупке',
        analyticsBadge: 'LIVE MARKET ANALYTICS / ЖИВАЯ АНАЛИТИКА РЫНКА',
        analyticsTitle: 'Аналитика рынка CS2',
        analyticsDesc: 'Отслеживайте динамику цен, объёмы продаж и рыночные тренды в реальном времени.',

        marketVolumeCard: 'Объём рынка',
        marketVolumeDesc: 'Общая капитализация',

        deals24h: 'Сделок за 24ч',
        activeSales: 'Активные продажи',

        averageGrowth: 'Средний рост',
        last7Days: 'За последние 7 дней',

        volatility: 'Волатильность',
        marketActive: 'Рынок очень активен',
        marketHeight: 'Высокий',

        marketOverview: 'Обзор рынка',
        globalMarketTrend: 'Глобальная динамика рынка',

        topGrowth: 'Максимальный рост',
        bestGrowth: 'Лучший рост',

        biggestDrop: 'Самое большое падение',
        strongDecline: 'Сильный упадок',

        factoryNew: 'Прямо с завода',
        minimalWear: 'Немного поношенный',
        fieldTested: 'После полевых испытаний',

        categoryDynamics: 'Динамика категорий',
        marketState: 'Текущее состояние рынка',

        riflesCategory: 'Винтовки',
        pistolsCategory: 'Пистолеты',
        knivesCategory: 'Ножи',
        glovesCategory: 'Перчатки',
        shotgunsSmgCategory: 'Дробовики и ПП',
        stickersCategory: 'Наклейки',

        aiPrediction: 'ИИ Предсказание',
        aiPredictionTitle: 'Ожидается рост цен на ножи и AWP в течение 7 дней',
        aiPredictionDesc: 'Анализ основан на: Steam Market, Buff163 и объёмах продаж.',

        updatedSkin: 'Только что',

        gameCheck: 'Осмотреть в игре',
        gotoBuy: 'Перейти к выбору',
        summaryBuy: 'Сводка',

        guaranteesBadge: 'ГАРАНТИИ / НАДЕЖНОСТЬ',
        guaranteesTitle: 'Гарантии',
        guaranteesDesc: 'Мы гарантируем точность аналитики, стабильную работу платформы и прозрачность данных рынка CS2.',

        guaranteeCard1Title: 'Обновление каждые 10 минут',
        guaranteeCard1Desc: 'Сервис автоматически обновляет стоимость скинов, чтобы вы видели актуальные рыночные цены.',

        guaranteeCard2Title: '100+ источников',
        guaranteeCard2Desc: 'Мы собираем данные с популярных маркетов, бирж и торговых площадок CS2.',

        guaranteeCard3Title: 'Точная аналитика',
        guaranteeCard3Desc: 'Алгоритмы SkinTick анализируют историю продаж, тренды и колебания рынка в реальном времени.',

        guaranteeCard4Title: 'Стабильная работа',
        guaranteeCard4Desc: 'Платформа работает круглосуточно, обеспечивая быстрый доступ к данным рынка.',

        guaranteesInfoTitle: 'Почему пользователи доверяют SkinTick?',
        guaranteesInfoDesc: 'Мы не продаем скины и не вмешиваемся в сделки пользователей. Наша задача — предоставлять максимально точную информацию о рынке CS2.',

        guaranteesInfo1: 'Прозрачная аналитика рынка',
        guaranteesInfo2: 'Автоматический сбор данных',
        guaranteesInfo3: 'Защищенное соединение',
        guaranteesInfo4: 'Стабильная инфраструктура',

        guaranteesStat1: 'Обновлений за сутки',
        guaranteesStat2: 'Источников данных',
        guaranteesStat3: 'Отслеживаемых скинов',

        supportTitle: 'Нужна помощь?',
        supportDesc: 'Наша поддержка готова ответить на любые вопросы по работе платформы.',
        supportBtn: 'Связаться с поддержкой',

        supportModalTitle: 'Поддержка SkinTick',
        supportModalSubtitle: 'Свяжитесь с нами любым удобным способом',

        faqBadge: 'FAQ / ПОМОЩЬ',
        faqTitle: 'Часто задаваемые вопросы',
        faqDesc: 'Всё что нужно знать о работе SkinTick, покупке, продаже и аналитике скинов CS2.',
        faqSearch: 'Поиск вопроса...',

        faqSupportTitle: 'Не нашли ответ?',
        faqSupportDesc: 'Наша поддержка поможет решить любой вопрос.',
        faqSupportBtn: 'Написать в поддержку',

        faqItems: [
            {
                question: 'Как часто обновляются цены?',
                answer: 'SkinTick обновляет рыночные данные каждые 10 минут с более чем 100 площадок.'
            },
            {
                question: 'Откуда берутся данные?',
                answer: 'Мы агрегируем цены из Steam Market, Buff, CSFloat и других популярных маркетплейсов.'
            },
            {
                question: 'Можно ли настроить уведомления?',
                answer: 'Да, вы можете установить уведомления о росте или падении цены определённого скина.'
            },
            {
                question: 'Есть ли API?',
                answer: 'Да, SkinTick предоставляет API для получения цен, графиков и аналитики.'
            },
            {
                question: 'Как работает авторизация через Steam?',
                answer: 'Авторизация происходит через официальный Steam OpenID без передачи пароля вашему сайту.'
            },
            {
                question: 'Можно ли отслеживать редкие предметы?',
                answer: 'Да, вы можете добавить любой скин в избранное и следить за его динамикой.'
            }
        ],
        authLogin: 'Вход',
        authRegister: 'Регистрация',

        authLoginSubtitle: 'Войдите в аккаунт SkinTick',
        authRegisterSubtitle: 'Создайте аккаунт SkinTick',

        authNickname: 'Ваш ник',
        authEmail: 'Email',
        authPassword: 'Пароль',

        authCreateAccount: 'Создать аккаунт',

        authOr: 'или войти через',

        authNoAccount: 'Нет аккаунта?',
        authHaveAccount: 'Уже есть аккаунт?',

        authRegisterBtn: 'Зарегистрироваться',
        authLoginBtn: 'Войти',

        contactsBadge: 'КОНТАКТЫ / ПОДДЕРЖКА',
        contactsTitle: 'Контакты SkinTick',
        contactsDesc: 'Свяжитесь с нами по любым вопросам: поддержка, сотрудничество, интеграции и безопасность.',

        contactsSupportTitle: 'Поддержка',
        contactsSupportDesc: 'Если у вас возникли вопросы, наша поддержка работает 24/7.',

        contactsPartnershipTitle: 'Сотрудничество',
        contactsPartnershipDesc: 'Для блогеров, стримеров, рекламы и партнерских предложений.',

        contactsSecurityBadge: 'ПРОВЕРКА СОТРУДНИКА',
        contactsSecurityTitle: 'Безопасность',
        contactsSecurityDesc: 'Если кто-то написал вам от имени SkinTick, вы можете проверить сотрудника через поддержку.',

        contactsSecurityPlaceholder: 'Telegram, Youtube или E-mail',
        contactsSecurityButton: 'Проверить',

        contactsHelpTitle: 'Нужна помощь?',
        contactsHelpDesc: 'Мы всегда готовы помочь вам разобраться с платформой SkinTick.',
        contactsHelpButton: 'Написать в поддержку',

        contactsVerifyEmpty: 'Введите Telegram, Youtube или E-mail',
        contactsVerifySuccess: 'Сотрудник подтвержден',
        contactsVerifyNotFound: 'Сотрудник не найден',

        inspectConfirm: 'Вы хотите открыть Counter-Strike 2 для осмотра в игре?',
    },

    en: {
        heroTitle1: "Don't know the real skin price?",
        heroTitle2: 'updates the market every 10 minutes.',
        heroDesc: 'Live CS2 market prices, charts and analytics in real time',

        updatePrices: 'Price updates every 10 minutes',
        platforms: '100+ marketplaces and sources',
        analytics: 'Accurate data and analytics',
        history: 'Price history and trends',

        loading: 'Loading skins...',
        marketSummary: 'Market overview',
        marketVolume: 'Total market volume',
        marketHeight: 'High',

        activeSkins: 'Active skins for sale',
        tracked: 'Tracked',

        todayUpdates: 'Updates today',
        lastUpdate: 'Last update 2 min ago',

        platformsTitle: 'Platforms',
        dataSources: 'Data sources',

        accurateData: 'Accurate data',
        accurateDataDesc: 'We collect prices from 100+ marketplaces and sources',

        fastUpdates: 'Frequent updates',
        fastUpdatesDesc: 'Prices update every 10 minutes',

        chartsAnalytics: 'Charts and analytics',
        chartsAnalyticsDesc: 'Price history, trends and market indicators',

        notifications: 'Notifications',
        notificationsDesc: 'Set up alerts for price changes',
        footerMarket: 'MARKET',
        footerHelp: 'HELP',
        footerUseful: 'USEFUL',

        sellSkins: 'Sell CS2 skins',
        buySkins: 'Buy CS2 skins',
        tradeSkins: 'Trade CS2 skins',

        faq: 'FAQ',
        sellAll: 'How to sell all CS2 skins instantly',
        howItWorks: 'How it works',
        guarantees: 'Guarantees',
        contacts: 'Contacts',

        blog: 'Blog',
        reviews: 'Reviews',
        agreement: 'User Agreement',
        privacy: 'Privacy Policy',
        api: 'API',

        footerDesc: 'Live CS2 market prices, charts and analytics in real time',

        footerCompany: 'SkinTick website is operated by In-Game Solution PTE, LTD.',

        footerRights: '© 2017-2026 SkinTick, all rights reserved',
        footerRights2: 'Powered by Steam. Not affiliated with Valve Corp.',
        headerSkins: 'Skins',
        headerAnalytics: 'Analytics',
        headerGuarantees: 'Guarantees',
        headerFaq: 'FAQ',

        searchPlaceholder: 'Search skin...',

        login: 'Login',
        register: 'Register',
        skinsBadge: 'SKINTICK / SKINS',
        skinsTitle: 'CS2 Skin Catalog',
        skinsDesc: 'Track live prices, trends and market analytics in real time.',

        searchSkin: 'Search skin...',

        all: 'All',
        rifles: 'Rifles',
        pistols: 'Pistols',
        snipers: 'Snipers',
        shotguns: 'Shotguns & SMGs',

        sortPopular: 'By popularity',
        sortExpensive: 'Price: high',
        sortCheap: 'Price: low',
        sortGrowth: 'By price growth',

        buyLink: 'Go to purchase',
        analyticsBadge: 'LIVE MARKET ANALYTICS',
        analyticsTitle: 'CS2 Market Analytics',
        analyticsDesc: 'Track price movements, sales volumes and market trends in real time.',

        marketVolumeCard: 'Market Volume',
        marketVolumeDesc: 'Total capitalization',

        deals24h: 'Deals in 24h',
        activeSales: 'Active sales',

        averageGrowth: 'Average Growth',
        last7Days: 'Over the last 7 days',

        volatility: 'Volatility',
        marketActive: 'Market is highly active',

        marketOverview: 'Market Overview',
        globalMarketTrend: 'Global market dynamics',

        topGrowth: 'Top Growth',
        bestGrowth: 'Best performance',

        biggestDrop: 'Biggest Drop',
        strongDecline: 'Strong decline',

        factoryNew: 'Factory New',
        minimalWear: 'Minimal Wear',
        fieldTested: 'Field-Tested',

        categoryDynamics: 'Category Dynamics',
        marketState: 'Current market state',

        riflesCategory: 'Rifles',
        pistolsCategory: 'Pistols',
        knivesCategory: 'Knives',
        glovesCategory: 'Gloves',
        shotgunsSmgCategory: 'Shotguns & SMGs',
        stickersCategory: 'Stickers',

        aiPrediction: 'AI Prediction',
        aiPredictionTitle: 'Knife and AWP prices are expected to rise within 7 days',
        aiPredictionDesc: 'Analysis based on Steam Market, Buff163 and sales volumes.',

        updatedSkin: 'Just now',

        gameCheck: 'Inspect',
        gotoBuy: 'Go to the selection',
        summaryBuy: 'Summary',

        guaranteesBadge: 'GUARANTEES / RELIABILITY',
        guaranteesTitle: 'Guarantees',
        guaranteesDesc: 'We guarantee accurate analytics, stable platform performance and transparent CS2 market data.',

        guaranteeCard1Title: 'Updates every 10 minutes',
        guaranteeCard1Desc: 'The service automatically updates skin prices so you always see current market prices.',

        guaranteeCard2Title: '100+ sources',
        guaranteeCard2Desc: 'We collect data from popular CS2 markets, exchanges and trading platforms.',

        guaranteeCard3Title: 'Accurate analytics',
        guaranteeCard3Desc: 'SkinTick algorithms analyze sales history, trends and market fluctuations in real time.',

        guaranteeCard4Title: 'Stable operation',
        guaranteeCard4Desc: 'The platform operates 24/7 providing fast access to market data.',

        guaranteesInfoTitle: 'Why do users trust SkinTick?',
        guaranteesInfoDesc: 'We do not sell skins and do not interfere in user transactions. Our goal is to provide the most accurate CS2 market information.',

        guaranteesInfo1: 'Transparent market analytics',
        guaranteesInfo2: 'Automatic data collection',
        guaranteesInfo3: 'Secure connection',
        guaranteesInfo4: 'Stable infrastructure',

        guaranteesStat1: 'Updates per day',
        guaranteesStat2: 'Data sources',
        guaranteesStat3: 'Tracked skins',

        supportTitle: 'Need help?',
        supportDesc: 'Our support team is ready to answer any questions about the platform.',
        supportBtn: 'Contact support',

        supportModalTitle: 'SkinTick Support',
        supportModalSubtitle: 'Contact us in any convenient way',

        faqBadge: 'FAQ / HELP',
        faqTitle: 'Frequently Asked Questions',
        faqDesc: 'Everything you need to know about SkinTick, buying, selling and CS2 skin analytics.',
        faqSearch: 'Search question...',

        faqSupportTitle: 'Didn’t find an answer?',
        faqSupportDesc: 'Our support team will help solve any issue.',
        faqSupportBtn: 'Contact Support',

        faqItems: [
            {
                question: 'How often are prices updated?',
                answer: 'SkinTick updates market data every 10 minutes from more than 100 marketplaces.'
            },
            {
                question: 'Where does the data come from?',
                answer: 'We aggregate prices from Steam Market, Buff, CSFloat and other popular marketplaces.'
            },
            {
                question: 'Can I set up notifications?',
                answer: 'Yes, you can set notifications for price increases or decreases of specific skins.'
            },
            {
                question: 'Is there an API?',
                answer: 'Yes, SkinTick provides an API for prices, charts and analytics.'
            },
            {
                question: 'How does Steam authorization work?',
                answer: 'Authorization works through official Steam OpenID without transferring your password.'
            },
            {
                question: 'Can I track rare items?',
                answer: 'Yes, you can add any skin to favorites and monitor its price dynamics.'
            }
        ],
        authLogin: 'Login',
        authRegister: 'Register',

        authLoginSubtitle: 'Log into your SkinTick account',
        authRegisterSubtitle: 'Create your SkinTick account',

        authNickname: 'Your nickname',
        authEmail: 'Email',
        authPassword: 'Password',

        authCreateAccount: 'Create account',

        authOr: 'or continue with',

        authNoAccount: "Don't have an account?",
        authHaveAccount: 'Already have an account?',

        authRegisterBtn: 'Register',
        authLoginBtn: 'Login',

        contactsBadge: 'CONTACTS / SUPPORT',
        contactsTitle: 'SkinTick Contacts',
        contactsDesc: 'Contact us for any questions: support, partnerships, integrations and security.',

        contactsSupportTitle: 'Support',
        contactsSupportDesc: 'If you have any questions, our support team is available 24/7.',

        contactsPartnershipTitle: 'Partnership',
        contactsPartnershipDesc: 'For bloggers, streamers, advertising and partnership offers.',

        contactsSecurityBadge: 'EMPLOYEE VERIFICATION',
        contactsSecurityTitle: 'Security',
        contactsSecurityDesc: 'If someone contacted you on behalf of SkinTick, you can verify the employee through support.',

        contactsSecurityPlaceholder: 'Telegram, Youtube or E-mail',
        contactsSecurityButton: 'Verify',

        contactsHelpTitle: 'Need help?',
        contactsHelpDesc: 'We are always ready to help you understand the SkinTick platform.',
        contactsHelpButton: 'Contact support',

        contactsVerifyEmpty: 'Enter Telegram, Youtube or E-mail',
        contactsVerifySuccess: 'Employee verified',
        contactsVerifyNotFound: 'Employee not found',

        inspectConfirm: 'Do you want to open Counter-Strike 2 to inspect this item in-game?',
    }
}

export default createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'ru',
    fallbackLocale: 'ru',
    messages
})