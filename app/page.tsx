'use client'

import CarsFilterOption from '@/components/CarFiltersOption'
import CarsList from '@/components/CarsList'
import HeroHome from '@/components/Hero'
import SearchInput from '@/components/SearchInput'
import { getCarsList } from '@/services'
import { useEffect, useState } from 'react'

export default function Home() {
	const [carsList, setCarsList] = useState<any>([])
	const [carsOrgList, setCarsOrgList] = useState<any>([])

	const getCars = async () => {
		const result: any = await getCarsList()
		setCarsList(result?.carLists)
		setCarsOrgList(result?.carLists)
	}

	useEffect(() => {
		getCars()
	}, [])

	const filterCarList = (brand: string) => {
		const filterList = carsOrgList.filter((item: any) => item.carBrand === brand)
		setCarsList(filterList)
	}

	const orderCarList = (order: any) => {
		const sortedData = [...carsOrgList].sort((a: any, b: any) => order == -1 ? a.price - b.price : b.price - a.price)
		setCarsList(sortedData)
	}


	return (
		<div className='p-5 sm:px-10 md:px-20'>
			<HeroHome />
			<SearchInput />
			<CarsFilterOption carsList={carsOrgList} setBrand={(value: string) => filterCarList(value)} orderCarList={(value: string) => orderCarList(value)} />
			<CarsList carsList={carsList} />
		</div>
	)
}
