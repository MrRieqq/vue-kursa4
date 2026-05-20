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
        footerRights2: 'Powered by Steam. Not affiliated with Valve Corp.'
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
        footerRights2: 'Powered by Steam. Not affiliated with Valve Corp.'

    }
}

export default createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'ru',
    fallbackLocale: 'ru',
    messages
})