<script>
    import * as Card from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
</script>

<div class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex flex-row items-center w-full gap-28">
        <div class="flex flex-col gap-5 ml-auto">
            <div class="font-black text-center">
                <h1 class="text-4xl">Follow the</h1>
                <h1 class="text-6xl">Trace</h1>
            </div>
            <div class="font-semibold leading-loose max-w-xs text-center">
                Track dangerous actors and automatically trigger punishments
                before they can harm your community
            </div>
            <div class="text-center">
                <Button>Don't miss any detail</Button>
            </div>
        </div>
        <div class="flex flex-col gap-3 max-w-md mr-auto">
            <Card.Root class="p-5 rounded-full">
                <Badge class="mr-1">Player</Badge> joined with account
            </Card.Root>
            <Card.Root class="p-5 rounded-full">
                <Badge class="mr-1">Player</Badge> got flagged for toxicity
            </Card.Root>
            <Card.Root class="p-5 rounded-full">
                <Badge class="mr-1">Player</Badge> was automatically punished
            </Card.Root>
            <Card.Root class="p-5 rounded-full">
                <Badge class="mr-1">Player</Badge> tried to connect with an alt account
            </Card.Root>
        </div>
    </div>
</div>
