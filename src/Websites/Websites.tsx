import Spense from "/assets/Spense.png"
import YelpCamp from "/assets/YelpCamp.png"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export const Websites = () => {
    return (
        <div className="md:mx-20 sm:mx-10 mx-5 bg-zinc-950 flex md:flex-row flex-col justify-between items-center mb-36">
            <div className="spense">
                <img src={ Spense } alt="Spense" className="md:w-[530px] w-[100vw]" />
                <h2 className="inline prata text-3xl my-4">Spense.com</h2>
                <ArrowRightIcon className="inline ml-2 w-8 h-8 relative bottom-1 my-4" />
                <p className="inter text-zinc-300 md:w-[40rem] mb-4">Rethinking the way writers get paid, an open-source platform designed to help writters focus on writting,and less on when and how they'll get paid.Project in collaboration with Codewell.cc</p>
            </div>
            <div className="yelpcamp md:mt-0 mt-10">
                <img src={ YelpCamp } alt="YelpCamp" className="md:w-[530px] w-[100vw]" />
                <h2 className="inline prata text-3xl my-4">YelpCamp.com</h2>
                <ArrowRightIcon className="inline ml-2 w-8 h-8 relative bottom-1 my-4" />
                <p className="inter text-zinc-300 md:w-[40rem] mb-4">Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd's favorite in 2021.</p>
            </div>
        </div>
    )
}