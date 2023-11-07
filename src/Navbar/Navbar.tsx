import { Dropdown } from "@/Dropdown/Dropdown";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div>
            <nav className="flex justify-between items-center pt-8 md:mx-20 sm:mx-10 mx-5">
                <h1 className="prata text-xl">Johnathan Specter</h1>
                <div className="inter text-zinc-300 hidden text-md md:flex md:justify-between w-96">
                    <a href="#">Articles</a>
                    <a href="#">Chats</a>
                    <a href="#">Awards</a>
                    <a href="#">About</a>
                </div>
                <Button size='lg' className="prata hidden md:block font-bold">Get in touch</Button>

                <div className="menu md:hidden block" onClick={() => setOpenDropdown((prev) => !prev)}>
                    <HamburgerMenuIcon className="w-8 h-8" />
                </div>
            </nav>

            {
                openDropdown && (
                    <Dropdown />
                )
            }
        </div>
    )
}