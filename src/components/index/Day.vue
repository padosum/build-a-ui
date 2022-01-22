<template>
    <template v-if="isComplete">
        <a :href="date" class="day">
            {{ date }}
            <div class="label" :style="{ backgroundColor: color }">
                {{ label }}
            </div>
        </a>
    </template>
    <template v-else>
        <div :class="isPlaceholder ? `day` : `placeholder day`">
            {{ date }}
        </div>
    </template>
</template>
<script setup>
import { defineProps } from 'vue'
import { computed } from 'vue'

const props = defineProps({
    date: Number,
    complete: Boolean,
    label: String,
    color: String,
    placeholder: Boolean,
})

const isComplete = computed({
  get () {
    return props.complete
  },
})

const isPlaceholder = computed({
    get () {
        return props.placeholder
    }
})
</script>
<style scoped>

</style>