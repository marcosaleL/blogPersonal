import React from "react";
import styled from "styled-components";
import heart from '../../assets/images/white-heart.png';



const WhiteHeart = styled.img`
    height: 16px;
    padding: 4px;
`

const ArticleBarUI = styled.div`
    height: 24px;
    width: 220px;
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* Adjust the number of columns as needed */
    gap: 2px; /* Spacing between items */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    margin: 2px;
    border-radius: 5px;
    background-color: #dddddd;
`;
function ArticleBar(props) {

    return (
        <ArticleBarUI>
            <WhiteHeart src={heart} alt="Description of image 1" />
            <WhiteHeart src={heart} alt="Description of image 1" />
            <WhiteHeart src={heart} alt="Description of image 1" />
            <WhiteHeart src={heart} alt="Description of image 1" />
            <WhiteHeart src={heart} alt="Description of image 1" />
            <WhiteHeart src={heart} alt="Description of image 1" />
        </ArticleBarUI>
    );
}

export default ArticleBar;