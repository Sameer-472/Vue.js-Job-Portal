<script setup>
import { ref } from 'vue';
            const name = ref('compostion API');
            const status = ref("active");
            const tasks = ref(['task one' , 'task two']);

            const toggleStatus = () => {
                if(status.value === 'active'){
                    status.value = 'inactive';
                }
                else {
                    status.value = "active";
                };
                
            }
</script>

<template>
        <h1>Current Status: {{status}}</h1>
        <button @click="toggleStatus">Click me</button>
</template>