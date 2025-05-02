<script setup lang="ts">
import { Button } from '@/shared/ui'
import { useCounterStore } from '@/entities/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const { increment } = store
</script>

<template>
  <Button @click="increment()"> increase count </Button>
</template>

<style scoped></style>
