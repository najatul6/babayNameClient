
const Banner = () => {
  return (
    <div className="w-full">
    <div
      style={{
        backgroundImage: "url('https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/05/pregnant-and-friends-1296x728-header.jpg?w=1155&h=1528')",
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
          The Freedom to Create the Pages You Want
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
    <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
      <div className="relative sm:w-2/3 w-11/12 flex justify-center items-center gap-6">
       
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold leading-tight">
            Create Your Own Page
          </h2>
          <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 mt-5 sm:mt-10">
            Create your own page with the components you want. You can also
            customize the components to fit your needs.
          </p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold leading-tight mt-10 sm:mt-20">
            Share Your Page
          </h2>
          <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 mt-5 sm:mt-10">
            Share your page with others. You can also publish your page to
            the public.
          </p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold leading-tight mt-10 sm:mt-20">
            Collaborate with Others
          </h2>
          <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 mt-5 sm:mt-10">
            Collaborate with others to create a page. You can also invite
            others to edit your page.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner