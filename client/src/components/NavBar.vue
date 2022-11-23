<template>
    <div class="wrapper">
        <div class="dropshadow custom-header custom-button background-color-primary">
                <router-link to="/">Home</router-link>
        </div>
        <div class="dropshadow custom-header custom-button background-color-neutral">
                <router-link to="/chess">Chess</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
    };
</script>