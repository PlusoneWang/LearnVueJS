<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item server"
                v-for="server in servers"
                :key="server.id"
                @click="$emit('serverSelected', server)">
                Server #{{ server.id }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            servers: [
                { id: 1, status: "Normal" },
                { id: 2, status: "Busy" },
                { id: 3, status: "Offline" },
                { id: 4, status: "Unknow" },
                { id: 5, status: "Normal" }
            ]
        };
    }
};
</script>

<style scoped>
</style>
