<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { Icon } from 'sveltestrap';
	export let isOpen: boolean = false;

	export let title: string = '';
</script>

<div class="accordion shadow-soft rounded mb-5">
	<div class="card card-sm card-body  rounded bg-primary border-light mb-0">
		<a href={undefined} class="accordion-panel-header">
			<span class="icon-title h6 mb-0 font-weight-bold">
				{title}
			</span>

			<span class="icon" on:click={() => (isOpen = !isOpen)}>
				<Icon name={isOpen ? 'x' : 'plus'} />
			</span>
		</a>
		{#if isOpen}
			<div transition:slide>
				<div class="pt-3">
					<slot />
				</div>
			</div>
		{/if}
	</div>
</div>
