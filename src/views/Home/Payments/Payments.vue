<template>
  <div>
    <v-card hover class="pa-4 mb-4" style="height: 150px">
      <v-layout class="fill-height" justify-center align-center>
        <center>
          <h1>Secure Payments</h1>
          <p>purecore is always using the latest integrations</p>
        </center>
      </v-layout>
    </v-card>
    <v-row>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Transaction Verification</h1>
              <p>your customer's transactions doesn't get verified until they get the product</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="50px" contain src="../../../assets/verified.svg" />
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
              <v-img width="100px" src="../../../assets/apple-pay.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <h1>Digital Wallets</h1>
              <p>use Google Pay, Apple Pay, Microsoft Pay, Samsung Pay and others</p>
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
              <h1>No Redirections</h1>
              <p>the payment logic is handled inside your checkout component, so your users stay on your site and complete the payment faster</p>
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="6">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="60px" src="../../../assets/link-broken.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="4">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="100px" src="../../../assets/stripe.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="4">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="100px" src="../../../assets/paypal.svg" />
            </center>
          </v-layout>
        </v-card>
      </v-col>
      <v-col style="height:200px" class="fill-height hidden-sm-only" cols="12" sm="12" md="4">
        <v-card hover class="pa-4 mb-2 fill-height">
          <v-layout class="fill-height" justify-center align-center>
            <center>
              <v-img width="100px" src="../../../assets/coinbase.svg" />
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
  name: "paymentssection",
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
