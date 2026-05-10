import express from 'express'
import cors from 'cors'
import axios from 'axios'
const app = express()
app.use(cors())
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
                const price =
                    Number(item.price)
                const oldPrice =
                    Number(item.avg_price || price)
                const graph = [
                    oldPrice * 0.95,
                    oldPrice * 0.98,
                    oldPrice,
                    price * 0.97,
                    price * 1.01,
                    price * 1.02,
                    price
                ].map(x =>
                    Number(x.toFixed(2))
                )
                const diff =
                    (
                        (
                            (price - oldPrice)
                            / oldPrice
                        ) * 100
                    ).toFixed(2)
                const percent =
                    diff > 0
                        ? `+${diff}%`
                        : `${diff}%`
                return {
                    id: index,
                    market_hash_name:
                    item.market_hash_name,
                    exterior:
                        getExterior(
                            item.market_hash_name
                        ),
                    suggested_price:
                    price,
                    volume:
                        Number(
                            item.popularity_7d || 0
                        ),
                    image:
                        `https://cdn2.csgo.com/item/image/width=512/${encodeURIComponent(item.market_hash_name)}.webp`,
                    graph,
                    percent,
                    updated:
                        'только что'
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
        'SERVER STARTED ON 3001'
    )
})