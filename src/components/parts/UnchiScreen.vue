<script setup lang="ts">
    import { useUnchiStore } from '../../ts/stores/unchi';
    const unchiStore = useUnchiStore();
</script>
<template>
    <div class="full-width">
        <p class="unchi-text-contents">{{ unchiStore.unchiText }}</p>
    </div>
    <p>Unchi is {{ unchiStore.unchiCounts }}</p>
    <p :style="{height: '30px'}">{{ unchiStore.finalTranscript + unchiStore.interimTranscript }}</p>
</template>
<style scoped="scss">
.unchi-text-contents {
    font-size: 3em;
    text-align: start;
}
.full-width {
    width: 100%;
    aspect-ratio: 16/9;
    background-color: rgb(0, 255, 0);
}
</style>