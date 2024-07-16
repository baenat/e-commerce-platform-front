import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fetchProductBySlug } from '$lib/services/products.service';

export const load = (async ({ params, locals }) => {
	try {
		const productRecord = await fetchProductBySlug(`${params.slug}`);
		// console.log({productRecord})
		return structuredClone(productRecord);

	} catch (e) {
		// console.log(`Couldnt load page /products/${params.slug}`);
		throw error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;
