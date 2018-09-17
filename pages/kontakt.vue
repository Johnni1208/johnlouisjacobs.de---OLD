<template>
    <div class="section">
        <div class="container">
            <div class="level flex">
                <div class="column is-one-third-desktop">
                    <cButton type="normal" text="home" link="/" class="level-item"></cButton>
                </div>
            </div>
            <div class="level" style="position: relative;">
                    <div class="loading-box flex">
                        <span class="icon is-large" id="loading-icon">
                            <i class="fas fa-hourglass-end fa-spin fa-5x"></i>
                        </span>


                        <div id="send" style="display: none;">
                            
                            <span class="icon is-large">
                                <i class="fab fa-telegram-plane fa-5x"></i>
                            </span>
                            <br>
                            <br>
                            <span class="response"></span>
                            <br>
                            <br>
                            <button class="btn btn-dark" id="ok-button" v-on:click="resetToDefaultMethod">OK</button>
                        </div>


                        <div id="response-field" style="position: absolute; display: none;">
                            <span class="icon is-large">
                                <i class="fas fa-exclamation-circle fa-5x"></i>
                            </span>
                            <br>
                            <br>
                            <span class="response"></span>
                            <br>
                            <br>
                            <button class="btn btn-dark" id="ok-button" v-on:click="resetToDefaultMethod">OK</button>
                        </div>
                    </div>
                

                <div class="level-item">
                    
                    <card id="card" color="important" title="E-Mail an mich senden">
                        <form v-on:submit.prevent="submitForm">
                            <div class="field">
                                <label for="Email" class="label">Deine Email-Adresse</label>
                                <div class="control">
                                    <input type="text" id="email" class="input" placeholder="me@example.de" required>
                                </div>
                            </div>

                            <div class="field">
                                <label for="Email" class="label">Betreff</label>
                                <div class="control">
                                    <input type="text" id="subject" class="input " placeholder="Worum geht's?" required>
                                </div>
                            </div>

                            <div class="field">
                                <label for="Email" class="label">Nachricht</label>
                                <div class="control">
                                    <textarea type="text" id="message" class="input" placeholder="Was möchtest du mir sagen?" rows="10" cols="50" required></textarea>
                                </div>
                            </div>

                            <div class="field">
                                <div class="field-body">
                                    <div class="field">
                                        <div class="control">
                                            <input type="submit" class="submit-button btn-important">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form> 
                    </card>

                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cButton from '~/components/cbutton.vue';
import Card from '~/components/card.vue';
import $ from 'jquery'
import qs from 'qs';

function startLoadAnimation(){
    $('.loading-box').css("display", "flex");
    $('#card').css("filter", "blur(5px)");
    $('#card').css("user-select", "none");
}

function resetToDefault(){
    $('#card').css("filter", "blur(0px)");
    $('#card').css("user-select", "all");
    $('.loading-box').hide();
    $('#loading-icon').show();
    $('#response-field').hide();
    $('#send').hide();
}

function showResponse(response){
    var responseData = response.data;
    $('#loading-icon').hide();
    $('.response').text(responseData);
    if(responseData != "Nachricht gesendet"){
        $('#response-field').show();
    }else{
        $('#response-field').hide();
        $('#send').show();
        $('#email').val('');
        $('#subject').val('');
        $('#message').val('');
    }
}



export default {
    components: {
        cButton,
        Card
    },

    methods: {
        async submitForm() {
            startLoadAnimation();
            
            var $email = $("#email").val();
            var $subject = $("#subject").val();
            var $message = $("#message").val();

            var dataString = {
                "email" : $email,
                "subject": $subject,
                "message": $message
            };

            await this.$axios({
                method:'post',
                url: 'https://johnlouisjacobs.de/api/send_mail.php',
                header: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: qs.stringify(dataString)
            })
                .then(function(response){
                    showResponse(response)
                })
        },

        // We need this so we can call the resetToDefault Method in here.
        resetToDefaultMethod(){
            resetToDefault();
        }
    }
}
</script>

<style scoped>
    form{
        text-align: left;
    }

    textarea{
        resize: none;
        min-height: 100px;
        max-height: 100px;
        
        max-width: initial;
    }

    .submit-button{
     color: white;
     text-transform: uppercase;
     text-decoration: none;
     font-family: 'Montserrat', sans-serif; 
     font-size: 1.25em;
     width: 100%;
     padding: 10px;
     display: block;
     box-sizing: border-box;
     border: none;
 }

 .loading-box{
     position: absolute;
     width: 100%;
     height: 100%;
     z-index: 100;
     display: none;
 }

 .response{
     font-family: 'Roboto', sans-serif;
     font-size: 1.5em;
 }


</style>

