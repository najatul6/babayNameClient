import PropTypes from "prop-types"

const JourneyCards = ({ banner, title, description }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 max-w-sm bg-gray-100 animate__animated animate__fadeIn">
            <div className="relative border">

                <div className="overflow-hidden rounded-lg">
                    <img
                        src={banner}
                        alt="Pregnancy Test"
                        className="w-full h-48 object-cover "
                    />
                </div>
                <div className="absolute -bottom-[1.50rem] w-full flex justify-center items-center">

                    <h2 className="inline-block bg-blue-900 text-white text-lg font-bold py-2 px-4  rounded-md animate__animated animate__bounceIn">
                        {title}
                    </h2>
                </div>
            </div>
            <div className="text-center mt-10">
                <p className="text-gray-700 mt-2 px-4">
                    {description}
                </p>
            </div>
        </div>
    )
}

JourneyCards.propTypes = {
    banner: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default JourneyCards