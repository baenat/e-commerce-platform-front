import type { Product } from '$lib/interfaces/products';
import { toast } from '@zerodevx/svelte-toast';
import { writable } from 'svelte/store';

export const productsStore = writable<Product[]>([]);

export const products = {
  subscribe: productsStore.subscribe,
  set: productsStore.set,
  update: productsStore.update,
};

export const triggerToast = (message: string) => {
  const options = {
    pausable: true
  };
  toast.push(message, options)
}
