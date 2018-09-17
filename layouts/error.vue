<template>
    <div class="section">
        <div class="container">
            <div v-if="error.statusCode === 404">
                <h1 class="title"><i>404</i></h1>
                <h2 class="subtitle">Die Seite die du gesucht hast ist leider nicht vorhanden!</h2>
            </div>
            <h1 v-else class="title">Ein Fehler ist aufgetreten.</h1>
            <div class="level">
                <div class="level-item is-2">
                    <nuxt-link to="/" class="btn btn-normal column is-one-quarter-desktop">Home</nuxt-link>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import cButton from '~/components/cbutton.vue';


export default {
    props: ['error'],

    data(){
        return{
            pageTitle : this.error.statusCode === 404 ? '404 - Seite nicht gefunden' : 'Ein Fehler ist aufgetreten'
        }
    },

    components: {
        cButton 
    },

    head(){
        return{
            title: this.pageTitle
        }
    }
}
</script>


<style scoped>
    .title{
        text-decoration: underline overline double
    }

</style>
