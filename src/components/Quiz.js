import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import GameOver from './GameOver'
import Pic1A from '../Image1_original.jpg'
import Pic1B from '../Image1_changed.png'
import Pic2A from '../Image2_original.jpg'
import Pic2B from '../Image2_changed.png'
import Pic3A from '../Image3_original.jpg'
import Pic3B from '../Image3_changed.png'
import PicNS1A from '../nonsocial1_original.JPG'
import PicNS1B from '../nonsocial1_changed.png'
import PicNS2A from '../nonsocial2original.jpeg'
import PicNS2B from '../nonsocial2_changed.jpg'
import PicNS3A from '../nonsocial3original.jpeg'
import PicNS3B from '../nonsocial3changed.png'
import PicNST1A from '../nonsocialtraining1.jpeg'
import PicNST1B from '../nonsocial_training_1_changed.jpg'
import PicNST2A from '../nonsocial_training_2.jpeg'
import PicNST2B from '../nonsocial_training_2_changed.png'
import Circle from '../kisspng-disk-green-circle-5af97c364e1283.3175421115262997023198.png'
import Button from './Button'
import { CSVLink, CSVDownload } from "react-csv";
import { Form } from 'react-bootstrap'
import CountdownTimer from './CountdownTimer';



const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;
const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;
const QuizWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 15vh;
`;
const checkPopUp = styled.div`
    top:150px,
    left:150px, // hide div first
    width:100px,
    height:100px,
`;
const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;
    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;
const Option = styled.button`
    display: block;
    border: 1px solid #616A94;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #616A94;
        }
    }
`;
const Question = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const Quiz = ({props}) => {

    const [participantID, setParticipantID] = useState("");
    const handleParticipant = () => {
        console.log("something");
        console.log(document.getElementById("partid").value);
        setParticipantID(document.getElementById("partid").value);
        setShow(false);
        setShowPause(true);
    }
    const [timerLength, setTimerLength] = useState(60);
    const [pts, setPts] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    const [correct, setCorrect] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [counter, setCounter] = useState(timerLength);
    const [counter1, setCounter1] = useState(0);
    const [current, setCurrent] = useState(0);

    //Image 1 times to find each change
    const [Image1Change1, setImage1Change1] = useState(-1);
    const [Image1Change2, setImage1Change2] = useState(-1);
    const [Image1Change3, setImage1Change3] = useState(-1);
    const [Image1Change4, setImage1Change4] = useState(-1);
    const [Image1Change5, setImage1Change5] = useState(-1);
    const [Image1Change6, setImage1Change6] = useState(-1);
    const [Image1Change7, setImage1Change7] = useState(-1);
    const [Image1Change8, setImage1Change8] = useState(-1);

    //Image 2 times to find each change
    const [Image2Change1, setImage2Change1] = useState(-1);
    const [Image2Change2, setImage2Change2] = useState(-1);
    const [Image2Change3, setImage2Change3] = useState(-1);
    const [Image2Change4, setImage2Change4] = useState(-1);
    const [Image2Change5, setImage2Change5] = useState(-1);
    const [Image2Change6, setImage2Change6] = useState(-1);
    const [Image2Change7, setImage2Change7] = useState(-1);
    const [Image2Change8, setImage2Change8] = useState(-1);

    //Image 3 times to find each change
    const [Image3Change1, setImage3Change1] = useState(-1);
    const [Image3Change2, setImage3Change2] = useState(-1);
    const [Image3Change3, setImage3Change3] = useState(-1);
    const [Image3Change4, setImage3Change4] = useState(-1);
    const [Image3Change5, setImage3Change5] = useState(-1);
    const [Image3Change6, setImage3Change6] = useState(-1);
    const [Image3Change7, setImage3Change7] = useState(-1);
    const [Image3Change8, setImage3Change8] = useState(-1);

    //Image NS1 times to find each change
    const [ImageNS1Change1, setImageNS1Change1] = useState(-1);
    const [ImageNS1Change2, setImageNS1Change2] = useState(-1);
    const [ImageNS1Change3, setImageNS1Change3] = useState(-1);
    const [ImageNS1Change4, setImageNS1Change4] = useState(-1);
    const [ImageNS1Change5, setImageNS1Change5] = useState(-1);
    const [ImageNS1Change6, setImageNS1Change6] = useState(-1);
    const [ImageNS1Change7, setImageNS1Change7] = useState(-1);
    const [ImageNS1Change8, setImageNS1Change8] = useState(-1);

    //Image NS2 times to find each change
    const [ImageNS2Change1, setImageNS2Change1] = useState(-1);
    const [ImageNS2Change2, setImageNS2Change2] = useState(-1);
    const [ImageNS2Change3, setImageNS2Change3] = useState(-1);
    const [ImageNS2Change4, setImageNS2Change4] = useState(-1);
    const [ImageNS2Change5, setImageNS2Change5] = useState(-1);
    const [ImageNS2Change6, setImageNS2Change6] = useState(-1);
    const [ImageNS2Change7, setImageNS2Change7] = useState(-1);
    const [ImageNS2Change8, setImageNS2Change8] = useState(-1);

    //Image NS3 times to find each change
    const [ImageNS3Change1, setImageNS3Change1] = useState(-1);
    const [ImageNS3Change2, setImageNS3Change2] = useState(-1);
    const [ImageNS3Change3, setImageNS3Change3] = useState(-1);
    const [ImageNS3Change4, setImageNS3Change4] = useState(-1);
    const [ImageNS3Change5, setImageNS3Change5] = useState(-1);
    const [ImageNS3Change6, setImageNS3Change6] = useState(-1);
    const [ImageNS3Change7, setImageNS3Change7] = useState(-1);
    const [ImageNS3Change8, setImageNS3Change8] = useState(-1);

    //Image NST1 times to find each change
    const [ImageNST1Change1, setImageNST1Change1] = useState(-1);
    const [ImageNST1Change2, setImageNST1Change2] = useState(-1);
    const [ImageNST1Change3, setImageNST1Change3] = useState(-1);
    const [ImageNST1Change4, setImageNST1Change4] = useState(-1);
    const [ImageNST1Change5, setImageNST1Change5] = useState(-1);
    const [ImageNST1Change6, setImageNST1Change6] = useState(-1);
    const [ImageNST1Change7, setImageNST1Change7] = useState(-1);
    const [ImageNST1Change8, setImageNST1Change8] = useState(-1);

    //Image NST2 times to find each change
    const [ImageNST2Change1, setImageNST2Change1] = useState(-1);
    const [ImageNST2Change2, setImageNST2Change2] = useState(-1);
    const [ImageNST2Change3, setImageNST2Change3] = useState(-1);
    const [ImageNST2Change4, setImageNST2Change4] = useState(-1);
    const [ImageNST2Change5, setImageNST2Change5] = useState(-1);
    const [ImageNST2Change6, setImageNST2Change6] = useState(-1);
    const [ImageNST2Change7, setImageNST2Change7] = useState(-1);
    const [ImageNST2Change8, setImageNST2Change8] = useState(-1);

    //Image 1 times to find each change
    const [Image1Change1Time, setImage1Change1Time] = useState(-1);
    const [Image1Change2Time, setImage1Change2Time] = useState(-1);
    const [Image1Change3Time, setImage1Change3Time] = useState(-1);
    const [Image1Change4Time, setImage1Change4Time] = useState(-1);
    const [Image1Change5Time, setImage1Change5Time] = useState(-1);
    const [Image1Change6Time, setImage1Change6Time] = useState(-1);
    const [Image1Change7Time, setImage1Change7Time] = useState(-1);
    const [Image1Change8Time, setImage1Change8Time] = useState(-1);

    //Image 2 times to find each change
    const [Image2Change1Time, setImage2Change1Time] = useState(-1);
    const [Image2Change2Time, setImage2Change2Time] = useState(-1);
    const [Image2Change3Time, setImage2Change3Time] = useState(-1);
    const [Image2Change4Time, setImage2Change4Time] = useState(-1);
    const [Image2Change5Time, setImage2Change5Time] = useState(-1);
    const [Image2Change6Time, setImage2Change6Time] = useState(-1);
    const [Image2Change7Time, setImage2Change7Time] = useState(-1);
    const [Image2Change8Time, setImage2Change8Time] = useState(-1);

    //Image 3 times to find each change
    const [Image3Change1Time, setImage3Change1Time] = useState(-1);
    const [Image3Change2Time, setImage3Change2Time] = useState(-1);
    const [Image3Change3Time, setImage3Change3Time] = useState(-1);
    const [Image3Change4Time, setImage3Change4Time] = useState(-1);
    const [Image3Change5Time, setImage3Change5Time] = useState(-1);
    const [Image3Change6Time, setImage3Change6Time] = useState(-1);
    const [Image3Change7Time, setImage3Change7Time] = useState(-1);
    const [Image3Change8Time, setImage3Change8Time] = useState(-1);

    //Image NS1 times to find each change
    const [ImageNS1Change1Time, setImageNS1Change1Time] = useState(-1);
    const [ImageNS1Change2Time, setImageNS1Change2Time] = useState(-1);
    const [ImageNS1Change3Time, setImageNS1Change3Time] = useState(-1);
    const [ImageNS1Change4Time, setImageNS1Change4Time] = useState(-1);
    const [ImageNS1Change5Time, setImageNS1Change5Time] = useState(-1);
    const [ImageNS1Change6Time, setImageNS1Change6Time] = useState(-1);
    const [ImageNS1Change7Time, setImageNS1Change7Time] = useState(-1);
    const [ImageNS1Change8Time, setImageNS1Change8Time] = useState(-1);

    //Image NS2 times to find each change
    const [ImageNS2Change1Time, setImageNS2Change1Time] = useState(-1);
    const [ImageNS2Change2Time, setImageNS2Change2Time] = useState(-1);
    const [ImageNS2Change3Time, setImageNS2Change3Time] = useState(-1);
    const [ImageNS2Change4Time, setImageNS2Change4Time] = useState(-1);
    const [ImageNS2Change5Time, setImageNS2Change5Time] = useState(-1);
    const [ImageNS2Change6Time, setImageNS2Change6Time] = useState(-1);
    const [ImageNS2Change7Time, setImageNS2Change7Time] = useState(-1);
    const [ImageNS2Change8Time, setImageNS2Change8Time] = useState(-1);

    //Image NS3 times to find each change
    const [ImageNS3Change1Time, setImageNS3Change1Time] = useState(-1);
    const [ImageNS3Change2Time, setImageNS3Change2Time] = useState(-1);
    const [ImageNS3Change3Time, setImageNS3Change3Time] = useState(-1);
    const [ImageNS3Change4Time, setImageNS3Change4Time] = useState(-1);
    const [ImageNS3Change5Time, setImageNS3Change5Time] = useState(-1);
    const [ImageNS3Change6Time, setImageNS3Change6Time] = useState(-1);
    const [ImageNS3Change7Time, setImageNS3Change7Time] = useState(-1);
    const [ImageNS3Change8Time, setImageNS3Change8Time] = useState(-1);

    //Image NST1 times to find each change
    const [ImageNST1Change1Time, setImageNST1Change1Time] = useState(-1);
    const [ImageNST1Change2Time, setImageNST1Change2Time] = useState(-1);
    const [ImageNST1Change3Time, setImageNST1Change3Time] = useState(-1);
    const [ImageNST1Change4Time, setImageNST1Change4Time] = useState(-1);
    const [ImageNST1Change5Time, setImageNST1Change5Time] = useState(-1);
    const [ImageNST1Change6Time, setImageNST1Change6Time] = useState(-1);
    const [ImageNST1Change7Time, setImageNST1Change7Time] = useState(-1);
    const [ImageNST1Change8Time, setImageNST1Change8Time] = useState(-1);

    //Image NST2 times to find each change
    const [ImageNST2Change1Time, setImageNST2Change1Time] = useState(-1);
    const [ImageNST2Change2Time, setImageNST2Change2Time] = useState(-1);
    const [ImageNST2Change3Time, setImageNST2Change3Time] = useState(-1);
    const [ImageNST2Change4Time, setImageNST2Change4Time] = useState(-1);
    const [ImageNST2Change5Time, setImageNST2Change5Time] = useState(-1);
    const [ImageNST2Change6Time, setImageNST2Change6Time] = useState(-1);
    const [ImageNST2Change7Time, setImageNST2Change7Time] = useState(-1);
    const [ImageNST2Change8Time, setImageNST2Change8Time] = useState(-1);
	
	//variables to control highlighting found changes in Image 1
    const [showImage1Change1, setShowImage1Change1] = useState(false);
    const [showImage1Change2, setShowImage1Change2] = useState(false);
    const [showImage1Change3, setShowImage1Change3] = useState(false);
    const [showImage1Change4, setShowImage1Change4] = useState(false);
    const [showImage1Change5, setShowImage1Change5] = useState(false);
    const [showImage1Change6, setShowImage1Change6] = useState(false);
    const [showImage1Change7, setShowImage1Change7] = useState(false);
    const [showImage1Change8, setShowImage1Change8] = useState(false);
	
	//variables to control highlighting found changes in Image 2
    const [showImage2Change1, setShowImage2Change1] = useState(false);
    const [showImage2Change2, setShowImage2Change2] = useState(false);
    const [showImage2Change3, setShowImage2Change3] = useState(false);
    const [showImage2Change4, setShowImage2Change4] = useState(false);
    const [showImage2Change5, setShowImage2Change5] = useState(false);
    const [showImage2Change6, setShowImage2Change6] = useState(false);
    const [showImage2Change7, setShowImage2Change7] = useState(false);
    const [showImage2Change8, setShowImage2Change8] = useState(false);
	
	//variables to control highlighting found changes in Image 3
    const [showImage3Change1, setShowImage3Change1] = useState(false);
    const [showImage3Change2, setShowImage3Change2] = useState(false);
    const [showImage3Change3, setShowImage3Change3] = useState(false);
    const [showImage3Change4, setShowImage3Change4] = useState(false);
    const [showImage3Change5, setShowImage3Change5] = useState(false);
    const [showImage3Change6, setShowImage3Change6] = useState(false);
    const [showImage3Change7, setShowImage3Change7] = useState(false);
    const [showImage3Change8, setShowImage3Change8] = useState(false);
	
	//variables to control highlighting found changes in Image NS1
    const [showImageNS1Change1, setShowImageNS1Change1] = useState(false);
    const [showImageNS1Change2, setShowImageNS1Change2] = useState(false);
    const [showImageNS1Change3, setShowImageNS1Change3] = useState(false);
    const [showImageNS1Change4, setShowImageNS1Change4] = useState(false);
    const [showImageNS1Change5, setShowImageNS1Change5] = useState(false);
    const [showImageNS1Change6, setShowImageNS1Change6] = useState(false);
    const [showImageNS1Change7, setShowImageNS1Change7] = useState(false);
    const [showImageNS1Change8, setShowImageNS1Change8] = useState(false);
	
	//variables to control highlighting found changes in Image NS2
    const [showImageNS2Change1, setShowImageNS2Change1] = useState(false);
    const [showImageNS2Change2, setShowImageNS2Change2] = useState(false);
    const [showImageNS2Change3, setShowImageNS2Change3] = useState(false);
    const [showImageNS2Change4, setShowImageNS2Change4] = useState(false);
    const [showImageNS2Change5, setShowImageNS2Change5] = useState(false);
    const [showImageNS2Change6, setShowImageNS2Change6] = useState(false);
    const [showImageNS2Change7, setShowImageNS2Change7] = useState(false);
    const [showImageNS2Change8, setShowImageNS2Change8] = useState(false);
	
	//variables to control highlighting found changes in Image NS3
    const [showImageNS3Change1, setShowImageNS3Change1] = useState(false);
    const [showImageNS3Change2, setShowImageNS3Change2] = useState(false);
    const [showImageNS3Change3, setShowImageNS3Change3] = useState(false);
    const [showImageNS3Change4, setShowImageNS3Change4] = useState(false);
    const [showImageNS3Change5, setShowImageNS3Change5] = useState(false);
    const [showImageNS3Change6, setShowImageNS3Change6] = useState(false);
    const [showImageNS3Change7, setShowImageNS3Change7] = useState(false);
    const [showImageNS3Change8, setShowImageNS3Change8] = useState(false);
	
	//variables to control highlighting found changes in Image NST1
    const [showImageNST1Change1, setShowImageNST1Change1] = useState(false);
    const [showImageNST1Change2, setShowImageNST1Change2] = useState(false);
    const [showImageNST1Change3, setShowImageNST1Change3] = useState(false);
    const [showImageNST1Change4, setShowImageNST1Change4] = useState(false);
    const [showImageNST1Change5, setShowImageNST1Change5] = useState(false);
    const [showImageNST1Change6, setShowImageNST1Change6] = useState(false);
    const [showImageNST1Change7, setShowImageNST1Change7] = useState(false);
    const [showImageNST1Change8, setShowImageNST1Change8] = useState(false);
	
	//variables to control highlighting found changes in Image NST2
    const [showImageNST2Change1, setShowImageNST2Change1] = useState(false);
    const [showImageNST2Change2, setShowImageNST2Change2] = useState(false);
    const [showImageNST2Change3, setShowImageNST2Change3] = useState(false);
    const [showImageNST2Change4, setShowImageNST2Change4] = useState(false);
    const [showImageNST2Change5, setShowImageNST2Change5] = useState(false);
    const [showImageNST2Change6, setShowImageNST2Change6] = useState(false);
    const [showImageNST2Change7, setShowImageNST2Change7] = useState(false);
    const [showImageNST2Change8, setShowImageNST2Change8] = useState(false);
	
	//coordinates for Image1
	
	const [Image1Change1Cord, setImage1Change1Cord] = useState({x: 0, y: 0});
	const [Image1Change1Cord2, setImage1Change1Cord2] = useState({x: 0, y: 0});
	const [Image1Change2Cord, setImage1Change2Cord] = useState({x: 0, y: 0});
	const [Image1Change2Cord2, setImage1Change2Cord2] = useState({x: 0, y: 0});
	const [Image1Change3Cord, setImage1Change3Cord] = useState({x: 0, y: 0});
	const [Image1Change3Cord2, setImage1Change3Cord2] = useState({x: 0, y: 0});
	const [Image1Change4Cord, setImage1Change4Cord] = useState({x: 0, y: 0});
	const [Image1Change4Cord2, setImage1Change4Cord2] = useState({x: 0, y: 0});
	const [Image1Change5Cord, setImage1Change5Cord] = useState({x: 0, y: 0});
	const [Image1Change5Cord2, setImage1Change5Cord2] = useState({x: 0, y: 0});
	const [Image1Change6Cord, setImage1Change6Cord] = useState({x: 0, y: 0});
	const [Image1Change6Cord2, setImage1Change6Cord2] = useState({x: 0, y: 0});
	const [Image1Change7Cord, setImage1Change7Cord] = useState({x: 0, y: 0});
	const [Image1Change7Cord2, setImage1Change7Cord2] = useState({x: 0, y: 0});
	const [Image1Change8Cord, setImage1Change8Cord] = useState({x: 0, y: 0});
	const [Image1Change8Cord2, setImage1Change8Cord2] = useState({x: 0, y: 0});
	
	//coordinates for Image2
	
	const [Image2Change1Cord, setImage2Change1Cord] = useState({x: 0, y: 0});
	const [Image2Change1Cord2, setImage2Change1Cord2] = useState({x: 0, y: 0});
	const [Image2Change2Cord, setImage2Change2Cord] = useState({x: 0, y: 0});
	const [Image2Change2Cord2, setImage2Change2Cord2] = useState({x: 0, y: 0});
	const [Image2Change3Cord, setImage2Change3Cord] = useState({x: 0, y: 0});
	const [Image2Change3Cord2, setImage2Change3Cord2] = useState({x: 0, y: 0});
	const [Image2Change4Cord, setImage2Change4Cord] = useState({x: 0, y: 0});
	const [Image2Change4Cord2, setImage2Change4Cord2] = useState({x: 0, y: 0});
	const [Image2Change5Cord, setImage2Change5Cord] = useState({x: 0, y: 0});
	const [Image2Change5Cord2, setImage2Change5Cord2] = useState({x: 0, y: 0});
	const [Image2Change6Cord, setImage2Change6Cord] = useState({x: 0, y: 0});
	const [Image2Change6Cord2, setImage2Change6Cord2] = useState({x: 0, y: 0});
	const [Image2Change7Cord, setImage2Change7Cord] = useState({x: 0, y: 0});
	const [Image2Change7Cord2, setImage2Change7Cord2] = useState({x: 0, y: 0});
	const [Image2Change8Cord, setImage2Change8Cord] = useState({x: 0, y: 0});
	const [Image2Change8Cord2, setImage2Change8Cord2] = useState({x: 0, y: 0});
	
	//coordinates for Image3
	
	const [Image3Change1Cord, setImage3Change1Cord] = useState({x: 0, y: 0});
	const [Image3Change1Cord2, setImage3Change1Cord2] = useState({x: 0, y: 0});
	const [Image3Change2Cord, setImage3Change2Cord] = useState({x: 0, y: 0});
	const [Image3Change2Cord2, setImage3Change2Cord2] = useState({x: 0, y: 0});
	const [Image3Change3Cord, setImage3Change3Cord] = useState({x: 0, y: 0});
	const [Image3Change3Cord2, setImage3Change3Cord2] = useState({x: 0, y: 0});
	const [Image3Change4Cord, setImage3Change4Cord] = useState({x: 0, y: 0});
	const [Image3Change4Cord2, setImage3Change4Cord2] = useState({x: 0, y: 0});
	const [Image3Change5Cord, setImage3Change5Cord] = useState({x: 0, y: 0});
	const [Image3Change5Cord2, setImage3Change5Cord2] = useState({x: 0, y: 0});
	const [Image3Change6Cord, setImage3Change6Cord] = useState({x: 0, y: 0});
	const [Image3Change6Cord2, setImage3Change6Cord2] = useState({x: 0, y: 0});
	const [Image3Change7Cord, setImage3Change7Cord] = useState({x: 0, y: 0});
	const [Image3Change7Cord2, setImage3Change7Cord2] = useState({x: 0, y: 0});
	const [Image3Change8Cord, setImage3Change8Cord] = useState({x: 0, y: 0});
	const [Image3Change8Cord2, setImage3Change8Cord2] = useState({x: 0, y: 0});
	
	//coordinates for ImageNS1
	
	const [ImageNS1Change1Cord, setImageNS1Change1Cord] = useState({x: 0, y: 0});
	const [ImageNS1Change1Cord2, setImageNS1Change1Cord2] = useState({x: 0, y: 0});
	const [ImageNS1Change2Cord, setImageNS1Change2Cord] = useState({x: 0, y: 0});
	const [ImageNS1Change2Cord2, setImageNS1Change2Cord2] = useState({x: 0, y: 0});
	const [ImageNS1Change3Cord, setImageNS1Change3Cord] = useState({x: 0, y: 0});
	const [ImageNS1Change3Cord2, setImageNS1Change3Cord2] = useState({x: 0, y: 0});
	const [ImageNS1Change4Cord, setImageNS1Change4Cord] = useState({x: 0, y: 0});
	const [ImageNS1Change4Cord2, setImageNS1Change4Cord2] = useState({x: 0, y: 0});
	const [ImageNS1Change5Cord, setImageNS1Change5Cord] = useState({x: 0, y: 0});
	const [ImageNS1Change5Cord2, setImageNS1Change5Cord2] = useState({x: 0, y: 0});
	const [ImageNS1Change6Cord, setImageNS1Change6Cord] = useState({x: 0, y: 0});
	const [ImageNS1Change6Cord2, setImageNS1Change6Cord2] = useState({x: 0, y: 0});
	const [ImageNS1Change7Cord, setImageNS1Change7Cord] = useState({x: 0, y: 0});
	const [ImageNS1Change7Cord2, setImageNS1Change7Cord2] = useState({x: 0, y: 0});
	const [ImageNS1Change8Cord, setImageNS1Change8Cord] = useState({x: 0, y: 0});
	const [ImageNS1Change8Cord2, setImageNS1Change8Cord2] = useState({x: 0, y: 0});
	
	//coordinates for ImageNS2
	
	const [ImageNS2Change1Cord, setImageNS2Change1Cord] = useState({x: 0, y: 0});
	const [ImageNS2Change1Cord2, setImageNS2Change1Cord2] = useState({x: 0, y: 0});
	const [ImageNS2Change2Cord, setImageNS2Change2Cord] = useState({x: 0, y: 0});
	const [ImageNS2Change2Cord2, setImageNS2Change2Cord2] = useState({x: 0, y: 0});
	const [ImageNS2Change3Cord, setImageNS2Change3Cord] = useState({x: 0, y: 0});
	const [ImageNS2Change3Cord2, setImageNS2Change3Cord2] = useState({x: 0, y: 0});
	const [ImageNS2Change4Cord, setImageNS2Change4Cord] = useState({x: 0, y: 0});
	const [ImageNS2Change4Cord2, setImageNS2Change4Cord2] = useState({x: 0, y: 0});
	const [ImageNS2Change5Cord, setImageNS2Change5Cord] = useState({x: 0, y: 0});
	const [ImageNS2Change5Cord2, setImageNS2Change5Cord2] = useState({x: 0, y: 0});
	const [ImageNS2Change6Cord, setImageNS2Change6Cord] = useState({x: 0, y: 0});
	const [ImageNS2Change6Cord2, setImageNS2Change6Cord2] = useState({x: 0, y: 0});
	const [ImageNS2Change7Cord, setImageNS2Change7Cord] = useState({x: 0, y: 0});
	const [ImageNS2Change7Cord2, setImageNS2Change7Cord2] = useState({x: 0, y: 0});
	const [ImageNS2Change8Cord, setImageNS2Change8Cord] = useState({x: 0, y: 0});
	const [ImageNS2Change8Cord2, setImageNS2Change8Cord2] = useState({x: 0, y: 0});
	
	//coordinates for ImageNS3
	
	const [ImageNS3Change1Cord, setImageNS3Change1Cord] = useState({x: 0, y: 0});
	const [ImageNS3Change1Cord2, setImageNS3Change1Cord2] = useState({x: 0, y: 0});
	const [ImageNS3Change2Cord, setImageNS3Change2Cord] = useState({x: 0, y: 0});
	const [ImageNS3Change2Cord2, setImageNS3Change2Cord2] = useState({x: 0, y: 0});
	const [ImageNS3Change3Cord, setImageNS3Change3Cord] = useState({x: 0, y: 0});
	const [ImageNS3Change3Cord2, setImageNS3Change3Cord2] = useState({x: 0, y: 0});
	const [ImageNS3Change4Cord, setImageNS3Change4Cord] = useState({x: 0, y: 0});
	const [ImageNS3Change4Cord2, setImageNS3Change4Cord2] = useState({x: 0, y: 0});
	const [ImageNS3Change5Cord, setImageNS3Change5Cord] = useState({x: 0, y: 0});
	const [ImageNS3Change5Cord2, setImageNS3Change5Cord2] = useState({x: 0, y: 0});
	const [ImageNS3Change6Cord, setImageNS3Change6Cord] = useState({x: 0, y: 0});
	const [ImageNS3Change6Cord2, setImageNS3Change6Cord2] = useState({x: 0, y: 0});
	const [ImageNS3Change7Cord, setImageNS3Change7Cord] = useState({x: 0, y: 0});
	const [ImageNS3Change7Cord2, setImageNS3Change7Cord2] = useState({x: 0, y: 0});
	const [ImageNS3Change8Cord, setImageNS3Change8Cord] = useState({x: 0, y: 0});
	const [ImageNS3Change8Cord2, setImageNS3Change8Cord2] = useState({x: 0, y: 0});
	
	//coordinates for ImageNST1
	
	const [ImageNST1Change1Cord, setImageNST1Change1Cord] = useState({x: 0, y: 0});
	const [ImageNST1Change1Cord2, setImageNST1Change1Cord2] = useState({x: 0, y: 0});
	const [ImageNST1Change2Cord, setImageNST1Change2Cord] = useState({x: 0, y: 0});
	const [ImageNST1Change2Cord2, setImageNST1Change2Cord2] = useState({x: 0, y: 0});
	const [ImageNST1Change3Cord, setImageNST1Change3Cord] = useState({x: 0, y: 0});
	const [ImageNST1Change3Cord2, setImageNST1Change3Cord2] = useState({x: 0, y: 0});
	const [ImageNST1Change4Cord, setImageNST1Change4Cord] = useState({x: 0, y: 0});
	const [ImageNST1Change4Cord2, setImageNST1Change4Cord2] = useState({x: 0, y: 0});
	const [ImageNST1Change5Cord, setImageNST1Change5Cord] = useState({x: 0, y: 0});
	const [ImageNST1Change5Cord2, setImageNST1Change5Cord2] = useState({x: 0, y: 0});
	const [ImageNST1Change6Cord, setImageNST1Change6Cord] = useState({x: 0, y: 0});
	const [ImageNST1Change6Cord2, setImageNST1Change6Cord2] = useState({x: 0, y: 0});
	const [ImageNST1Change7Cord, setImageNST1Change7Cord] = useState({x: 0, y: 0});
	const [ImageNST1Change7Cord2, setImageNST1Change7Cord2] = useState({x: 0, y: 0});
	const [ImageNST1Change8Cord, setImageNST1Change8Cord] = useState({x: 0, y: 0});
	const [ImageNST1Change8Cord2, setImageNST1Change8Cord2] = useState({x: 0, y: 0});
	
	//coordinates for ImageNST2
	
	const [ImageNST2Change1Cord, setImageNST2Change1Cord] = useState({x: 0, y: 0});
	const [ImageNST2Change1Cord2, setImageNST2Change1Cord2] = useState({x: 0, y: 0});
	const [ImageNST2Change2Cord, setImageNST2Change2Cord] = useState({x: 0, y: 0});
	const [ImageNST2Change2Cord2, setImageNST2Change2Cord2] = useState({x: 0, y: 0});
	const [ImageNST2Change3Cord, setImageNST2Change3Cord] = useState({x: 0, y: 0});
	const [ImageNST2Change3Cord2, setImageNST2Change3Cord2] = useState({x: 0, y: 0});
	const [ImageNST2Change4Cord, setImageNST2Change4Cord] = useState({x: 0, y: 0});
	const [ImageNST2Change4Cord2, setImageNST2Change4Cord2] = useState({x: 0, y: 0});
	const [ImageNST2Change5Cord, setImageNST2Change5Cord] = useState({x: 0, y: 0});
	const [ImageNST2Change5Cord2, setImageNST2Change5Cord2] = useState({x: 0, y: 0});
	const [ImageNST2Change6Cord, setImageNST2Change6Cord] = useState({x: 0, y: 0});
	const [ImageNST2Change6Cord2, setImageNST2Change6Cord2] = useState({x: 0, y: 0});
	const [ImageNST2Change7Cord, setImageNST2Change7Cord] = useState({x: 0, y: 0});
	const [ImageNST2Change7Cord2, setImageNST2Change7Cord2] = useState({x: 0, y: 0});
	const [ImageNST2Change8Cord, setImageNST2Change8Cord] = useState({x: 0, y: 0});
	const [ImageNST2Change8Cord2, setImageNST2Change8Cord2] = useState({x: 0, y: 0});

    // variables to control showing each set of Images
    const[show, setShow] = useState(true);
    const[show1, setShow1] = useState(false);
    const[show2, setShow2] = useState(false);
    const[show3, setShow3] = useState(false);
    const[showNS1, setShowNS1] = useState(false);
    const[showNS2, setShowNS2] = useState(false);
    const[showNS3, setShowNS3] = useState(false);
    const[showNST1, setShowNST1] = useState(false);
    const[showNST2, setShowNST2] = useState(false);
    const[showOver, setShowOver] = useState(false);

    //variables to control showing the 'Next' pages in between Images
    const[showPause, setShowPause] = useState(false);
    const[showPause1, setShowPause1] = useState(false);
    const[showPause2, setShowPause2] = useState(false);
    const[showPause3, setShowPause3] = useState(false);
    const[showPauseNS1, setShowPauseNS1] = useState(false);
    const[showPauseNS2, setShowPauseNS2] = useState(false);
    const[showPauseNS3, setShowPauseNS3] = useState(false);
    const[showPauseNST1, setShowPauseNST1] = useState(false);
    const[showPauseNST2, setShowPauseNST2] = useState(false);
    const[go, setGo] = useState(true);
    const[index, setIndex] = useState(0);

    //variables to store all the detection times in arrays for each Image
    const [times1, setTimes1] = useState([]);
    const [times2, setTimes2] = useState([]);
    const [times3, setTimes3] = useState([]);
    const [timesNS1, setTimesNS1] = useState([]);
    const [timesNS2, setTimesNS2] = useState([]);
    const [timesNS3, setTimesNS3] = useState([]);
    const [timesNST1, setTimesNST1] = useState([]);
    const [timesNST2, setTimesNST2] = useState([]);
    const [times, setTimes] = useState([]);

    const [today, setToday] = useState(0);

    const goToNext = num => {
        setGo(true);
        //setCounter(60); 
        if (num == 1){
            setShow(false);
            setShowPause(false);
            setShowNST1(true);
            var dt = new Date().getTime();
            setCounter1(dt+60000);
            setCurrent(dt);
        }
        else if (num == 2){
            //setShow1(false);
            setImageNST1Change1(false);
            setImageNST1Change2(false);
            setImageNST1Change3(false);
            setImageNST1Change4(false);
            setImageNST1Change5(false);
            setImageNST1Change6(false);
            setImageNST1Change7(false);
            setImageNST1Change8(false);
            setShowImageNST1Change1(false);
            setShowImageNST1Change2(false);
            setShowImageNST1Change3(false);
            setShowImageNST1Change4(false);
            setShowImageNST1Change5(false);
            setShowImageNST1Change6(false);
            setShowImageNST1Change7(false);
            setShowImageNST1Change8(false);
            setShowPauseNST1(false);
            setShowNST1(false);
            setShowNST2(true);
            var dt = new Date().getTime();
            setCounter1(dt+60000);
            setCurrent(dt);
        } 
        else if (num == 3){
            //setShow1(false);
            setImageNST2Change1(false);
                setImageNST2Change2(false);
                setImageNST2Change3(false);
                setImageNST2Change4(false);
                setImageNST2Change5(false);
                setImageNST2Change6(false);
                setImageNST2Change7(false);
                setImageNST2Change8(false);
                setShowImageNST2Change1(false);
                setShowImageNST2Change2(false);
                setShowImageNST2Change3(false);
                setShowImageNST2Change4(false);
                setShowImageNST2Change5(false);
                setShowImageNST2Change6(false);
                setShowImageNST2Change7(false);
                setShowImageNST2Change8(false);
            setShowPauseNST2(false);
            setShowNST2(false);
            setShowNS2(true);
            var dt = new Date().getTime();
            setCounter1(dt+60000);
            setCurrent(dt);
        }
        else if (num == 4){
            //setShow1(false);
            setImageNS2Change1(false);
                setImageNS2Change2(false);
                setImageNS2Change3(false);
                setImageNS2Change4(false);
                setImageNS2Change5(false);
                setImageNS2Change6(false);
                setImageNS2Change7(false);
                setImageNS2Change8(false);
                setShowImageNS2Change1(false);
                setShowImageNS2Change2(false);
                setShowImageNS2Change3(false);
                setShowImageNS2Change4(false);
                setShowImageNS2Change5(false);
                setShowImageNS2Change6(false);
                setShowImageNS2Change7(false);
                setShowImageNS2Change8(false);
            setShowPauseNS2(false);
            setShowNS2(false);
            setShow1(true);
            var dt = new Date().getTime();
            setCounter1(dt+60000);
            setCurrent(dt);
        }
        else if (num == 5){
            //setShow1(false);
            setImage1Change1(false);
                setImage1Change2(false);
                setImage1Change3(false);
                setImage1Change4(false);
                setImage1Change5(false);
                setImage1Change6(false);
                setImage1Change7(false);
                setImage1Change8(false);
                setShowImage1Change1(false);
            setShowImage1Change2(false);
            setShowImage1Change3(false);
            setShowImage1Change4(false);
            setShowImage1Change5(false);
            setShowImage1Change6(false);
            setShowImage1Change7(false);
            setShowImage1Change8(false);
            setShowPause1(false);
            setShow1(false);
            setShowNS3(true);
            var dt = new Date().getTime();
            setCounter1(dt+60000);
            setCurrent(dt);
        }
        else if (num == 6){
            //setShow1(false);
            setImageNS3Change1(false);
                setImageNS3Change2(false);
                setImageNS3Change3(false);
                setImageNS3Change4(false);
                setImageNS3Change5(false);
                setImageNS3Change6(false);
                setImageNS3Change7(false);
                setImageNS3Change8(false);
                setShowImageNS3Change1(false);
                setShowImageNS3Change2(false);
                setShowImageNS3Change3(false);
                setShowImageNS3Change4(false);
                setShowImageNS3Change5(false);
                setShowImageNS3Change6(false);
                setShowImageNS3Change7(false);
                setShowImageNS3Change8(false);
            setShowPauseNS3(false);
            setShowNS3(false);
            setShow2(true);
            var dt = new Date().getTime();
            setCounter1(dt+60000);
            setCurrent(dt);
        }
        else if (num == 7){
            //setShow1(false);
            setImage2Change1(false);
                setImage2Change2(false);
                setImage2Change3(false);
                setImage2Change4(false);
                setImage2Change5(false);
                setImage2Change6(false);
                setImage2Change7(false);
                setImage2Change8(false);
                setShowImage2Change1(false);
                setShowImage2Change2(false);
                setShowImage2Change3(false);
                setShowImage2Change4(false);
                setShowImage2Change5(false);
                setShowImage2Change6(false);
                setShowImage2Change7(false);
                setShowImage2Change8(false);
            setShowPause2(false);
            setShow2(false);
            setShowNS1(true);
            var dt = new Date().getTime();
            setCounter1(dt+60000);
            setCurrent(dt);
        }
        else if (num == 8){
            //setShow1(false);
            setImageNS1Change1(false);
                setImageNS1Change2(false);
                setImageNS1Change3(false);
                setImageNS1Change4(false);
                setImageNS1Change5(false);
                setImageNS1Change6(false);
                setImageNS1Change7(false);
                setImageNS1Change8(false);
                setShowImageNS1Change1(false);
                setShowImageNS1Change2(false);
                setShowImageNS1Change3(false);
                setShowImageNS1Change4(false);
                setShowImageNS1Change5(false);
                setShowImageNS1Change6(false);
                setShowImageNS1Change7(false);
                setShowImageNS1Change8(false);
            setShowNS1(false);
            setShowPauseNS1(false);
            setShow3(true);
            var dt = new Date().getTime();
            setCounter1(dt+60000);
            setCurrent(dt);
        }
        else {
            setImage3Change1(false);
                setImage3Change2(false);
                setImage3Change3(false);
                setImage3Change4(false);
                setImage3Change5(false);
                setImage3Change6(false);
                setImage3Change7(false);
                setImage3Change8(false);
                setShowImage3Change1(false);
                setShowImage3Change2(false);
                setShowImage3Change3(false);
                setShowImage3Change4(false);
                setShowImage3Change5(false);
                setShowImage3Change6(false);
                setShowImage3Change7(false);
                setShowImage3Change8(false);
                setCounter1(new Date().getTime()+60000);
                setCurrent(counter1-60000);
            setShow3(false);
            setShowOver(true);
            setTimes([
                {Participant: participantID, Image_name: "Training Image 1", T1_change1: ImageNST1Change1Time,
                    T1_change2: ImageNST1Change2Time,
                    T1_change3: ImageNST1Change3Time,
                    T1_change4: ImageNST1Change4Time,
                    T1_change5: ImageNST1Change5Time,
                    T1_change6: ImageNST1Change6Time,
                    T1_change7: ImageNST1Change7Time,
                    T1_change8: ImageNST1Change8Time},
                    {Participant: participantID, Image_name: "Training Image 2", T1_change1: ImageNST2Change1Time,
                    T1_change2: ImageNST2Change2Time,
                    T1_change3: ImageNST2Change3Time,
                    T1_change4: ImageNST2Change4Time,
                    T1_change5: ImageNST2Change5Time,
                    T1_change6: ImageNST2Change6Time,
                    T1_change7: ImageNST2Change7Time,
                    T1_change8: ImageNST2Change8Time},
                    {Participant: participantID, Image_name: "Non social 2", T1_change1: ImageNS2Change1Time,
                    T1_change2: ImageNS2Change2Time,
                    T1_change3: ImageNS2Change3Time,
                    T1_change4: ImageNS2Change4Time,
                    T1_change5: ImageNS2Change5Time,
                    T1_change6: ImageNS2Change6Time,
                    T1_change7: ImageNS2Change7Time,
                    T1_change8: ImageNS2Change8Time},
                    {Participant: participantID, Image_name: "Social 1", T1_change1: Image1Change1Time,
                    T1_change2: Image1Change2Time,
                    T1_change3: Image1Change3Time,
                    T1_change4: Image1Change4Time,
                    T1_change5: Image1Change5Time,
                    T1_change6: Image1Change6Time,
                    T1_change7: Image1Change7Time,
                    T1_change8: Image1Change8Time},
                    {Participant: participantID, Image_name: "Non Social 3", T1_change1: ImageNS3Change1Time,
                    T1_change2: ImageNS3Change2Time,
                    T1_change3: ImageNS3Change3Time,
                    T1_change4: ImageNS3Change4Time,
                    T1_change5: ImageNS3Change5Time,
                    T1_change6: ImageNS3Change6Time,
                    T1_change7: ImageNS3Change7Time,
                    T1_change8: ImageNS3Change8Time},
                    {Participant: participantID, Image_name: "Social 2", T1_change1: ImageNS2Change1Time,
                    T1_change2: ImageNS2Change2Time,
                    T1_change3: ImageNS2Change3Time,
                    T1_change4: ImageNS2Change4Time,
                    T1_change5: ImageNS2Change5Time,
                    T1_change6: ImageNS2Change6Time,
                    T1_change7: ImageNS2Change7Time,
                    T1_change8: ImageNS2Change8Time},
                    {Participant: participantID, Image_name: "Non Social 1", T1_change1: ImageNS1Change1Time,
                    T1_change2: ImageNS1Change2Time,
                    T1_change3: ImageNS1Change3Time,
                    T1_change4: ImageNS1Change4Time,
                    T1_change5: ImageNS1Change5Time,
                    T1_change6: ImageNS1Change6Time,
                    T1_change7: ImageNS1Change7Time,
                    T1_change8: ImageNS1Change8Time},
                    {Participant: participantID, Image_name: "Social 3", T1_change1: Image3Change1Time,
                    T1_change2: Image3Change2Time,
                    T1_change3: Image3Change3Time,
                    T1_change4: Image3Change4Time,
                    T1_change5: Image3Change5Time,
                    T1_change6: Image3Change6Time,
                    T1_change7: Image3Change7Time,
                    T1_change8: Image3Change8Time}
                                
        ]);
        }
        setIndex(index + 1);
    }

    useEffect(() => {
        if (counter == 0){
            console.log(index);
            setGo(false);
            setCounter(-1);
            if (index == 1){
                setShowNST1(false);
                setShowPauseNST1(true);
                //setGo(false);
                //setCounter(0);
                setShowImageNST1Change1(false);
                setShowImageNST1Change2(false);
                setShowImageNST1Change3(false);
                setShowImageNST1Change4(false);
                setShowImageNST1Change5(false);
                setShowImageNST1Change6(false);
                setShowImageNST1Change7(false);
                setShowImageNST1Change8(false);
                setTimesNST1([{Participant: participantID, Image_name: "Training Image 1", T1_change1: ImageNST1Change1Time,
                    T1_change2: ImageNST1Change2Time,
                    T1_change3: ImageNST1Change3Time,
                    T1_change4: ImageNST1Change4Time,
                    T1_change5: ImageNST1Change5Time,
                    T1_change6: ImageNST1Change6Time,
                    T1_change7: ImageNST1Change7Time,
                    T1_change8: ImageNST1Change8Time}]);
                
            } else if (index == 2){
                setShowImageNST2Change1(false);
                setShowImageNST2Change2(false);
                setShowImageNST2Change3(false);
                setShowImageNST2Change4(false);
                setShowImageNST2Change5(false);
                setShowImageNST2Change6(false);
                setShowImageNST2Change7(false);
                setShowImageNST2Change8(false);
                setShowPauseNST2(true);
                setShowNST2(false);
                setGo(false);
                //setCounter(0);
                setTimesNST2([{Participant: participantID, Image_name: "Training Image 2", T1_change1: ImageNST2Change1Time,
                    T1_change2: ImageNST2Change2Time,
                    T1_change3: ImageNST2Change3Time,
                    T1_change4: ImageNST2Change4Time,
                    T1_change5: ImageNST2Change5Time,
                    T1_change6: ImageNST2Change6Time,
                    T1_change7: ImageNST2Change7Time,
                    T1_change8: ImageNST2Change8Time}]);

                
            } else if (index == 3){
                setShowImageNS2Change1(false);
            setShowImageNS2Change2(false);
            setShowImageNS2Change3(false);
            setShowImageNS2Change4(false);
            setShowImageNS2Change5(false);
            setShowImageNS2Change6(false);
            setShowImageNS2Change7(false);
            setShowImageNS2Change8(false);
                setShowPauseNS2(true);
                setShowNS2(false);
                setGo(false);
                //setCounter(0);
                setTimesNS2([{Participant: participantID, Image_name:"Non social 2", T1_change1: ImageNS2Change1Time,
                    T1_change2: ImageNS2Change2Time,
                    T1_change3: ImageNS2Change3Time,
                    T1_change4: ImageNS2Change4Time,
                    T1_change5: ImageNS2Change5Time,
                    T1_change6: ImageNS2Change6Time,
                    T1_change7: ImageNS2Change7Time,
                    T1_change8: ImageNS2Change8Time}]);
            } else if (index == 4){
                setShowImage1Change1(false);
            setShowImage1Change2(false);
            setShowImage1Change3(false);
            setShowImage1Change4(false);
            setShowImage1Change5(false);
            setShowImage1Change6(false);
            setShowImage1Change7(false);
            setShowImage1Change8(false);
                setShowPause1(true);
                setShow1(false);
                setGo(false);
                //setCounter(0);
                setTimes1([{Participant: participantID, Image_name:"Social 1", T1_change1: Image1Change1Time,
                    T1_change2: Image1Change2Time,
                    T1_change3: Image1Change3Time,
                    T1_change4: Image1Change4Time,
                    T1_change5: Image1Change5Time,
                    T1_change6: Image1Change6Time,
                    T1_change7: Image1Change7Time,
                    T1_change8: Image1Change8Time}]);
            } else if (index == 5){
                setShowImageNS3Change1(false);
            setShowImageNS3Change2(false);
            setShowImageNS3Change3(false);
            setShowImageNS3Change4(false);
            setShowImageNS3Change5(false);
            setShowImageNS3Change6(false);
            setShowImageNS3Change7(false);
            setShowImageNS3Change8(false);
                setShowPauseNS3(true);
                setShowNS3(false);
                setGo(false);
                //setCounter(0);
                setTimesNS3([{Participant: participantID, Image_name:"Non Social 3", T1_change1: ImageNS3Change1Time,
                    T1_change2: ImageNS3Change2Time,
                    T1_change3: ImageNS3Change3Time,
                    T1_change4: ImageNS3Change4Time,
                    T1_change5: ImageNS3Change5Time,
                    T1_change6: ImageNS3Change6Time,
                    T1_change7: ImageNS3Change7Time,
                    T1_change8: ImageNS3Change8Time}]);
            }  else if (index == 6){
                setShowImage2Change1(false);
            setShowImage2Change2(false);
            setShowImage2Change3(false);
            setShowImage2Change4(false);
            setShowImage2Change5(false);
            setShowImage2Change6(false);
            setShowImage2Change7(false);
            setShowImage2Change8(false);
                setShowPause2(true);
                setShow2(false);
                setGo(false);
                //setCounter(0);
                setTimes2([{Participant: participantID, Image_name:"Social 2", T1_change1: Image2Change1Time,
                    T1_change2: Image2Change2Time,
                    T1_change3: Image2Change3Time,
                    T1_change4: Image2Change4Time,
                    T1_change5: Image2Change5Time,
                    T1_change6: Image2Change6Time,
                    T1_change7: Image2Change7Time,
                    T1_change8: Image2Change8Time}]);
            } else if (index == 7){
                setShowImageNS1Change1(false);
            setShowImageNS1Change2(false);
            setShowImageNS1Change3(false);
            setShowImageNS1Change4(false);
            setShowImageNS1Change5(false);
            setShowImageNS1Change6(false);
            setShowImageNS1Change7(false);
            setShowImageNS1Change8(false);
                setShowPauseNS1(true);
                setShowNS1(false);
                setGo(false);
                //setCounter(0);
                setTimesNS1([{Participant: participantID, Image_name:"Non Social 1",T1_change1: ImageNS1Change1Time,
                    T1_change2: ImageNS1Change2Time,
                    T1_change3: ImageNS1Change3Time,
                    T1_change4: ImageNS1Change4Time,
                    T1_change5: ImageNS1Change5Time,
                    T1_change6: ImageNS1Change6Time,
                    T1_change7: ImageNS1Change7Time,
                    T1_change8: ImageNS1Change8Time}]);
            } else{        
                    setShowImage3Change1(false);
            setShowImage3Change2(false);
            setShowImage3Change3(false);
            setShowImage3Change4(false);
            setShowImage3Change5(false);
            setShowImage3Change6(false);
            setShowImage3Change7(false);
            setShowImage3Change8(false);
                setShowOver(true);
                setShow3(false);
                setGo(false);
                        //setCounter(0);
                        setTimes3([{Participant: participantID, Image_name:"Social 3",T1_change1: Image3Change1Time,
                    T1_change2: Image3Change2Time,
                    T1_change3: Image3Change3Time,
                    T1_change4: Image3Change4Time,
                    T1_change5: Image3Change5Time,
                    T1_change6: Image3Change6Time,
                    T1_change7: Image3Change7Time,
                    T1_change8: Image3Change8Time}]);
                    setTimes([
                        {Participant: participantID, Image_name: "Training Image 1", T1_change1: ImageNST1Change1Time,
                            T1_change2: ImageNST1Change2Time,
                            T1_change3: ImageNST1Change3Time,
                            T1_change4: ImageNST1Change4Time,
                            T1_change5: ImageNST1Change5Time,
                            T1_change6: ImageNST1Change6Time,
                            T1_change7: ImageNST1Change7Time,
                            T1_change8: ImageNST1Change8Time},
                            {Participant: participantID, Image_name: "Training Image 2", T1_change1: ImageNST2Change1Time,
                            T1_change2: ImageNST2Change2Time,
                            T1_change3: ImageNST2Change3Time,
                            T1_change4: ImageNST2Change4Time,
                            T1_change5: ImageNST2Change5Time,
                            T1_change6: ImageNST2Change6Time,
                            T1_change7: ImageNST2Change7Time,
                            T1_change8: ImageNST2Change8Time},
                            {Participant: participantID, Image_name: "Non social 2", T1_change1: ImageNS2Change1Time,
                            T1_change2: ImageNS2Change2Time,
                            T1_change3: ImageNS2Change3Time,
                            T1_change4: ImageNS2Change4Time,
                            T1_change5: ImageNS2Change5Time,
                            T1_change6: ImageNS2Change6Time,
                            T1_change7: ImageNS2Change7Time,
                            T1_change8: ImageNS2Change8Time},
                            {Participant: participantID, Image_name: "Social 1", T1_change1: Image1Change1Time,
                            T1_change2: Image1Change2Time,
                            T1_change3: Image1Change3Time,
                            T1_change4: Image1Change4Time,
                            T1_change5: Image1Change5Time,
                            T1_change6: Image1Change6Time,
                            T1_change7: Image1Change7Time,
                            T1_change8: Image1Change8Time},
                            {Participant: participantID, Image_name: "Non Social 3", T1_change1: ImageNS3Change1Time,
                            T1_change2: ImageNS3Change2Time,
                            T1_change3: ImageNS3Change3Time,
                            T1_change4: ImageNS3Change4Time,
                            T1_change5: ImageNS3Change5Time,
                            T1_change6: ImageNS3Change6Time,
                            T1_change7: ImageNS3Change7Time,
                            T1_change8: ImageNS3Change8Time},
                            {Participant: participantID, Image_name: "Social 2", T1_change1: ImageNS2Change1Time,
                            T1_change2: ImageNS2Change2Time,
                            T1_change3: ImageNS2Change3Time,
                            T1_change4: ImageNS2Change4Time,
                            T1_change5: ImageNS2Change5Time,
                            T1_change6: ImageNS2Change6Time,
                            T1_change7: ImageNS2Change7Time,
                            T1_change8: ImageNS2Change8Time},
                            {Participant: participantID, Image_name: "Non Social 1", T1_change1: ImageNS1Change1Time,
                            T1_change2: ImageNS1Change2Time,
                            T1_change3: ImageNS1Change3Time,
                            T1_change4: ImageNS1Change4Time,
                            T1_change5: ImageNS1Change5Time,
                            T1_change6: ImageNS1Change6Time,
                            T1_change7: ImageNS1Change7Time,
                            T1_change8: ImageNS1Change8Time},
                            {Participant: participantID, Image_name: "Social 3", T1_change1: Image3Change1Time,
                            T1_change2: Image3Change2Time,
                            T1_change3: Image3Change3Time,
                            T1_change4: Image3Change4Time,
                            T1_change5: Image3Change5Time,
                            T1_change6: Image3Change6Time,
                            T1_change7: Image3Change7Time,
                            T1_change8: Image3Change8Time}
                                        
                ]);
            
            } 
        }
    }
    );

    const pickAnswer1 = (e) => {
        if(document.getElementById("expired-notice")){
            setShowImage1Change1(false);
            setShowImage1Change2(false);
            setShowImage1Change3(false);
            setShowImage1Change4(false);
            setShowImage1Change5(false);
            setShowImage1Change6(false);
            setShowImage1Change7(false);
            setShowImage1Change8(false);

            setShowPause1(true);
            setShow1(false);
            setTimes1([{Participant: participantID, Image_name: "Social 1", T1_change1: Image1Change1Time,
            T1_change2: Image1Change2Time,
            T1_change3: Image1Change3Time,
            T1_change4: Image1Change4Time,
            T1_change5: Image1Change5Time,
            T1_change6: Image1Change6Time}]);
        }else{
            console.log("first");
        setShowImageNS2Change1(false);
            setShowImageNS2Change2(false);
            setShowImageNS2Change3(false);
            setShowImageNS2Change4(false);
            setShowImageNS2Change5(false);
            setShowImageNS2Change6(false);
            setShowImageNS2Change7(false);
            setShowImageNS2Change8(false);
        console.log(counter);
        console.log(e.target.width);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/640;
        const relativey = e.target.height/360;
        const change1 = [10,191,33,215];
        const change2 = [201,248,230,268];
        const change3 = [195,340,238,353];
        const change4 = [423,286,453,310];
        const change5 = [434,343,474,353];
        const change6 = [570,155,603,180];
        var rect = e.target.getBoundingClientRect();
        console.log(e.clientX,e.clientY);
        console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        console.log(x,y);
        var b = e.target.width;
        if ((!showImage1Change1) && (x >= (change1[0])*relativex && x <= (change1[2])*relativex && y >= (change1[1])*relativey && y <=  (change1[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImage1Change1Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            console.log(x/e.target.width*100);
            console.log(y/e.target.height);
            
            if(e.clientX<e.target.width){
                setImage1Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage1Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImage1Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage1Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImage1Change1(true);
        }else if ((!showImage1Change2) && (x >= (change2[0])*relativex && x <= (change2[2])*relativex && y >= (change2[1])*relativey && y <=  (change2[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImage1Change2Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImage1Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage1Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImage1Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage1Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImage1Change2(true);
        }else if ((!showImage1Change3) && (x >= (change3[0])*relativex && x <= (change3[2])*relativex && y >= (change3[1])*relativey && y <=  (change3[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImage1Change3Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImage1Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage1Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImage1Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage1Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImage1Change3(true);
        }else if ((!showImage1Change4) && (x >= (change4[0])*relativex && x <= (change4[2])*relativex && y >= (change4[1])*relativey && y <=  (change4[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImage1Change4Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImage1Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage1Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImage1Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage1Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImage1Change4(true);
        }else if ((!showImage1Change5) && (x >= (change5[0])*relativex && x <= (change5[2])*relativex && y >= (change5[1])*relativey && y <=  (change5[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImage1Change5Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImage1Change5Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage1Change5Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImage1Change5Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage1Change5Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImage1Change5(true);
        }else if ((!showImage1Change6) && (x >= (change6[0])*relativex && x <= (change6[2])*relativex && y >= (change6[1])*relativey && y <=  (change6[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImage1Change6Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImage1Change6Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage1Change6Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImage1Change6Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage1Change6Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImage1Change6(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[0] == 6 && showImage1Change1 && showImage1Change2 && showImage1Change3 && showImage1Change4 && showImage1Change5 && showImage1Change6){
            console.log("move to 2");
            setShowImage1Change1(false);
            setShowImage1Change2(false);
            setShowImage1Change3(false);
            setShowImage1Change4(false);
            setShowImage1Change5(false);
            setShowImage1Change6(false);
            setShowImage1Change7(false);
            setShowImage1Change8(false);

            setShowPause1(true);
            setShow1(false);
            setGo(false);
            setCounter(0);
            setTimes1([{Participant: participantID, Image_name: "Social 1", T1_change1: Image1Change1Time,
            T1_change2: Image1Change2Time,
            T1_change3: Image1Change3Time,
            T1_change4: Image1Change4Time,
            T1_change5: Image1Change5Time,
            T1_change6: Image1Change6Time}]);
        }
        else{
            setTimes1([{Participant: participantID, Image_name: "Social 1", T1_change1: Image1Change1Time,
            T1_change2: Image1Change2Time,
            T1_change3: Image1Change3Time,
            T1_change4: Image1Change4Time,
            T1_change5: Image1Change5Time,
            T1_change6: Image1Change6Time}]);
        }
    }
    }
        //x: -10, y: -148
    const pickAnswer2 = (e) => {
        if(document.getElementById("expired-notice")){
            setShowImage2Change1(false);
            setShowImage2Change2(false);
            setShowImage2Change3(false);
            setShowImage2Change4(false);
            setShowImage2Change5(false);
            setShowImage2Change6(false);
            setShowImage2Change7(false);
            setShowImage2Change8(false);

            setShowPause2(true);
            setShow2(false);
            setTimes2([{Participant: participantID, Image_name: "Social 1", T1_change1: Image2Change1Time,
            T1_change2: Image2Change2Time,
            T1_change3: Image2Change3Time,
            T1_change4: Image2Change4Time,
            T1_change5: Image2Change5Time,
            T1_change6: Image2Change6Time}]);
        }
        else{
        setShowImageNS3Change1(false);
                setShowImageNS3Change2(false);
                setShowImageNS3Change3(false);
                setShowImageNS3Change4(false);
                setShowImageNS3Change5(false);
                setShowImageNS3Change6(false);
                setShowImageNS3Change7(false);
                setShowImageNS3Change8(false);
            console.log(counter);
            console.log(e.target.width);
            var b = e.target.width;
            //let userAnswer = e.target.outerText;
            // if (quiz[number].answer === userAnswer) 
            console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
            const relativex = e.target.width/1500;
            const relativey = e.target.height/1125;
            const buffer = 30;
            const change1 = [146,545,198,635];
            const change2 = [224,702,310,795];
            const change3 = [397,571,434,612];
            const change4 = [843,841,930,936];
            const change5 = [942,501,985,538];
            const change6 = [1212,597,1272,690];
            var rect = e.target.getBoundingClientRect();
            //console.log(e.clientX,e.clientY);
            //console.log(rect.left,rect.top);
            var x = e.clientX - rect.left; //x position within the element.
            var y = e.clientY - rect.top;  //y position within the element.
            //console.log(x,y);
            if ((!showImage2Change1) && (x >= (change1[0])*relativex && x <= (change1[2])*relativex && y >= (change1[1])*relativey && y <=  (change1[3])*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0]);
                setCorrect(true);
                setToday( new Date().getTime());
                setImage2Change1Time(new Date().getTime() - current);
                //setCurrent(new Date().getTime());
                if(e.clientX<e.target.width){
                    setImage2Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                    setImage2Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                }
                else{
                    setImage2Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                    setImage2Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                }
                setShowImage2Change1(true);
            }else if ((!showImage2Change2) && (x >= (change2[0])*relativex && x <= (change2[2])*relativex && y >= (change2[1])*relativey && y <=  (change2[3])*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0]);
                setCorrect(true);
                setToday( new Date().getTime());
                setImage2Change2Time(new Date().getTime() - current);
                //setCurrent(new Date().getTime());
                if(e.clientX<e.target.width){
                    setImage2Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                    setImage2Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                }
                else{
                    setImage2Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                    setImage2Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                }
                setShowImage2Change2(true);
            }else if ((!showImage2Change3) && (x >= (change3[0])*relativex && x <= (change3[2])*relativex && y >= (change3[1])*relativey && y <=  (change3[3])*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0]);
                setCorrect(true);
                setToday( new Date().getTime());
                setImage2Change3Time(new Date().getTime() - current);
                //setCurrent(new Date().getTime());
                if(e.clientX<e.target.width){
                    setImage2Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                    setImage2Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                }
                else{
                    setImage2Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                    setImage2Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                }
                setShowImage2Change3(true);
            }else if ((!showImage2Change4) && (x >= (change4[0])*relativex && x <= (change4[2])*relativex && y >= (change4[1])*relativey && y <=  (change4[3])*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0]);
                setCorrect(true);
                setToday( new Date().getTime());
                setImage2Change4Time(new Date().getTime() - current);
                //setCurrent(new Date().getTime());
                if(e.clientX<e.target.width){
                    setImage2Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                    setImage2Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                }
                else{
                    setImage2Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                    setImage2Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                }
                setShowImage2Change4(true);
            }else if ((!showImage2Change5) && (x >= (change5[0])*relativex && x <= (change5[2])*relativex && y >= (change5[1])*relativey && y <=  (change5[3])*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0]);
                setCorrect(true);
                setToday( new Date().getTime());
                setImage2Change5Time(new Date().getTime() - current);
                //setCurrent(new Date().getTime());
                if(e.clientX<e.target.width){
                    setImage2Change5Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                    setImage2Change5Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                }
                else{
                    setImage2Change5Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                    setImage2Change5Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                }
                setShowImage2Change5(true);
            }else if ((!showImage2Change6) && (x >= (change6[0])*relativex && x <= (change6[2])*relativex && y >= (change6[1])*relativey && y <=  (change6[3])*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0]);
                setCorrect(true);
                setToday( new Date().getTime());
                setImage2Change6Time(new Date().getTime() - current);
                //setCurrent(new Date().getTime());
                if(e.clientX<e.target.width){
                    setImage2Change6Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                    setImage2Change6Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                }
                else{
                    setImage2Change6Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                    setImage2Change6Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                }
                setShowImage2Change6(true);
            }
             else {
                setWrong(true);
            }
            //console.log("x: " + e.screenX + " y: " + e.screenY);
            //console.log("Image 1 pts: " + pts[0]);
            setTimeout(() => {setCorrect(false)}, 1000);
            setTimeout(() => {setWrong(false)}, 1000);
            console.log(pts);
            if (pts[1] == 6 && showImage2Change1 && showImage2Change2 && showImage2Change3 && showImage2Change4 && showImage2Change5 && showImage2Change6){
                console.log("move to 2");
                setShowImage2Change1(false);
                setShowImage2Change2(false);
                setShowImage2Change3(false);
                setShowImage2Change4(false);
                setShowImage2Change5(false);
                setShowImage2Change6(false);
                setShowImage2Change7(false);
                setShowImage2Change8(false);
    
                setShowPause2(true);
                setShow2(false);
                setGo(false);
                setCounter(0);
                setTimes2([{Participant: participantID, Image_name: "Social 2", T1_change1: ImageNS2Change1Time,
                T1_change2: ImageNS2Change2Time,
                T1_change3: ImageNS2Change3Time,
                T1_change4: ImageNS2Change4Time,
                T1_change5: ImageNS2Change5Time,
                T1_change6: ImageNS2Change6Time,
                T1_change7: ImageNS2Change7Time,
                T1_change8: ImageNS2Change8Time}]);
            }
            else{
                setTimes2([{Participant: participantID, Image_name: "Social 2", T1_change1: ImageNS2Change1Time,
                T1_change2: ImageNS2Change2Time,
                T1_change3: ImageNS2Change3Time,
                T1_change4: ImageNS2Change4Time,
                T1_change5: ImageNS2Change5Time,
                T1_change6: ImageNS2Change6Time,
                T1_change7: ImageNS2Change7Time,
                T1_change8: ImageNS2Change8Time}]);
            }
        }
    }
    const pickAnswer3 = (e) => {
        if(document.getElementById("expired-notice")){
            setShowImage3Change1(false);
            setShowImage3Change2(false);
            setShowImage3Change3(false);
            setShowImage3Change4(false);
            setShowImage3Change5(false);
            setShowImage3Change6(false);

            setShowOver(true);
            setShow3(false);
            setTimes3([{Participant: participantID, Image_name: "Social 1", T1_change1: Image3Change1Time,
            T1_change2: Image3Change2Time,
            T1_change3: Image3Change3Time,
            T1_change4: Image3Change4Time,
            T1_change5: Image3Change5Time,
            T1_change6: Image3Change6Time}]);
            setTimes([
                {Participant: participantID, Image_name: "Training Image 1", T1_change1: ImageNST1Change1Time,
                    T1_change2: ImageNST1Change2Time,
                    T1_change3: ImageNST1Change3Time,
                    T1_change4: ImageNST1Change4Time,
                    T1_change5: ImageNST1Change5Time,
                    T1_change6: ImageNST1Change6Time,
                    T1_change7: ImageNST1Change7Time,
                    T1_change8: ImageNST1Change8Time},
                    {Participant: participantID, Image_name: "Training Image 2", T1_change1: ImageNST2Change1Time,
                    T1_change2: ImageNST2Change2Time,
                    T1_change3: ImageNST2Change3Time,
                    T1_change4: ImageNST2Change4Time,
                    T1_change5: ImageNST2Change5Time,
                    T1_change6: ImageNST2Change6Time,
                    T1_change7: ImageNST2Change7Time,
                    T1_change8: ImageNST2Change8Time},
                    {Participant: participantID, Image_name: "Non social 2", T1_change1: ImageNS2Change1Time,
                    T1_change2: ImageNS2Change2Time,
                    T1_change3: ImageNS2Change3Time,
                    T1_change4: ImageNS2Change4Time,
                    T1_change5: ImageNS2Change5Time,
                    T1_change6: ImageNS2Change6Time,
                    T1_change7: ImageNS2Change7Time,
                    T1_change8: ImageNS2Change8Time},
                    {Participant: participantID, Image_name: "Social 1", T1_change1: Image1Change1Time,
                    T1_change2: Image1Change2Time,
                    T1_change3: Image1Change3Time,
                    T1_change4: Image1Change4Time,
                    T1_change5: Image1Change5Time,
                    T1_change6: Image1Change6Time,
                    T1_change7: Image1Change7Time,
                    T1_change8: Image1Change8Time},
                    {Participant: participantID, Image_name: "Non Social 3", T1_change1: ImageNS3Change1Time,
                    T1_change2: ImageNS3Change2Time,
                    T1_change3: ImageNS3Change3Time,
                    T1_change4: ImageNS3Change4Time,
                    T1_change5: ImageNS3Change5Time,
                    T1_change6: ImageNS3Change6Time,
                    T1_change7: ImageNS3Change7Time,
                    T1_change8: ImageNS3Change8Time},
                    {Participant: participantID, Image_name: "Social 2", T1_change1: ImageNS2Change1Time,
                    T1_change2: ImageNS2Change2Time,
                    T1_change3: ImageNS2Change3Time,
                    T1_change4: ImageNS2Change4Time,
                    T1_change5: ImageNS2Change5Time,
                    T1_change6: ImageNS2Change6Time,
                    T1_change7: ImageNS2Change7Time,
                    T1_change8: ImageNS2Change8Time},
                    {Participant: participantID, Image_name: "Non Social 1", T1_change1: ImageNS1Change1Time,
                    T1_change2: ImageNS1Change2Time,
                    T1_change3: ImageNS1Change3Time,
                    T1_change4: ImageNS1Change4Time,
                    T1_change5: ImageNS1Change5Time,
                    T1_change6: ImageNS1Change6Time,
                    T1_change7: ImageNS1Change7Time,
                    T1_change8: ImageNS1Change8Time},
                    {Participant: participantID, Image_name: "Social 3", T1_change1: Image3Change1Time,
                    T1_change2: Image3Change2Time,
                    T1_change3: Image3Change3Time,
                    T1_change4: Image3Change4Time,
                    T1_change5: Image3Change5Time,
                    T1_change6: Image3Change6Time,
                    T1_change7: Image3Change7Time,
                    T1_change8: Image3Change8Time}
                                
        ]);
        }
        else{
        setShowImageNS1Change1(false);
                setShowImageNS1Change2(false);
                setShowImageNS1Change3(false);
                setShowImageNS1Change4(false);
                setShowImageNS1Change5(false);
                setShowImageNS1Change6(false);
                setShowImageNS1Change7(false);
                setShowImageNS1Change8(false);
        console.log(counter);
        console.log(e.target.width);
        var b = e.target.width;
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/1600;
        const relativey = e.target.height/1068;
        const buffer = 30;
        const change1 = [51,278,131,345];
        const change2 = [225,399,259,475];
        const change3 = [162,719,221,760];
        const change4 = [581,676,693,712];
        const change5 = [726,476,810,544];
        const change6 = [1100,896,1157,936];
        var rect = e.target.getBoundingClientRect();
        console.log(e.clientX,e.clientY);
        console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((!showImage3Change1) && (x >= (change1[0])*relativex && x <= (change1[2])*relativex && y >= (change1[1])*relativey && y <=  (change1[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImage3Change1Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImage3Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage3Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImage3Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage3Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImage3Change1(true);
        }else if ((!showImage3Change2) && (x >= (change2[0])*relativex && x <= (change2[2])*relativex && y >= (change2[1])*relativey && y <=  (change2[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImage3Change2Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImage3Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage3Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImage3Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage3Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImage3Change2(true);
        }else if ((!showImage3Change3) && (x >= (change3[0])*relativex && x <= (change3[2])*relativex && y >= (change3[1])*relativey && y <=  (change3[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImage3Change3Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImage3Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage3Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImage3Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage3Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImage3Change3(true);
        }else if ((!showImage3Change4) && (x >= (change4[0])*relativex && x <= (change4[2])*relativex && y >= (change4[1])*relativey && y <=  (change4[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImage3Change4Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImage3Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage3Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImage3Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage3Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImage3Change4(true);
        }else if ((!showImage3Change5) && (x >= (change5[0])*relativex && x <= (change5[2])*relativex && y >= (change5[1])*relativey && y <=  (change5[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImage3Change5Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImage3Change5Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage3Change5Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImage3Change5Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage3Change5Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImage3Change5(true);
        }else if ((!showImage3Change6) && (x >= (change6[0])*relativex && x <= (change6[2])*relativex && y >= (change6[1])*relativey && y <=  (change6[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImage3Change6Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImage3Change6Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage3Change6Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImage3Change6Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImage3Change6Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImage3Change6(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[2] == 6 && showImage3Change1 && showImage3Change2 && showImage3Change3 && showImage3Change4 && showImage3Change5 && showImage3Change6){
            console.log("move to 2");
            setShowImage3Change1(false);
            setShowImage3Change2(false);
            setShowImage3Change3(false);
            setShowImage3Change4(false);
            setShowImage3Change5(false);
            setShowImage3Change6(false);
            setShowImage3Change7(false);
            setShowImage3Change8(false);

            setShowOver(true);
            setShow3(false);
            setGo(false);
            setCounter(0);
            setTimes3([{Participant: participantID, Image_name: "Social 3", T1_change1: Image3Change1Time,
            T1_change2: Image3Change2Time,
            T1_change3: Image3Change3Time,
            T1_change4: Image3Change4Time,
            T1_change5: Image3Change5Time,
            T1_change6: Image3Change6Time,
            T1_change7: Image3Change7Time,
            T1_change8: Image3Change8Time}]);
        }
        else{
            setTimes3([{Participant: participantID, Image_name: "Social 3", T1_change1: Image3Change1Time,
            T1_change2: Image3Change2Time,
            T1_change3: Image3Change3Time,
            T1_change4: Image3Change4Time,
            T1_change5: Image3Change5Time,
            T1_change6: Image3Change6Time,
            T1_change7: Image3Change7Time,
            T1_change8: Image3Change8Time}]);
        }
    }
    }
    const pickAnswerNS1 = (e) => {
        if(document.getElementById("expired-notice")){
            setShowImageNS1Change1(false);
            setShowImageNS1Change2(false);
            setShowImageNS1Change3(false);
            setShowImageNS1Change4(false);
            setShowImageNS1Change5(false);
            setShowImageNS1Change6(false);

            setShowPauseNS1(true);
            setShowNST1(false);
            setTimesNS1([{Participant: participantID, Image_name: "Social 1", T1_change1: ImageNS1Change1Time,
            T1_change2: ImageNS1Change2Time,
            T1_change3: ImageNS1Change3Time,
            T1_change4: ImageNS1Change4Time,
            T1_change5: ImageNS1Change5Time,
            T1_change6: ImageNS1Change6Time}]);
        }
        else{
        setShowImage2Change1(false);
                setShowImage2Change2(false);
                setShowImage2Change3(false);
                setShowImage2Change4(false);
                setShowImage2Change5(false);
                setShowImage2Change6(false);
                setShowImage2Change7(false);
                setShowImage2Change8(false);
        console.log(counter);
        console.log(e.target.width);
        var b = e.target.width;
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/1308;
        const relativey = e.target.height/736;
        const change1 = [48,400,116,452];
        const change2 = [419,502,486,558];
        const change3 = [392,682,515,725];
        const change4 = [876,557,944,607];
        const change5 = [884,685,102,724];
        const change6 = [1151,315,1218,372];
        var rect = e.target.getBoundingClientRect();
        console.log(e.clientX,e.clientY);
        console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        console.log(x,y);
        if ((!showImageNS1Change1) && (x >= (change1[0])*relativex && x <= (change1[2])*relativex && y >= (change1[1])*relativey && y <=  (change1[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS1Change1Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS1Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS1Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS1Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS1Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS1Change1(true);
        }else if ((!showImageNS1Change2) && (x >= (change2[0])*relativex && x <= (change2[2])*relativex && y >= (change2[1])*relativey && y <=  (change2[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS1Change2Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS1Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS1Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS1Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS1Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS1Change2(true);
        }else if ((!showImageNS1Change3) && (x >= (change3[0])*relativex && x <= (change3[2])*relativex && y >= (change3[1])*relativey && y <=  (change3[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS1Change3Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS1Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS1Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS1Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS1Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS1Change3(true);
        }else if ((!showImageNS1Change4) && (x >= (change4[0])*relativex && x <= (change4[2])*relativex && y >= (change4[1])*relativey && y <=  (change4[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS1Change4Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS1Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS1Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS1Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS1Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS1Change4(true);
        }else if ((!showImageNS1Change5) && (x >= (change5[0])*relativex && x <= (change5[2])*relativex && y >= (change5[1])*relativey && y <=  (change5[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS1Change5Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS1Change5Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS1Change5Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS1Change5Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS1Change5Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS1Change5(true);
        }else if ((!showImageNS1Change6) && (x >= (change6[0])*relativex && x <= (change6[2])*relativex && y >= (change6[1])*relativey && y <=  (change6[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS1Change6Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS1Change6Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS1Change6Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS1Change6Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS1Change6Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS1Change6(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[3] == 6 && showImageNS1Change1 && showImageNS1Change2 && showImageNS1Change3 && showImageNS1Change4 && showImageNS1Change5 && showImageNS1Change6){
            console.log("move to 2");
            setShowImageNS1Change1(false);
            setShowImageNS1Change2(false);
            setShowImageNS1Change3(false);
            setShowImageNS1Change4(false);
            setShowImageNS1Change5(false);
            setShowImageNS1Change6(false);
            setShowImageNS1Change7(false);
            setShowImageNS1Change8(false);


            setShowPauseNS1(true);
            setShowNS1(false);
            setGo(false);
            setCounter(0);
            setTimesNS1([{Participant: participantID,  Image_name: "Non Social 1", T1_change1: ImageNS1Change1Time,
                T1_change2: ImageNS1Change2Time,
                T1_change3: ImageNS1Change3Time,
                T1_change4: ImageNS1Change4Time,
                T1_change5: ImageNS1Change5Time,
                T1_change6: ImageNS1Change6Time,
                T1_change7: ImageNS1Change7Time,
                T1_change8: ImageNS1Change8Time,
            }]);
        }
        else{
            setTimesNS1([{Participant: participantID,  Image_name: "Non Social 1", T1_change1: ImageNS1Change1Time,
                T1_change2: ImageNS1Change2Time,
                T1_change3: ImageNS1Change3Time,
                T1_change4: ImageNS1Change4Time,
                T1_change5: ImageNS1Change5Time,
                T1_change6: ImageNS1Change6Time,
                T1_change7: ImageNS1Change7Time,
                T1_change8: ImageNS1Change8Time,
            }]);
        }
    }
    }
    const pickAnswerNS2 = (e) => {
        if(document.getElementById("expired-notice")){
            setShowImageNS2Change1(false);
            setShowImageNS2Change2(false);
            setShowImageNS2Change3(false);
            setShowImageNS2Change4(false);
            setShowImageNS2Change5(false);
            setShowImageNS2Change6(false);

            setShowPauseNS2(true);
            setShowNS2(false);
            setTimesNS2([{Participant: participantID, Image_name: "Social 1", T1_change1: ImageNS2Change1Time,
            T1_change2: ImageNS2Change2Time,
            T1_change3: ImageNS2Change3Time,
            T1_change4: ImageNS2Change4Time,
            T1_change5: ImageNS2Change5Time,
            T1_change6: ImageNS2Change6Time}]);
        }
        else{
        setShowImageNST2Change1(false);
        setShowImageNST2Change2(false);
        setShowImageNST2Change3(false);
        setShowImageNST2Change4(false);
        setShowImageNST2Change5(false);
        setShowImageNST2Change6(false);
        setShowImageNST2Change7(false);
        setShowImageNST2Change8(false);
        console.log(counter);
        console.log(e.target.width);
        var b = e.target.width;
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/1125;
        const relativey = e.target.height/844;
        const change1 = [121,400,162,478];
        const change2 = [212,511,298,607];
        const change3 = [363,336,418,391];
        const change4 = [664,632,750,733];
        const change5 = [700,268,753,325];
        const change6 = [954,448,1001,525];
        var rect = e.target.getBoundingClientRect();
        //console.log(e.clientX,e.clientY);
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((!showImageNS2Change1) && (x >= (change1[0])*relativex && x <= (change1[2])*relativex && y >= (change1[1])*relativey && y <=  (change1[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS2Change1Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS2Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS2Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS2Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS2Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS2Change1(true);
        }else if ((!showImageNS2Change2) && (x >= (change2[0])*relativex && x <= (change2[2])*relativex && y >= (change2[1])*relativey && y <=  (change2[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS2Change2Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS2Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS2Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS2Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS2Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS2Change2(true);
        }else if ((!showImageNS2Change3) && (x >= (change3[0])*relativex && x <= (change3[2])*relativex && y >= (change3[1])*relativey && y <=  (change3[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS2Change3Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS2Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS2Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS2Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS2Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS2Change3(true);
        }else if ((!showImageNS2Change4) && (x >= (change4[0])*relativex && x <= (change4[2])*relativex && y >= (change4[1])*relativey && y <=  (change4[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS2Change4Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS2Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS2Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS2Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS2Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS2Change4(true);
        }else if ((!showImageNS2Change5) && (x >= (change5[0])*relativex && x <= (change5[2])*relativex && y >= (change5[1])*relativey && y <=  (change5[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS2Change5Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS2Change5Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS2Change5Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS2Change5Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS2Change5Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS2Change5(true);
        }else if ((!showImageNS2Change6) && (x >= (change6[0])*relativex && x <= (change6[2])*relativex && y >= (change6[1])*relativey && y <=  (change6[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS2Change6Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS2Change6Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS2Change6Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS2Change6Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS2Change6Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS2Change6(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[4] == 6 && showImageNS2Change1 && showImageNS2Change2 && showImageNS2Change3 && showImageNS2Change4 && showImageNS2Change5 && showImageNS2Change6){
            console.log("move to 2");
            setShowImageNS2Change1(false);
            setShowImageNS2Change2(false);
            setShowImageNS2Change3(false);
            setShowImageNS2Change4(false);
            setShowImageNS2Change5(false);
            setShowImageNS2Change6(false);
            setShowImageNS2Change7(false);

            setShowPauseNS2(true);
            setShowNS2(false);
            setGo(false);
            setCounter(0);
            setTimesNS2([{Participant: participantID,Image_name: "Non Social 2",  T1_change1: ImageNS2Change1Time,
                T1_change2: ImageNS2Change2Time,
                T1_change3: ImageNS2Change3Time,
                T1_change4: ImageNS2Change4Time,
                T1_change5: ImageNS2Change5Time,
                T1_change6: ImageNS2Change6Time,
                T1_change7: ImageNS2Change7Time}]);
        }
        else{
            setTimesNS2([{Participant: participantID,Image_name: "Non Social 2",  T1_change1: ImageNS2Change1Time,
                T1_change2: ImageNS2Change2Time,
                T1_change3: ImageNS2Change3Time,
                T1_change4: ImageNS2Change4Time,
                T1_change5: ImageNS2Change5Time,
                T1_change6: ImageNS2Change6Time,
                T1_change7: ImageNS2Change7Time}]);
        }
    }
    }
    const pickAnswerNS3 = (e) => {
        if(document.getElementById("expired-notice")){
            setShowImageNS3Change1(false);
            setShowImageNS3Change2(false);
            setShowImageNS3Change3(false);
            setShowImageNS3Change4(false);
            setShowImageNS3Change5(false);
            setShowImageNS3Change6(false);

            setShowPauseNS3(true);
            setShowNS3(false);
            setTimesNS3([{Participant: participantID, Image_name: "Social 1", T1_change1: ImageNS3Change1Time,
            T1_change2: ImageNS3Change2Time,
            T1_change3: ImageNS3Change3Time,
            T1_change4: ImageNS3Change4Time,
            T1_change5: ImageNS3Change5Time,
            T1_change6: ImageNS3Change6Time}]);
        }
        else{
        setShowImage1Change1(false);
        setShowImage1Change2(false);
        setShowImage1Change3(false);
        setShowImage1Change4(false);
        setShowImage1Change5(false);
        setShowImage1Change6(false);
        setShowImage1Change7(false);
        console.log(counter);
        console.log(e.target.width);
        var b = e.target.width;
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/1600;
        const relativey = e.target.height/1068;
        const change1 = [77,235,163,313];
        const change2 = [221,723,290,812];
        const change3 = [335,330,405,513];
        const change4 = [664,635,790,704];
        const change5 = [990,450,1074,535];
        const change6 = [1200,876,1269,966];
        var rect = e.target.getBoundingClientRect();
        //console.log(e.clientX,e.clientY);
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((!showImageNS3Change1) && (x >= (change1[0])*relativex && x <= (change1[2])*relativex && y >= (change1[1])*relativey && y <=  (change1[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS3Change1Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS3Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS3Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS3Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS3Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS3Change1(true);
        }else if ((!showImageNS3Change2) && (x >= (change2[0])*relativex && x <= (change2[2])*relativex && y >= (change2[1])*relativey && y <=  (change2[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS3Change2Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS3Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS3Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS3Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS3Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS3Change2(true);
        }else if ((!showImageNS3Change3) && (x >= (change3[0])*relativex && x <= (change3[2])*relativex && y >= (change3[1])*relativey && y <=  (change3[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS3Change3Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS3Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS3Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS3Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS3Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS3Change3(true);
        }else if ((!showImageNS3Change4) && (x >= (change4[0])*relativex && x <= (change4[2])*relativex && y >= (change4[1])*relativey && y <=  (change4[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS3Change4Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS3Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS3Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS3Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS3Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS3Change4(true);
        }else if ((!showImageNS3Change5) && (x >= (change5[0])*relativex && x <= (change5[2])*relativex && y >= (change5[1])*relativey && y <=  (change5[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS3Change5Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS3Change5Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS3Change5Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS3Change5Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS3Change5Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS3Change5(true);
        }else if ((!showImageNS3Change6) && (x >= (change6[0])*relativex && x <= (change6[2])*relativex && y >= (change6[1])*relativey && y <=  (change6[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNS3Change6Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNS3Change6Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS3Change6Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNS3Change6Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNS3Change6Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNS3Change6(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[5] == 6 && showImageNS3Change1 && showImageNS3Change2 && showImageNS3Change3 && showImageNS3Change4 && showImageNS3Change5 && showImageNS3Change6){
            console.log("move to 2");
            setShowImageNS3Change1(false);
            setShowImageNS3Change2(false);
            setShowImageNS3Change3(false);
            setShowImageNS3Change4(false);
            setShowImageNS3Change5(false);
            setShowImageNS3Change6(false);

            setShowPauseNS3(true);
            setShowNS2(false);
            setGo(false);
            setCounter(0);
            setTimesNS2([{Participant: participantID, Image_name: "Non Social 3",T1_change1: ImageNS3Change1Time,
                T1_change2: ImageNS3Change2Time,
                T1_change3: ImageNS3Change3Time,
                T1_change4: ImageNS3Change4Time,
                T1_change5: ImageNS3Change5Time,
                T1_change6: ImageNS3Change6Time}]);
        }
        else{
            setTimesNS2([{Participant: participantID, Image_name: "Non Social 3",T1_change1: ImageNS3Change1Time,
                T1_change2: ImageNS3Change2Time,
                T1_change3: ImageNS3Change3Time,
                T1_change4: ImageNS3Change4Time,
                T1_change5: ImageNS3Change5Time,
                T1_change6: ImageNS3Change6Time}]);
        }
    }
    }
    const pickAnswerNST1 = (e) => {
        if(document.getElementById("expired-notice")){
            setShowImageNST1Change1(false);
            setShowImageNST1Change2(false);
            setShowImageNST1Change3(false);
            setShowImageNST1Change4(false);
            setShowImageNST1Change5(false);
            setShowImageNST1Change6(false);

            setShowPauseNST1(true);
            setShowNST1(false);
            setTimesNST1([{Participant: participantID, Image_name: "Social 1", T1_change1: ImageNST1Change1Time,
            T1_change2: ImageNST1Change2Time,
            T1_change3: ImageNST1Change3Time,
            T1_change4: ImageNST1Change4Time,
            T1_change5: ImageNST1Change5Time,
            T1_change6: ImageNST1Change6Time}]);
        }
        else{

        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/1000;
        const relativey = e.target.height/555;
        const change1 = [125,23,192,94];
        const change2 = [434,262,500,289];
        const change3 = [588,226,658,261];
        const change4 = [871,62,941,170];
        var rect = e.target.getBoundingClientRect();
        var b = e.target.width;
        
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((!showImageNST1Change1) && (x >= (change1[0])*relativex && x <= (change1[2])*relativex && y >= (change1[1])*relativey && y <=  (change1[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6]+1,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            console.log(current);
            console.log(new Date().getTime());
            setImageNST1Change1Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNST1Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST1Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNST1Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST1Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNST1Change1(true);
            if (pts[6] == 4 && showImageNST1Change1 && showImageNST1Change2 && showImageNST1Change3 && showImageNST1Change4 ){
                console.log("move to 2");
                setShowImageNST1Change1(false);
                setShowImageNST1Change2(false);
                setShowImageNST1Change3(false);
                setShowImageNST1Change4(false);
                setShowImageNST1Change5(false);
                setShowImageNST1Change6(false);
    
                setShowPauseNST1(true);
                setShowNST1(false);
                setGo(false);
                setCounter(0);
                setTimesNST1([{Participant: participantID, Image_name: "Non Social 1 Train",T1_change1: ImageNST1Change1Time,
                    T1_change2: ImageNST1Change2Time,
                    T1_change3: ImageNST1Change3Time,
                    T1_change4: ImageNST1Change4Time,
                    T1_change5: ImageNST1Change5Time,
                    T1_change6: ImageNST1Change6Time}]);
            }
        }else if ((!showImageNST1Change2) && (x >= (change2[0])*relativex && x <= (change2[2])*relativex && y >= (change2[1])*relativey && y <=  (change2[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6]+1,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            console.log(current);
            console.log(new Date().getTime());
            setImageNST1Change2Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNST1Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST1Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNST1Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST1Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNST1Change2(true);
            if (pts[6] == 4 && showImageNST1Change1 && showImageNST1Change2 && showImageNST1Change3 && showImageNST1Change4 ){
                console.log("move to 2");
                setShowImageNST1Change1(false);
                setShowImageNST1Change2(false);
                setShowImageNST1Change3(false);
                setShowImageNST1Change4(false);
                setShowImageNST1Change5(false);
                setShowImageNST1Change6(false);
    
                setShowPauseNST1(true);
                setShowNST1(false);
                setGo(false);
                setCounter(0);
                setTimesNST1([{Participant: participantID, Image_name: "Non Social 1 Train",T1_change1: ImageNST1Change1Time,
                    T1_change2: ImageNST1Change2Time,
                    T1_change3: ImageNST1Change3Time,
                    T1_change4: ImageNST1Change4Time,
                    T1_change5: ImageNST1Change5Time,
                    T1_change6: ImageNST1Change6Time}]);
            }
        }else if ((!showImageNST1Change3) && (x >= (change3[0])*relativex && x <= (change3[2])*relativex && y >= (change3[1])*relativey && y <=  (change3[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6]+1,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            console.log(current);
            console.log(new Date().getTime());
            setImageNST1Change3Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNST1Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST1Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNST1Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST1Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNST1Change3(true);
            if (pts[6] == 4 && showImageNST1Change1 && showImageNST1Change2 && showImageNST1Change3 && showImageNST1Change4 ){
                console.log("move to 2");
                setShowImageNST1Change1(false);
                setShowImageNST1Change2(false);
                setShowImageNST1Change3(false);
                setShowImageNST1Change4(false);
                setShowImageNST1Change5(false);
                setShowImageNST1Change6(false);
    
                setShowPauseNST1(true);
                setShowNST1(false);
                setGo(false);
                setCounter(0);
                setTimesNST1([{Participant: participantID, Image_name: "Non Social 1 Train",T1_change1: ImageNST1Change1Time,
                    T1_change2: ImageNST1Change2Time,
                    T1_change3: ImageNST1Change3Time,
                    T1_change4: ImageNST1Change4Time,
                    T1_change5: ImageNST1Change5Time,
                    T1_change6: ImageNST1Change6Time}]);
            }
        }else if ((!showImageNST1Change4) && (x >= (change4[0])*relativex && x <= (change4[2])*relativex && y >= (change4[1])*relativey && y <=  (change4[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6]+1,0]);
            setCorrect(true);
            setToday( new Date().getTime());
            console.log(new Date().getTime());
            setImageNST1Change4Time(new Date().getTime() - current);
            console.log(current);
            console.log(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNST1Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST1Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNST1Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST1Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNST1Change4(true);
            if (pts[6] == 4 && showImageNST1Change1 && showImageNST1Change2 && showImageNST1Change3 && showImageNST1Change4 ){
                console.log("move to 2");
                setShowImageNST1Change1(false);
                setShowImageNST1Change2(false);
                setShowImageNST1Change3(false);
                setShowImageNST1Change4(false);
                setShowImageNST1Change5(false);
                setShowImageNST1Change6(false);
    
                setShowPauseNST1(true);
                setShowNST1(false);
                setGo(false);
                setCounter(0);
                
            }
            setTimesNST1([{Participant: participantID, Image_name: "Non Social 1 Train",T1_change1: ImageNST1Change1Time,
                    T1_change2: ImageNST1Change2Time,
                    T1_change3: ImageNST1Change3Time,
                    T1_change4: ImageNST1Change4Time,
                    T1_change5: ImageNST1Change5Time,
                    T1_change6: ImageNST1Change6Time}]);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[6] == 4 && showImageNST1Change1 && showImageNST1Change2 && showImageNST1Change3 && showImageNST1Change4 ){
            console.log("move to 2");
            setShowImageNST1Change1(false);
            setShowImageNST1Change2(false);
            setShowImageNST1Change3(false);
            setShowImageNST1Change4(false);
            setShowImageNST1Change5(false);
            setShowImageNST1Change6(false);

            setShowPauseNST1(true);
            setShowNST1(false);
            setGo(false);
            setCounter(0);
            setTimesNST1([{Participant: participantID, Image_name: "Non Social 1 Train",T1_change1: ImageNST1Change1Time,
                T1_change2: ImageNST1Change2Time,
                T1_change3: ImageNST1Change3Time,
                T1_change4: ImageNST1Change4Time,
                T1_change5: ImageNST1Change5Time,
                T1_change6: ImageNST1Change6Time}]);
        }
        else{
            setTimesNST1([{Participant: participantID, Image_name: "Non Social 1 Train",T1_change1: ImageNST1Change1Time,
                T1_change2: ImageNST1Change2Time,
                T1_change3: ImageNST1Change3Time,
                T1_change4: ImageNST1Change4Time,
                T1_change5: ImageNST1Change5Time,
                T1_change6: ImageNST1Change6Time}]);
        }
    }
    }

    const pickAnswerNST2 = (e) => {
        if(document.getElementById("expired-notice")){
            setShowImageNST2Change1(false);
            setShowImageNST2Change2(false);
            setShowImageNST2Change3(false);
            setShowImageNST2Change4(false);
            setShowImageNST2Change5(false);
            setShowImageNST2Change6(false);

            setShowPauseNST2(true);
            setShowNST2(false);
            setTimesNST2([{Participant: participantID, Image_name: "Social 1", T1_change1: ImageNST2Change1Time,
            T1_change2: ImageNST2Change2Time,
            T1_change3: ImageNST2Change3Time,
            T1_change4: ImageNST2Change4Time,
            T1_change5: ImageNST2Change5Time,
            T1_change6: ImageNST2Change6Time}]);
        }
        else{
        setShowImageNST1Change1(false);
            setShowImageNST1Change2(false);
            setShowImageNST1Change3(false);
            setShowImageNST1Change4(false);
            setShowImageNST1Change5(false);
            setShowImageNST1Change6(false);
        console.log(counter);
        console.log(e.target.width);
        var b = e.target.width;
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/1600;
        const relativey = e.target.height/1200;
        const change1 = [328,387,513,458];
        const change2 = [734,358,867,473];
        const change3 = [925,160,1069,269];
        const change4 = [966,566,1362,647];
        var rect = e.target.getBoundingClientRect();
        //console.log(e.clientX,e.clientY);
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((!showImageNST2Change1) && (x >= (change1[0])*relativex && x <= (change1[2])*relativex && y >= (change1[1])*relativey && y <=  (change1[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7]+1]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNST2Change1Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNST2Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST2Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNST2Change1Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST2Change1Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNST2Change1(true);
        }else if ((!showImageNST2Change2) && (x >= (change2[0])*relativex && x <= (change2[2])*relativex && y >= (change2[1])*relativey && y <=  (change2[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7]+1]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNST2Change2Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNST2Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST2Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNST2Change2Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST2Change2Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNST2Change2(true);
        }else if ((!showImageNST2Change3) && (x >= (change3[0])*relativex && x <= (change3[2])*relativex && y >= (change3[1])*relativey && y <=  (change3[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7]+1]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNST2Change3Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNST2Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST2Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNST2Change3Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST2Change3Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNST2Change3(true);
        }else if ((!showImageNST2Change4) && (x >= (change4[0])*relativex && x <= (change4[2])*relativex && y >= (change4[1])*relativey && y <=  (change4[3])*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7]+1]);
            setCorrect(true);
            setToday( new Date().getTime());
            setImageNST2Change4Time(new Date().getTime() - current);
            //setCurrent(new Date().getTime());
            if(e.clientX<e.target.width){
                setImageNST2Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST2Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            else{
                setImageNST2Change4Cord2({x: (x-5*b/100+e.target.width)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
                setImageNST2Change4Cord({x: (x-5*b/100)/e.target.width*100/2,y:(y-5*b/100)/e.target.height*100});
            }
            setShowImageNST2Change4(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if ((pts[7] == 4 && showImageNST2Change1 && showImageNST2Change2 && showImageNST2Change3 && showImageNST2Change4) ){
            console.log("move to 2");
            setShowImageNST2Change1(false);
            setShowImageNST2Change2(false);
            setShowImageNST2Change3(false);
            setShowImageNST2Change4(false);
            setShowImageNST2Change5(false);
            setShowImageNST2Change6(false);
            setShowImageNST2Change7(false);

            setShowPauseNST2(true);
            setShowNST2(false);
            setGo(false);
            setCounter(0);
            setTimesNST2([{Participant: participantID,Image_name: "Non Social 2 Train", T1_change1: ImageNST2Change1Time,
                T1_change2: ImageNST2Change2Time,
                T1_change3: ImageNST2Change3Time,
                T1_change4: ImageNST2Change4Time,
                T1_change5: ImageNST2Change5Time,
                T1_change6: ImageNST2Change6Time,
                T1_change7: ImageNST2Change7Time}]);
        }
        else{
            setTimesNST2([{Participant: participantID,Image_name: "Non Social 2 Train", T1_change1: ImageNST2Change1Time,
            T1_change2: ImageNST2Change2Time,
            T1_change3: ImageNST2Change3Time,
            T1_change4: ImageNST2Change4Time,
            T1_change5: ImageNST2Change5Time,
            T1_change6: ImageNST2Change6Time,
            T1_change7: ImageNST2Change7Time}]); 
        }
    }
    }
    //help
    return (
        <QuizWindow>
        <div className='quiz' align="center">
        
            {/* Image 1 and the following 'Next Page' */}
            {(show) ? (
                <div>
                    <h2>Please enter your Id</h2>
                    <Form onSubmit={handleParticipant}>
                        <input type="text" id="partid">
                        </input>
                        <input type="submit">
                        </input>
                    </Form>
                </div>
            ) : (showPause) ? (
                    <>
                        <Title>Great! We are ready to start 🥳</Title>
                        <Button onClick={() => goToNext(1)}> Ready Set Go!!!!</Button>
                        <div> </div>
                         </>
            ) : null}


            {/* Image 1 and the following 'Next Page' */}
            {(showNST1) ? (
                
                <div>
                    <div> Training Image 1</div>
                    <h1> Spot the Differences! </h1>
                    <div style={{position: "relative" }}>
                    <img src={PicNST1A} alt="Picture NST1A" height="50%" width="50%" onClick={pickAnswerNST1} />
                    {showImageNST1Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST1Change1Cord.x}%`,
                            top: `${ImageNST1Change1Cord.y}%`, }}/>
                    ) : null}
                    {showImageNST1Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST1Change2Cord.x}%`,
                            top: `${ImageNST1Change2Cord.y}%`, }}/>
                    ) : null}
                    {showImageNST1Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST1Change3Cord.x}%`,
                            top: `${ImageNST1Change3Cord.y}%`, }}/>
                    ) : null}
                    {showImageNST1Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST1Change4Cord.x}%`,
                            top: `${ImageNST1Change4Cord.y}%`, }}/>
                    ) : null}
                    <img src={PicNST1B} alt="Picture NST1B" height="50%" width="50%" onClick={pickAnswerNST1}/>
                    {showImageNST1Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST1Change1Cord2.x}%`,
                            top: `${ImageNST1Change1Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNST1Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST1Change2Cord2.x}%`,
                            top: `${ImageNST1Change2Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNST1Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST1Change3Cord2.x}%`,
                            top: `${ImageNST1Change3Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNST1Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST1Change4Cord2.x}%`,
                            top: `${ImageNST1Change4Cord2.y}%`, }}/>
                    ) : null}
                    </div>
                    <Button onClick={() => goToNext(2)}> Next</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPauseNST1) ? (
                    <>
                        <Title>Great! You got {pts[6]} out of 4! 🥳</Title>
                        <Button onClick={() => goToNext(2)}> Next</Button>
                        <div> </div>
                        <h1> </h1>
                        {/* <CSVDownload data={times1} target="_blank" /> */}
                        <CSVLink data={timesNST1}>Click to Download Data (Training Image 1)</CSVLink>
                    </>
            ) : null}

            {/* Image 2 and the following 'Next Page' */}
            {(showNST2) ? (
                <div>
                    <div> Training Image 2</div>
                    <h2> Spot the Differences! </h2>
                    <div style={{position: "relative" }}>
                    <img src={PicNST2A} alt="Picture NST2A" height="50%" width="50%" onClick={pickAnswerNST2} />
                    {showImageNST2Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST2Change1Cord.x}%`,
                            top: `${ImageNST2Change1Cord.y}%`, }}/>
                    ) : null}
                    {showImageNST2Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST2Change2Cord.x}%`,
                            top: `${ImageNST2Change2Cord.y}%`, }}/>
                    ) : null}
                    {showImageNST2Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST2Change3Cord.x}%`,
                            top: `${ImageNST2Change3Cord.y}%`, }}/>
                    ) : null}
                    {showImageNST2Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST2Change4Cord.x}%`,
                            top: `${ImageNST2Change4Cord.y}%`, }}/>
                    ) : null}
                    <img src={PicNST2B} alt="Picture NST2B" height="50%" width="50%" onClick={pickAnswerNST2}/>
                    {showImageNST2Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST2Change1Cord2.x}%`,
                            top: `${ImageNST2Change1Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNST2Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST2Change2Cord2.x}%`,
                            top: `${ImageNST2Change2Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNST2Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST2Change3Cord2.x}%`,
                            top: `${ImageNST2Change3Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNST2Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNST2Change4Cord2.x}%`,
                            top: `${ImageNST2Change4Cord2.y}%`, }}/>
                    ) : null}
                    </div>
                    <Button onClick={() => goToNext(3)}> Next</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPauseNST2) ? (
                <>
                    <Title >Great! You got {pts[7]} out of 4! 🥳</Title> 
                    <Button onClick={() => goToNext(3)}> Next </Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={timesNST2}>Click to Download Data (Image Training 2)</CSVLink>
                </>
            ) : null}

            {/* Image 3 and the following 'Next Page' */}
            {(showNS2) ? (
                <div>
                    <div>
      <h6>Countdown Timer</h6>
      <CountdownTimer targetDate={counter1} />
    </div>
                    <div> Image Non social 2</div>
                    <h1> Spot the Differences! </h1>
                    <div style={{position: "relative" }}>
                    <img src={PicNS2A} alt="Picture NS2" height="50%" width="50%" onClick={pickAnswerNS2} />
                    {showImageNS2Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS2Change1Cord.x}%`,
                            top: `${ImageNS2Change1Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS2Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS2Change2Cord.x}%`,
                            top: `${ImageNS2Change2Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS2Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS2Change3Cord.x}%`,
                            top: `${ImageNS2Change3Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS2Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS2Change4Cord.x}%`,
                            top: `${ImageNS2Change4Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS2Change5 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS2Change5Cord.x}%`,
                            top: `${ImageNS2Change5Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS2Change6 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS2Change6Cord.x}%`,
                            top: `${ImageNS2Change6Cord.y}%`, }}/>
                    ) : null}
                    <img src={PicNS2B} alt="Picture NS2" height="50%" width="50%" onClick={pickAnswerNS2}/>
                    {showImageNS2Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS2Change1Cord2.x}%`,
                            top: `${ImageNS2Change1Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS2Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS2Change2Cord2.x}%`,
                            top: `${ImageNS2Change2Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS2Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS2Change3Cord2.x}%`,
                            top: `${ImageNS2Change3Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS2Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS2Change4Cord2.x}%`,
                            top: `${ImageNS2Change4Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS2Change5 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS2Change5Cord2.x}%`,
                            top: `${ImageNS2Change5Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS2Change6 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS2Change6Cord2.x}%`,
                            top: `${ImageNS2Change6Cord2.y}%`, }}/>
                    ) : null}
                    </div>
                    <Button onClick={() => goToNext(4)}> Next</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPauseNS2) ? (
                <>
                    <Title >Great! You got {pts[4]} out of 6! 🥳</Title>
                    <Button onClick={() => goToNext(4)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={timesNS2}>Click to Download Data (Non social Image 2)</CSVLink>
                </>
            ) : null}

            {/* Image 4 and the following 'Next Page' */}
            {(show1) ? (
                <div>
                    <div>
      <h6>Countdown Timer</h6>
      <CountdownTimer targetDate={counter1} />
    </div>
                    <div> Image 1</div>
                    <h1> Spot the Differences! </h1>
                    <div style={{position: "relative" }}>
                    <img src={Pic1A} alt="Picture 1A" height="50%" width="50%" onClick={pickAnswer1} />
                    {showImage1Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image1Change1Cord.x}%`,
                            top: `${Image1Change1Cord.y}%`, }}/>
                    ) : null}
                    {showImage1Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image1Change2Cord.x}%`,
                            top: `${Image1Change2Cord.y}%`, }}/>
                    ) : null}
                    {showImage1Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image1Change3Cord.x}%`,
                            top: `${Image1Change3Cord.y}%`, }}/>
                    ) : null}
                    {showImage1Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image1Change4Cord.x}%`,
                            top: `${Image1Change4Cord.y}%`, }}/>
                    ) : null}
                    {showImage1Change5 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image1Change5Cord.x}%`,
                            top: `${Image1Change5Cord.y}%`, }}/>
                    ) : null}
                    {showImage1Change6 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image1Change6Cord.x}%`,
                            top: `${Image1Change6Cord.y}%`, }}/>
                    ) : null}
                    <img src={Pic1B} alt="Picture 1B" height="50%" width="50%" onClick={pickAnswer1}/>
                    {showImage1Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image1Change1Cord2.x}%`,
                            top: `${Image1Change1Cord2.y}%`, }}/>
                    ) : null}
                    {showImage1Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image1Change2Cord2.x}%`,
                            top: `${Image1Change2Cord2.y}%`, }}/>
                    ) : null}
                    {showImage1Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image1Change3Cord2.x}%`,
                            top: `${Image1Change3Cord2.y}%`, }}/>
                    ) : null}
                    {showImage1Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image1Change4Cord2.x}%`,
                            top: `${Image1Change4Cord2.y}%`, }}/>
                    ) : null}
                    {showImage1Change5 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image1Change5Cord2.x}%`,
                            top: `${Image1Change5Cord2.y}%`, }}/>
                    ) : null}
                    {showImage1Change6 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image1Change6Cord2.x}%`,
                            top: `${Image1Change6Cord2.y}%`, }}/>
                    ) : null}
                    
                    </div>
                    <Button onClick={() => goToNext(5)}> Next</Button>
                    {/* <div> Timer1: {counter}</div> */}
                    
                </div>
            ) : (showPause1) ? (
                <>
                    <Title >Great! You got {pts[0]} out of 6! 🥳</Title>
                    <Button onClick={() => goToNext(5)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={times1}>Click to Download Data (Social Image 1)</CSVLink>
                </> 
            ) : null}

            {/* Image 5 and the following 'Next Page' */}
            {(showNS3) ? (
                <div>
                    <div>
      <h6>Countdown Timer</h6>
      <CountdownTimer targetDate={counter1} />
    </div>
                    <div> Image Non social 3</div>
                    <h1> Spot the Differences! </h1>
                    <div style={{position: "relative" }}>
                    <img src={PicNS3A} alt="Picture NS3A" height="50%" width="50%" onClick={pickAnswerNS3} />
                    {showImageNS3Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS3Change1Cord.x}%`,
                            top: `${ImageNS3Change1Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS3Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS3Change2Cord.x}%`,
                            top: `${ImageNS3Change2Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS3Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS3Change3Cord.x}%`,
                            top: `${ImageNS3Change3Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS3Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS3Change4Cord.x}%`,
                            top: `${ImageNS3Change4Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS3Change5 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS3Change5Cord.x}%`,
                            top: `${ImageNS3Change5Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS3Change6 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS3Change6Cord.x}%`,
                            top: `${ImageNS3Change6Cord.y}%`, }}/>
                    ) : null}
                    <img src={PicNS3B} alt="Picture NS3B" height="50%" width="50%" onClick={pickAnswerNS3}/>
                    {showImageNS3Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS3Change1Cord2.x}%`,
                            top: `${ImageNS3Change1Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS3Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS3Change2Cord2.x}%`,
                            top: `${ImageNS3Change2Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS3Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS3Change3Cord2.x}%`,
                            top: `${ImageNS3Change3Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS3Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS3Change4Cord2.x}%`,
                            top: `${ImageNS3Change4Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS3Change5 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS3Change5Cord2.x}%`,
                            top: `${ImageNS3Change5Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS3Change6 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS3Change6Cord2.x}%`,
                            top: `${ImageNS3Change6Cord2.y}%`, }}/>
                    ) : null}
                    </div>
                    <Button onClick={() => goToNext(6)}> Next</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPauseNS3) ? (
                <>
                    <Title >Great! You got {pts[5]} out of 6! 🥳</Title>
                    <Button onClick={() => goToNext(6)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={timesNS3}>Click to Download Data (Image NS3)</CSVLink>
                </> 
            ) : null}

            {/* Nonsocial Image 1 and the following 'Next Page' */}
            {(show2) ? (
                <div>
                    <div>
      <h6>Countdown Timer</h6>
      <CountdownTimer targetDate={counter1} />
    </div>
                    <div> Image 2</div>
                    <h2> Spot the Differences! </h2>
                    <div style={{position: "relative" }}>
                    <img src={Pic2A} alt="Picture 2A" height="50%" width="50%" onClick={pickAnswer2} />
                    {showImage2Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image2Change1Cord.x}%`,
                            top: `${Image2Change1Cord.y}%`, }}/>
                    ) : null}
                    {showImage2Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image2Change2Cord.x}%`,
                            top: `${Image2Change2Cord.y}%`, }}/>
                    ) : null}
                    {showImage2Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image2Change3Cord.x}%`,
                            top: `${Image2Change3Cord.y}%`, }}/>
                    ) : null}
                    {showImage2Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image2Change4Cord.x}%`,
                            top: `${Image2Change4Cord.y}%`, }}/>
                    ) : null}
                    {showImage2Change5 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image2Change5Cord.x}%`,
                            top: `${Image2Change5Cord.y}%`, }}/>
                    ) : null}
                    {showImage2Change6 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image2Change6Cord.x}%`,
                            top: `${Image2Change6Cord.y}%`, }}/>
                    ) : null}
                    <img src={Pic2B} alt="Picture 2B" height="50%" width="50%" onClick={pickAnswer2}/>
                    {showImage2Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image2Change1Cord2.x}%`,
                            top: `${Image2Change1Cord2.y}%`, }}/>
                    ) : null}
                    {showImage2Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image2Change2Cord2.x}%`,
                            top: `${Image2Change2Cord2.y}%`, }}/>
                    ) : null}
                    {showImage2Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image2Change3Cord2.x}%`,
                            top: `${Image2Change3Cord2.y}%`, }}/>
                    ) : null}
                    {showImage2Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image2Change4Cord2.x}%`,
                            top: `${Image2Change4Cord2.y}%`, }}/>
                    ) : null}
                    {showImage2Change5 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image2Change5Cord2.x}%`,
                            top: `${Image2Change5Cord2.y}%`, }}/>
                    ) : null}
                    {showImage2Change6 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image2Change6Cord2.x}%`,
                            top: `${Image2Change6Cord2.y}%`, }}/>
                    ) : null}
                    </div>
                    <Button onClick={() => goToNext(7)}> Next</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPause2) ? (
                <>
                    <Title >Great! You got {pts[1]} out of 6! 🥳</Title>
                    <Button onClick={() => goToNext(7)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={times2}>Click to Download Data (Image 2)</CSVLink>
                </> 
            ) : null}

            {/* Nonsocial Image 2 and the following 'Next Page' */}
            {(showNS1) ? (
                <div>
                    <div>
      <h6>Countdown Timer</h6>
      <CountdownTimer targetDate={counter1} />
    </div>
                    <div> NS Image 1</div>
                    <h2> Spot the Differences! </h2>
                    <div style={{position: "relative" }}>
                    <img src={PicNS1A} alt="NS Picture 1A" height="50%" width="50%" onClick={pickAnswerNS1} />
                    {showImageNS1Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS1Change1Cord.x}%`,
                            top: `${ImageNS1Change1Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS1Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS1Change2Cord.x}%`,
                            top: `${ImageNS1Change2Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS1Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS1Change3Cord.x}%`,
                            top: `${ImageNS1Change3Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS1Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS1Change4Cord.x}%`,
                            top: `${ImageNS1Change4Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS1Change5 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS1Change5Cord.x}%`,
                            top: `${ImageNS1Change5Cord.y}%`, }}/>
                    ) : null}
                    {showImageNS1Change6 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS1Change6Cord.x}%`,
                            top: `${ImageNS1Change6Cord.y}%`, }}/>
                    ) : null}
                    <img src={PicNS1B} alt="NS Picture 1B" height="50%" width="50%" onClick={pickAnswerNS1}/>
                    {showImageNS1Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS1Change1Cord2.x}%`,
                            top: `${ImageNS1Change1Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS1Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS1Change2Cord2.x}%`,
                            top: `${ImageNS1Change2Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS1Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS1Change3Cord2.x}%`,
                            top: `${ImageNS1Change3Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS1Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS1Change4Cord2.x}%`,
                            top: `${ImageNS1Change4Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS1Change5 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS1Change5Cord2.x}%`,
                            top: `${ImageNS1Change5Cord2.y}%`, }}/>
                    ) : null}
                    {showImageNS1Change6 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${ImageNS1Change6Cord2.x}%`,
                            top: `${ImageNS1Change6Cord2.y}%`, }}/>
                    ) : null}
                    </div>
                    <Button onClick={() => goToNext(8)}> Next</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPauseNS1) ? (
                <>
                    <Title >Great! You got {pts[3]} out of 6! 🥳</Title>
                    <Button onClick={() => goToNext(8)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={timesNS1}>Click to Download Data (NS Image 1)</CSVLink>
                </> 
            ) : null}

            {/* Image 12 and the following 'Next Page' */}
            {(show3) ? (
                <div>
                    <div>
      <h6>Countdown Timer</h6>
      <CountdownTimer targetDate={counter1} />
    </div>
                    <div> Image 3</div>
                    <h2> Spot the Differences! </h2>
                    <div style={{position: "relative" }}>
                    <img src={Pic3A} alt="Picture 3A" height="50%" width="50%" onClick={pickAnswer3} />
                    {showImage3Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image3Change1Cord.x}%`,
                            top: `${Image3Change1Cord.y}%`, }}/>
                    ) : null}
                    {showImage3Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image3Change2Cord.x}%`,
                            top: `${Image3Change2Cord.y}%`, }}/>
                    ) : null}
                    {showImage3Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image3Change3Cord.x}%`,
                            top: `${Image3Change3Cord.y}%`, }}/>
                    ) : null}
                    {showImage3Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image3Change4Cord.x}%`,
                            top: `${Image3Change4Cord.y}%`, }}/>
                    ) : null}
                    {showImage3Change5 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image3Change5Cord.x}%`,
                            top: `${Image3Change5Cord.y}%`, }}/>
                    ) : null}
                    {showImage3Change6 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image3Change6Cord.x}%`,
                            top: `${Image3Change6Cord.y}%`, }}/>
                    ) : null}
                    <img src={Pic3B} alt="Picture 3B" height="50%" width="50%" onClick={pickAnswer3}/>
                    {showImage3Change1 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image3Change1Cord2.x}%`,
                            top: `${Image3Change1Cord2.y}%`, }}/>
                    ) : null}
                    {showImage3Change2 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image3Change2Cord2.x}%`,
                            top: `${Image3Change2Cord2.y}%`, }}/>
                    ) : null}
                    {showImage3Change3 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image3Change3Cord2.x}%`,
                            top: `${Image3Change3Cord2.y}%`, }}/>
                    ) : null}
                    {showImage3Change4 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image3Change4Cord2.x}%`,
                            top: `${Image3Change4Cord2.y}%`, }}/>
                    ) : null}
                    {showImage3Change5 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image3Change5Cord2.x}%`,
                            top: `${Image3Change5Cord2.y}%`, }}/>
                    ) : null}
                    {showImage3Change6 ? (
                        <img alt="Pic1"  width="5%" src={Circle}  style={{
                            position: "absolute",
                            left: `${Image3Change6Cord2.x}%`,
                            top: `${Image3Change6Cord2.y}%`, }}/>
                    ) : null}
                    </div>
                    <Button onClick={() => goToNext(9)}> Finish Game</Button>
                    {/* <div> Timer1: {counter}</div> */}
                     
                </div>
            ) : (showOver) ? (
                <div>
                    
                    <Title >You got {pts[2]} out of 6! 🥳</Title>
                    <CSVLink data={times3}>Click to Download Data (Image 3)</CSVLink>
                    <br/>
 
                    <CSVLink data={times}>Click to Download All Data (All)</CSVLink>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    
                </ div>
            ) : null} 

            {/* Symbols of right or wrong for each click on all Images */} 
            {correct &&
                <div>✅ Correct!</div>
            }
            {wrong &&
                <div> ❌ Keep looking!</div>
            }
        </div>
     
    </QuizWindow>
        )
}

export default Quiz

//1 minute per Image, timer more precise with seconds