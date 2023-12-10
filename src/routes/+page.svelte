<script lang="ts">
	import PopcornImage from '$lib/assets/popcorn.svg';
	import TVImage from '$lib/assets/tv.png';
	import MobileDownloadImage from '$lib/assets/mobile-downloading.jpg';
	import KidShowsImage from '$lib/assets/kids-shows.png';
	import DevicePileImage from '$lib/assets/device-pile.png';
	import Icon from '@iconify/svelte';
	import HomeHeroSection from './HomeHeroSection.svelte';
	import SignupActionInput from './SignupActionInput.svelte';
	import QuestionsSection from './QuestionsSection.svelte';
	// import NetflixDemo from '$lib/assets/netflix-demo-video.m4v';
</script>

<svelte:head>
	<title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
</svelte:head>

<header
	class="relative w-full bg-cover bg-center flex justify-center items-center bg-gradient-hero"
>
	<div class="flex flex-col items-center justify-center space-y-8 h-96 p-6 my-40">
		<div class="flex flex-col text-center space-y-4">
			<h1 class="h1 font-bold tracking-tight">Unlimited movies, TV shows, and more</h1>
			<h2 class="h3 tracking-tight">Watch anywhere. Cancel anytime.</h2>
		</div>
		<SignupActionInput />
	</div>
</header>

<div class="relative w-full p-2 md:h-6 md:px-10 md:-top-24">
	<div
		class="flex justify-center items-center rounded-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 via-blue-950 to-slate-950"
	>
		<div class="flex justify-center items-center gap-4 p-6">
			<img class="md:block hidden" src={PopcornImage} alt="Popcorn" />
			<div class="relative flex flex-col space-y-2">
				<img class="md:hidden absolute -top-24" src={PopcornImage} alt="Popcorn" />
				<p class="h3 font-semibold">The Netflix you love for just $6.99.</p>
				<p class="">Get the Standard with ads plan.</p>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="my-2 underline flex items-center text-blue-600 hover:text-blue-800" href="#"
					>Learn More <Icon icon="mingcute:right-fill" class="text-2xl" /></a
				>
			</div>
		</div>
	</div>
</div>

<HomeHeroSection>
	<svelte:fragment slot="title">Enjoy on your TV</svelte:fragment>

	<svelte:fragment slot="description">
		Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
	</svelte:fragment>

	<svelte:fragment slot="image">
		<img src={TVImage} alt="TV" />
	</svelte:fragment>
</HomeHeroSection>

<HomeHeroSection reversedRow={true}>
	<svelte:fragment slot="title">Watch everywhere</svelte:fragment>

	<svelte:fragment slot="description">
		Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
	</svelte:fragment>

	<svelte:fragment slot="image">
		<img src={DevicePileImage} alt="Pile of devices" />
	</svelte:fragment>
</HomeHeroSection>

<HomeHeroSection>
	<svelte:fragment slot="title">Create profiles for kids</svelte:fragment>

	<svelte:fragment slot="description">
		Send kids on adventures with their favorite characters in a space made just for them—free with
		your membership.
	</svelte:fragment>

	<svelte:fragment slot="image">
		<img src={KidShowsImage} alt="Cartoon girl, boy, and bunny" />
	</svelte:fragment>
</HomeHeroSection>

<HomeHeroSection reversedRow={true}>
	<svelte:fragment slot="title">Download your shows to watch offline</svelte:fragment>

	<svelte:fragment slot="description">Watch on a plane, train, or submarine...</svelte:fragment>

	<svelte:fragment slot="image">
		<img src={MobileDownloadImage} alt="Mobile phone downloading stranger things TV show'" />
	</svelte:fragment>
</HomeHeroSection>

<QuestionsSection />

<SignupActionInput />

<hr class="h-2 w-full bg-zinc-900 mt-10" />

<footer class="flex flex-col p-5 md:px-40">
	<p>Questions? Call <a href="tel:1-844-505-2993" class="underline">1-844-505-2993</a></p>
</footer>
