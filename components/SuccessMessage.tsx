// Create a SuccessMessage component (SuccessMessage.js)
import React from "react";
import Link from "next/link";

const SuccessMessage = () => {
    return (
        <div>
            <h2>Enrollment Successful!</h2>
            <p>Your enrollment has been successful.</p>
            <Link href="/">Go back to the home page</Link>
        </div>
    );
};

export default SuccessMessage;
