<template>
    <div>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand">Navbar</a>
              <div class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="store.searchBar" @keyup.enter="$emit('queryCheck')">
                <button class="btn btn-outline-success" type="submit" @click="$emit('queryCheck')">Search</button>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    import {store} from '../store.js';
    export default {
        name:'CompHeader',
        data(){
            return{
                store 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>