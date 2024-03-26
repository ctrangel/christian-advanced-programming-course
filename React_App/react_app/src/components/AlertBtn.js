import React from "react";

const AlertBtn = () => {
    const handleClick = () => {
        alert("Button Clicked");
    }
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default AlertBtn;