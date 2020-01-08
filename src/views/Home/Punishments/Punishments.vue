<template>
  <div>
    <v-card hover class="pa-4 mb-4" style="height: 150px">
      <v-layout class="fill-height" justify-center align-center>
        <center>
          <h1>Punishment System</h1>
          <p>purecore keep track of player behavior across all networks in an objetive way</p>
        </center>
      </v-layout>
    </v-card>
    <v-row>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>GRS</h1>
              <p>GRS (Global Reputation System) allows you to decide if players that didn't behave correctly on other networks get any punishments on yours, blocking potential hackers or toxic behavior</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="50px" contain src="../../../assets/filter.svg" />
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
              <v-img width="50px" contain src="../../../assets/point.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Behavior Points</h1>
              <p>automatically create punishments based on network behavior points</p>
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
              <h1>Appeals</h1>
              <p>Our appeal system lets you decide if a player should be forgiven for previous punishments</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="50px" contain src="../../../assets/heal.svg" />
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
              <v-img width="50px" contain src="../../../assets/report.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Report System</h1>
              <p>automatically create punishments based on network behavior points</p>
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
  name: "punishmentsection",
  data: () => {
    return {};
  }
};
</script>
