import useAuth from "@/hooks/useAuth";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bgImages from "../../../assets/Pregnant in love.jpeg";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const { createUser, updateUserProfile } = useAuth();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    toast.promise(
      createUser(data.email, data.password)
        .then((result) => {
          console.log("User Created:", result);
          updateUserProfile(data.name);
          const userData = {
            name: data.name,
            email: data.email,
            role: "user",
            uid: result.user.uid,
            photoURL: "",
            createdAt: new Date().toISOString(),
          };
          axiosPublic.post("/createUser", userData).then((res) => {
            if (res.data.insertedId) {
              navigate(form, { replace: true });
            }
          });
        })
        .catch((error) => {
          console.error("Error Creating User:", error);
          setError(error.code);
          throw error;
        }),
      {
        pending: "Creating User...",
        success: "User Created Successfully",
        error: `${error}`,
      }
    );
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImages})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex items-center justify-center w-full h-screen"
    >
      <div className="rounded-xl sm:px-6 px-4 py-8 max-w-md lg:w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] bg-white/50 backdrop-blur-sm max-lg:mx-auto">
        <Helmet>
          <title>Register</title>
          <link rel="najatul islam" href="https://www.najatulislam.me/" />
        </Helmet>

        <p className="text-2xl font-bold dark:text-white">Create Account</p>
        <p className="dark:text-gray-200">It will take less than 2 minutes</p>

        <div className="mt-4">
          <button className="w-full text-center py-2 my-3 border flex items-center justify-center border-slate-600 rounded-lg  hover:border-slate-700 hover:text-slate-900 hover:shadow transition duration-150">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-5 h-5 mr-2"
              alt="Google Icon"
            />
            <span className="text-black">Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
