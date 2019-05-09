<template>
    <div id="all_employee">
        <h1>All Products</h1>

        <p><router-link :to="{ name: 'create_employee' }" class="btn btn-primary">Create Product</router-link></p>

        <div class="form-group">
            <input type="text" name="search" v-model="employeeSearch" placeholder="Search products" class="form-control" v-on:keyup="searchEmployee">
        </div>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="emp in employee">
                    <td>{{ emp.id }}</td>
                    <td>{{ emp.firstname }}</td>
                    <td>{{ emp.lastname }}</td>
                    <td>{{ emp.email }}</td>
                    <td>
                        <router-link :to="{name: 'edit_employee', params: { id: emp.id }}" class="btn btn-primary">Edit</router-link>
                        <router-link :to="{name: 'delete_employee', params: { id: emp.id }}" class="btn btn-danger">Delete</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                employee: [],
                originalEmployee: [],
                employeeSearch: ''
            }
        },

        created: function()
        {
            this.fetchEmployeeData();
        },

        methods: {
            fetchEmployeeData: function()
            {
                this.$http.get('http://localhost:8080/api/Fetchemployee').then((response) => {
                    this.employee = response.body;
                    this.originalEmployee = this.employee;
                }, (response) => {

                });
            },

            searchEmployee: function()
            {
                if(this.employeeSearch == '')
                {
                    this.employee = this.originalEmployee;
                    return;
                }

                var searchedEmployee = [];
                for(var i = 0; i < this.originalEmployee.length; i++)
                {
                    var empName = this.originalEmployee[i]['name'].toLowerCase();
                    if(empName.indexOf(this.employeeSearch.toLowerCase()) >= 0)
                    {
                        searchedEmployee.push(this.originalEmployee[i]);
                    }
                }

                this.employee = searchedProducts;
            }
        }
    }
</script>
