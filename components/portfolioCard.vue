<template>
    <div class="card">

        <h1 v-if="title != null">{{ title }}</h1>
        <h2 v-if="subtitle != null">{{ subtitle }}</h2>

        <img class="showcase-image" v-if="this.img != null" :src="'img/' + img" :alt="alt">

        <p><slot></slot></p>

    </div>
</template>

<script>
export default {
    props: ['title', 'subtitle', 'color', 'img', 'alt'],

}
</script>

<style lang="scss" scoped>
    .card{
        height: 100%;
        margin-bottom: 10px;
        background: white;
        border-bottom-right-radius: 25px;
        border-top-right-radius: 25px;
        border-left: solid 5px #20C38B;
        padding: 20px 30px;
        box-shadow: 3px 4px 5px rgba($color: black, $alpha: .39);
        font-family: 'Roboto', sans-serif;
    }

    h1{
        margin-top: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 100;
        color: #4C4C4C;
        font-size: 2.5em;
        text-align: left;
    }

    h2{
        margin-top: -20px !important;
        margin-bottom: 15px;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        font-weight: 100;
        font-size: 1.25em;
        margin-left: 3px;
    }

    p{
        text-align: left;
    }

    .showcase-image{
        margin-bottom: 10px;
        height: 200px;
        width: auto;
    }

    


</style>

