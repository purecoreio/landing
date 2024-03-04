<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import Card from "$lib/components/ui/card/card.svelte";
</script>

<div class="flex flex-col items-center justify-center gap-4 py-32">
    <div class="flex flex-row gap-20 items-center">
        <div class="flex flex-col gap-5 text-center">
            <div class="font-black">
                <h1 class="text-3xl">Improve Vote</h1>
                <h1 class="text-5xl">Engagement</h1>
            </div>
            <div class="max-w-xs font-semibold leading-loose">
                Voting is a very boring activity. It becomes repetitive. Make
                voting easier and more fun for your members.
            </div>
            <div>
                <Button>Improve Voting Engagement</Button>
            </div>
        </div>
        <div class="max-w-sm text-center font-semibold flex flex-col gap-3">
            <Card class="p-3">
                Voting rank progression bars with nice animations for instant
                dopamine.
            </Card>
            <Card class="p-3">
                Voting streak and leaderboard for long-term voting engagement.
            </Card>
            <Card class="p-3">
                Assisted voting upon closing a voting website without being able
                to vote.
            </Card>
            <Card class="p-3">
                Vote reminders so your members never skip a day.
            </Card>
        </div>
    </div>
</div>
<div class="flex flex-col items-center justify-center gap-4 py-32">
    <div class="flex flex-row gap-20 items-center">
        <div class="max-w-sm text-center font-semibold flex flex-col gap-3">
            <Card class="p-3">
                Aim for most players per vote to surface new voting sources.
            </Card>
            <Card class="p-3">
                Target most player volume for stable positions on large voting
                sites.
            </Card>
            <Card class="p-3">
                Get active players by filtering out voting sites with high
                bounce rates and low retention.
            </Card>
            <Card class="p-3">
                Increase your revenue with highly proffitable voting sites.
            </Card>
        </div>
        <div class="flex flex-col gap-5 text-center">
            <div class="font-black">
                <h1 class="text-3xl">Tune Your Growth</h1>
                <h1 class="text-5xl">Strategy</h1>
            </div>
            <div class="max-w-xs font-semibold leading-loose">
                Community listings are a key factor for getting new members. We
                will make sure your members vote on the right listings to get
                the most of each vote
            </div>
            <div>
                <Button>Get More Out Of Voting</Button>
            </div>
        </div>
    </div>
</div>
<div class="flex flex-col items-center justify-center py-32">
    <div class="flex flex-row gap-20 items-center">
        <div class="flex flex-col gap-5 text-center">
            <div class="font-black">
                <h1 class="text-3xl">Never Miss A</h1>
                <h1 class="text-5xl">Vote Again</h1>
            </div>
            <div class="max-w-xs font-semibold leading-loose">
                Keep your members happy by ensuring their time spent voting is
                rewarded, and never miss a vote again
            </div>
            <div>
                <Button>Get More Votes</Button>
            </div>
        </div>
        <div class="max-w-sm text-center font-semibold flex flex-col gap-3">
            <Card class="p-3">
                Managed 24/7 vote listener and vote caching when the destination
                server is not reachable.
            </Card>
            <Card class="p-3">
                Setup voting rewards directly on our console without the need of
                a listener on your server.
            </Card>
        </div>
    </div>
</div>
