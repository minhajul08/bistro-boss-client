import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <SectionTitle heading="Add an items" subHeading="what's new"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />
                    <select {...register("category")}  className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="Soup">Soup</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Drinks">Drinks</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;