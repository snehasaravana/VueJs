<template>
  <div>
    <h3>Static Grid-List of users</h3>
    <table class="table table-bordered">
      <thead class="table-dark">
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
        <tr>
          <td><b>M S Dhoni</b></td>
          <td>dhoni@gmail.com</td>
          <td>9123456780</td>
          <td>Chennai</td>
          <td>India</td>
          <td>07-07-1981</td>
        </tr>
        <tr>
          <td><b>Suresh Raina</b></td>
          <td>suresh@gmail.com</td>
          <td>9829956780</td>
          <td>Chennai</td>
          <td>India</td>
          <td>27-11-1986</td>
        </tr>


        <tr>
          <td><b>Virat Kohli</b></td>
          <td>virat@gmail.com</td>
          <td>9333456780</td>
          <td>Bangalore</td>
          <td>India</td>
          <td>05-11-1988</td>
        </tr>

        <tr>
          <td><b>Rohit Sharma</b></td>
          <td>rohit@gmail.com</td>
          <td>9229456780</td>
          <td>Mumbai</td>
          <td>India</td>
          <td>30-04-1987</td>
        </tr>

        <tr>
          <td><b>Shreyas Iyer</b></td>
          <td>shreyas@gmail.com</td>
          <td>9229956780</td>
          <td>Kolkata</td>
          <td>India</td>
          <td>06-12-1994</td>
        </tr>



      </tbody>
    </table>
  </div>
</template>
  
<script>
    export default {
    name: "UsersList",
   
};
</script>