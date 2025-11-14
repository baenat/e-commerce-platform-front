<script lang="ts">
  import AddFormProduct from "$lib/components/AddFormProduct.svelte";
	import ProductItem from '$lib/components/ProductItem.svelte';
  import type { Product } from '$lib/interfaces/products';
  import { fetchProducts } from '$lib/services/products.service';
  import { getModalStore, initializeStores, Modal, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
  import { onMount } from 'svelte';

	initializeStores();

	let products: Product[] = [];
  const modalStore = getModalStore();

	onMount(async () => {
    products = await fetchProducts();
  });

  const modalComponentForm = () => {
    const c: ModalComponent = { ref: AddFormProduct };
    const modal: ModalSettings = {
      type: "component",
      component: c,
      title: "Registrar Producto",
      body: "Complete the form below and then press save."
    };
    modalStore.trigger(modal);
  }

</script>

<svelte:head>
	<title>E-commerce | Shop</title>
	<meta name="description" content="Products" />
	<link
		rel="stylesheet"
		href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css"
	/>
</svelte:head>

<div class="flex justify-center items-center gap-6 m-auto p-5 flex-wrap">
	<a class="hover:underline underline-offset-4" href="/products">All</a>
	<a class="hover:underline underline-offset-4" href="#iphone-cases">iPhone Cases</a>
	<a class="hover:underline underline-offset-4" href="#airpods-cases">AirPods Cases</a>
	<a class="hover:underline underline-offset-4" href="#sleeves">Clothes</a>
	<a class="hover:underline underline-offset-4" href="#cables">Cables</a>
	<a class="hover:underline underline-offset-4" href="#chargers">Chargers</a>
	<a class="hover:underline underline-offset-4" href="#accessories">Accessories</a>
</div>

<hr />

<div class="flex flex-col py-8 px-3 md:px-20">
	<div class="basis-5/6 flex flex-col">
		<div class="flex justify-between pb-4">
			<p>{products.length} products</p>
			<div>
				<span class="text-gray-700">Sort by</span>
				<button>New</button>
			</div>
		</div>

		<div class="grid grid-cols-2 gap-5 md:grid-cols-3">
			{#each products as product}
				<ProductItem
					showActions={false}
					productId={product.id || ''}
					title={product.name}
					image="{product.images[0]}"
					hoverImage={product.images.length > 1
						? `${product.images[1]}`
						: ``}
					price={product.price}
					salePrice={product.salePrice}
					link="/products/{product.id}"
				/>
			{/each}
		</div>
	</div>
</div>


<!-- Add Product Button -->
<!-- <button on:click={modalComponentForm} 
	class="product__add cursor-pointer text-black font-bold transition-colors duration-150 bg-yellow-300 focus:shadow hover:bg-yellow-500">
	Add product
</button> -->

<!-- Modal Add Product -->
<Modal />

<style>
  .product__add {
		position: fixed;
    border: none;
    border-radius: 10px;
    padding: 15px 30px;
    right: 30px;
    bottom: 28px;
    margin: 10px;
    cursor: pointer;
    z-index: 1;
  }

	.product__add::after {
		content: " +";
	}
</style>
