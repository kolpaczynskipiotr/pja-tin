<template>
    <ElContainer class="sidebar-layout">
        <ElMain>
            <slot />
        </ElMain>
        <TheSidebar>
            <slot name="sidebar">
                <h3>About us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </slot>
        </TheSidebar>
    </ElContainer>
</template>

<script lang="ts" setup>
import TheSidebar from '@/components/TheSidebar.vue'
</script>

<style scoped lang="scss">
.sidebar-layout {
    display: grid;

    @media screen and (min-width: 1023px) {
        grid-template-columns: 10fr 2fr;
    }
}
</style>
