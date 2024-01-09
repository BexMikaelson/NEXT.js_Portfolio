
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/images/github-icon.svg"
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
const EmailForm = () => {
    return ( 
        <>
            <div id="contact" className="flex flex-col md:flex-row md:mt-9 py-20">  
                <div className="mt-9 z-10 ">
                    <h5 className="text-xl font-bold text-white my-2">
                    Let&apos;s Connect
                    </h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                    </p>
                    <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/BexMikaelson">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/heidisjoberg/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                    </div>
                </div>
                <div className="text-black mt-7 p-4 max-w-lg mx-auto">
                    <form target="_blank" action="https://formsubmit.co/heidi.alexx8@gmail.com" method="POST" className="space-y-4">
                        <input type="text" placeholder="Full name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                        <input type="email" placeholder="Email Address" required name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                        <textarea placeholder="Your message" name="message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"></textarea>
                        <input type="submit" value="Send Message" className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50 cursor-pointer" />
                    </form>
                </div>
            </div>
        </>

        

     );
}
 
export default EmailForm;