<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary"
                        @click="template = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success"
                        @click="template = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger"
                        @click="template = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="template">
                    <h1>Template</h1>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
    data() {
        return {
            template: 'appBlue'
        };
    },
    components: {
        appBlue: Blue,
        appGreen: Green,
        appRed: Red
    }
};
</script>

<style>
</style>
