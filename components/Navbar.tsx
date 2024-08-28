import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constants";


const Navbar = async () => {

  return (
    <nav className="inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950">
      <div className="center px-4">
        <div className="flex h-14 items-center">
          <Link href="#" className="mr-auto flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <Image
            src='/icons/logo.svg'
            width={50}
            height={50}
            alt='logo'
          />
            <h1>Acme Inc</h1>
          </Link>
          <nav className="ml-auto flex items-center space-x-4">
            <Link
              href="#"
              className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href="#"
              className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              prefetch={false}
            >
              Pricing
            </Link>
           
          </nav>
        </div>
      </div>
    </nav>

    
  );
};

export default Navbar;
