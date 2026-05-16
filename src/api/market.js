import skins from '@/data/skins.json'

export async function getMarketItems() {

    return skins.map(item => ({

        ...item,

        category: getCategory(item.name),

        change: Number(
            item.percent.replace('%', '')
        ),

        trend:
            item.percent.includes('-')
                ? 'down'
                : 'up'
    }))
}

function getCategory(name) {

    if (
        name.includes('Karambit') ||
        name.includes('Butterfly') ||
        name.includes('Bayonet')
    ) {
        return 'Ножи'
    }

    if (
        name.includes('Sport Gloves') ||
        name.includes('Driver Gloves')
    ) {
        return 'Перчатки'
    }

    if (
        name.includes('USP-S') ||
        name.includes('Glock') ||
        name.includes('Desert Eagle')
    ) {
        return 'Пистолеты'
    }

    return 'Винтовки'
}