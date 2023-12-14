import Image from "next/image"

export default function HeroHome() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div>
				<h2 className="text-[40px] md:text-[60px] font-bold">Luxury car <span className="text-red-600">Rental</span> in your Locality</h2>
				<h2 className="text-[20px] text-gray-500 pr-20 mt-5"> No extra charges, pay for driving only</h2>
				<button className="p-2 mt-5 bg-red-500 text-white px-4 rounded-full hover:scale-105 transition-all">Explore cars</button>
			</div>
			<div>
				<Image src="/hero.png" alt="hero" width={400} height={500} className="w-full align-middle object-cover" />
			</div>
		</div>
	)
}