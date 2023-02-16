<template>
    <Header/>

    <main>
        <Messages />
        <router-view></router-view>
    </main>
</template>

<script>

import Header from "@/components/Header.vue";
import Messages from "@/components/Messages.vue";

export default {
    name: "Default",
    components: {
        Header,
        Messages
    }
}
</script>
