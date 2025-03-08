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
        <button
            // onClick={handleGoogleSignIn}
            type="button"
            className="py-2.5 w-full px-4 text-sm font-semibold rounded-md  bg-pink-400 hover:bg-pink-500 focus:outline-none text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              className="inline mr-4"
              viewBox="0 0 512 512"
            >
              <path
                fill="#fbbd00"
                d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                data-original="#fbbd00"
              />
              <path
                fill="#0f9d58"
                d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                data-original="#0f9d58"
              />
              <path
                fill="#31aa52"
                d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                data-original="#31aa52"
              />
              <path
                fill="#3c79e6"
                d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                data-original="#3c79e6"
              />
              <path
                fill="#cf2d48"
                d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                data-original="#cf2d48"
              />
              <path
                fill="#eb4132"
                d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                data-original="#eb4132"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
