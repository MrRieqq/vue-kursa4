<template>
  <div class="graph">
    <Line
        :data="chartData"
        :options="chartOptions"
    />
  </div>
</template>
<script setup>
import { computed } from 'vue'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
} from 'chart.js'

import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler
)

const props = defineProps({
  prices: {
    type: Array,
    default: () => []
  }
})

const chartData = computed(() => ({

  labels: props.prices.map(
      (_, i) => i + 1
  ),

  datasets: [
    {
      data: props.prices,

      borderColor: '#ff4ecb',

      backgroundColor:
          'rgba(255,78,203,0.08)',

      fill: true,

      borderWidth: 2.5,

      pointRadius: 0,

      tension: 0.45
    }
  ]
}))

const chartOptions = {

  responsive: true,

  maintainAspectRatio: false,

  animation: false,

  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    }
  },

  scales: {

    x: {
      display: false,
      grid: {
        display: false
      }
    },

    y: {
      display: false,
      grid: {
        display: false
      }
    }
  },

  elements: {
    line: {
      capBezierPoints: true
    }
  }
}
</script>
<style scoped>
.graph {
  width: 100%;
  height: 70px;
  margin-top: 20px;
  pointer-events: none;
}
</style>