import Link from "next/link";
import { assets } from "../frontend-assets/assets.js";
import Image from "next/image.js";

export default function Navbar() {
  return (
    <nav className="bg-[#7E57C2] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={assets.main_logo} alt="Main Logo" width={100} height={30} />
        </Link>

        <div className="space-x-6 text-lg">
          <Link href="/" className="transition font-medium hover:font-semibold">
            Home
          </Link>
          <Link href="/about" className="transition font-medium hover:font-semibold">
            About
          </Link>
          <Link href="/cars" className="transition font-medium hover:font-semibold">
            Cars
          </Link>
          <Link
            href="/my-bookings"
            className="transition font-medium hover:font-semibold">
            Mybookings
          </Link>
          <Link href="/signup" className="group inline-block">
            <div className="relative flex justify-center items-center px-1.5 py-1.5 rounded-2xl bg-white
             text-[#7E57C2] font-semibold overflow-hidden transition-all duration-300 ease-in-out group-hover:bg-gray-700
              group-hover:text-white w-[100px]">
              <span className="z-10 transition-all duration-300">Signup</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
