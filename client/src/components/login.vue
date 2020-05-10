<template>
  <div>
    <form>
    <div class="form-group col-4">
        <label>Email address</label>
        <input type="email" class="form-control" v-model="email" required>
    </div>
    <div class="form-group col-4">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" required>
    </div>
    </form>
    <access
      :email="email"
      :password="password"
      @change_page="change_page"
    ></access>
  </div>
</template>

<script>
import access from './access'

export default {
    name: 'login',
    components :{
        access
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        change_page(page) {
            this.$emit('change_page', page)
        }
    }

}
</script>