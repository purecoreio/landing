<template>
  <div>
    <div style="height:400px; position: relative">
      <VueMatrixRaindrop
        :canvasHeight="300"
        :canvasWidth="width"
        :speed="2"
        textColor="#448aff"
        backgroundColor="rgba(255,255,255,0.3)"
        style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.3"
      />
      <v-row
        style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px"
        align="center"
      >
        <v-col cols="12">
          <center>
            <h1 class="primary--text" style="font-size: 500%">
              <u>
                <i>GRS</i>
              </u>
            </h1>
            <h1 class="primary--text">
              <i>
                <u>G</u>LOBAL
                <u>R</u>EPUTATION
                <u>S</u>YSTEM
              </i>
            </h1>
          </center>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-container style="max-width: 600px; transform: translateY(-50px)">
        <v-list color="transparent">
          <v-card v-for="feature in featureList" :key="feature.name" class="pa-4 mb-4" hover>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{feature.name}}</v-list-item-title>
                <v-list-item-subtitle>{{feature.description}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar>
                <v-img :src="feature.img" />
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-list>
      </v-container>
    </div>
  </div>
</template>


<script>
import VueMatrixRaindrop from "vue-matrix-digit-rain";
export default {
  components: {
    VueMatrixRaindrop
  },
  computed: {
    width: function() {
      return window.innerWidth;
    }
  },
  data() {
    return {
      featureList: [
        {
          name: "Alt detection",
          description:
            "Automatically detect connections from the same device and block them",
          img: "/features/punishments/account.svg"
        },
        {
          name: "Point Based",
          description:
            "Actions are automatically executed by the system based on the negative behavior points, providing objective punishments",
          img: "/features/punishments/point.svg"
        },
        {
          name: "Appeal System",
          description:
            "Complete appeal system and panel for players and staff members",
          img: "/features/punishments/feedback.svg"
        },
        {
          name: "Probabilistic",
          description:
            "Prevent toxic behavior before it happens",
          img: "/features/punishments/suggestion.svg"
        },
        {
          name: "Optional",
          description:
            "You don't need to use it",
          img: "/features/punishments/link-broken.svg"
        }
      ]
    };
  }
};
</script>