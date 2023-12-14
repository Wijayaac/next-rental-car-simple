import CarCard from "./CarCard"

export default function CarsList(props: any) {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3">
			{props.carsList.map((car: any, index: number) => (
				<div key={index}
				// onClick={() => { (window as any).my_modal_4.showModal(); setSelectedCar(car) }}
				>
					<CarCard car={car} />
				</div>
			))}
		</div>
	)
}