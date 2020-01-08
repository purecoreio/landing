<template>
  <div>
    <v-card hover class="pa-4 mb-4" style="height: 150px">
      <v-layout class="fill-height" justify-center align-center>
        <center>
          <h1>Detailed Analytics</h1>
          <p>purecore keeps track of every small detail</p>
        </center>
      </v-layout>
    </v-card>
    <v-row>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="60px" src="../../../assets/session.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Connections</h1>
              <p>user connections are core to our system, and every game session can be analyzed individually</p>
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
              <h1>Growth</h1>
              <p>compare growth on every individual instance</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="60px" src="../../../assets/growth.svg" />
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
              <v-img width="60px" src="../../../assets/geolocation.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Geolocation</h1>
              <p>find out where are your players from</p>
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
              <h1>Feedback</h1>
              <p>create feedback forms for your players</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="60px" src="../../../assets/feedback.svg" />
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
              <v-img width="60px" src="../../../assets/suggestion.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Suggestions</h1>
              <p>let core offer content to your players automatically, such as store packages based on previous purchases on your network or on other networks</p>
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
              <h1>Game Integration</h1>
              <p>sync game advancements and stats</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="60px" src="../../../assets/games.svg" />
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
  name: "analyticssection",
  data: () => {}
};
</script>
