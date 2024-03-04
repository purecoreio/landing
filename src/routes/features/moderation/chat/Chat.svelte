<script>
    import ChatLayer from "./ChatLayer.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="relative">
    <div class="h-screen w-full absolute overflow-hidden top-0">
        <div
            class="absolute top-0 w-full max-h-32 h-full bg-gradient-to-t from-transparent to-white dark:to-black z-20"
        />
        <div
            class="absolute bottom-0 w-full max-h-32 h-full bg-gradient-to-b from-transparent to-white dark:to-black z-20"
        />
        <div class="relative z-10">
            <ChatLayer />
        </div>
        <div class="absolute top-0 w-full h-full blur-md z-0">
            <ChatLayer />
        </div>
    </div>
    <div class="relative h-screen z-30">
        <div
            class="w-full h-full max-w-md mx-auto text-center z-40 flex flex-col gap-5 items-center justify-center"
        >
            <div>
                <h1 class="font-black text-5xl">Toxicity</h1>
                <h1 class="font-black text-6xl">Reports</h1>
            </div>
            <span class="text-xl font-semibold">
                Toxicity flagging with the power
                <span class="font-black"> AI </span>
            </span>
            <div class="font-medium leading-relaxed">
                In addition to chat activity analytics, serverbench offers an
                opt-in service for automatic toxicity flagging. Toxicity
                flagging uses
                <a
                    target="_blank"
                    class="underline"
                    href="https://perspectiveapi.com/">perspectiveapi.com</a
                > under the hood to detect toxic messages aimed specifically to other
                players, while allowing swearing on mature communities.
            </div>
            <Button>Make Your Community Safer</Button>
        </div>
    </div>
</div>
