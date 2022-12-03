<template>
    <TheHeader>
        <ElLink><RouterLink to="/">Home</RouterLink> </ElLink>
        <ElLink><RouterLink to="/contact">Contact</RouterLink> </ElLink>
        <ElLink><RouterLink to="/listing">Listing</RouterLink> </ElLink>
    </TheHeader>
    <RouterView />
    <TheFooter />
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<style scoped>
.el-link {
    padding: 4px;
}
</style>
