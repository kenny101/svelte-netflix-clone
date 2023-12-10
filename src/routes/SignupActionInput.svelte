<script lang="ts">
	import Icon from "@iconify/svelte";

</script>


<section class="flex flex-col text-center items-center justify-center space-y-4">
	<p class="text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
	<div class="md:flex sm:flex-row items-center justify-center">
		<input
			type="email"
			placeholder="Email Address"
			class="h-12 m-2 w-72 bg-black bg-opacity-50 rounded-md placeholder:text-white"
		/>
		<button class="btn variant-filled-primary font-bold h-12 sm:mt-2 md:m-0"
			>Get Started &nbsp;<Icon icon="mingcute:right-fill" class="text-2xl"/></button
		>
	</div>
</section>