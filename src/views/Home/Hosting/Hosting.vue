<template>
  <div>
    <v-card hover class="pa-4 mb-4" style="height: 150px">
      <v-layout class="fill-height" justify-center align-center>
        <center>
          <h1>Hosting Platform</h1>
          <p>purecore lets you deploy game servers fast and cheap</p>
        </center>
      </v-layout>
    </v-card>
    <v-row>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="60px" src="../../../assets/swap.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Machine Monitoring</h1>
              <p>add our supervisor to your machine and interact with it from your computer</p>
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
              <h1>Single-Thread Priority</h1>
              <p>popular games offer better performance when single-thread performance is really high, that's why our machines use Ryzen 7 processors</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="60px" src="../../../assets/cpu.svg" />
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
              <v-img width="60px" src="../../../assets/docker.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Blazing Fast Virtualization</h1>
              <p>deploy docker containers in seconds in our NVME machines, with high RAM capacity, offering blazing fast disk IOPS and amazing performance</p>
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
              <h1>Secure Access</h1>
              <p>64 bit hashes keep your machine from being accessed by other supervisor instances</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="60px" src="../../../assets/secure.svg" />
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
              <v-img width="60px" src="../../../assets/money.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Cheap</h1>
              <p>core allows other hosting providers to publish their machines on our hosting open marketplace, allowing you to get the best prices</p>
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
  name: "hostingsection",
  data: () => {}
};
</script>
