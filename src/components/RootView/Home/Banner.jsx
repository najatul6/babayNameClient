const Banner = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto">
      <div
        style={{
          backgroundImage:
            "url('https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/05/pregnant-and-friends-1296x728-header.jpg?w=1155&h=1528')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative rounded-lg  container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64"
      >
        <img
          className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg"
          alt="bg"
        />
        <img
          className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg"
          alt="bg"
        />
        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
          <h1 className="text-2xl  xl:text-4xl text-center text-baseColor font-bold leading-tight backdrop-blur-sm">
          Get real-life product recommendations from other parents, personalized just for you.
          </h1>
        </div>
        <div className="flex justify-center items-center mb-10 sm:mb-20">
          <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">
            Get Started
          </button>
          <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
            Learn More
          </button>
        </div>
      </div>
      <div className="container mx-auto flex justify-center md:-mt-60 -mt-10 ">
        <div className="relative sm:w-2/3 w-11/12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 bg-white rounded-md border-2 border-baseColor py-2 px-1 md:py-10 md:px-5  md:mt-20">
            <div>
              <h2 className="text-xl font-bold leading-tight text-baseColor">
                Baby Names &rarr;
              </h2>
              <p className="mt-5 text-justify">
                Discover thousands of options using our baby name generators and
                lists for every alphabet letter, style and origin.
              </p>
            </div>
            <div>
              <h2 className="text-xl  font-bold leading-tight text-baseColor">
                Pregnancy Week by Week &rarr;
              </h2>
              <p className="mt-5 text-justify">
                Decode your pregnancy symptoms, get updates on baby’s
                development and tackle your weekly to-dos.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold leading-tight text-baseColor">
                Baby Month by Month &rarr;
              </h2>
              <p className="mt-5 text-justify">
                Learn about baby’s milestones at every age and stage—from baby’s
                first day home to their first birthday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
