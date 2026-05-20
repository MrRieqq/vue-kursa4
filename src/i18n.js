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

    }
}

export default createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'ru',
    fallbackLocale: 'ru',
    messages
})