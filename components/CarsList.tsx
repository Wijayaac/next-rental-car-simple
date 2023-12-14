import { useState } from "react"
import CarCard from "./CarCard"
import BookingModal from "./BookingModal"

export default function CarsList(props: any) {
	const [selectedCar, setSelectedCar] = useState<any>([])
	return (
		<div className="grid grid-cols-2 md:grid-cols-3">
			{props.carsList.map((car: any, index: number) => (
				<div key={index}
					onClick={() => { (window as any).my_modal_4.showModal(); setSelectedCar(car) }}
				>
					<CarCard car={car} />
				</div>
			))}
			<dialog className="modal" id="my_modal_4">
				<BookingModal car={selectedCar} />
			</dialog>
		</div>
	)
}