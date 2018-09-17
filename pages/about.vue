<template>
    <div class="section">
        <div class="container">
            <div class="level">
                <div class="level-left">
                    <cButton type="normal" text="home" link="/" class="level-item"></cButton>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <Card title="Über mich" img="cropped_personal.png" alt="Portrait von John-Louis Jacobs" class="content-card" color="important"/>                       
                    
                    <Card color="normal">
                        <div class="columns is-mobile">
                            <div class="column has-text-centered" id="container-twitter">
                                <a class="link" href="https://twitter.com/johnni1208" target="_blank">
                            <span class="icon is-large has-text-black">
                                <i class="fab fa-twitter fa-3x" id="icon-twitter"></i>
                            </span>
                                </a>
                            </div>
                            <div class="column has-text-centered" id="container-instagram">
                                <a class="link" href="https://www.instagram.com/einfach_john/" target="_blank">
                            <span class="icon is-large has-text-black">
                                <i class="fab fa-instagram fa-3x" id="icon-instagram"></i>
                            </span>
                                </a>
                            </div>
                            <div class="column has-text-centered" id="container-github">
                                <a class="link" href="https://github.com/Johnni1208">
                            <span class="icon is-large has-text-black">
                                <i class="fab fa-github fa-3x" id="icon-github"></i>
                            </span>
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>


                <div class="column is-three-quarters " >
                    <Card color="normal" class="content-card flex">
                        <p class="article" id="aboutContent">
                            <b>Hey</b>, <br>
                            Ich bin John-Louis Jacobs, {{ age }} Jahre alt. Zur Zeit lebe ich in einem kleinen Dorf in der
                            Nähe von
                            Magdeburg. <br>
                            Vor {{ age - 12 }} Jahren habe ich begonnen zu programmieren. Dies war damals
                            ziemlich schwer zu verstehen.
                            Oft wollte ich aufgeben, doch dies tat ich niemals. Ich machte weiter und nach vielem
                            Scheitern hatte ich nun endlich Erfolg.
                            Die ersten Programme liefen, die ersten <a
                                href="https://de.wikipedia.org/wiki/Hallo-Welt-Programm"
                                target="_blank"><code>Hello
                            World!</code></a>s kamen aus dem Computer.
                            Bis zu diesem Tag habe ich viele kleine, sowie auch <nuxt-link to="/portfolio"><i>große
                            Programme</i></nuxt-link> gemacht.<br>
                            Zur Zeit lerne ich die Sprache <a
                                href="https://de.wikipedia.org/wiki/Python_(Programmiersprache)" target="_blank">Python</a>.
                            <br><br>
                            Wenn du Fragen hast oder mit mir arbeiten willst
                            <nuxt-link v-bind:to="link"><i>kontaktiere mich!</i></nuxt-link>
                        </p>
                    </Card>
                    <card color="normal" id="skills-icons">
                        <div class="columns is-centered has-text-black">
                            <div class="column is-2">
                                <div class="columns is-clearfix items-centered flex">
                                    <div class="column is-pulled-left is-half-mobile">
                                        
                                    <span class="icon is-large">
                                        <i class="fab fa-android fa-3x"></i>
                                    </span>

                                        
                                    </div>
                                    <div class="column is-flex is-pulled-left has-text-centered is-half-mobile">
                                        <p><b>Android SDK</b></p>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-2">
                                <div class="columns is-clearfix items-centered flex">
                                    <div class="column is-pulled-left is-half-mobile">
                                        
                                    <span class="icon is-large">
                                        <i class="fab fa-java fa-3x"></i>
                                    </span>

                                        
                                    </div>
                                    <div class="column is-flex is-pulled-left has-text-centered is-half-mobile">
                                        <p><b>Java</b></p>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-2">
                                <div class="columns is-clearfix items-centered flex">
                                    <div class="column is-pulled-left is-half-mobile">
                                        
                                    <span class="icon is-large">
                                        <i class="fab fa-python fa-3x"></i>
                                    </span>

                                        
                                    </div>
                                    <div class="column is-flex is-pulled-left has-text-centered is-half-mobile">
                                        <p><b>Python</b></p>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-2">
                                <div class="columns is-clearfix items-centered flex">
                                    <div class="column is-pulled-left is-half-mobile">
                                        
                                    <span class="icon is-large">
                                        <i class="fab fa-html5 fa-3x"></i>
                                    </span>

                                        
                                    </div>
                                    <div class="column is-flex is-pulled-left has-text-centered is-half-mobile">
                                        <p><b>HTML</b></p>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-2">
                                <div class="columns is-clearfix items-centered flex">
                                    <div class="column is-pulled-left is-half-mobile">
                                        
                                    <span class="icon is-large">
                                        <i class="fab fa-css3-alt fa-3x"></i>
                                    </span>

                                        
                                    </div>
                                    <div class="column is-flex is-pulled-left has-text-centered is-half-mobile">
                                        <p><b>CSS3</b></p>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-2">
                                <div class="columns is-clearfix items-centered flex">
                                    <div class="column is-pulled-left is-half-mobile">
                                        
                                    <span class="icon is-large">
                                        <i class="fab fa-js-square fa-3x"></i>
                                    </span>

                                        
                                    </div>
                                    <div class="column is-flex is-pulled-left has-text-centered is-half-mobile">
                                        <p><b>Javascript<br>Vue.js</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cButton from '~/components/cbutton.vue';
import Card from '~/components/card.vue'

export default {
    data(){
        return{
            link: '/kontakt'
        }
    },

    computed: {
        age: function(){
            var birthday =  new Date('August 12, 2002'); //Birthdate
            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        
    },

    components: {
        cButton,
        Card
    },

    head(){
        return{
            title: 'John-Louis Jacobs - Über Mich'
        }
    }
}
</script>

<style lang="scss" scoped>
    
    #skills-icons{
        p{
            display: flex;
            align-items: center
        }
    }
 
    p{
       font-family: 'Roboto', sans-serif;
    }

    .article{
        text-align: left;
        padding: 50px;
    }

    @media screen and (max-width: 768px){
        .article{
            padding: 0;
        }
    }

</style>



