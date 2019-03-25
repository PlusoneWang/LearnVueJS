new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert() {
            alert("alert");
        },
        storeValue(event) {
            this.value = event.target.value;
        }
    }
});