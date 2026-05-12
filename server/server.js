import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()

app.use(cors())
const RARITY_MAP = {

    Consumer: {
        name: 'Consumer Grade',
        color: '#b0c3d9'
    },

    Industrial: {
        name: 'Industrial Grade',
        color: '#5e98d9'
    },

    MilSpec: {
        name: 'Mil-Spec',
        color: '#4b69ff'
    },

    Restricted: {
        name: 'Restricted',
        color: '#8847ff'
    },

    Classified: {
        name: 'Classified',
        color: '#d32ce6'
    },

    Covert: {
        name: 'Covert',
        color: '#eb4b4b'
    },

    Contraband: {
        name: 'Contraband',
        color: '#e4ae39'
    }
}
app.get('/api/skins', async (req, res) => {
    try {

        const response = await axios.get(
            'https://market.csgo.com/api/v2/prices/USD.json'
        )

        const items =
            Object.values(response.data.items)

        const WEAPONS = [

            'AK-47',
            'M4A4',
            'M4A1-S',
            'AWP',
            'USP-S',
            'Glock-18',
            'Desert Eagle',
            'P250',
            'Five-SeveN',
            'Tec-9',
            'CZ75-Auto',
            'Dual Berettas',
            'FAMAS',
            'Galil AR',
            'SSG 08',
            'MP7',
            'MP9',
            'MAC-10',
            'UMP-45',
            'P90',
            'Nova',
            'XM1014',
            'MAG-7',
            'Sawed-Off',
            'Negev',
            'M249',
            'SCAR-20',
            'G3SG1'
        ]

        const excluded = [

            'Sticker',
            'Agent',
            'Case',
            'Capsule',
            'Graffiti',
            'Patch',
            'Music Kit',
            'Souvenir Package',
            'Pin'
        ]

        const filtered = items.filter(item => {

            if (
                !item.market_hash_name ||
                !item.price
            ) {
                return false
            }

            const isWeapon =
                WEAPONS.some(
                    weapon =>
                        item.market_hash_name.startsWith(
                            weapon
                        )
                )

            const hasExcluded =
                excluded.some(word =>
                    item.market_hash_name.includes(word)
                )

            return (
                isWeapon &&
                !hasExcluded &&
                item.market_hash_name.includes('|')
            )
        })

        const skins = filtered
            .sort(() => Math.random() - 0.5)
            .slice(0, 40)
            .map((item, index) => {

                const rarity = getRarity(
                    item.market_hash_name
                )

                const price =
                    Number(item.price)

                const median =
                    Number(
                        item.median_price ||
                        item.avg_price ||
                        item.price
                    )

                const diff =
                    (
                        (
                            (price - median)
                            / median
                        ) * 100
                    ).toFixed(2)

                const percent =
                    diff > 0
                        ? `+${diff}%`
                        : `${diff}%`

                const fullName =
                    item.market_hash_name

                const weapon =
                    fullName.split('|')[0]?.trim()

                const skin =
                    fullName.split('|')[1]
                        ?.split('(')[0]
                        ?.trim()

                /*
                 * График строится
                 * вокруг median_price
                 */

                const graph = [

                    median * 0.94,
                    median * 0.96,
                    median * 0.98,
                    median,
                    median * 1.01,
                    median * 1.03,
                    price

                ].map(x =>
                    Number(x.toFixed(2))
                )

                return {

                    id: index,

                    name: weapon,

                    skin: skin,

                    market_hash_name:
                    fullName,

                    quality:
                        getExterior(fullName),

                    exterior:
                        getExterior(fullName),

                    rarity: rarity.name,
                    rarityColor: rarity.color,

                    price:
                        price.toFixed(2),

                    median_price:
                        median.toFixed(2),

                    suggested_price:
                        median.toFixed(2),

                    volume:
                        Number(
                            item.popularity_7d || 0
                        ),

                    image:
                        `https://cdn2.csgo.com/item/image/width=512/${encodeURIComponent(fullName)}.webp`,

                    graph,

                    percent,

                    updated:
                        'только что',

                    inspect:
                        `https://market.csgo.com/en/${encodeURIComponent(fullName)}`
                }
            })

        res.json(skins)

    } catch(error) {

        console.log(error.message)

        res.status(500).json({
            error: error.message
        })
    }
})
function getRarity(name) {

    const lower =
        name.toLowerCase()

    /*
     * Очень грубый,
     * но рабочий маппинг
     */

    if (
        lower.includes('dragon lore') ||
        lower.includes('howl') ||
        lower.includes('knife') ||
        lower.includes('karambit') ||
        lower.includes('bayonet')
    ) {
        return RARITY_MAP.Covert
    }

    if (
        lower.includes('asiimov') ||
        lower.includes('hyper beast') ||
        lower.includes('vulcan') ||
        lower.includes('printstream')
    ) {
        return RARITY_MAP.Classified
    }

    if (
        lower.includes('neo-noir') ||
        lower.includes('player two') ||
        lower.includes('mecha industries')
    ) {
        return RARITY_MAP.Restricted
    }

    return RARITY_MAP.MilSpec
}
function getExterior(name) {

    if (
        name.includes('Factory New')
    ) return 'FN'

    if (
        name.includes('Minimal Wear')
    ) return 'MW'

    if (
        name.includes('Field-Tested')
    ) return 'FT'

    if (
        name.includes('Well-Worn')
    ) return 'WW'

    if (
        name.includes('Battle-Scarred')
    ) return 'BS'

    return 'FN'
}

app.listen(3001, () => {

    console.log(
        'SERVER STARTED ON PORT 3001'
    )
})