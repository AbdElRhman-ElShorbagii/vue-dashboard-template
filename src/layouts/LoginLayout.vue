<template>
  <!-- <v-app id="login" class="secondary"> -->
  <v-main>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 md6 lg6>
          <v-card class="elevation-2 pa-3">
            <v-row>
              <v-col>
                <v-card-text>
                  <div class="layout column align-center">
                    <img src="@/assets/logo.png" alt="iSchool" width="180" height="180" />
                    <h2 class="flex my-4 primary--text">Welcome Back!</h2>
                  </div>
                  <v-form @submit.prevent="login">
                    <v-text-field
                      append-icon="person"
                      name="login"
                      label="Email"
                      v-model="email"
                      :error="error"
                      :rules="[rules.required]"
                    />
                    <v-text-field
                      :type="hidePassword ? 'password' : 'text'"
                      :append-icon="
                        hidePassword ? 'visibility_off' : 'visibility'
                      "
                      name="password"
                      label="Password"
                      id="password"
                      :rules="[rules.required]"
                      v-model="password"
                      :error="error"
                      @click:append="hidePassword = !hidePassword"
                    />
                    <v-spacer></v-spacer>
                    <v-btn
                      block
                      color="primary"
                      type="submit"
                      to="/dashboard"
                      >Login</v-btn
                    >
                  </v-form>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
  <!-- </v-app> -->
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      email: "",
      password: "",
      hidePassword: true,
      error: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
};
</script>

<style scoped lang="css">
.div-wrapper {
    position: relative;
    height: 130px;
    width: 150px;
    display: flex;
    align-items: flex-end;
}
.div-wrapper img {
  height: 130px;
    width: 150px;
    position: absolute;
   
}
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
