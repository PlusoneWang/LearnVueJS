<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers @serverSelected="serverSelected"></servers>
            <app-server-details :server="currentServer"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";

export default {
    data() {
        return {
            currentServer: null
        };
    },
    components: {
        appHeader: Header,
        Servers,
        "app-server-details": ServerDetails,
        "app-footer": Footer
    },
    methods: {
        serverSelected(server) {
            this.currentServer = server;
        }
    }
};
</script>

<style>
</style>
