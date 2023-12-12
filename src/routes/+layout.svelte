<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppBar, AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import NetflixLogo from '$lib/assets/netflix-logo.svg';
	import LanguageSelect from './LanguageSelect.svelte';
</script>

<AppShell class="top-0 absolute max-h-20 z-10">
	<svelte:fragment slot="pageHeader">
		<AppBar class="z-10" background="bg-transparent" padding="md:py-6 md:px-20 py-4 px-5">
			<svelte:fragment slot="lead">
				<img src={NetflixLogo} alt="Netflix Logo" />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LanguageSelect insideNavbar={true}/>
				<button type="button" class="btn variant-filled-primary font-semibold">Sign In</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
</AppShell>
<slot />
