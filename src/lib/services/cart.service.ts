import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { CartItem } from '$lib/interfaces/cart';

export const cartItemsStore = writable(getStorePersistance('cartItemsStore'));

cartItemsStore.subscribe((val) => {
	if (browser) {
		localStorage.setItem('cartItemsStore', JSON.stringify(val));
	}
});

export function addToCart(newItem: CartItem) {
	cartItemsStore.update((oldItems) => {
		const foundIndex = oldItems.findIndex((item) => item.id === newItem.id);

		if (foundIndex !== -1) {
			oldItems[foundIndex].quantity += newItem.quantity;
			return oldItems;
		} else {
			return [...oldItems, newItem];
		}
	});
}

export function removeFromCart(id: string) {
	cartItemsStore.update((oldItems) => {
		oldItems = oldItems.filter((item) => item.id !== id);
		return oldItems;
	});
}

export function emptyCart() {
	cartItemsStore.set([]);
}

function getStorePersistance(key: string): CartItem[] {
	if (!browser) {
		return [] as CartItem[];
	}

	const storedItems: CartItem[] = JSON.parse(localStorage.getItem(key) || '{}');

	if (Object.keys(storedItems).length <= 0) {
		return [] as CartItem[];
	} else {
		return storedItems;
	}
}
