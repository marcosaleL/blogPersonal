import React from "react";
import styled from 'styled-components';

//
//Negro: #000000
//Gris oscuro: #4A4A4A
//Gris medio: #A0A0A0
//Gris claro: #D0D0D0
//Celeste oscuro: #6CA6CD
//Celeste medio: #87CEEB
//Celeste claro: #B0E0E6

const TitleUI = styled.h1`
    height: ${({ size }) => (size === 'large' ? '50px' : size === 'medium' ? '20px' : '10px')};
    width: ${({ size }) => (size === 'large' ? '310px' : size === 'medium' ? '20vw' : '10vw')};
    font-size: ${({ size }) => (size === 'large' ? '50px' : size === 'medium' ? '20px' : '10px')};
    font-weight: bold;
    margin: 20px 10px 20px 10px;
    color: #4A4A4A;
    border-radius: 50px;
    text-shadow: 
        1px 1px 0 #f36b39;
`;


const SubtitleUI = styled.h2`
    height: ${({ size }) => (size === 'large' ? '30px' : size === 'medium' ? '20px' : '10px')};
    width: ${({ size }) => (size === 'large' ? '310px' : size === 'medium' ? '20vw' : '10vw')};
    font-size: ${({ size }) => (size === 'large' ? '30px' : size === 'medium' ? '20px' : '10px')};
    font-weight: bold;
    margin: 20px 10px 20px 10px;
    display: flex;
    justify-content: left;
    color: #333333
`;

const ParagraphUI = styled.p`
    height: ${({ size }) => (size === 'large' ? '510px' : size === 'medium' ? '20px' : '10px')};
    width: ${({ size }) => (size === 'large' ? '260px' : size === 'medium' ? '20vw' : '10vw')};
    font-size: ${({ size }) => (size === 'large' ? '15px' : size === 'medium' ? '20px' : '10px')};
    font-weight: bold;
    background-color: #333333;
    border-radius: 50px;
    padding: 25px;
    color: #EEEEEE;
    text-align: left; /* Aligns text to the left */
`;
const ArticleUI = styled.div`
    height: 650px;
    width: 350px;
    background: linear-gradient(0deg, #004173 0%,  #000000 25%);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50px;
    margin: 20px;
`;
function Article({ props }) {

    return (
        <ArticleUI>
            <TitleUI size="large">Article title</TitleUI>
            <SubtitleUI size="large">Article subtitle</SubtitleUI>
            <ParagraphUI size="large">Cillum sint nulla mollit enim id quis ut ullamco do voluptate.Reprehenderit sunt pariatur excepteur ut aute. Ad labore incididunt tempor anim. Laborum ullamco consectetur ipsum elit amet ad Lorem ullamco. Ipsum velit dolor aute cillum tempor ea elit amet est aliqua. Voluptate pariatur aute minim irure nostrud voluptate cillum.</ParagraphUI>
        </ArticleUI>
    );
}

export default Article;