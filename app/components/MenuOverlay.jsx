import NavLink from "./NavLink";

const MenuOverlay = ({links}) => {
    return ( 
        <div>
            <ul className="flex items-center p-4 flex-col md:space-x-8 mt-0 md:hidden">
                {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title}></NavLink>  
                </li>
                ))}
            </ul>

        </div>
     );
}
 
export default MenuOverlay;