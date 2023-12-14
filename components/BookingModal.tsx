import BookingForm from "./BookingForm"
import CarCard from "./CarCard"

export default function BookingModal({ car }: any) {
	return (
		<div>
			<form method="dialog" className="modal-box max-w-7xl">
				<div className='border-b-[1px] pb-2 '>
					<h3 className=" text-[30px] font-light text-gray-400">
						Rent A Car Now!
					</h3>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 p-5'>
					<div>
						<CarCard car={car} />
					</div>
					<div>
						<BookingForm car={car} />
					</div>
				</div>
			</form>
		</div>
	)
}