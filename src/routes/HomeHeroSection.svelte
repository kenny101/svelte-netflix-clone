<script lang="ts">
	export let reversedRow = false;

	let flexDirection = reversedRow ? 'md:flex-row' : 'md:flex-row-reverse';
</script>

<section class="flex flex-col {flexDirection} md:m-10 justify-center items-center">
	<div class="flex flex-col justify-center text-center md:w-2/5 md:text-left md:p-10 gap-y-3 p-5">
		<h1 class="h1 font-semibold">
			<slot name="title" />
		</h1>

		<p class="w-full text-center text-md md:text-left md:text-lg">
			<slot name="description" />
		</p>
	</div>

	<div>
		<slot name="image" />
	</div>
</section>

<hr class="h-2 w-full bg-zinc-900 mt-10" />
