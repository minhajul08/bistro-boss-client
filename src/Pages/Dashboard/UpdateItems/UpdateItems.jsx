import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItems = () => {
    const {name,recipe,price,category ,_id}= useLoaderData ();

    const { register, handleSubmit , reset} = useForm();
    const axiosPublic = UseAxiosPublic ();
    const axiosSecure = UseAxiosSecure();
    const onSubmit = async (data) => {
        console.log (data);
        // image upload to imageBB and then get a url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success){
            // now sent the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category : data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log (menuRes.data)
            if (menuRes.data.modifiedCount > 0){
                // reset ();
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log ('with image url',res.data)
    }
 

    
    return (
        <div>
            <SectionTitle heading="Update Items" subHeading="Refresh Update"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>

                        </label>
                        <input type="text"
                        defaultValue={name}
                            placeholder="Type here"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    {/* category */}
                    <div className="flex gap-6">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>

                            </label>
                            <select  defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full"> 
                                <option value="default" disabled>Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desserts">Desserts</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>

                            </label>
                            <input type="number"
                            defaultValue={price}
                                placeholder="Price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* recipe details */}

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>

                        </div>
                        <textarea defaultValue={recipe} {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </label>
                    {/* image filed */}
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn text-white capitalize bg-gradient-to-r from-[#835D23] to-[#B58130]">
                        add items <FaUtensils className="ml-3"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItems;