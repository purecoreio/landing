<script>
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import { Button } from "$lib/components/ui/button";
	import Media from "./features/marketing/Media.svelte";
	import Voting from "./features/marketing/Voting.svelte";
	import Timeline from "./features/moderation/Timeline.svelte";
	import Chat from "./features/moderation/chat/Chat.svelte";
</script>

<div class="fixed top-0 w-full z-50">
	<div
		class="rounded-full mt-5 border max-w-md py-2 px-3 flex flex-row justify-between items-center mx-auto bg-white dark:bg-black dark:bg-opacity-40 bg-opacity-40 backdrop-blur-lg z-30"
	>
		<div class="flex flex-row items-center gap-2">
			<span class="font-bold text-lg ml-2"> serverbench </span>
			<!-- <Badge>beta</Badge> -->
		</div>
		<Button
			href="https://console.serverbench.io/"
			variant="secondary"
			class="rounded-full">Go To Console</Button
		>
	</div>
</div>
<Media />
<Voting />
<Chat />
<Timeline />
<div class="text-center py-10">
	&copy; serverbench {new Date().getFullYear()}, a product by nominal.
	<br />
	<a target="_blank" class="underline" href="https://nominal.es/legal"
		>privacy policy & terms of service.</a
	>
</div>
