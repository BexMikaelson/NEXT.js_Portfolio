import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    
    return ( 
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12 py-16">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Hello, I&apos;m</span>
                         Heidi
                    </h1>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">I&apos;m a Frontend</span> Developer 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"><br /> &<br /> UX/UI </span> Designer
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 sm:pr-11 lg:text-xl">
                    I am a passionate Frontend developer who loves creating web experiences that are both beautiful and functional. I have a special enthusiasm for UX/UI design, and I&apos;m particularly fond of developing with JavaScript, focusing on crafting user-centric interfaces that engage and delight.
                    </p>
                    <div>
                        <Link href="/#contact" className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200">Contact Me</Link>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 mt-3">
                          <a href="/CV/Heidi_Sjoberg_CV.pdf" target="_blank" rel="noopener noreferrer" className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">View CV</a>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-slate-950 w-[300px] h-[300px] relative">
                        <Image 
                            src={"/images/hero-image.png"} 
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                            width={300}
                            height={300}>
                        </Image>
                    </div>
                </div>
            </div>
            
        </section>
        
     );
}
 
export default HeroSection;