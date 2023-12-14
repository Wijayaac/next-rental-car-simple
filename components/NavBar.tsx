import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

export default function NavBar() {
	return (
		<div className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]">
			<Image src="/vercel.svg" alt="logo" width={120} height={40} />
			<div className="hidden md:flex gap-5">
				<h2 className="hover:bg-blue px-3 cursor-pointer p-2 rounded-full hover:text-white">Home</h2>
				<h2 className="hover:bg-blue px-3 cursor-pointer p-2 rounded-full hover:text-white">History</h2>
				<h2 className="hover:bg-blue px-3 cursor-pointer p-2 rounded-full hover:text-white">Contact Us</h2>
			</div>
			<UserButton />
		</div>
	)
}