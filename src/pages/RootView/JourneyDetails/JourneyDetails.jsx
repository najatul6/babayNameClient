import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JourneyDetails = () => {
    const { id } = useParams(); // Get the ID from the URL params
    const [cardDetails, setCardDetails] = useState(null);

    useEffect(() => {
        fetch("/journey.json") // Fetch the entire journey list
            .then((res) => res.json())
            .then((data) => {
                const selectedJourney = data.find((item) => item.id === id);
                setCardDetails(selectedJourney);
            })
            .catch((error) => console.error("Error fetching journey details:", error));
    }, [id]); // Refetch when the ID changes

    if (!cardDetails) return <p className="text-center text-lg">Loading...</p>;

    return (
        <div className="p-4 w-full mx-auto flex flex-col items-center border">
            <div className="w-full relative">
                <img src={cardDetails.logo} alt={cardDetails.title} className="w-full max-h-96 object-cover rounded-lg" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center">
                    <h1 className="text-lg md:text-3xl font-bold mt-4 text-center text-white">{cardDetails.title}</h1>
                    <h2 className="text-md md:text-lg text-gray-200 text-center">{cardDetails.subTitle}</h2>
                    <p className="mt-2 text-gray-300 text-center px-4 md:px-8 text-sm md:text-base">{cardDetails.description}</p>
                </div>
            </div>

            <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mt-6 w-full px-4 md:px-8">
                    <h3 className="text-xl font-semibold">Introduction</h3>
                    <p>{cardDetails.content.introduction}</p>
                </div>

                {cardDetails.content.sections.map((section, index) => (
                    <div key={index} className="mt-4 w-full px-4 md:px-8">
                        <h3 className="text-lg font-semibold">{section.heading}</h3>
                        <p>{section.body}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 w-full px-4 md:px-8">
                <h3 className="text-xl font-semibold">Tips</h3>
                <ul className="list-disc ml-6 md:ml-8">
                    {cardDetails.content.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6 w-full px-4 md:px-8">
                <h3 className="text-xl font-semibold">FAQs</h3>
                {cardDetails.content.faqs.map((faq, index) => (
                    <div key={index} className="mt-2">
                        <p className="font-semibold">{faq.question}</p>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JourneyDetails;
