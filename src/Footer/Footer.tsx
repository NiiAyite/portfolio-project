import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
    return (
        <div className="bg-zinc-800 md:px-20 sm:px-10 px-5 py-5 flex justify-between items-center">
            <h4 className="prata text-md">Johnathan Specter</h4>
            <div className="socails flex justify-between items-center">
                <TwitterLogoIcon className="w-5 h-5 mx-3" />
                <LinkedInLogoIcon className="w-5 h-5 mx-3" />
                <GitHubLogoIcon className="w-5 h-5 mx-3" />
            </div>
        </div>
    )
}