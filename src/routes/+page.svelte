<script lang="ts">
  import ProductItem from "$lib/components/ProductItem.svelte";
  import type { Product } from "$lib/interfaces/products";
  import { fetchFavorites } from "$lib/services/products.service";
  import { initializeStores } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";

  initializeStores()

  let products: Product[] = [];

  onMount(async () => {
    products = await fetchFavorites();
  });

</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home" />
</svelte:head>

<main class="main__container">
  <div class="mx-3 md:mx-10 mb-4">
    <section class="text-gray-800 text-center lg:text-left lg:px-32 lg:py-5">
      <div class="grid lg:grid-cols-2 gap-6 xl:gap-12 justify-center">
        <div class="mb-6 lg:mb-0">
          <h1
            class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight lg:text-right mt-4"
          >
            Good Design &amp;Quality
          </h1>
        </div>
        <div class="mb-6 lg:mb-0 flex flex-col justify-center">
          <p class="text-gray-500 text-lg">
            Born out of a shared love of good design &amp;quality products, we
            create considered solutions fit for the modern lifestyle. Always
            driven by passion, we work to empower others to live the same way.
          </p>
        </div>
      </div>
    </section>
    <h2 class="text-center font-extrabold text-6xl py-12 uppercase">
      Best Sellers
    </h2>
    <div class="grid gap-12 grid-cols-2 lg:grid-cols-4">

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

    <div class="flex flex-col justify-center h-full">
			<div class="px-10 py-10 mx-0">
				<a href="/products" target="_self">
					<button class="w-full h-12 text-black font-bold transition-colors duration-150 bg-yellow-300 focus:shadow hover:bg-[#282828] hover:text-white">
						Start shopping
					</button>
				</a>
			</div>
		</div>

  </div>
</main>