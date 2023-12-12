<script lang="ts">
	export let reversedRow = false;
</script>

<section class="flex flex-col {reversedRow ? 'md:flex-row' : 'md:flex-row-reverse'} md:m-10 justify-center items-center">
	<div class="flex flex-col justify-center text-center md:w-2/5 md:text-left md:p-10 gap-y-3 p-5">
		<h1 class="h1 font-black">
			<slot name="title" />
		</h1>

		<p class="w-full text-center h3 font-medium md:text-left">
			<slot name="description" />
		</p>
	</div>

	<div>
		<slot name="image" />
	</div>
</section>

<hr class="h-2 w-full bg-zinc-900 mt-10" />
