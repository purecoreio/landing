<script>
    import Fa from "svelte-fa";
    import {
        faTiktok,
        faYoutube,
        faTwitch,
    } from "@fortawesome/free-brands-svg-icons";
    import vid1 from "$lib/images/vid1.webp";
    import vid2 from "$lib/images/vid2.webp";
    import vid3 from "$lib/images/vid3.webp";
    import { Parallax, ParallaxLayer } from "svelte-parallax";
</script>

<div class="relative h-screen">
    <div class="relative h-full w-full z-10">
        <div class="h-full flex flex-col items-center justify-center">
            <div class="max-lg flex flex-col gap-5">
                <div class="font-black text-center">
                    <h1 class="text-3xl">Get Some</h1>
                    <h1 class="text-6xl">Popcorn</h1>
                </div>
                <div class="font-semibold leading-loose max-w-sm text-center">
                    Enjoy amazing content created by your own players, and
                    reward them by uploading videos about your community,
                    automatically suggesting videos to your members, and keeping
                    track of delivered players.
                </div>
                <div
                    class="flex flex-row items-center justify-center gap-7 text-2xl"
                >
                    <Fa icon={faTiktok} />
                    <Fa icon={faYoutube} />
                    <Fa icon={faTwitch} />
                </div>
            </div>
        </div>
    </div>
    <div class="absolute w-full h-full top-0">
        <Parallax sections={3} config={{ stiffness: 0.2, damping: 0.4 }}>
            <div class="mx-auto w-full relative max-w-7xl">
                <div class="flex flex-col">
                    {#each [vid1, vid2, vid3] as vid, i}
                        <ParallaxLayer
                            rate={(i == 2 ? 2.5 : i) / 10}
                            offset={(i == 2 ? 3 - 1.5 : i) / 3 + 0.1}
                        >
                            <div
                                class:ml-20={i == 0}
                                class:ml-auto={i >= 1}
                                class:mr-10={i == 1}
                                class:mr-20={i == 2}
                                class:max-w-xs={i == 1}
                                class:max-w-sm={i != 1}
                                class:blur-sm={i != 1}
                                class:blur-md={i == 1}
                                class="aspect-video rounded-xl bg-opacity-5 overflow-hidden border shadow opacity-25"
                            >
                                <img src={vid} class="w-full h-full" alt="" />
                            </div>
                        </ParallaxLayer>
                    {/each}
                </div>
            </div>
        </Parallax>
    </div>
</div>
