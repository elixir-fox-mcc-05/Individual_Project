<template>
    <div>
        <!-- NAVBAR -->
        <NavbarSection>

        </NavbarSection>

        <!-- SLIDER -->
        <div class="slider" id="sliderLandingPage">
            <ul class="slides">
                <li>
                    <img src="../../img/titleSlider/1.jpg">
                    <div class="caption left-align">
                        <h3 class="grey-text text-lighten-3">This is our big Tagline!</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="../../img/titleSlider/2.jpg">
                    <div class="caption right-align">
                        <h3 class="grey-text text-lighten-3">This is our big Tagline!</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="../../img/titleSlider/3.jpg">
                    <div class="caption left-align">
                        <h3 class="grey-text text-lighten-3">This is our big Tagline!</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="../../img/titleSlider/4.jpg">
                    <div class="caption right-align">
                        <h3 class="grey-text text-lighten-3">This is our big Tagline!</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="../../img/titleSlider/5.jpg">
                    <div class="caption left-align">
                        <h3 class="grey-text text-lighten-3">This is our big Tagline!</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="../../img/titleSlider/6.jpg">
                    <div class="caption right-align">
                        <h3 class="grey-text text-lighten-3">This is our big Tagline!</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
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
                        <button type="submit" class="btn blue darken-3" @click.prevent="loginUser">Login</button>
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