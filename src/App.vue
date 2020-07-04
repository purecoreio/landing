<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
        <v-list-group
          v-for="item in navigation"
          :key="item.title"
          v-model="item.active"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            :to="subItem.link"
            v-for="subItem in item.links"
            :key="subItem.title"
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            href="https://purecore.io/dashboard/"
            outlined
            color="primary"
            block
            >dashboard</v-btn
          >
          <v-btn to="/" depressed class="mt-2" color="primary" block
            >home</v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar style="background-color:transparent" absolute elevation="0">
      <v-btn
        v-if="$vuetify.breakpoint.smAndDown"
        icon
        @click="drawer = true"
        color="primary"
        dark
      >
        <v-icon>menu</v-icon>
      </v-btn>
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-spacer></v-spacer>
        <v-container style="max-width: 1000px">
          <router-link
            style="text-decoration:none; margin-right:90px"
            class="primary--text"
            to="/"
          >
            purecore
          </router-link>
          <v-menu
            transition="slide-y-transition"
            class="mt-0 mb-0"
            v-for="item in navigation"
            :key="item.name"
            open-on-hover
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-btn
                large
                class="mb-1"
                style="text-transform: lowercase"
                rounded
                text
                v-on="on"
                >{{ item.name }}</v-btn
              >
            </template>
            <v-card class="pt-0 pb-0" style="width: 400px;">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-list class="pb-0 pt-0">
                    <v-list-item
                      v-ripple="{ class: `${subitem.color}--text light` }"
                      :three-line="'icon' in subitem"
                      @click="goTo(subitem.link)"
                      v-for="(subitem, i) in item.links"
                      :key="i"
                    >
                      <v-list-item-avatar v-if="'icon' in subitem" class="mt-6">
                        <v-avatar
                          class="pr-2"
                          :color="subitem.color + ' lighten-4'"
                        >
                          <v-icon :color="subitem.color + ' lighten-2'">
                            {{ subitem.icon }}
                          </v-icon>
                        </v-avatar>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title
                          :style="'icon' in subitem ? 'font-weight:600' : ''"
                          >{{ subitem.name }}</v-list-item-title
                        >
                        <v-list-item-subtitle :class="$vuetify.theme.dark ? 'white--text':'black--text'">{{
                          subitem.description
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon>arrow_forward</v-icon>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-card>
          </v-menu>

          <v-btn
            href="https://purecore.io/dashboard/"
            style="float: right; text-transform: lowercase; font-weight:700"
            class="mt-1"
            outlined
            rounded
            >Dashboard <v-icon class="ml-2">arrow_right_alt</v-icon></v-btn
          >
        </v-container>
        <v-spacer></v-spacer>
      </template>
    </v-app-bar>
    <v-content id="content" style="overflow-y: hidden">
      <transition
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
        name="fade"
      >
        <router-view />
      </transition>
    </v-content>
    <v-footer padless color="primary" dark>
      <v-row justify="center" no-gutters>
        <v-col cols="12">
          <v-sheet color="primary darken-1">
            <v-container style="max-width: 900px">
              <v-row>
                <v-col v-for="(section, i) in footerNavigation" :key="i">
                  <center>
                    <h3>{{ section.name }}</h3>
                  </center>
                  <v-btn
                    :to="link.link"
                    block
                    text
                    v-for="(link, i) in section.links"
                    :key="i"
                    >{{ link.name }}</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
        <v-col class="text-center pa-5" cols="12">
          2019 / {{ new Date().getFullYear() }} —
          <strong>quiquelhappy</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  methods: {
    goTo: function(val) {
      this.$router.push(val);
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split("/").length;
    const fromDepth = from.path.split("/").length;
    this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    next();
  },
  data() {
    return {
      drawer: null,
      footerNavigation: [
        {
          name: "Legal",
          description: "Legal boring stuff",
          links: [
            {
              name: "Privacy Notice",
              description: "Privacy Notice",
              link: "/legal/privacy",
            },
            {
              name: "Cookies",
              description: "Cookie policy",
              link: "/legal/cookies",
            },
            {
              name: "Website Terms",
              description: "Website Terms",
              link: "/legal/terms/website",
            },
            {
              name: "Service Terms",
              description: "Service Terms",
              link: "/legal/terms/service",
            },
          ],
        },
        {
          name: "Contact",
          description: "Contact",
          links: [
            {
              name: "Discord",
              description: "Discord link",
              link: "/community",
            },
            {
              name: "Dev Support",
              description: "Donation link",
              link: "/quiquelhappy",
            },
          ],
        },
      ],
      navigation: [
        {
          name: "Features",
          description:
            "Check out all the amazing features purecore has to offer",
          links: [
            {
              name: "Analytics",
              description:
                "Engagement, geolocation, performance and customer analysis",
              link: "/analytics",
              color: "red",
              icon: "bubble_chart",
            },
            {
              name: "Monetization",
              description: "Object-based store with a modern experience",
              link: "/monetization",
              color: "green",
              icon: "payment",
            },
            {
              name: "Social Tools",
              description:
                "Forum system, news service with push notification and Discord integration",
              link: "/social",
              color: "blue",
              icon: "chat",
            },
            {
              name: "CMS",
              description: "Vue.js web hosting with community modules",
              link: "/cms",
              color: "purple",
              icon: "edit",
            },
            {
              name: "GRS",
              description: "Smart and fair 'global reputation system'",
              link: "/grs",
              color: "teal",
              icon: "gavel",
            },
            {
              name: "Game Hosting",
              description:
                "Dedicated performance cores and self-hosting supervisor serivices",
              link: "/quiquelhappy",
              color: "orange",
              icon: "memory",
            },
          ],
        },
        {
          name: "Documentation",
          description: "Flexible api",
          links: [
            {
              name: "Friends API",
              description: "Connection node API",
              link: "/quiquelhappy",
            },
            {
              name: "Forums API",
              description: "Rich forum api",
              link: "/quiquelhappy",
            },
            {
              name: "Store API",
              description: "Modular store api",
              link: "/quiquelhappy",
            },
            {
              name: "Machine API",
              description: "Supervisor Docker interface",
              link: "/quiquelhappy",
            },
            {
              name: "Instance API",
              description: "Instance data api",
              link: "/quiquelhappy",
            },
          ],
        },
        {
          name: "Community",
          description: "Community forums",
          links: [
            {
              name: "Discord",
              description: "Chat with others",
              link: "/community",
            },
          ],
        },
        {
          name: "Pricing",
          description: "Pay-per-use, just like the pros",
          links: [
            {
              name: "Rates",
              description: "This service is mostly free",
              link: "/quiquelhappy",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Barlow&display=swap");
* {
  font-family: "Barlow", sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
