<script lang="ts">
	import { onMount, type SvelteComponent } from 'svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
  import { fetchProductById, updateProduct } from '$lib/services/products.service';
  import { triggerToast } from '$lib/store';
  import { stringstoArray } from '$lib/utils/utils';

	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	const { productId } = $modalStore[0].meta;

	let formData = {
		name: '',
		description: '',
		quantity: 0,
		price: 0,
		salePrice: 0,
		images: ''
	}

	onMount(async () => {
		if (productId) {
			const product = await fetchProductById(productId);
			const images = product.images.join(',');

			formData = {
				name: product.name,
				description: product.description,
				quantity: product.quantity,
        price: product.price,
        salePrice: product.salePrice ?? 0,
        images,
			}
    }
	})

	const handleSubmit = (): void => {
		const images = stringstoArray(formData.images);
		const sendData = { ...formData, images}
		updateProduct(productId, sendData)
			.then((e) => {
				triggerToast('Product has been edited');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
			})
			.catch((e) => triggerToast(e.message))
			.finally(() => modalStore.close());
	}

</script>

{#if $modalStore[0]}

	<div class="bg-white card p-6 w-modal shadow-xl space-y-4">

		<header class="text-2xl font-bold max-w-md mx-auto">{$modalStore[0].title ?? '(title missing)'}</header>
		<article class="max-w-md mx-auto">{$modalStore[0].body ?? '(body missing)'}</article>
		
		<form class="max-w-md mx-auto" on:submit|preventDefault={handleSubmit}>
			<div class="relative z-0 w-full mb-5 group">
					<input type="text" name="names" id="name" bind:value={formData.name} class="input-group outline-none block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:border-yellow-600 peer" placeholder="" required />
					<label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
			</div>
			<div class="relative z-0 w-full mb-5 group">
					<input type="text" name="description" id="description" bind:value={formData.description} class="input-group outline-none block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:border-yellow-600 peer" placeholder="" required />
					<label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
			</div>
			<div class="relative z-0 w-full mb-5 group">
					<input type="number" min="1" name="quantity" id="quantity" bind:value={formData.quantity} class="input-group outline-none block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:border-yellow-600 peer" placeholder=" " required />
					<label for="quantity" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
			</div>
			<div class="relative z-0 w-full mb-5 group">
					<input type="number" min="1" name="price" id="price" bind:value={formData.price} class="input-group outline-none block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:border-yellow-600 peer" placeholder=" " required />
					<label for="price" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
			</div>
			<div class="relative z-0 w-full mb-5 group">
					<input type="number" name="price_sale" id="price_sale" bind:value={formData.salePrice} class="input-group outline-none block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:border-yellow-600 peer" placeholder=" " required />
					<label for="price_sale" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Price Sale</label>
			</div>
			<div class="relative z-0 w-full mb-5 group">
					<input type="url" name="images" id="images"  bind:value={formData.images} class="input-group outline-none block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:border-yellow-600 peer" placeholder=" " required />
					<label for="images" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Images</label>
			</div>

			<footer class="modal-footer {parent.regionFooter}">
				<button class="text-red-600 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
				<button type="submit" class="text-black hover:text-white focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-yellow-300 hover:bg-yellow-500">Save</button>
			</footer>
		</form>

	</div>

{/if}