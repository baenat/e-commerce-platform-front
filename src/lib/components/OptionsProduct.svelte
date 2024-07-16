<script lang="ts">
  import { getModalStore, type ModalComponent, type ModalSettings } from "@skeletonlabs/skeleton";
  import { deleteProduct } from "$lib/services/products.service";
  import { triggerToast } from "$lib/store";
  import EditProduct from "./EditProduct.svelte";

  const modalStore = getModalStore();

  export let productId: string;

  const confirmDelete = () => {
    deleteProduct(productId)
      .then(() => {
        triggerToast("Product has been removed");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((e: Error) => {
        console.error(e);
        triggerToast(e.message);
      });
  };

  const onDeleteProduct = () => {
    const modal: ModalSettings = {
      type: "confirm",
      title: "Delete Product",
      body: "Are you sure you want to delete?",
      response: (confirm: boolean) => {
        if (confirm) {
          confirmDelete();
        }
      },
    };
    modalStore.trigger(modal);
  };

  const onEditProduct = () => {
    const c: ModalComponent = { ref: EditProduct };
    const modal: ModalSettings = {
      type: "component",
      component: c,
      title: "Editar Producto",
      body: "Complete the form below and then press save.",
      meta: { productId }
    };
    modalStore.trigger(modal);
  };
</script>

<div>
  <div
    class="flex flex-row justify-between flex-grow text-2xl gap-3 text-zinc-500"
  >
    <i
      class="mi-edit cursor-pointer backdrop-blur absolute py-2 px-4 top-2 left-2 bg-white/10 hover:text-zinc-900"
    ></i>
    <i
      class="mi-delete cursor-pointer backdrop-blur absolute py-2 px-4 top-2 right-2 bg-white/10 hover:text-zinc-900"
    ></i>
  </div>
</div>

<div
  class="flex flex-row justify-between flex-grow text-2xl gap-3 text-zinc-500"
>
  <button class="primary-cta" on:click={onEditProduct}>
    <i
      class="mi-edit cursor-pointer backdrop-blur absolute py-2 px-4 top-2 left-2 bg-white/10 hover:text-zinc-900"
    ></i>
  </button>
  <button class="secondary-cta" on:click={onDeleteProduct}>
    <i
      class="mi-delete cursor-pointer backdrop-blur absolute py-2 px-4 top-2 right-2 bg-white/10 hover:text-zinc-900"
    ></i>
  </button>
</div>
