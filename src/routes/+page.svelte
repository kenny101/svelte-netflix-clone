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
	import LanguageSelect from './LanguageSelect.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	let links = [
		{ text: 'FAQ' },
		{ text: 'Help Center' },
		{ text: 'Account' },
		{ text: 'Media Center' },
		{ text: 'Investor Relations' },
		{ text: 'Jobs' },
		{ text: 'Netflix Shop' },
		{ text: 'Redeem Gift Cards' },
		{ text: 'Buy Gift Cards' },
		{ text: 'Ways to Watch' },
		{ text: 'Terms of Use' },
		{ text: 'Privacy' },
		{ text: 'Cookie Preferences' },
		{ text: 'Corporate Information' },
		{ text: 'Contact Us' },
		{ text: 'Speed Test' },
		{ text: 'Legal Notices' },
		{ text: 'Only on Netflix' },
		{ text: 'Do Not Sell or Share My Personal Information' },
		{ text: 'Ad Choices' }
	];
</script>

<svelte:head>
	<title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
</svelte:head>

<header
	class="relative w-full bg-cover bg-center flex justify-center items-center bg-gradient-hero"
>
	<div class="flex flex-col items-center justify-center space-y-8 h-96 p-6 my-40">
		<div class="flex flex-col text-center space-y-4">
			<h1 class="h1 font-extrabold tracking-tight">Unlimited movies, TV shows, and more</h1>
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

<HomeHeroSection reversedRow={true}>
	<svelte:fragment slot="title">Enjoy on your TV</svelte:fragment>

	<svelte:fragment slot="description">
		Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
	</svelte:fragment>

	<svelte:fragment slot="image">
		<div class="md:w-[667px] md:h-[500px] md:ml-20 h-[250px] w-[350px] relative ml-[60px]">
			<video autoplay muted loop class="md:h-[480px] md:w-[480px] h-[145px] w-[290px] mt-10">
				<track kind="captions" />
				<source
					src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
				/>
			</video>
			<img
				class="absolute w-full h-full object-cover md:-top-[0px] md:right-[91px] -top-[47px] right-[28px]"
				src={TVImage}
				alt="TV"
			/>
		</div>
	</svelte:fragment>
</HomeHeroSection>

<HomeHeroSection>
	<svelte:fragment slot="title">Watch everywhere</svelte:fragment>

	<svelte:fragment slot="description">
		Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
	</svelte:fragment>

	<svelte:fragment slot="image">
		<div class="md:w-[600px] md:h-[500px] md:mb-32 md:mr-20 h-[230px] w-[350px] relative">
			<video
				autoplay
				muted
				loop
				class="md:h-[480px] md:w-[410px] h-[123px] w-[230px] mx-auto mt-10"
			>
				<track kind="captions" />
				<source
					src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
				/>
			</video>
			<img
				class="absolute w-full h-full object-cover md:top-[75px] -top-[5px] right-[0px]"
				src={DevicePileImage}
				alt="TV"
			/>
		</div>
	</svelte:fragment>
</HomeHeroSection>

<HomeHeroSection reversedRow={true}>
	<svelte:fragment slot="title">Create profiles for kids</svelte:fragment>

	<svelte:fragment slot="description">
		Send kids on adventures with their favorite characters in a space made just for them—free with
		your membership.
	</svelte:fragment>

	<svelte:fragment slot="image">
		<img src={KidShowsImage} alt="Cartoon girl, boy, and bunny" />
	</svelte:fragment>
</HomeHeroSection>

<HomeHeroSection>
	<svelte:fragment slot="title">Download your shows to watch offline</svelte:fragment>

	<svelte:fragment slot="description">Watch on a plane, train, or submarine...</svelte:fragment>

	<svelte:fragment slot="image">
		<img src={MobileDownloadImage} alt="Mobile phone downloading Stranger Things TV show" />

		<div class="relative">
			<div
				class="absolute inset-x-0 mx-auto bottom-10 md:w-96 w-80 px-8 py-2 rounded-xl bg-black bg-opacity-80 border-gray-700 border-2"
			>
				<div class="flex flex-row justify-between items-center">
					<div class="flex flex-row space-x-3">
						<img
							class="h-12"
							src={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'}
							alt=""
						/>
						<div class="flex flex-col">
							Stranger Things
							<br />
							<span class="text-sm text-blue-500"> Downloading... </span>
						</div>
					</div>

					<ProgressRadial value={undefined} class="w-6" />
				</div>
			</div>
		</div>
	</svelte:fragment>
</HomeHeroSection>

<QuestionsSection />

<SignupActionInput />

<hr class="h-2 w-full bg-zinc-900 mt-10" />

<footer class="flex flex-col p-5 md:px-40 space-y-8 text-gray-300">
	<p>Questions? Call <a href="tel:1-844-505-2993" class="underline">1-844-505-2993</a></p>

	<ul class="grid grid-cols-2 md:grid-cols-4 gap-4">
		{#each links as { text }}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<li><a href="#" class="underline">{text}</a></li>
		{/each}
	</ul>

	<LanguageSelect />
</footer>
