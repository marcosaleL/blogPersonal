import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ContentUI = styled.p`
    width: 260px;
    font-size: 15px;
    font-weight: bold;
    color: #000000;
    text-align: left;
    text-shadow: 1px 1px #9ac6c5;
`;
function Content({ content }) {
    // Set initial state with an empty string
    const [contentState, setContent] = useState('Something');

    // Update content when newContent prop changes
    useEffect(() => {
        // Ensure newContent is not undefined before setting content
        if (content !== undefined) {
            setContent(content);
        }
    }, [content]); // Include newContent in the dependency array

    return (
        <div>
            {/* Render content or "Something" if content is not provided */}
            <ContentUI>{contentState}</ContentUI>
        </div>
    )
}

export default Content;