import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems";


const PopularMeanu = () => {
    const [menu,setMenu] = useState ([]);
    useEffect ( () => {
        fetch ('menu.json')
        .then (res => res.json ())
        .then (data =>  {
            const popularItems = data.filter (item => item.category === 'popular')
            setMenu(popularItems)})
    } ,[])
    return (
        <div className="mb-12">
            <section>
                <SectionTitle
                subHeading={"Popular Items"}
                heading={"From Our Menu"}
                ></SectionTitle>
            </section>

             <div>
             <div className="md: grid grid-cols-2 gap-10">
                {menu.map (item => <MenuItems
                key={item._id}
                item={item}
                ></MenuItems>)}
            </div>
             <div className="flex items-center justify-center">
             <button className=" btn btn-outline mt-4 uppercase justify-center border-0 border-b-4">View full menu</button>
             </div>
             </div>
        </div>
    );
};

export default PopularMeanu;