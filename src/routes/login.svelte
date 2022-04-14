<script lang="ts">
	import { insert } from '$lib/services/company';

	let value;

	//$: console.log(value);

	const handle = (node) => {
		value = node.target.files[0];
		company.logo_organizacion = URL.createObjectURL(node.target.files[0]);
	};

	interface ICompany {
		nombre_organizacion: string;
		logo_organizacion: string;
		sitio_web: string;
		correo_electronico: string;
		telefono_organizacion: string;
		habilitado: boolean;
		activo: boolean;
	}

	let company: ICompany = {
		activo: true,
		correo_electronico: 'wilbert@gmail.com',
		habilitado: true,
		logo_organizacion: undefined,
		nombre_organizacion: 'wilo',
		sitio_web: '',
		telefono_organizacion: ''
	};
</script>

<button on:click={() => insert(value)}>add</button>

<input type="file" bind:value on:input={handle} />
