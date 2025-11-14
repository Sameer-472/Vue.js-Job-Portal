<!-- options API  -->

<script>
    export default {
      data() {
        return {
          name: 'John Doe',
          status: 'inactive',
          tasks: ['finding job' , 'learn new skills' , 'try to find remote job'],
          link: 'https://vuejs.org/guide/introduction.html'
        }
      } , 
      methods: {
        toggleStatus(){
            if(this.status === 'active'){
              this.status = 'pending'
            }
            else {
              this.status = 'active'
            }
        }
      }
    }
</script>

<template>
      <h1>{{name}}</h1>
      <!-- if and else  directive -->
      <p v-if="status === 'active'">Task is Active</p>
      <p v-else-if="status === 'inactive'">Taks is Inactive</p>
      <p v-else="status === 'inactive'">Still Pending</p>
      
      <!-- loop directive  -->
      <p v-for="task in tasks" key="task">{{task }}</p>

      <!-- bind directive  -->
      <a v-bind:href="link">Click to open offical vue.js website</a>

      <!-- v on directive  -->

      <button v-on:click="toggleStatus">Change Status</button>
      <button @click="toggleStatus">Change Status</button>
</template>