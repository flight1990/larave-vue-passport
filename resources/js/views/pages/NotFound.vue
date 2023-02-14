<template>
    <h1>404</h1>
    <p>Page not found...</p>
    <router-link :to="{name: 'home'}">Return home</router-link>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

