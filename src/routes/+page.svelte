<script lang="ts">
	import NetflixShowsImage from '$lib/assets/netflix-shows.jpg';
	import { Accordion, AccordionItem, AppBar, AppShell, focusTrap } from '@skeletonlabs/skeleton';
	import NetflixLogo from '$lib/assets/netflix-logo.svg';
	import PopcornImage from '$lib/assets/popcorn.svg';
	import TVImage from '$lib/assets/tv.png';
	import MobileDownloadImage from '$lib/assets/mobile-downloading.jpg';
	import KidShowsImage from '$lib/assets/kids-shows.png';
	import DevicePileImage from '$lib/assets/device-pile.png';
	import Icon from '@iconify/svelte';
	import HomeHeroSection from './HomeHeroSection.svelte';
	let isFocused: boolean = true;
</script>

<svelte:head>
	<title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
</svelte:head>

<header
	class="relative w-full bg-cover bg-center flex justify-center items-center"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/src/lib/assets/netflix-shows.jpg');"
>
	<div class="flex flex-col items-center justify-center space-y-8 h-96 p-6 my-40">
		<div class="flex flex-col text-center space-y-4">
			<h1 class="h1 font-bold tracking-tight">Unlimited movies, TV shows, and more</h1>
			<h2 class="h3 tracking-tight">Watch anywhere. Cancel anytime.</h2>
		</div>
		<div class="flex flex-col text-center items-center justify-center space-y-4">
			<p class="text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
			<div class="md:flex sm:flex-row items-center justify-center">
				<input
					use:focusTrap={isFocused}
					type="email"
					placeholder="Email Address"
					class="input h-12 m-2 w-64"
				/>
				<button class="btn variant-filled-primary font-bold h-12 sm:mt-2 md:m-0"
					>Get Started <Icon icon="mingcute:right-fill" /></button
				>
			</div>
		</div>
	</div>
</header>

<div class="w-full p-2 md:p-10">
	<div
		class="flex justify-center items-center rounded-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 via-blue-950 to-slate-950"
	>
		<div class="flex justify-center items-center gap-4 p-10 h-auto min-w-fit">
			<img class="md:block hidden" src={PopcornImage} alt="Popcorn" />
			<div class="relative flex flex-col space-y-2">
				<img class="md:hidden absolute -top-20 h-20" src={PopcornImage} alt="Popcorn" />

				<p class="h3 font-semibold">The Netflix you love for just $6.99.</p>
				<p class="">Get the Standard with ads plan.</p>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="my-2 underline flex items-center text-blue-600 hover:text-blue-800" href="#"
					>Learn More <Icon icon="mingcute:right-fill" /></a
				>
			</div>
		</div>
	</div>
</div>

<HomeHeroSection
	imageSource={TVImage}
	imgAlt={'TV'}
	title={'Enjoy on your TV'}
	description={'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'}
/>
<HomeHeroSection
	imageSource={DevicePileImage}
	imgAlt={'Pile of devices'}
	title={'Watch everywhere'}
	description={'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'}
	reversedRow={true}
/>
<HomeHeroSection
	imageSource={KidShowsImage}
	imgAlt={'Cartoon girl, boy, and bunny'}
	title={'Create profiles for kids'}
	description={'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'}
/>
<HomeHeroSection
	imageSource={MobileDownloadImage}
	imgAlt={'Mobile phone downloading stranger things TV show'}
	title={'Download your shows to watch offline'}
	description={'Watch on a plane, train, or submarine...'}
	reversedRow={true}
/>

<section class="flex flex-col justify-center items-center my-10">
	<h1 class="h1 font-semibold text-center">Frequently Asked Questions</h1>

	<div class="p-10 w-full space-y-3">
		<Accordion class=" bg-surface-400 rounded-md">
			<AccordionItem>
				<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
				<svelte:fragment slot="summary">
					<h2 class="h2 font-medium">What is Netflix?</h2>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p class="h4 my-2">
						Netflix is a streaming service that offers a wide variety of award-winning TV shows,
						movies, anime, documentaries, and more on thousands of internet-connected devices.
						<br />
						<br />
						You can watch as much as you want, whenever you want – all for one low monthly price. There's
						always something new to discover and new TV shows and movies are added every week!
					</p>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>

		<Accordion class=" bg-surface-400 rounded-md">
			<AccordionItem>
				<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
				<svelte:fragment slot="summary">
					<h2 class="h2 font-medium">Where can I watch?</h2>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p class="h4 my-2">
						Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web
						at netflix.com from your personal computer or on any internet-connected device that
						offers the Netflix app, including smart TVs, smartphones, tablets, streaming media
						players and game consoles.
						<br />
						<br />
						You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads
						to watch while you're on the go and without an internet connection. Take Netflix with you
						anywhere.
					</p>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
		<Accordion class=" bg-surface-400 rounded-md">
			<AccordionItem>
				<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
				<svelte:fragment slot="summary">
					<h2 class="h2 font-medium">How can I cancel?</h2>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p class="h4 my-2">
						Netflix is flexible. There are no pesky contracts and no commitments. You can easily
						cancel your account online in two clicks. There are no cancellation fees – start or stop
						your account anytime.
					</p>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
		<Accordion class=" bg-surface-400 rounded-md">
			<AccordionItem>
				<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
				<svelte:fragment slot="summary">
					<h2 class="h2 font-medium">What can I watch on Netflix?</h2>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p class="h4 my-2">
						Netflix has an extensive library of feature films, documentaries, TV shows, anime,
						award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
					</p>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
		<Accordion class=" bg-surface-400 rounded-md">
			<AccordionItem>
				<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
				<svelte:fragment slot="summary">
					<h2 class="h2 font-medium">Is Netflix good for kids?</h2>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p class="h4 my-2">
						The Netflix Kids experience is included in your membership to give parents control while
						kids enjoy family-friendly TV shows and movies in their own space.
						<br />
						<br />
						Kids profiles come with PIN-protected parental controls that let you restrict the maturity
						rating of content kids can watch and block specific titles you don’t want kids to see.
					</p>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
</section>

<section class="flex flex-col text-center items-center justify-center space-y-4">
	<p class="text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
	<div class="md:flex sm:flex-row items-center justify-center">
		<input
			use:focusTrap={isFocused}
			type="email"
			placeholder="Email Address"
			class="input h-12 m-2 w-64 "
		/>
		<button class="btn variant-filled-primary font-bold h-12 sm:mt-2 md:m-0"
			>Get Started <Icon icon="mingcute:right-fill" /></button
		>
	</div>
</section>

<hr class="h-2 w-full bg-zinc-900 mt-10" />


<footer class="flex flex-col">
	<p>Questions? Call 1-844-505-2993</p>

</footer>
