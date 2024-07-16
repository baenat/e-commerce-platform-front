import type { Product } from "$lib/interfaces/products";

import { PUBLIC_API_URL } from '$env/static/public';

export async function fetchProducts(): Promise<Product[]> {
    const response = await fetch(`${PUBLIC_API_URL}/products`);
    return response.json();
}

export async function fetchFavorites(): Promise<Product[]> {
    const response = await fetch(`${PUBLIC_API_URL}/products/favorites`);
    return response.json();
}

export async function fetchProductById(id: string): Promise<Product> {
    const response = await fetch(`${PUBLIC_API_URL}/products/${id}`);
    return response.json();
}

export async function fetchProductBySlug(slug: string): Promise<Product> {
    const response = await fetch(`${PUBLIC_API_URL}/products/${slug}`);
    return response.json();
}

export async function addProduct(product: Omit<Product, 'id'>): Promise<any> {

    return new Promise((resolve, reject) => {
        return fetch(`${PUBLIC_API_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then( async (response) => {
            const json = await response.json();
            if (response.ok) {
                resolve(json)
            }
            throw new Error(json.error)
        })
        .catch((error) => {
            console.log('Request failed: ', error)
            reject(error)
        });
    });

}

export async function updateProduct(id: string, product: Partial<Omit<Product, 'id'>>): Promise<Product> {

    return new Promise((resolve, reject) => {
        return fetch(`${PUBLIC_API_URL}/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then( async (response) => {
            const json = await response.json();
            if (response.ok) {
                resolve(json)
            }
            throw new Error(json.error)
        })
        .catch((error) => {
            console.log('Request failed: ', error)
            reject(error)
        });
    });

}

export async function deleteProduct(id: string): Promise<void> {
    await fetch(`${PUBLIC_API_URL}/products/${id}`, {
        method: 'DELETE'
    });
}
