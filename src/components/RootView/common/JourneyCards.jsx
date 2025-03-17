import image from "../../../assets/Pregnant in love.jpeg"
const JourneyCards = () => {
    return (
        <div className="border rounded-lg shadow-md p-4 max-w-sm bg-white animate__animated animate__fadeIn">
            <div className="relative border">

                <div className="overflow-hidden rounded-lg">
                    <img
                        src={image}
                        alt="Pregnancy Test"
                        className="w-full h-48 object-cover "
                    />
                </div>
                <div className="absolute -bottom-[1.50rem] w-full flex justify-center items-center">

                    <h2 className="inline-block bg-blue-900 text-white text-lg font-bold py-2 px-4  rounded-md animate__animated animate__bounceIn">
                        Getting Pregnant
                    </h2>
                </div>
            </div>
            <div className="text-center mt-4">

                <p className="text-gray-700 mt-2 px-4">
                    From fertility signs to look for to ways of upping your odds of conception, get actionable advice that’ll set you on a path to parenthood.
                </p>
            </div>
        </div>
    )
}

export default JourneyCards