<template>
  <div >
    <h3 class="col-sm btn btn-dark"> Dynamic Grid with list of users</h3>
    <table class="table ">
      <thead >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>Country</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.name">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.city }}</td>
          <td>{{ user.country }}</td>
          <td>{{ user.dob }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>


import userService from '../services/userService';
export default{
name:'UsersList',
data(){
    return {
        users:[],
    };
},
created(){
    this.printAllUsers();
},
methods:{
    printAllUsers(){
        userService.getList().then(response=>{
            this.users=response.data;
        })
        .catch(e=>{
            console.log(e);
        });
    }
}
}
// import json from '../json/data.json'
// export default {
//   data() {
//     return {
//     users:json
//     };
//   },
// };
</script>