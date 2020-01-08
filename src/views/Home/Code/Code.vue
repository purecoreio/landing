<template>
  <div>
    <v-card hover class="pa-4 mb-4">
      <center>
        <h1>Code Simplified</h1>
        <p>purecore is open source, always updated and using the best technologies</p>
        <v-divider class="mb-4" />
        <v-img
          class="ma-1"
          style="display: inline-block;"
          width="60px"
          height="60px"
          contain
          :src="item.logo"
          v-for="item in langs"
          :key="item.name"
        />
      </center>
    </v-card>
    <v-row>
      <v-col style="height:300px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Easy To Update</h1>
              <p>purecore source code is distributed through public package managers</p>
              <v-divider class="mb-4" />
              <v-img
                class="ma-1"
                style="display: inline-block;"
                width="60px"
                height="60px"
                contain
                :src="item.logo"
                v-for="item in packagemanager"
                :key="item.name"
              />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:300px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Compatible</h1>
              <p>compatible with the technologies you love</p>
              <v-divider class="mb-4" />
              <v-img
                class="ma-1"
                style="display: inline-block;"
                width="60px"
                height="60px"
                contain
                :src="item.logo"
                v-for="item in frameworks"
                :key="item.name"
              />
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
  name: "codesection",
  data: () => {
    return {
      langs: [
        {
          name: "Java",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
        },
        {
          name: "JavaScript",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
        },
        {
          name: "Kotlin",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin-logo.svg"
        },
        {
          name: "Swift",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg"
        },
        {
          name: "php",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/archive/2/27/20170921001719%21PHP-logo.svg"
        }
      ],
      packagemanager: [
        {
          name: "Maven",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Maven_logo.svg"
        },
        {
          name: "Composer",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/2/26/Logo-composer-transparent.png"
        },
        {
          name: "npm",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1024px-Npm-logo.svg.png"
        }
      ],
      frameworks: [
        {
          name: "Node.js",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
        },
        {
          name: "PaperMC",
          logo:
            "https://pbs.twimg.com/profile_images/739522529312669696/7LPaWi2f_400x400.jpg"
        },
        {
          name: "Docker",
          logo:
            "https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png?itok=sYH_JEaJ"
        }
      ]
    };
  }
};
</script>
