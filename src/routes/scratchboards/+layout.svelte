<script>
	import { Button } from '@/components/ui/button';
	import ThemeToggler from '$lib/components/ui/button/theme-toggler.svelte';
</script>

<div class="flex flex-col gap-y-3 p-3">
	<div class="mx-10 flex items-center justify-between">
		<Button href="/" variant="outline">Back to home page</Button>
		<ThemeToggler />
	</div>
	<slot></slot>
</div>
