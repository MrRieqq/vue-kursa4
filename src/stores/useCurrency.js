import { ref } from 'vue'
const currency = ref(
    localStorage.getItem('currency') || 'USD'
)
const usdToRub = ref(90)
async function fetchRate() {
    try {
        const response = await fetch(
            'https://api.exchangerate-api.com/v4/latest/USD'
        )
        const data = await response.json()
        usdToRub.value =
            data.rates.RUB || 90

    } catch (e) {
        console.log('RATE ERROR')
    }
}
function changeCurrency(val) {
    currency.value = val
    localStorage.setItem(
        'currency',
        val
    )
}
function formatPrice(price) {
    const value = Number(price)
    if (currency.value === 'RUB') {
        return `₽ ${(
            value * usdToRub.value
        ).toFixed(0)}`
    }
    return `$ ${value.toFixed(2)}`
}
fetchRate()
export function useCurrency() {
    return {
        currency,
        changeCurrency,
        formatPrice,
        fetchRate
    }
}
