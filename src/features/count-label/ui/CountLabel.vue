<script setup lang="ts">
import { useCounterStore } from '@/entities/counter'
import { storeToRefs } from 'pinia'
import { Label } from '@/shared/ui'
const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
</script>

<template>
  <Label>현재 값 : {{ count.num }}</Label>
  <Label>현재 두배 값 : {{ doubleCount }}</Label>
</template>
