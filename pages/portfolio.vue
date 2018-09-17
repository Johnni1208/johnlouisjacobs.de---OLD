<template>
    <div class="section">
        <div class="container">
            <div class="level">
                <div class="level-left">
                    <cButton type="normal" text="home" link="/" class="level-item"></cButton>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-quarter flex">
                    <card title="Portfolio" class="content-card" color="important" id="title-card">
                        <div class="flex full-height">
                            <p class="article">
                                Dies ist eine kleine Auflistung von Projekten an denen ich arbeite oder gearbeitet habe.
                                Viele von ihnen habe ich in meiner Freizeit gemacht!
                            </p>
                        </div>
                        <div id="codepen-icon">
                            <a href="https://codepen.io/johnni1208/" target="_blank">
                                <span class="icon is-large">
                                    <i class="fab fa-codepen fa-4x"></i>
                                </span><br>
                                Kleine Dinge
                            </a>
                        </div>
                    </card>
                </div>

                <div class="column is-three-quarters">
                    <div class="columns">
                        <div class="column is-two-fifths">
                            <portfolio-card title="Ecole-App" subtitle="für Android" img="ecole_app.png" alt="Ecole-App Screenshot" class="content">
                                Diese App habe ich innerhalb von 3 Monaten gemacht, am Anfang meiner Android Entwickler
                                Karriere.
                                <br><br>
                                <b>Funktionen:</b>
                                <ul>
                                    <li>Vertretungsplan begutachten</li>
                                    <li>Mittagessen bestellen</li>
                                </ul>
                                
                                <div class="level">
                                    <div class="level-item column is-half-desktop">
                                        <a href="https://play.google.com/store/apps/details?id=com.johnlouisjacobs.ecolemobile" target="_blank">
                                            <img src="img/get-it-on-google-play.png" id="get-it-on-img flex">
                                        </a>
                                       <i>*Passwort erforderlich</i>
                                    </div>
                                </div>
                                
                            </portfolio-card>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import cButton from '~/components/cbutton.vue';
import Card from '~/components/card.vue';
import portfolioCard from '~/components/portfolioCard.vue';

export default {
    components: {
        cButton,
        Card,
        portfolioCard
    },

    head(){
        return{
            title: 'John-Louis Jacobs - Portfolio'
        }
    }
}
</script>

<style lang="scss" scoped>
    .full-height{
        height:  60%;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    #title-card{
        font-family: 'Montserrat', sans-serif;
    }

    #codepen-icon a{
        color: #20C38B;
        
    }
    

    #codepen-icon a:hover{
        color: #18966B;
    }

    #get-it-on-img{
        height: auto;
        width: 50% !important;
    }
    
</style>

