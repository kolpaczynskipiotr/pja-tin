<template>
    <SidebarLayout>
        <div class="grid-container">
            <ElCard v-for="item in 16" :key="item" class="card">
                <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    alt=""
                    class="card__img"
                />
                <div>
                    <h3>Burger {{ item }}</h3>
                    <div style="margin-top: 8px">
                        <ElButton type="primary">Buy</ElButton>
                    </div>
                </div>
            </ElCard>
        </div>
    </SidebarLayout>
</template>

<script lang="ts" setup>
import SidebarLayout from '@/layouts/SidebarLayout.vue'
</script>

<style scoped lang="scss">
.grid-container {
    display: grid;
    gap: 4px;

    .card {
        &__img {
            width: 100%;
            overflow: hidden;
        }
    }

    @media screen and (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1600px) {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
