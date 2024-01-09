/* import { motion } from "framer-motion"; */

const TabButton = ({active, selectTab, children}) => {

    const buttonClasses = active ? "text-white border-b border-purple-600" : "text-[#ADB7BE]";
    return ( 
        <div>
            <button onClick={selectTab}>
                <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                    {children}
                </p>
                {/* <motion.div
                    animate={active ? "active" : "default"}
                    variants={variants}
                    className="h-1 bg-primary-500 mt-2 mr-3"
                ></motion.div>  */} 
            </button>
        </div>
    );
}
 
export default TabButton;