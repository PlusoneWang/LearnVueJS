<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server">Current ServerId: {{ server.id }}. Status: {{ server.status }}.</p>
        <p v-else>No Server selected.</p>
        <button class="btn btn-outline-dark"
                v-if="server"
                @click="changeStatus">Change status</button>
    </div>

</template>

<script>
export default {
    props: ["server"],
    data() {
        return {
            serverStatus: ["Normal", "Busy", "Offline", "Unknow"]
        };
    },
    methods: {
        // NOTE The server status is changed by reference. This two-way constraint is not officially recommended.
        changeStatus() {
            // Changed randomly.
            this.server.status = this.serverStatus[
                Math.floor(Math.random() * Math.floor(3))
            ];
        }
    }
};
</script>

<style>
</style>
