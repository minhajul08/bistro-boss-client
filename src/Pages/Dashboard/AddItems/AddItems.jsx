import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {  FaUtensils } from "react-icons/fa";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
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
                image: res.data.data.displayUrl
            }
            // 
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log (menuRes.data)
            if (menuRes.data.insertedId){
                reset ();
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log ('with image url',res.data)
    }
    return (
        <div>
            <SectionTitle heading="Add an items" subHeading="what's new"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>

                        </label>
                        <input type="text"
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
                            <select {...register("category", { required: true })} className="select select-bordered w-full" defaultValue="">
                                <option value="" disabled>Category</option>
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
                        <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

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

export default AddItems;