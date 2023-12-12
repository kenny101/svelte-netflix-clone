<script lang="ts">
	import Icon from '@iconify/svelte';
	export let insideNavbar = false;
</script>

<div class="relative">
	<select
		class="md:w-36 {insideNavbar ? 'w-5' : ''} text-white bg-black pl-10 rounded-md opacity-70"
	>
		<option selected={true} lang="en" label="English" value="en-US">English</option>
		<option lang="es" label="Español" value="es-US">Español</option>
	</select>
	<div class="absolute top-2 left-0 pl-2">
		<Icon icon="tabler:language" class="text-2xl" />
	</div>
</div>
