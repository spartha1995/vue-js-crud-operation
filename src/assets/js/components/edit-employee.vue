<template>
    <div id="update-product">
        <h1>Update Product</h1>

        <p><router-link :to="{ name: 'all_employee' }">Return to products</router-link></p>

        <notification v-bind:notifications="notifications"></notification>

        <form v-on:submit.prevent="editEmployee">
            <div class="form-group">
                <label name="product_id">ID</label>
                <input type="text" class="form-control" disabled v-model="employee.id" id="product_id">
            </div>

            <div class="form-group">
                <label name="product_name">First Name</label>
                <input type="text" class="form-control" v-model="employee.firstname" id="product_name" required>
            </div>

            <div class="form-group">
                <label name="product_name">Last Name</label>
                <input type="text" class="form-control" v-model="employee.lastname" id="product_name" required>
            </div>

            <div class="form-group">
                <label name="product_price">Email</label>
                <input type="text" class="form-control" v-model="employee.email" id="product_price" required>
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
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
                this.$http.get('http://localhost:8080/api/employee/' + this.$route.params.id).then((response) => {
                    this.employee = response.body;
                }, (response) => {

                });
            },

            editEmployee: function()
            {
                // Validation
                // var price = parseFloat(this.employee.price);
                // if(isNaN(price))
                // {
                //     this.notifications.push({
                //         type: 'danger',
                //         message: 'Price must be a number'
                //     });
                //     return false;
                // }

                this.$http.put('http://localhost:8080/api/employee', this.employee, {
                }).then((response) => {
                    this.notifications.push({
                        type: 'success',
                        message: 'Product updated successfully'
                    });
                }, (response) => {
                    this.notifications.push({
                        type: 'error',
                        message: 'Product not updated'
                    });
                });
            }
        },

        components: {
            'notification' : Notification
        }
    }
</script>
