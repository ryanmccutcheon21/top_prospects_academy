'use client'

import React, { useState } from "react";
import { EnrollButtonProps } from "@/types"
import { useRouter } from "next/navigation";

const EnrollButton: React.FC<EnrollButtonProps> = ({ step, setStep }) => {
    const router = useRouter()

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleEnroll = () => {
        // Perform the enrollment logic here, e.g., make an API request.

        // Assuming the enrollment is successful, show the success message and redirect.
        setShowSuccessMessage(true);

        // Redirect to the home page after a delay (e.g., 3 seconds).
        setTimeout(() => {
            router.push("/"); // Replace with your home page URL
        }, 3000); // 3000 milliseconds (3 seconds)
    };

    return (
        <div className="flex justify-center">
            {showSuccessMessage ? (
                <div className="text-green-500 text-xl mt-5">
                    Enrollment successful! You will be redirected to the home page.
                </div>
            ) : (
                <>
                    {step > 1 && (
                        <button
                            onClick={() => setStep(step - 1)}
                            type="button"
                            className='bg-primary1 font-button-text font-extrabold text-[1.25rem] rounded-lg px-10 mt-5 mr-5 text-black py-2 cursor-pointer hover:opacity-80 md:text-[1rem] md:px-5 md:py-1'
                        >
                            Back
                        </button>
                    )}
                    {step < 3 ? (
                        <button
                            onClick={() => setStep(step + 1)}
                            type="button"
                            className='bg-primary1 font-button-text font-extrabold text-[1.25rem] rounded-lg px-10 mt-5 text-black py-2 cursor-pointer hover:opacity-80 md:text-[1rem] md:px-5 md:py-1'
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={handleEnroll} // Call the handleEnroll function on "Enroll" button click
                            type="button"
                            className='bg-primary1 font-button-text font-extrabold text-[1.25rem] rounded-lg px-9 mt-5 text-black py-2 cursor-pointer hover:opacity-80 md:text-[1rem] md:px-5 md:py-1'
                        >
                            Enroll
                        </button>
                    )}
                </>
            )}
        </div>
    )
}

export default EnrollButton