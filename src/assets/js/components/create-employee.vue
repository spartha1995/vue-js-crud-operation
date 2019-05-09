<template>
    <div id="create-product">
        <h1>Create Product</h1>

        <p><router-link :to="{ name: 'all_employee' }">Return to products</router-link></p>

        <notification v-bind:notifications="notifications"></notification>

        <form v-on:submit.prevent="addEmployee">
            <div class="form-group">
                <label name="employee_id">ID</label>
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
                <input type="text" class="form-control" v-model="employee.email" id="product_Email" required>
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Create</button>
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

        methods: {
            addEmployee: function()
            {
                debugger;
                // Validation
                // var price = parseFloat(this.product.price);
                // if(isNaN(price))
                // {
                //     this.notifications.push({
                //         type: 'danger',
                //         message: 'Price must be a number'
                //     });
                //     return false;
                // } else {
                //     this.product.price = this.product.price;
                // }

                this.$http.post('http://localhost:8080/api/employee', this.employee, {
                }).then((response) => {
                    this.notifications.push({
                        type: 'success',
                        message: 'Product created successfully'
                    });
                }, (response) => {
                    this.notifications.push({
                        type: 'error',
                        message: 'Product not created'
                    });
                });
            }
        },

        components: {
            'notification' : Notification
        }
    }
</script>
