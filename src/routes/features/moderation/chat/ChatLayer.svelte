<script>
    import Message from "./Message.svelte";
    import { Parallax, ParallaxLayer } from "svelte-parallax";
</script>

<Parallax sections={15} config={{ stiffness: 0.2, damping: 1 }}>
    <div class="flex flex-col gap-20">
        {#each Array(15) as _, i}
            <div>
                <ParallaxLayer rate={Math.random()}>
                    <Message />
                </ParallaxLayer>
            </div>
        {/each}
    </div>
</Parallax>
