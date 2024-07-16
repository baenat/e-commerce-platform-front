<script lang="ts">
  import ImageGallery from "$lib/components/ImageGallery.svelte";
  import QuantityInput from "$lib/components/QuantityInput.svelte";
  import type { CartItem } from "$lib/interfaces/cart";
  import type { Product } from "$lib/interfaces/products";
  import { addToCart } from "$lib/services/cart.service";
  import { triggerToast } from "$lib/store";

  export let data: any;
  let original_data = { ...data };
  let product: Product = data;
  let quantity = 1;

  $: {
    if (original_data !== data) {
      product = data;
      product.images = product.images;
      quantity = 1;
      original_data = data;
    }
  }

  const prepareToCart = () => {
    if (product.quantity >= quantity) {
      const item: CartItem = {
        id: product.id ?? '',
        name: product.name,
        thumbnail: `${product.images[0]}`,
        price: product.price,
        salePrice: product.salePrice ?? 0,
        quantity: quantity,
        quantityItems: product.quantity,
      };

      addToCart(item);
      triggerToast("Product added to cart!");

      product.quantity -= quantity;

      quantity = 1;
    } else {
      triggerToast('Not enough stock available');
    }
  }

</script>

<svelte:head>
  <title>{product.name}</title>
</svelte:head>

<div class="flex flex-col mx-3 py-10 gap-5 lg:mx-10 lg:flex-row lg:gap-8">
  <div class="basis-1/2 px-8">
    <ImageGallery
      productId={product.id}
      images={product.images}
      alt_text={product.name}
    />
  </div>
  <div class="basis-1/2 flex flex-col gap-8 px-8">
    <h1 class="font-extrabold text-4xl mt-3">{product.name}</h1>
    <div class="flex items-end gap-2">
      {#if product.salePrice === 0}
        <span class="text-3xl">${product.price}</span>
      {:else}
        <span class="text-3xl text-red-600">${product.salePrice}</span>
        <span class="text-xl text-gray-600 line-through">${product.price}</span>
      {/if}
    </div>

    {#if product.description}
      <div class="flex flex-col gap-2">
        <p>Description</p>
        <p class="text-gray-600">
          {product.description}
        </p>
      </div>
    {/if}

    <div
      class="flex flex-col gap-2 text-2xl font-semibold italic text-slate-900"
    >
      <p>Quantity: <span class="text-warning-200">{product.quantity}</span></p>
      <QuantityInput bind:count={quantity} max={product.quantity} />
    </div>

    <button
      class="w-full h-12 text-black font-bold transition-colors duration-150 bg-yellow-300 focus:shadow hover:bg-yellow-500"
      on:click={() => prepareToCart()}>
      Add to cart
    </button>
    <button
      class="w-full h-12 text-black font-bold transition-colors duration-150 focus:shadow hover:bg-[#282828] hover:text-white"
      on:click={() => {}}>
      Edit Product
    </button>
    <button
      class="w-full h-12 text-red-600 font-bold transition-colors duration-150 focus:shadow border-solid border-black hover:bg-[#282828] hover:text-white"
      on:click={() => {}}>
      Delete Product
    </button>
  </div>
</div>
