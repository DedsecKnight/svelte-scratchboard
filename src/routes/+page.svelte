<script lang="ts">
	import ScratchboardTable from '$lib/components/index/scratchboard-table.svelte';
	import { data as scratchboards } from '$lib/data/scratchboards';
</script>

<div class="p-6">
	<div>
		<h1 class="text-2xl font-bold tracking-tight">My Svelte Scratchboard</h1>
		<p class="text-muted-foreground">Here's a list of scratchboards you created!</p>
		<div class="my-4">
			<ScratchboardTable {scratchboards} />
		</div>
	</div>
</div>
