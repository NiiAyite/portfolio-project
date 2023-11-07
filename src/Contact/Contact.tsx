import { Button } from "@/components/ui/button";

export const Contact = () => {
    return (
        <div className="md:mx-20 sm:mx-10 mx-5 py-36">
            <h1 className="prata md:text-5xl text-3xl mb-3">Interested in working with me?</h1>
            <p className="inter text-zinc-300 sm:w-[35rem] leading-relaxed">I'm active on all social media platforms listed below, but you can also email me and I will get back to you within 24-48 hours.</p>
            <Button className="prata font-bold my-4" size="lg">Get in touch</Button>
        </div>
    )
}      