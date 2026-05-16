import { defineStore } from 'pinia'
import { getSkins } from '@/api/skins'
export const useSkinStore = defineStore('skins', {
    state: () => ({
        skins: [],
        loading: false
    }),
    actions: {
        async fetchSkins() {
            this.loading = true
            try {
                const data =
                    await getSkins()
                console.log(data)
                this.skins = data.map(
                    (item, index) => {
                        return {
                            id:
                                item.id || index,
                            name:
                                item.market_hash_name
                                    ?.split('|')[0]
                                    ?.trim() || 'Unknown',
                            skin:
                                item.market_hash_name
                                    ?.split('|')[1]
                                    ?.replace(/\(.+?\)/g, '')
                                    ?.trim() || 'Skin',
                            quality:
                                item.exterior || 'FN',
                            image:
                                item.image || '',
                            price:
                                Number(
                                    item.suggested_price || 0
                                ).toFixed(2),
                            percent:
                                item.percent || '0%',
                            updated:
                                item.updated || 'только что',
                            graph:
                                item.graph || [
                                    1,2,3,4,5
                                ]
                        }
                    }
                )
            } catch(error) {
                console.log(error)
            } finally {
                this.loading = false
            }
        },
        startAutoUpdate() {
            this.fetchSkins()
            setInterval(() => {
                this.fetchSkins()
            }, 600000)
        }
    }
})