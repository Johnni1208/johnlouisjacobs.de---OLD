<template>
    <nuxt-link :href="link" :to="link" :class="['btn', btnType]">{{ text }}</nuxt-link>
</template>

<script>
export default {
    props:['type', 'text', 'link'],

    computed: {
        btnType: function(){
            return{
                'btn-normal': this.type == 'normal',
                'btn-important': this.type == 'important'
            }
        }
    }
}
</script>
