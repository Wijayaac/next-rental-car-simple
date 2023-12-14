'use client'

import { useEffect, useState } from "react"

export default function CarsFilterOption({ carsList, setBrand, orderCarList }: any) {
	const [brandList, setBrandList] = useState<any>([])
	const BrandSet = new Set()

	const filterCarList = () => {
		carsList.forEach((item: any) => BrandSet.add(item.carBrand))
		setBrandList(Array.from(BrandSet))
	}
	useEffect(() => {
		if (carsList) {
			filterCarList()
		}
	}, [carsList])

	return (
		<div className='mt-10 flex items-center justify-between'>
			<div>
				<h2 className='text-[30px] font-bold'>Cars Catalog</h2>
				<h2>Explore our cars</h2>
			</div>
			<div className='flex gap-5'>
				<select className="select select-bordered w-full max-w-xs"
					onChange={e => orderCarList(e.target.value)}
				>
					<option disabled defaultValue="Price">Price</option>
					<option value={-1}>Min to Max</option>
					<option value={1}>Max to Min</option>
				</select>
				<select className="select select-bordered w-full md:block max-w-xs hidden"
					onChange={e => setBrand(e.target.value)}
				>
					<option disabled defaultValue="Manufacturer">Manufacturer</option>
					{brandList && brandList.map((brand: string, index: number) => (
						<option key={index}>{brand}</option>
					))}
				</select>
			</div>
		</div>
	)
}