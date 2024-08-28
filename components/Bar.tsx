import Link from "next/link";

import { NavLinks } from "@/constants";


const Navbar = async () => {

  return (
    <section>
      <div className='flex items-center justify-center' >
        <ul className='xl:flex text-sm font-medium gap-8'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
    </section>
  

    
  );
};

export default Navbar;
