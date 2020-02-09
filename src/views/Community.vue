<template>
  <div>
    <v-sheet color="primary" class="pt-5 pb-5" dark tile>
      <v-row s align="center">
        <v-col cols="12">
          <center>
            <h1 style="font-size: 400%">
              <i>DISCORD</i>
            </h1>
            <h3>
              You're about to meet really
              <u>cool</u> people
            </h3>
          </center>
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet color="grey lighten-4">
      <v-content>
        <v-container style="max-width: 900px">
          <v-row align="center">
            <v-col cols="12" md="6">
              <iframe
                src="https://discordapp.com/widget?id=622819380958461984&theme=light"
                width="100%"
                height="500"
                allowtransparency="true"
                frameborder="0"
              ></iframe>
            </v-col>
            <v-col cols="12" v-if="$vuetify.breakpoint.mdAndUp" md="6">
              <v-img height="200px" contain src="../assets/bongo.gif" />
              <center>
                <h3>Please, be nice</h3>
                <h4>Sincerely, the bongo cat</h4>
              </center>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-sheet>
    <v-sheet class="pb-12" color="grey lighten-3">
      <v-content>
        <v-container style="max-width: 900px">
          <center>
            <h1>Want to support?</h1>
            <v-btn
              class="mt-4"
              outlined
              rounded
              color="primary"
              @click="$router.push('quiquelhappy')"
            >Learn more</v-btn>
          </center>
        </v-container>
      </v-content>
    </v-sheet>
  </div>
</template>