<template>
  <div>
    <v-card hover class="pa-4 mb-4" style="height: 150px">
      <v-layout class="fill-height" justify-center align-center>
        <center>
          <h1>Website CMS</h1>
          <p>purecore offers a free website builder and CMS</p>
        </center>
      </v-layout>
    </v-card>
    <v-row>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Global Accounts</h1>
              <p>Automatically login players from Minecraft, without any commands or passwords (and without storing IPs!)</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="50px" contain src="../../../assets/account.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="50px" contain src="../../../assets/discord.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Discord Integration</h1>
              <p>allow your users to get their gaming sessions data from your Discord guild</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Themes</h1>
              <p>Click&install theme marketplace, buy, sell or gift themes</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="50px" contain src="../../../assets/brush.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="50px" contain src="../../../assets/forum.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Forum</h1>
              <p>setup a forum in seconds</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Modular Building</h1>
              <p>Vue.js-based structure allows you to implement other modules, such as advancement viewers, stats, or many more</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="50px" contain src="../../../assets/vue.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "websitesection",
  data: () => {
    return {};
  }
};
</script>
