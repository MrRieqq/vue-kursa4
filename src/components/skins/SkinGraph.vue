<template>
  <div class="graph">
    <Line
        :data="chartData"
        :options="chartOptions"
    />
  </div>
</template>
<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js'
import { Line } from 'vue-chartjs'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
)
const props = defineProps({
  prices: Array
})
const chartData = {
  labels: props.prices,
  datasets: [
    {
      data: props.prices,

      borderColor: '#ff4ecb',

      borderWidth: 2,

      pointRadius: 0,

      tension: 0.4
    }
  ]
}
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  }
}
</script>
<style scoped>
.graph {
  width: 100%;
  height: 70px;
  margin-top: 20px;
}
</style>