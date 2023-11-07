import { Button } from "@/components/ui/button";
import "../index.css"

export const Dropdown = () => {
    return (
        <div className="dropdown absolute left-[7rem] sm:left-[30rem] top-24 md:hidden">
            <div className="inter text-zinc-300 bg-zinc-900 flex flex-col items-center p-4 justify-between w-64">
                    <a href="#" className="my-4">Articles</a>
                    <a href="#" className="my-4">Chats</a>
                    <a href="#" className="my-4">Awards</a>
                    <a href="#" className="my-4">About</a>
                    <Button size='lg' className="prata my-4 font-bold">Get in touch</Button>
            </div>
        </div>
    )
}