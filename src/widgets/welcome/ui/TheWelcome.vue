<script setup lang="ts">
import { Label } from '@/shared/ui'
import { IncCountButton } from '@/features/inc-count'
import { CountLabel } from '@/features/count-label'
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <Label> Welcome! </Label>
    <CountLabel />
    <IncCountButton />
  </div>
</template>
