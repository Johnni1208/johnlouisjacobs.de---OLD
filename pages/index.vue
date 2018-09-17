<template>
    <div class="section">
        <div class="animated fadeInUp">
            <div>
                <h1 class="title">John-Louis Jacobs</h1>
                <h2 class="subtitle">Programmierer & Designer</h2>
            </div>
            
                <div class="content">
                    <div class="columns">
                            <div class="column unselectable">
                                <cButton type="normal" text="Über mich" link="/about"></cButton>
                            </div>
                            <div class="column unselectable" id="kontakt">
                                <cButton type="important" text="Kontakt" link="/kontakt"></cButton>
                            </div>
                            <div class="column unselectable">
                                <cButton type="normal" text="Portfolio" link="/portfolio"></cButton>
                            </div>
                        
                    </div>
                </div>
            
        </div>
    </div>
</template>

<script>
import cButton from '~/components/cbutton.vue'

export default {
    
    components: {
        cButton
    },

    head(){
        return{
            title: 'John-Louis Jacobs - Programmierer'
        }
    }
}
</script>

<style>

   

</style>
