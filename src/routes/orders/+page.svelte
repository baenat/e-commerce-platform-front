<svelte:head>
	<title>Orders</title>
</svelte:head>

<div class="relative overflow-x-auto flex flex-col py-8 px-3 md:px-20">
	<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-700">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-700">
					<tr>
							<th scope="col" class="px-6 py-3">
									# Order
							</th>
							<th scope="col" class="px-6 py-3">
									Product name
							</th>
							<th scope="col" class="px-6 py-3">
									Color
							</th>
							<th scope="col" class="px-6 py-3">
									Category
							</th>
							<th scope="col" class="px-6 py-3">
									Price
							</th>
					</tr>
			</thead>
			<tbody>
					<tr class="bg-white border-b ">
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
									1
							</th>
							<th class="px-6 py-4">
									Apple MacBook Pro 17"
							</th>
							<td class="px-6 py-4">
									Silver
							</td>
							<td class="px-6 py-4">
									Laptop
							</td>
							<td class="px-6 py-4">
									$2999
							</td>
					</tr>
					<tr class="bg-white border-b">
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
									2
							</th>
							<th class="px-6 py-4">
								Microsoft Surface Pro
							</th>
							<td class="px-6 py-4">
									White
							</td>
							<td class="px-6 py-4">
									Laptop PC
							</td>
							<td class="px-6 py-4">
									$1999
							</td>
					</tr>
					<tr class="bg-white ">
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
									3
							</th>
							<th class="px-6 py-4">
									Magic Mouse 2
							</th>
							<td class="px-6 py-4">
									Black
							</td>
							<td class="px-6 py-4">
									Accessories
							</td>
							<td class="px-6 py-4">
									$99
							</td>
					</tr>
			</tbody>
	</table>
</div>
