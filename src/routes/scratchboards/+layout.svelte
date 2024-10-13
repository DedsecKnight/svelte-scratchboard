<script>
	import { Button } from '@/components/ui/button';
</script>

<div class="flex flex-col gap-y-3 p-3">
	<div class="w-fit">
		<Button href="/" variant="outline">Back to home page</Button>
	</div>
	<slot></slot>
</div>
