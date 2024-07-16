import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import Stripe from 'stripe';
import { PUBLIC_API_URL } from '$env/static/public';
import type { CartItem } from '$lib/interfaces/cart';
import { fetchProductById } from '$lib/services/products.service';
import { SECRET_STRIPE_KEY } from '$env/static/private';

export const POST = (async ({ request }) => {
	const products: CartItem[] = await request.json();

	const line_items = await Promise.all(
		products.map(async (product: CartItem) => {
			const item = await fetchProductById(product.id);

			const finalPrice: number = item.salePrice === 0 ? item.price : item.salePrice ?? 0;
			const roundedNumber = Number(Math.round(parseFloat(finalPrice * 100 + 'e' + 2)) + 'e-' + 2);

			return {
				price_data: {
					currency: 'usd',
					product_data: {
						name: item.name,
						images: item.images,
					},
					unit_amount: roundedNumber
				},
				quantity: product.quantity
			};
		})
	);

	try {
		const stripe = new Stripe(SECRET_STRIPE_KEY);

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			shipping_address_collection: { allowed_countries: ['US', 'CA'] },
			line_items,
			mode: 'payment',
			success_url: `${request.url}?success=true`,
			cancel_url: request.url,
			phone_number_collection: {
				enabled: true
			}
		});

		return json({ stripeSession: session });
	} catch (err) {
		console.log(err);
		return new Response(null);
	}
}) satisfies RequestHandler;
