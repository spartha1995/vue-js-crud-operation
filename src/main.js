import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './App.vue'

const AllEmployee = require('./assets/js/components/all-employee.vue');
const CreateEmployee = require('./assets/js/components/create-employee.vue');
const EditEmployee = require('./assets/js/components/edit-employee.vue');
const DeleteEmployee = require('./assets/js/components/delete-employee.vue');

const routes = [
    {
        name: 'all_employee',
        path: '/',
        component: AllEmployee
    },
    {
        name: 'create_employee',
        path: '/employee/create',
        component: CreateEmployee
    },
    {
        name: 'edit_employee',
        path: '/employee/edit/:id',
        component: EditEmployee
    },
    {
        name: 'delete_employee',
        path: '/employee/delete/:id',
        component: DeleteEmployee
    }
];
var router = new VueRouter({ routes: routes, mode: 'history' });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');