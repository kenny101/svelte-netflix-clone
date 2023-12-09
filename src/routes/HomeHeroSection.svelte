<script lang="ts">
	export let imageSource: string;
	export let imgAlt: string;
	export let description: string;
	export let title: string;
	export let reversedRow = false;

    let flexDirection = reversedRow ? "md:flex-row": "md:flex-row-reverse"
</script>

<section
	class="flex flex-col {flexDirection} md:mx-10 justify-center items-center"
>
	<div class="flex flex-col justify-center text-center md:w-2/5 md:text-left gap-y-3 pt-5">
		<h1 class="h1 font-semibold">{title}</h1>

		<p class="w-full text-center text-md md:text-left md:text-lg">
			{description}
		</p>
	</div>

	<div>
		<img src={imageSource} alt={imgAlt} />
	</div>
</section>

<hr class="h-2 w-full bg-zinc-900 mt-10" />
