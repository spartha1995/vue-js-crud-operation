<template>
    <div id="delete-product">
        <h1>Delete Product {{ employee.name }}</h1>

        <p><router-link :to="{ name: 'all_employee' }">Return to employee</router-link></p>

        <notification v-bind:notifications="notifications"></notification>

        <form v-on:submit.prevent="deleteEmployee">
            <p><button class="btn btn-danger">Delete Employee</button></p>
        </form>
    </div>
</template>

<script>
    import Notification from './notifications.vue';

    export default{
        data(){
            return{
                employee:{},
                notifications:[]
            }
        },

        created: function(){
            this.getEmployee();
        },

        methods: {
            getEmployee: function()
            {
                this.$http.get('http://localhost:3000/api/product/' + this.$route.params.id).then((response) => {
                    this.employee = response.body;
                }, (response) => {

                });
            },

            deleteEmployee: function()
            {
                this.$http.delete('http://localhost:3000/api/product/delete/' + this.$route.params.id, this.employee, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.$router.push({name: 'all_products'})
                }, (response) => {
                    this.notifications.push({
                        type: 'danger',
                        message: 'Product could not deleted'
                    });
                });
            }
        },

        components: {
            'notification' : Notification
        }
    }
</script>
