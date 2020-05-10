<template>
    <div>
        <!-- NAVBAR -->
        <NavbarSection 
            :currentPage="currentPage"
        ></NavbarSection>

        <!-- SLIDER -->
        <div class="slider" id="sliderLandingPage">
            <ul class="slides">
                <li>
                    <img src="../../img/titleSlider/1.jpg">
                    <div class="caption left-align">
                        <h3 class="grey-text text-lighten-3">Welcome to MUVI!</h3>
                        <h5 class="light grey-text text-lighten-3">your primary source of happiness</h5>
                    </div>
                </li>
                <li>
                    <img src="../../img/titleSlider/2.jpg">
                    <div class="caption right-align">
                        <h3 class="grey-text text-lighten-3">Audrey Hepburn</h3>
                        <h5 class="light grey-text text-lighten-3">“Everything I learned I learned from the movies.”</h5>
                    </div>
                </li>
                <li>
                    <img src="../../img/titleSlider/3.jpg">
                    <div class="caption left-align">
                        <h3 class="grey-text text-lighten-3">Anthony Burgess</h3>
                        <h5 class="light grey-text text-lighten-3">“It's funny how the colors of the real world only seem really real when you watch them on a screen.”</h5>
                    </div>
                </li>
                <li>
                    <img src="../../img/titleSlider/4.jpg">
                    <div class="caption right-align">
                        <h3 class="grey-text text-lighten-3">Roger Ebert</h3>
                        <h5 class="light grey-text text-lighten-3">“It's not what a movie is about, it's how it is about it.”</h5>
                    </div>
                </li>
                <li>
                    <img src="../../img/titleSlider/5.jpg">
                    <div class="caption left-align">
                        <h3 class="grey-text text-lighten-3">Martin Scorsese</h3>
                        <h5 class="light grey-text text-lighten-3">“Cinema is a matter of what's in the frame and what's out”</h5>
                    </div>
                </li>
                <li>
                    <img src="../../img/titleSlider/6.jpg">
                    <div class="caption right-align">
                        <h3 class="grey-text text-lighten-3">Maria Tusar</h3>
                        <h5 class="light grey-text text-lighten-3">"Film is a great tool to play with human emotions and thoughts"</h5>
                    </div>
                </li>
            </ul>
        </div>

        <!-- LOGIN FORM -->
        <section id="loginForm">
            <div class="container">
                <div class="row">
                    <div class="col m4 center valign-wrapper">
                        <div class="container center">
                            <h5>Log In with Google</h5>
                        </div>
                    </div>
                    <div class="col m8">
                        <h4 class="center blue-text text-darken-2">Login</h4>
                        <div class="input-field">
                            <input id="email" v-model="user.email" type="email" class="validate" required>
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field">
                            <input id="password" v-model="user.password" type="password" class="validate" required>
                            <label for="password">Password</label>
                        </div>
                        <button type="submit" class="btn blue darken-3" @click="loginUser">Login</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <FooterSection>
        </FooterSection>
    </div>
</template>

<script>
import NavbarSection from '../components/navbar'
import FooterSection from '../components/footer'

export default {
    name: 'landingPage',
    components: {
        NavbarSection, FooterSection
    },
    props: ['currentPage'],
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        loginUser() {
            let user = this.user
            this.$emit('loginUser', user)
        }
    }
}
</script>

<style>

</style>