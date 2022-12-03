<template>
    <SidebarLayout>
        <header class="header">
            <img
                class="header__img"
                src="@/assets/restaurant.jpg"
                alt="restaurant"
            />
            <h1>Restaurant App</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </header>
        <section class="section">
            <h2>About us</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu lorem ornare, commodo erat eget, dignissim ex. Donec viverra
                massa a velit maximus, luctus egestas dolor faucibus. Mauris
                vulputate diam justo. Proin luctus eros sed malesuada venenatis.
                Morbi bibendum venenatis ligula eu feugiat. Sed rhoncus diam
                vitae ornare auctor. Morbi ac nisi nunc. Vivamus scelerisque,
                lectus molestie facilisis ultricies, erat enim scelerisque
                purus, non pretium tortor nunc et nibh. Maecenas justo justo,
                accumsan sed tellus quis, malesuada lacinia ex. Vivamus varius
                sit amet lectus eu venenatis. Praesent congue purus in sem
                fermentum, vitae imperdiet nunc mollis.
            </p>
        </section>
        <section class="section">
            <h2>Contact</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu lorem ornare, commodo erat eget, dignissim ex. Donec viverra
                massa a velit maximus, luctus egestas dolor faucibus. Mauris
                vulputate diam justo. Proin luctus eros sed malesuada venenatis.
                Morbi bibendum venenatis ligula eu feugiat. Sed rhoncus diam
                vitae ornare auctor. Morbi ac nisi nunc. Vivamus scelerisque,
                lectus molestie facilisis ultricies, erat enim scelerisque
                purus, non pretium tortor nunc et nibh. Maecenas justo justo,
                accumsan sed tellus quis, malesuada lacinia ex. Vivamus varius
                sit amet lectus eu venenatis. Praesent congue purus in sem
                fermentum, vitae imperdiet nunc mollis.
            </p>
        </section>
        <template #sidebar>
            <h2>Sidebar</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu lorem ornare, commodo erat eget, dignissim ex. Donec viverra
                massa a velit maximus, luctus egestas dolor faucibus. Mauris
                vulputate diam justo.
            </p>
        </template>
    </SidebarLayout>
</template>

<script lang="ts" setup>
import SidebarLayout from '@/layouts/SidebarLayout.vue'
</script>

<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 400px;
    filter: brightness(80%);
    color: hsla(160, 100%, 37%, 1);

    &__img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(40%);
    }
}

.section {
    margin: 16px 0;
    padding: 8px;
}
</style>
