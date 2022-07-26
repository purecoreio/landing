<template>
    <v-container class="mt-10">
        <v-row>
            <v-col cols="12" md="7" style="font-size:24px">
                <h1>Oops!</h1>
                I'm currently working on this page, since <b>I'm prioritizing dashboard and backend development way
                    more than the landing page</b>, this may take a while, specially since:
                <ul class="my-6">
                    <li>This is a huge project</li>
                    <li>I'm the only one working on this project</li>
                    <li>I'm currently getting an university degree</li>
                    <li>I have a job</li>
                </ul>
                Please, consider donating, contributing or just sharing purecore with friends
                <div class="mt-6">
                    <a href="https://buymeacoffee.com/happy/">
                        <v-btn style="display:inline-block" size="large" variant="flat" color="black">
                            Buy Me a Pizza 🍕 <span v-if="easterEgg">, Please, I Really Like Pizza 🥺</span>
                        </v-btn>
                    </a>
                    <router-link style="text-decoration:none;font-size:initial;color:black" class="ml-3" to="/">
                        Go back
                    </router-link>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        easterEgg: false
    }),
    mounted() {
        setTimeout(() => {
            this.easterEgg = true
        }, 1000 * 10);
    }
}
</script>