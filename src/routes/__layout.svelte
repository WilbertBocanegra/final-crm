<script lang="ts">
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
	/>
</svelte:head>
<slot />

<style>
	:global(.navbar) {
		height: 70px;
	}
	:global(.fs) {
		font-size: 20px;
	}

	:global(.fs-icon) {
		height: 24px !important;
		width: 24px !important;
		font-size: 24px !important;
	}
</style>
