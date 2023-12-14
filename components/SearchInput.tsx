import Image from "next/image"

export default function SearchInput() {
	return (
		<div className="mt-5">
			<h2 className="text-center text-[20px] text-gray-400 mb-3"> Search what you need</h2>
			<div className="flex justify-center">
				<div className="flex bg-gray-100 p-1 px-5 gap-2 rounded-full divide-x">
					<div className="flex items-center">
						<Image src="/search.svg" alt="" width={24} height={24} />
						<input type="text" placeholder="Location" className="p-2 outline-none bg-transparent" />
					</div>
					<div>
						<input type="date" className="p-2 outline-none bg-transparent text-gray-400" />
					</div>
				</div>
			</div>
		</div>
	)
}