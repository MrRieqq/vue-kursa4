<template>
  <div class="graph-page">
    <AppHeader />

    <SupportModal v-model="showSupportModal" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import SupportModal from '@/components/ui/SupportModal.vue'
const showSupportModal = ref(false)
</script>
<style scoped>

</style>