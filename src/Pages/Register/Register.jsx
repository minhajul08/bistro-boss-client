import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const Register = () => {
  const { createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate ();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then (result => {
      const loggedUser = result.user;
      console.log (loggedUser);
      updateUserProfile (data.name,data.image)
      .then ( () => {
        console.log ('user profile updated')
        reset ()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate ('/');
      })
      .catch (error => console.log (error))
    })
  }
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register
        </title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                {errors.name && <span className="text-red-700">Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                {errors.email && <span className="text-red-700">Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" {...register("image", { required: true })}  className="input input-bordered" />
                {errors.image && <span className="text-red-700">image field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password", {
                  required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
                })} className="input input-bordered" />
                {errors.password?.type === "required" && (
                  <p className="text-red-700" role="alert">password filed is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-700" role="alert">password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-700" role="alert">password must be less than 20 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-700" role="alert">password must be one uppercase letter, one lowercase letter, one number and one special character</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Register" />
              </div>
            </form>
            <p>Already have a account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;