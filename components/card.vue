<template>
    <div class="card" :style="{borderLeft: 'solid 5px' + getBorderColor}">

        <h1 v-if="title != null">{{ title }}</h1>

        <img v-if="this.img != null" :src="'img/' + img" :alt="alt">

        <slot></slot>

    </div>
</template>

<script>
export default {
    props: ['title', 'color', 'img', 'alt'],

    computed:{

        /* 
         * Gets the border color acordingly to the given @color value.
         */
        getBorderColor: function(){
            switch(this.color){
                case 'normal':
                    return "#20C38B"
                    break;
                case 'important':
                    return "#5D52F8"
                    break;
            }
        }
    }

}
</script>

<style lang="scss" scoped>
    .card{
        margin-bottom: 10px;
        background: white;
        border-bottom-right-radius: 25px;
        border-top-right-radius: 25px;
        text-align: center;
        padding: 20px 30px;
        box-shadow: 3px 4px 5px rgba($color: black, $alpha: .39);
        font-family: 'Roboto', sans-serif;
    }

    h1{
        margin-top: 10px;
        font-family: 'Montserrat', sans-serif;
        font-variant: small-caps;
        font-weight: 100;
        color: #4C4C4C;
        font-size: 2.5em;
    }

    img{
        margin-bottom: 10px;
    }

    


</style>

