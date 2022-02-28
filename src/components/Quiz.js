import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import GameOver from './GameOver';
import Pic1A from '../Image 1_original (1).jpg';
import Pic1B from '../Image 1 Change_final.jpg';
import Pic2A from '../Image 2_original (1).jpg'
import Pic2B from '../Image 2 Change_final.jpg'
import Pic3A from '../Image 3_original.jpg'
import Pic3B from '../Image 3 Change_final.jpg'
import Pic4A from '../Image 4_original.jpg'
import Pic4B from '../Image 4 Change_final.jpg'
import Pic5A from '../Image 5 original.jpg'
import Pic5B from '../Image 5 Change_final.jpg'
import Pic12A from '../Image 12 original.jpg'
import Pic12B from '../Image 12 Change_final.jpg'
import NsPic1A from '../nonsocial_1_original.png'
import NsPic1B from '../nonsocial_1_change.png'
import NsPic2A from '../nonsocial_2_original.png'
import NsPic2B from '../nonsocial_2_change.png'
import NsPic3A from '../nonsocial_3_original.png'
import NsPic3B from '../nonsocial_3_change.png'
import NsPic4A from '../nonsocial_4_original.png'
import NsPic4B from '../nonsocial_4_change.png'
import NsPic5A from '../nonsocial_5_original.png'
import NsPic5B from '../nonsocial_5_change.png'
import Circle from '../kisspng-disk-green-circle-5af97c364e1283.3175421115262997023198.png'
import Button from './Button'
import { CSVLink, CSVDownload } from "react-csv";
import { Form } from 'react-bootstrap'

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
    const [pts, setPts] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [correct, setCorrect] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [counter, setCounter] = useState(timerLength);

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

    //Image 4 times to find each change
    const [Image4Change1, setImage4Change1] = useState(-1);
    const [Image4Change2, setImage4Change2] = useState(-1);
    const [Image4Change3, setImage4Change3] = useState(-1);
    const [Image4Change4, setImage4Change4] = useState(-1);
    const [Image4Change5, setImage4Change5] = useState(-1);
    const [Image4Change6, setImage4Change6] = useState(-1);
    const [Image4Change7, setImage4Change7] = useState(-1);
    const [Image4Change8, setImage4Change8] = useState(-1);

    //Image 5 times to find each change
    const [Image5Change1, setImage5Change1] = useState(-1);
    const [Image5Change2, setImage5Change2] = useState(-1);
    const [Image5Change3, setImage5Change3] = useState(-1);
    const [Image5Change4, setImage5Change4] = useState(-1);
    const [Image5Change5, setImage5Change5] = useState(-1);
    const [Image5Change6, setImage5Change6] = useState(-1);
    const [Image5Change7, setImage5Change7] = useState(-1);
    const [Image5Change8, setImage5Change8] = useState(-1);

    //Image 12 times to find each change
    const [Image12Change1, setImage12Change1] = useState(-1);
    const [Image12Change2, setImage12Change2] = useState(-1);
    const [Image12Change3, setImage12Change3] = useState(-1);
    const [Image12Change4, setImage12Change4] = useState(-1);
    const [Image12Change5, setImage12Change5] = useState(-1);
    const [Image12Change6, setImage12Change6] = useState(-1);
    const [Image12Change7, setImage12Change7] = useState(-1);
    const [Image12Change8, setImage12Change8] = useState(-1);

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

    //Image NS4 times to find each change
    const [ImageNS4Change1, setImageNS4Change1] = useState(-1);
    const [ImageNS4Change2, setImageNS4Change2] = useState(-1);
    const [ImageNS4Change3, setImageNS4Change3] = useState(-1);
    const [ImageNS4Change4, setImageNS4Change4] = useState(-1);
    const [ImageNS4Change5, setImageNS4Change5] = useState(-1);
    const [ImageNS4Change6, setImageNS4Change6] = useState(-1);
    const [ImageNS4Change7, setImageNS4Change7] = useState(-1);
    const [ImageNS4Change8, setImageNS4Change8] = useState(-1);

    //Image NS5 times to find each change
    const [ImageNS5Change1, setImageNS5Change1] = useState(-1);
    const [ImageNS5Change2, setImageNS5Change2] = useState(-1);
    const [ImageNS5Change3, setImageNS5Change3] = useState(-1);
    const [ImageNS5Change4, setImageNS5Change4] = useState(-1);
    const [ImageNS5Change5, setImageNS5Change5] = useState(-1);
    const [ImageNS5Change6, setImageNS5Change6] = useState(-1);
    const [ImageNS5Change7, setImageNS5Change7] = useState(-1);
    const [ImageNS5Change8, setImageNS5Change8] = useState(-1);

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

    //Image 4 times to find each change
    const [Image4Change1Time, setImage4Change1Time] = useState(-1);
    const [Image4Change2Time, setImage4Change2Time] = useState(-1);
    const [Image4Change3Time, setImage4Change3Time] = useState(-1);
    const [Image4Change4Time, setImage4Change4Time] = useState(-1);
    const [Image4Change5Time, setImage4Change5Time] = useState(-1);
    const [Image4Change6Time, setImage4Change6Time] = useState(-1);
    const [Image4Change7Time, setImage4Change7Time] = useState(-1);
    const [Image4Change8Time, setImage4Change8Time] = useState(-1);

    //Image 5 times to find each change
    const [Image5Change1Time, setImage5Change1Time] = useState(-1);
    const [Image5Change2Time, setImage5Change2Time] = useState(-1);
    const [Image5Change3Time, setImage5Change3Time] = useState(-1);
    const [Image5Change4Time, setImage5Change4Time] = useState(-1);
    const [Image5Change5Time, setImage5Change5Time] = useState(-1);
    const [Image5Change6Time, setImage5Change6Time] = useState(-1);
    const [Image5Change7Time, setImage5Change7Time] = useState(-1);
    const [Image5Change8Time, setImage5Change8Time] = useState(-1);

    //Image 12 times to find each change
    const [Image12Change1Time, setImage12Change1Time] = useState(-1);
    const [Image12Change2Time, setImage12Change2Time] = useState(-1);
    const [Image12Change3Time, setImage12Change3Time] = useState(-1);
    const [Image12Change4Time, setImage12Change4Time] = useState(-1);
    const [Image12Change5Time, setImage12Change5Time] = useState(-1);
    const [Image12Change6Time, setImage12Change6Time] = useState(-1);
    const [Image12Change7Time, setImage12Change7Time] = useState(-1);
    const [Image12Change8Time, setImage12Change8Time] = useState(-1);

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

    //Image NS4 times to find each change
    const [ImageNS4Change1Time, setImageNS4Change1Time] = useState(-1);
    const [ImageNS4Change2Time, setImageNS4Change2Time] = useState(-1);
    const [ImageNS4Change3Time, setImageNS4Change3Time] = useState(-1);
    const [ImageNS4Change4Time, setImageNS4Change4Time] = useState(-1);
    const [ImageNS4Change5Time, setImageNS4Change5Time] = useState(-1);
    const [ImageNS4Change6Time, setImageNS4Change6Time] = useState(-1);
    const [ImageNS4Change7Time, setImageNS4Change7Time] = useState(-1);
    const [ImageNS4Change8Time, setImageNS4Change8Time] = useState(-1);

    //Image NS5 times to find each change
    const [ImageNS5Change1Time, setImageNS5Change1Time] = useState(-1);
    const [ImageNS5Change2Time, setImageNS5Change2Time] = useState(-1);
    const [ImageNS5Change3Time, setImageNS5Change3Time] = useState(-1);
    const [ImageNS5Change4Time, setImageNS5Change4Time] = useState(-1);
    const [ImageNS5Change5Time, setImageNS5Change5Time] = useState(-1);
    const [ImageNS5Change6Time, setImageNS5Change6Time] = useState(-1);
    const [ImageNS5Change7Time, setImageNS5Change7Time] = useState(-1);
    const [ImageNS5Change8Time, setImageNS5Change8Time] = useState(-1);
	
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
	
	//variables to control highlighting found changes in Image 4
    const [showImage4Change1, setShowImage4Change1] = useState(false);
    const [showImage4Change2, setShowImage4Change2] = useState(false);
    const [showImage4Change3, setShowImage4Change3] = useState(false);
    const [showImage4Change4, setShowImage4Change4] = useState(false);
    const [showImage4Change5, setShowImage4Change5] = useState(false);
    const [showImage4Change6, setShowImage4Change6] = useState(false);
    const [showImage4Change7, setShowImage4Change7] = useState(false);
    const [showImage4Change8, setShowImage4Change8] = useState(false);
	
	//variables to control highlighting found changes in Image 5
    const [showImage5Change1, setShowImage5Change1] = useState(false);
    const [showImage5Change2, setShowImage5Change2] = useState(false);
    const [showImage5Change3, setShowImage5Change3] = useState(false);
    const [showImage5Change4, setShowImage5Change4] = useState(false);
    const [showImage5Change5, setShowImage5Change5] = useState(false);
    const [showImage5Change6, setShowImage5Change6] = useState(false);
    const [showImage5Change7, setShowImage5Change7] = useState(false);
    const [showImage5Change8, setShowImage5Change8] = useState(false);
	
	//variables to control highlighting found changes in Image 12
    const [showImage12Change1, setShowImage12Change1] = useState(false);
    const [showImage12Change2, setShowImage12Change2] = useState(false);
    const [showImage12Change3, setShowImage12Change3] = useState(false);
    const [showImage12Change4, setShowImage12Change4] = useState(false);
    const [showImage12Change5, setShowImage12Change5] = useState(false);
    const [showImage12Change6, setShowImage12Change6] = useState(false);
    const [showImage12Change7, setShowImage12Change7] = useState(false);
    const [showImage12Change8, setShowImage12Change8] = useState(false);
	
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
	
	//variables to control highlighting found changes in Image NS4
    const [showImageNS4Change1, setShowImageNS4Change1] = useState(false);
    const [showImageNS4Change2, setShowImageNS4Change2] = useState(false);
    const [showImageNS4Change3, setShowImageNS4Change3] = useState(false);
    const [showImageNS4Change4, setShowImageNS4Change4] = useState(false);
    const [showImageNS4Change5, setShowImageNS4Change5] = useState(false);
    const [showImageNS4Change6, setShowImageNS4Change6] = useState(false);
    const [showImageNS4Change7, setShowImageNS4Change7] = useState(false);
    const [showImageNS4Change8, setShowImageNS4Change8] = useState(false);
	
	//variables to control highlighting found changes in Image NS5
    const [showImageNS5Change1, setShowImageNS5Change1] = useState(false);
    const [showImageNS5Change2, setShowImageNS5Change2] = useState(false);
    const [showImageNS5Change3, setShowImageNS5Change3] = useState(false);
    const [showImageNS5Change4, setShowImageNS5Change4] = useState(false);
    const [showImageNS5Change5, setShowImageNS5Change5] = useState(false);
    const [showImageNS5Change6, setShowImageNS5Change6] = useState(false);
    const [showImageNS5Change7, setShowImageNS5Change7] = useState(false);
    const [showImageNS5Change8, setShowImageNS5Change8] = useState(false);
	
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
	
	//coordinates for Image4
	
	const [Image4Change1Cord, setImage4Change1Cord] = useState({x: 0, y: 0});
	const [Image4Change1Cord2, setImage4Change1Cord2] = useState({x: 0, y: 0});
	const [Image4Change2Cord, setImage4Change2Cord] = useState({x: 0, y: 0});
	const [Image4Change2Cord2, setImage4Change2Cord2] = useState({x: 0, y: 0});
	const [Image4Change3Cord, setImage4Change3Cord] = useState({x: 0, y: 0});
	const [Image4Change3Cord2, setImage4Change3Cord2] = useState({x: 0, y: 0});
	const [Image4Change4Cord, setImage4Change4Cord] = useState({x: 0, y: 0});
	const [Image4Change4Cord2, setImage4Change4Cord2] = useState({x: 0, y: 0});
	const [Image4Change5Cord, setImage4Change5Cord] = useState({x: 0, y: 0});
	const [Image4Change5Cord2, setImage4Change5Cord2] = useState({x: 0, y: 0});
	const [Image4Change6Cord, setImage4Change6Cord] = useState({x: 0, y: 0});
	const [Image4Change6Cord2, setImage4Change6Cord2] = useState({x: 0, y: 0});
	const [Image4Change7Cord, setImage4Change7Cord] = useState({x: 0, y: 0});
	const [Image4Change7Cord2, setImage4Change7Cord2] = useState({x: 0, y: 0});
	const [Image4Change8Cord, setImage4Change8Cord] = useState({x: 0, y: 0});
	const [Image4Change8Cord2, setImage4Change8Cord2] = useState({x: 0, y: 0});
	
	//coordinates for Image5
	
	const [Image5Change1Cord, setImage5Change1Cord] = useState({x: 0, y: 0});
	const [Image5Change1Cord2, setImage5Change1Cord2] = useState({x: 0, y: 0});
	const [Image5Change2Cord, setImage5Change2Cord] = useState({x: 0, y: 0});
	const [Image5Change2Cord2, setImage5Change2Cord2] = useState({x: 0, y: 0});
	const [Image5Change3Cord, setImage5Change3Cord] = useState({x: 0, y: 0});
	const [Image5Change3Cord2, setImage5Change3Cord2] = useState({x: 0, y: 0});
	const [Image5Change4Cord, setImage5Change4Cord] = useState({x: 0, y: 0});
	const [Image5Change4Cord2, setImage5Change4Cord2] = useState({x: 0, y: 0});
	const [Image5Change5Cord, setImage5Change5Cord] = useState({x: 0, y: 0});
	const [Image5Change5Cord2, setImage5Change5Cord2] = useState({x: 0, y: 0});
	const [Image5Change6Cord, setImage5Change6Cord] = useState({x: 0, y: 0});
	const [Image5Change6Cord2, setImage5Change6Cord2] = useState({x: 0, y: 0});
	const [Image5Change7Cord, setImage5Change7Cord] = useState({x: 0, y: 0});
	const [Image5Change7Cord2, setImage5Change7Cord2] = useState({x: 0, y: 0});
	const [Image5Change8Cord, setImage5Change8Cord] = useState({x: 0, y: 0});
	const [Image5Change8Cord2, setImage5Change8Cord2] = useState({x: 0, y: 0});
	
	//coordinates for Image12
	
	const [Image12Change1Cord, setImage12Change1Cord] = useState({x: 0, y: 0});
	const [Image12Change1Cord2, setImage12Change1Cord2] = useState({x: 0, y: 0});
	const [Image12Change2Cord, setImage12Change2Cord] = useState({x: 0, y: 0});
	const [Image12Change2Cord2, setImage12Change2Cord2] = useState({x: 0, y: 0});
	const [Image12Change3Cord, setImage12Change3Cord] = useState({x: 0, y: 0});
	const [Image12Change3Cord2, setImage12Change3Cord2] = useState({x: 0, y: 0});
	const [Image12Change4Cord, setImage12Change4Cord] = useState({x: 0, y: 0});
	const [Image12Change4Cord2, setImage12Change4Cord2] = useState({x: 0, y: 0});
	const [Image12Change5Cord, setImage12Change5Cord] = useState({x: 0, y: 0});
	const [Image12Change5Cord2, setImage12Change5Cord2] = useState({x: 0, y: 0});
	const [Image12Change6Cord, setImage12Change6Cord] = useState({x: 0, y: 0});
	const [Image12Change6Cord2, setImage12Change6Cord2] = useState({x: 0, y: 0});
	const [Image12Change7Cord, setImage12Change7Cord] = useState({x: 0, y: 0});
	const [Image12Change7Cord2, setImage12Change7Cord2] = useState({x: 0, y: 0});
	const [Image12Change8Cord, setImage12Change8Cord] = useState({x: 0, y: 0});
	const [Image12Change8Cord2, setImage12Change8Cord2] = useState({x: 0, y: 0});
	
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
	
	//coordinates for ImageNS4
	
	const [ImageNS4Change1Cord, setImageNS4Change1Cord] = useState({x: 0, y: 0});
	const [ImageNS4Change1Cord2, setImageNS4Change1Cord2] = useState({x: 0, y: 0});
	const [ImageNS4Change2Cord, setImageNS4Change2Cord] = useState({x: 0, y: 0});
	const [ImageNS4Change2Cord2, setImageNS4Change2Cord2] = useState({x: 0, y: 0});
	const [ImageNS4Change3Cord, setImageNS4Change3Cord] = useState({x: 0, y: 0});
	const [ImageNS4Change3Cord2, setImageNS4Change3Cord2] = useState({x: 0, y: 0});
	const [ImageNS4Change4Cord, setImageNS4Change4Cord] = useState({x: 0, y: 0});
	const [ImageNS4Change4Cord2, setImageNS4Change4Cord2] = useState({x: 0, y: 0});
	const [ImageNS4Change5Cord, setImageNS4Change5Cord] = useState({x: 0, y: 0});
	const [ImageNS4Change5Cord2, setImageNS4Change5Cord2] = useState({x: 0, y: 0});
	const [ImageNS4Change6Cord, setImageNS4Change6Cord] = useState({x: 0, y: 0});
	const [ImageNS4Change6Cord2, setImageNS4Change6Cord2] = useState({x: 0, y: 0});
	const [ImageNS4Change7Cord, setImageNS4Change7Cord] = useState({x: 0, y: 0});
	const [ImageNS4Change7Cord2, setImageNS4Change7Cord2] = useState({x: 0, y: 0});
	const [ImageNS4Change8Cord, setImageNS4Change8Cord] = useState({x: 0, y: 0});
	const [ImageNS4Change8Cord2, setImageNS4Change8Cord2] = useState({x: 0, y: 0});
	
	//coordinates for ImageNS5
	
	const [ImageNS5Change1Cord, setImageNS5Change1Cord] = useState({x: 0, y: 0});
	const [ImageNS5Change1Cord2, setImageNS5Change1Cord2] = useState({x: 0, y: 0});
	const [ImageNS5Change2Cord, setImageNS5Change2Cord] = useState({x: 0, y: 0});
	const [ImageNS5Change2Cord2, setImageNS5Change2Cord2] = useState({x: 0, y: 0});
	const [ImageNS5Change3Cord, setImageNS5Change3Cord] = useState({x: 0, y: 0});
	const [ImageNS5Change3Cord2, setImageNS5Change3Cord2] = useState({x: 0, y: 0});
	const [ImageNS5Change4Cord, setImageNS5Change4Cord] = useState({x: 0, y: 0});
	const [ImageNS5Change4Cord2, setImageNS5Change4Cord2] = useState({x: 0, y: 0});
	const [ImageNS5Change5Cord, setImageNS5Change5Cord] = useState({x: 0, y: 0});
	const [ImageNS5Change5Cord2, setImageNS5Change5Cord2] = useState({x: 0, y: 0});
	const [ImageNS5Change6Cord, setImageNS5Change6Cord] = useState({x: 0, y: 0});
	const [ImageNS5Change6Cord2, setImageNS5Change6Cord2] = useState({x: 0, y: 0});
	const [ImageNS5Change7Cord, setImageNS5Change7Cord] = useState({x: 0, y: 0});
	const [ImageNS5Change7Cord2, setImageNS5Change7Cord2] = useState({x: 0, y: 0});
	const [ImageNS5Change8Cord, setImageNS5Change8Cord] = useState({x: 0, y: 0});
	const [ImageNS5Change8Cord2, setImageNS5Change8Cord2] = useState({x: 0, y: 0});

    // variables to control showing each set of Images
    const[show, setShow] = useState(true);
    const[show1, setShow1] = useState(false);
    const[show2, setShow2] = useState(false);
    const[show3, setShow3] = useState(false);
    const[show4, setShow4] = useState(false);
    const[show5, setShow5] = useState(false);
    const[show12, setShow12] = useState(false);
    const[showNS1, setShowNS1] = useState(false);
    const[showNS2, setShowNS2] = useState(false);
    const[showNS3, setShowNS3] = useState(false);
    const[showNS4, setShowNS4] = useState(false);
    const[showNS5, setShowNS5] = useState(false);
    const[showOver, setShowOver] = useState(false);

    //variables to control showing the 'Next' pages in between Images
    const[showPause, setShowPause] = useState(false);
    const[showPause1, setShowPause1] = useState(false);
    const[showPause2, setShowPause2] = useState(false);
    const[showPause3, setShowPause3] = useState(false);
    const[showPause4, setShowPause4] = useState(false);
    const[showPause5, setShowPause5] = useState(false);
    const[showPause12, setShowPause12] = useState(false);
    const[showPauseNS1, setShowPauseNS1] = useState(false);
    const[showPauseNS2, setShowPauseNS2] = useState(false);
    const[showPauseNS3, setShowPauseNS3] = useState(false);
    const[showPauseNS4, setShowPauseNS4] = useState(false);
    const[showPauseNS5, setShowPauseNS5] = useState(false);
    const[go, setGo] = useState(true);
    const[index, setIndex] = useState(0);

    //variables to store all the detection times in arrays for each Image
    const [times1, setTimes1] = useState([]);
    const [times2, setTimes2] = useState([]);
    const [times3, setTimes3] = useState([]);
    const [times4, setTimes4] = useState([]);
    const [times5, setTimes5] = useState([]);
    const [times12, setTimes12] = useState([]);
    const [timesNS1, setTimesNS1] = useState([]);
    const [timesNS2, setTimesNS2] = useState([]);
    const [timesNS3, setTimesNS3] = useState([]);
    const [timesNS4, setTimesNS4] = useState([]);
    const [timesNS5, setTimesNS5] = useState([]);
    const [times, setTimes] = useState([]);

    const goToNext = num => {
        setGo(true);
        setCounter(60); 
        if (num == 1){
            setShow(false);
            setShowPause(false);
            setShowNS1(true);
        }
        else if (num == 2){
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
            setShowPauseNS1(false);
            setShowNS1(false);
            setShowNS2(true);
        } 
        else if (num == 3){
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
            setShowNS3(true);
        }
        else if (num == 4){
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
            setShowNS4(true);
        }
        else if (num == 5){
            //setShow1(false);
            setImageNS4Change1(false);
                setImageNS4Change2(false);
                setImageNS4Change3(false);
                setImageNS4Change4(false);
                setImageNS4Change5(false);
                setImageNS4Change6(false);
                setImageNS4Change7(false);
                setImageNS4Change8(false);
                setShowImageNS4Change1(false);
            setShowImageNS4Change2(false);
            setShowImageNS4Change3(false);
            setShowImageNS4Change4(false);
            setShowImageNS4Change5(false);
            setShowImageNS4Change6(false);
            setShowImageNS4Change7(false);
            setShowImageNS4Change8(false);
            setShowPauseNS4(false);
            setShowNS4(false);
            setShowNS5(true);
        }
        else if (num == 6){
            //setShow1(false);
            setImageNS5Change1(false);
                setImageNS5Change2(false);
                setImageNS5Change3(false);
                setImageNS5Change4(false);
                setImageNS5Change5(false);
                setImageNS5Change6(false);
                setImageNS5Change7(false);
                setImageNS5Change8(false);
                setShowImageNS5Change1(false);
                setShowImageNS5Change2(false);
                setShowImageNS5Change3(false);
                setShowImageNS5Change4(false);
                setShowImageNS5Change5(false);
                setShowImageNS5Change6(false);
                setShowImageNS5Change7(false);
                setShowImageNS5Change8(false);
            setShowNS5(false);
            setShowPauseNS5(false);
            setShowNS5(false);
            setShow1(true);
        }
        else if (num == 7){
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
            setShow1(false);
            setShowPause1(false);
            setShow1(false);
            setShow2(true);
        }
        else if (num == 8){
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
            setShow2(false);
            setShowPause2(false);
            setShow2(false);
            setShow3(true);
        }
        else if (num == 9){
            //setShow1(false);
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
            setShow3(false);
            setShowPause3(false);
            setShow3(false);
            setShow4(true);
        }
        else if (num == 10){
            //setShow1(false);
            setImage4Change1(false);
                setImage4Change2(false);
                setImage4Change3(false);
                setImage4Change4(false);
                setImage4Change5(false);
                setImage4Change6(false);
                setImage4Change7(false);
                setImage4Change8(false);
                setShowImage4Change1(false);
                setShowImage4Change2(false);
                setShowImage4Change3(false);
                setShowImage4Change4(false);
                setShowImage4Change5(false);
                setShowImage4Change6(false);
                setShowImage4Change7(false);
                setShowImage4Change8(false);
            setShow4(false);
            setShowPause4(false);
            setShow4(false);
            setShow5(true);
        }
        else if (num == 11){
            //setShow1(false);
            setImage5Change1(false);
                setImage5Change2(false);
                setImage5Change3(false);
                setImage5Change4(false);
                setImage5Change5(false);
                setImage5Change6(false);
                setImage5Change7(false);
                setImage5Change8(false);
                setShowImage5Change1(false);
                setShowImage5Change2(false);
                setShowImage5Change3(false);
                setShowImage5Change4(false);
                setShowImage5Change5(false);
                setShowImage5Change6(false);
                setShowImage5Change7(false);
                setShowImage5Change8(false);
            setShow5(false);
            setShowPause5(false);
            setShow5(false);
            setShow12(true);
        }
        else {
            setImage12Change1(false);
                setImage12Change2(false);
                setImage12Change3(false);
                setImage12Change4(false);
                setImage12Change5(false);
                setImage12Change6(false);
                setImage12Change7(false);
                setImage12Change8(false);
                setShowImage12Change1(false);
                setShowImage12Change2(false);
                setShowImage12Change3(false);
                setShowImage12Change4(false);
                setShowImage12Change5(false);
                setShowImage12Change6(false);
                setShowImage12Change7(false);
                setShowImage12Change8(false);
            setShow12(false);
            setShowOver(true);
            setTimes([
                {Participant: participantID, T1_change1: ImageNS1Change1Time,
                    T1_change2: ImageNS1Change2Time,
                    T1_change3: ImageNS1Change3Time,
                    T1_change4: ImageNS1Change4Time,
                    T1_change5: ImageNS1Change5Time,
                    T1_change6: ImageNS1Change6Time,
                    T1_change7: ImageNS1Change7Time,
                    T1_change8: ImageNS1Change8Time},
                    {Participant: participantID, T1_change1: ImageNS2Change1Time,
                        T1_change2: ImageNS2Change2Time,
                        T1_change3: ImageNS2Change3Time,
                        T1_change4: ImageNS2Change4Time,
                        T1_change5: ImageNS2Change5Time,
                        T1_change6: ImageNS2Change6Time,
                        T1_change7: ImageNS2Change7Time,
                        T1_change8: ImageNS2Change8Time},
                        {Participant: participantID, T1_change1: ImageNS3Change1Time,
                            T1_change2: ImageNS3Change2Time,
                            T1_change3: ImageNS3Change3Time,
                            T1_change4: ImageNS3Change4Time,
                            T1_change5: ImageNS3Change5Time,
                            T1_change6: ImageNS3Change6Time,
                            T1_change7: ImageNS3Change7Time,
                            T1_change8: ImageNS3Change8Time},
                            {Participant: participantID, T1_change1: ImageNS4Change1Time,
                                T1_change2: ImageNS4Change2Time,
                                T1_change3: ImageNS4Change3Time,
                                T1_change4: ImageNS4Change4Time,
                                T1_change5: ImageNS4Change5Time,
                                T1_change6: ImageNS4Change6Time,
                                T1_change7: ImageNS4Change7Time,
                                T1_change8: ImageNS4Change8Time},
                                {Participant: participantID, T1_change1: ImageNS5Change1Time,
                                    T1_change2: ImageNS5Change2Time,
                                    T1_change3: ImageNS5Change3Time,
                                    T1_change4: ImageNS5Change4Time,
                                    T1_change5: ImageNS5Change5Time,
                                    T1_change6: ImageNS5Change6Time,
                                    T1_change7: ImageNS5Change7Time,
                                    T1_change8: ImageNS5Change8Time},
            {Participant: participantID, T1_change1: Image1Change1Time,
            T1_change2: Image1Change2Time,
            T1_change3: Image1Change3Time,
            T1_change4: Image1Change4Time,
            T1_change5: Image1Change5Time,
            T1_change6: Image1Change6Time,
            T1_change7: Image1Change7Time,
            T1_change8: Image1Change8Time},
            {Participant: participantID, T1_change1: Image2Change1Time,
                T1_change2: Image2Change2Time,
                T1_change3: Image2Change3Time,
                T1_change4: Image2Change4Time,
                T1_change5: Image2Change5Time,
                T1_change6: Image2Change6Time,
                T1_change7: Image2Change7Time,
                T1_change8: Image2Change8Time},
            {Participant: participantID, T1_change1: Image3Change1Time,
                    T1_change2: Image3Change2Time,
                    T1_change3: Image3Change3Time,
                    T1_change4: Image3Change4Time,
                    T1_change5: Image3Change5Time,
                    T1_change6: Image3Change6Time,
                    T1_change7: Image3Change7Time,
                    T1_change8: Image3Change8Time},
            {Participant: participantID, T1_change1: Image4Change1Time,
                        T1_change2: Image4Change2Time,
                        T1_change3: Image4Change3Time,
                        T1_change4: Image4Change4Time,
                        T1_change5: Image4Change5Time,
                        T1_change6: Image4Change6Time,
                        T1_change7: Image4Change7Time,
                        T1_change8: Image4Change8Time},
                        {Participant: participantID, T1_change1: Image5Change1Time,
                            T1_change2: Image5Change2Time,
                            T1_change3: Image5Change3Time,
                            T1_change4: Image5Change4Time,
                            T1_change5: Image5Change5Time,
                            T1_change6: Image5Change6Time,
                            T1_change7: Image5Change7Time,
                            T1_change8: Image5Change8Time},
                            {Participant: participantID, T1_change1: Image12Change1Time,
                                T1_change2: Image12Change2Time,
                                T1_change3: Image12Change3Time,
                                T1_change4: Image12Change4Time,
                                T1_change5: Image12Change5Time,
                                T1_change6: Image12Change6Time,
                                T1_change7: Image12Change7Time,
                                T1_change8: Image12Change8Time},
                                
        ]);
        }
        setIndex(index + 1);
    }

    useEffect(() => {
        if (counter == 0){
            console.log(index);
            setGo(false);
            setCounter(-1);
            if (index == 6){
                setShow1(false);
                setShowPause1(true);
                setShow1(false);
                //setGo(false);
                //setCounter(0);
                setShowImage1Change1(false);
                setShowImage1Change2(false);
                setShowImage1Change3(false);
                setShowImage1Change4(false);
                setShowImage1Change5(false);
                setShowImage1Change6(false);
                setShowImage1Change7(false);
                setShowImage1Change8(false);
                setTimes1([{Participant: participantID, T1_change1: Image1Change1Time,
                    T1_change2: Image1Change2Time,
                    T1_change3: Image1Change3Time,
                    T1_change4: Image1Change4Time,
                    T1_change5: Image1Change5Time,
                    T1_change6: Image1Change6Time,
                    T1_change7: Image1Change7Time,
                    T1_change8: Image1Change8Time}]);
                
            } else if (index == 7){
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
                setTimes2([{Participant: participantID, T1_change1: Image2Change1Time,
                    T1_change2: Image2Change2Time,
                    T1_change3: Image2Change3Time,
                    T1_change4: Image2Change4Time,
                    T1_change5: Image2Change5Time,
                    T1_change6: Image2Change6Time,
                    T1_change7: Image2Change7Time,
                    T1_change8: Image2Change8Time}]);

                
            } else if (index == 8){
                setShowImage3Change1(false);
            setShowImage3Change2(false);
            setShowImage3Change3(false);
            setShowImage3Change4(false);
            setShowImage3Change5(false);
            setShowImage3Change6(false);
            setShowImage3Change7(false);
            setShowImage3Change8(false);
                setShowPause3(true);
                setShow3(false);
                setGo(false);
                //setCounter(0);
                setTimes3([{Participant: participantID, T1_change1: Image3Change1Time,
                    T1_change2: Image3Change2Time,
                    T1_change3: Image3Change3Time,
                    T1_change4: Image3Change4Time,
                    T1_change5: Image3Change5Time,
                    T1_change6: Image3Change6Time,
                    T1_change7: Image3Change7Time,
                    T1_change8: Image3Change8Time}]);
            } else if (index == 9){
                setShowImage4Change1(false);
            setShowImage4Change2(false);
            setShowImage4Change3(false);
            setShowImage4Change4(false);
            setShowImage4Change5(false);
            setShowImage4Change6(false);
            setShowImage4Change7(false);
            setShowImage4Change8(false);
                setShowPause4(true);
                setShow4(false);
                setGo(false);
                //setCounter(0);
                setTimes4([{Participant: participantID, T1_change1: Image4Change1Time,
                    T1_change2: Image4Change2Time,
                    T1_change3: Image4Change3Time,
                    T1_change4: Image4Change4Time,
                    T1_change5: Image4Change5Time,
                    T1_change6: Image4Change6Time,
                    T1_change7: Image4Change7Time,
                    T1_change8: Image4Change8Time}]);
            } else if (index == 10){
                setShowImage5Change1(false);
            setShowImage5Change2(false);
            setShowImage5Change3(false);
            setShowImage5Change4(false);
            setShowImage5Change5(false);
            setShowImage5Change6(false);
            setShowImage5Change7(false);
            setShowImage5Change8(false);
                setShowPause5(true);
                setShow5(false);
                setGo(false);
                //setCounter(0);
                setTimes5([{Participant: participantID, T1_change1: Image5Change1Time,
                    T1_change2: Image5Change2Time,
                    T1_change3: Image5Change3Time,
                    T1_change4: Image5Change4Time,
                    T1_change5: Image5Change5Time,
                    T1_change6: Image5Change6Time,
                    T1_change7: Image5Change7Time,
                    T1_change8: Image5Change8Time}]);
            }  else if (index == 1){
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
                setTimesNS1([{Participant: participantID, T1_change1: ImageNS1Change1Time,
                    T1_change2: ImageNS1Change2Time,
                    T1_change3: ImageNS1Change3Time,
                    T1_change4: ImageNS1Change4Time,
                    T1_change5: ImageNS1Change5Time,
                    T1_change6: ImageNS1Change6Time,
                    T1_change7: ImageNS1Change7Time,
                    T1_change8: ImageNS1Change8Time}]);
            } else if (index == 2){
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
                setTimesNS2([{Participant: participantID, T1_change1: ImageNS2Change1Time,
                    T1_change2: ImageNS2Change2Time,
                    T1_change3: ImageNS2Change3Time,
                    T1_change4: ImageNS2Change4Time,
                    T1_change5: ImageNS2Change5Time,
                    T1_change6: ImageNS2Change6Time,
                    T1_change7: ImageNS2Change7Time,
                    T1_change8: ImageNS2Change8Time}]);
            } else if (index == 3){
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
                setTimesNS3([{Participant: participantID, T1_change1: ImageNS3Change1Time,
                    T1_change2: ImageNS3Change2Time,
                    T1_change3: ImageNS3Change3Time,
                    T1_change4: ImageNS3Change4Time,
                    T1_change5: ImageNS3Change5Time,
                    T1_change6: ImageNS3Change6Time,
                    T1_change7: ImageNS3Change7Time,
                    T1_change8: ImageNS3Change8Time}]);
            } else if (index == 4){
                setShowImageNS4Change1(false);
            setShowImageNS4Change2(false);
            setShowImageNS4Change3(false);
            setShowImageNS4Change4(false);
            setShowImageNS4Change5(false);
            setShowImageNS4Change6(false);
            setShowImageNS4Change7(false);
            setShowImageNS4Change8(false);
                setShowPauseNS4(true);
                setShowNS4(false);
                setGo(false);
                //setCounter(0);
                setTimesNS4([{Participant: participantID, T1_change1: ImageNS4Change1Time,
                    T1_change2: ImageNS4Change2Time,
                    T1_change3: ImageNS4Change3Time,
                    T1_change4: ImageNS4Change4Time,
                    T1_change5: ImageNS4Change5Time,
                    T1_change6: ImageNS4Change6Time,
                    T1_change7: ImageNS4Change7Time,
                    T1_change8: ImageNS4Change8Time}]);
            } else if (index == 5){
                setShowImageNS5Change1(false);
            setShowImageNS5Change2(false);
            setShowImageNS5Change3(false);
            setShowImageNS5Change4(false);
            setShowImageNS5Change5(false);
            setShowImageNS5Change6(false);
            setShowImageNS5Change7(false);
            setShowImageNS5Change8(false);
            setShowPauseNS5(true);
                setShowNS5(false);
                setGo(false);
                //setCounter(0);
                setTimesNS5([{Participant: participantID, T1_change1: ImageNS5Change1Time,
                    T1_change2: ImageNS5Change2Time,
                    T1_change3: ImageNS5Change3Time,
                    T1_change4: ImageNS5Change4Time,
                    T1_change5: ImageNS5Change5Time,
                    T1_change6: ImageNS5Change6Time,
                    T1_change7: ImageNS5Change7Time,
                    T1_change8: ImageNS5Change8Time}]);
                }
                else{        
                    setShowImage12Change1(false);
                    setShowImage12Change2(false);
                    setShowImage12Change3(false);
                    setShowImage12Change4(false);
                    setShowImage12Change5(false);
                    setShowImage12Change6(false);
                    setShowImage12Change7(false);
                    setShowImage12Change8(false);
                        setShowOver(true);
                        setShow12(false);
                        setGo(false);
                        //setCounter(0);
                        setTimes12([{Participant: participantID, T1_change1: Image12Change1Time,
                            T1_change2: Image12Change2Time,
                            T1_change3: Image12Change3Time,
                            T1_change4: Image12Change4Time,
                            T1_change5: Image12Change5Time,
                            T1_change6: Image12Change6Time,
                            T1_change7: Image12Change7Time,
                            T1_change8: Image12Change8Time}]); 
                      setTimes([
                        {Participant: participantID, T1_change1: ImageNS1Change1Time,
                            T1_change2: ImageNS1Change2Time,
                            T1_change3: ImageNS1Change3Time,
                            T1_change4: ImageNS1Change4Time,
                            T1_change5: ImageNS1Change5Time,
                            T1_change6: ImageNS1Change6Time,
                            T1_change7: ImageNS1Change7Time,
                            T1_change8: ImageNS1Change8Time},
                            {Participant: participantID, T1_change1: ImageNS2Change1Time,
                                T1_change2: ImageNS2Change2Time,
                                T1_change3: ImageNS2Change3Time,
                                T1_change4: ImageNS2Change4Time,
                                T1_change5: ImageNS2Change5Time,
                                T1_change6: ImageNS2Change6Time,
                                T1_change7: ImageNS2Change7Time,
                                T1_change8: ImageNS2Change8Time},
                                {Participant: participantID, T1_change1: ImageNS3Change1Time,
                                    T1_change2: ImageNS3Change2Time,
                                    T1_change3: ImageNS3Change3Time,
                                    T1_change4: ImageNS3Change4Time,
                                    T1_change5: ImageNS3Change5Time,
                                    T1_change6: ImageNS3Change6Time,
                                    T1_change7: ImageNS3Change7Time,
                                    T1_change8: ImageNS3Change8Time},
                                    {Participant: participantID, T1_change1: ImageNS4Change1Time,
                                        T1_change2: ImageNS4Change2Time,
                                        T1_change3: ImageNS4Change3Time,
                                        T1_change4: ImageNS4Change4Time,
                                        T1_change5: ImageNS4Change5Time,
                                        T1_change6: ImageNS4Change6Time,
                                        T1_change7: ImageNS4Change7Time,
                                        T1_change8: ImageNS4Change8Time},
                                        {Participant: participantID, T1_change1: ImageNS5Change1Time,
                                            T1_change2: ImageNS5Change2Time,
                                            T1_change3: ImageNS5Change3Time,
                                            T1_change4: ImageNS5Change4Time,
                                            T1_change5: ImageNS5Change5Time,
                                            T1_change6: ImageNS5Change6Time,
                                            T1_change7: ImageNS5Change7Time,
                                            T1_change8: ImageNS5Change8Time},
                    {Participant: participantID, T1_change1: Image1Change1Time,
                    T1_change2: Image1Change2Time,
                    T1_change3: Image1Change3Time,
                    T1_change4: Image1Change4Time,
                    T1_change5: Image1Change5Time,
                    T1_change6: Image1Change6Time,
                    T1_change7: Image1Change7Time,
                    T1_change8: Image1Change8Time},
                    {Participant: participantID, T1_change1: Image2Change1Time,
                        T1_change2: Image2Change2Time,
                        T1_change3: Image2Change3Time,
                        T1_change4: Image2Change4Time,
                        T1_change5: Image2Change5Time,
                        T1_change6: Image2Change6Time,
                        T1_change7: Image2Change7Time,
                        T1_change8: Image2Change8Time},
                    {Participant: participantID, T1_change1: Image3Change1Time,
                            T1_change2: Image3Change2Time,
                            T1_change3: Image3Change3Time,
                            T1_change4: Image3Change4Time,
                            T1_change5: Image3Change5Time,
                            T1_change6: Image3Change6Time,
                            T1_change7: Image3Change7Time,
                            T1_change8: Image3Change8Time},
                    {Participant: participantID, T1_change1: Image4Change1Time,
                                T1_change2: Image4Change2Time,
                                T1_change3: Image4Change3Time,
                                T1_change4: Image4Change4Time,
                                T1_change5: Image4Change5Time,
                                T1_change6: Image4Change6Time,
                                T1_change7: Image4Change7Time,
                                T1_change8: Image4Change8Time},
                                {Participant: participantID, T1_change1: Image5Change1Time,
                                    T1_change2: Image5Change2Time,
                                    T1_change3: Image5Change3Time,
                                    T1_change4: Image5Change4Time,
                                    T1_change5: Image5Change5Time,
                                    T1_change6: Image5Change6Time,
                                    T1_change7: Image5Change7Time,
                                    T1_change8: Image5Change8Time},
                                    {Participant: participantID, T1_change1: Image12Change1Time,
                                        T1_change2: Image12Change2Time,
                                        T1_change3: Image12Change3Time,
                                        T1_change4: Image12Change4Time,
                                        T1_change5: Image12Change5Time,
                                        T1_change6: Image12Change6Time,
                                        T1_change7: Image12Change7Time,
                                        T1_change8: Image12Change8Time},
                                        
                ]);
            
            } 
        }
    }
    );
    useEffect(() => {
        go && counter > 0 && setTimeout(() => 
            setCounter(counter - 1), 1000);
    }, [counter]);

    const pickAnswer1 = (e) => {
        console.log(e.target);
        console.log(e.target.width);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/640;
        const relativey = e.target.height/360;
        const buffer = 30;
        const change1 = {x:19,y:110};
        const change2 = {x:152,y:162};
        const change3 = {x:208,y:250};
        const change4 = {x:217,y:343};
        const change5 = {x:451,y:350};
        const change6 = {x:441,y:296};
        const change7 = {x:595,y:159};
        const change8 = {x:502,y:90};
        var rect = e.target.getBoundingClientRect();
        //console.log(e.clientX,e.clientY);
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((x >= (change1.x-buffer)*relativex && x <= (change1.x+buffer)*relativex && y >= (change1.y-buffer)*relativey && y <=  (change1.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage1Change1Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage1Change1Cord({x: e.clientX-20,y:e.clientY-20});
                setImage1Change1Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage1Change1Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage1Change1Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage1Change1(true);
        }else if ((x >= (change2.x-buffer)*relativex && x <= (change2.x+buffer)*relativex && y >= (change2.y-buffer)*relativey && y <=  (change2.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage1Change2Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage1Change2Cord({x: e.clientX-20,y:e.clientY-20});
                setImage1Change2Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage1Change2Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage1Change2Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage1Change2(true);
        }else if ((x >= (change3.x-buffer)*relativex && x <= (change3.x+buffer)*relativex && y >= (change3.y-buffer)*relativey && y <=  (change3.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage1Change3Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage1Change3Cord({x: e.clientX-20,y:e.clientY-20});
                setImage1Change3Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage1Change3Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage1Change3Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage1Change3(true);
        }else if ((x >= (change4.x-buffer)*relativex && x <= (change4.x+buffer)*relativex && y >= (change4.y-buffer)*relativey && y <=  (change4.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage1Change4Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage1Change4Cord({x: e.clientX-20,y:e.clientY-20});
                setImage1Change4Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage1Change4Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage1Change4Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage1Change4(true);
        }else if ((x >= (change5.x-buffer)*relativex && x <= (change5.x+buffer)*relativex && y >= (change5.y-buffer)*relativey && y <=  (change5.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage1Change5Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage1Change5Cord({x: e.clientX-20,y:e.clientY-20});
                setImage1Change5Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage1Change5Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage1Change5Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage1Change5(true);
        }else if ((x >= (change6.x-buffer)*relativex && x <= (change6.x+buffer)*relativex && y >= (change6.y-buffer)*relativey && y <=  (change6.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage1Change6Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage1Change6Cord({x: e.clientX-20,y:e.clientY-20});
                setImage1Change6Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage1Change6Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage1Change6Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage1Change6(true);
        }else if ((x >= (change7.x-buffer)*relativex && x <= (change7.x+buffer)*relativex && y >= (change7.y-buffer)*relativey && y <=  (change7.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage1Change7Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage1Change7Cord({x: e.clientX-20,y:e.clientY-20});
                setImage1Change7Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage1Change7Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage1Change7Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage1Change7(true);
        }else if ((x >= (change8.x-buffer)*relativex && x <= (change8.x+buffer)*relativex && y >= (change8.y-buffer)*relativey && y <=  (change8.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage1Change8Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage1Change8Cord({x: e.clientX-20,y:e.clientY-20});
                setImage1Change8Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage1Change8Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage1Change8Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage1Change8(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[0] == 7){
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
            setTimes1([{Participant: participantID, T1_change1: Image1Change1Time,
                T1_change2: Image1Change2Time,
                T1_change3: Image1Change3Time,
                T1_change4: Image1Change4Time,
                T1_change5: Image1Change5Time,
                T1_change6: Image1Change6Time,
                T1_change7: Image1Change7Time,
                T1_change8: Image1Change8Time}]);
        }
    }
        //x: -10, y: -148
    const pickAnswer2 = (e) => {
        setShowImage1Change1(false);
                setShowImage1Change2(false);
                setShowImage1Change3(false);
                setShowImage1Change4(false);
                setShowImage1Change5(false);
                setShowImage1Change6(false);
                setShowImage1Change7(false);
                setShowImage1Change8(false);
            console.log(e.target);
            console.log(e.target.width);
            //let userAnswer = e.target.outerText;
            // if (quiz[number].answer === userAnswer) 
            console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
            const relativex = e.target.width/1500;
            const relativey = e.target.height/1125;
            const buffer = 30;
            const change1 = {x:333,y:352};
            const change2 = {x:173,y:594};
            const change3 = {x:384,y:760};
            const change4 = {x:349,y:933};
            const change5 = {x:891,y:888};
            const change6 = {x:965,y:515};
            const change7 = {x:1111,y:554};
            const change8 = {x:1208,y:626};
            var rect = e.target.getBoundingClientRect();
            //console.log(e.clientX,e.clientY);
            //console.log(rect.left,rect.top);
            var x = e.clientX - rect.left; //x position within the element.
            var y = e.clientY - rect.top;  //y position within the element.
            //console.log(x,y);
            if ((x >= (change1.x-buffer)*relativex && x <= (change1.x+buffer)*relativex && y >= (change1.y-buffer)*relativey && y <=  (change1.y+buffer)*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0,0,0,0]);
                setCorrect(true);
                setImage2Change1Time(timerLength-counter);
                if(rect.left<e.target.width){
                    setImage2Change1Cord({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change1Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
                }
                else{
                    setImage2Change1Cord2({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change1Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
                }
                setShowImage2Change1(true);
            }else if ((x >= (change2.x-buffer)*relativex && x <= (change2.x+buffer)*relativex && y >= (change2.y-buffer)*relativey && y <=  (change2.y+buffer)*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0,0,0,0]);
                setCorrect(true);
                setImage2Change2Time(timerLength-counter);
                if(rect.left<e.target.width){
                    setImage2Change2Cord({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change2Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
                }
                else{
                    setImage2Change2Cord2({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change2Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
                }
                setShowImage2Change2(true);
            }else if ((x >= (change3.x-buffer)*relativex && x <= (change3.x+buffer)*relativex && y >= (change3.y-buffer)*relativey && y <=  (change3.y+buffer)*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0,0,0,0]);
                setCorrect(true);
                setImage2Change3Time(timerLength-counter);
                if(rect.left<e.target.width){
                    setImage2Change3Cord({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change3Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
                }
                else{
                    setImage2Change3Cord2({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change3Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
                }
                setShowImage2Change3(true);
            }else if ((x >= (change4.x-buffer)*relativex && x <= (change4.x+buffer)*relativex && y >= (change4.y-buffer)*relativey && y <=  (change4.y+buffer)*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0,0,0,0]);
                setCorrect(true);
                setImage2Change4Time(timerLength-counter);
                if(rect.left<e.target.width){
                    setImage2Change4Cord({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change4Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
                }
                else{
                    setImage2Change4Cord2({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change4Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
                }
                setShowImage2Change4(true);
            }else if ((x >= (change5.x-buffer)*relativex && x <= (change5.x+buffer)*relativex && y >= (change5.y-buffer)*relativey && y <=  (change5.y+buffer)*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0,0,0,0]);
                setCorrect(true);
                setImage2Change5Time(timerLength-counter);
                if(rect.left<e.target.width){
                    setImage2Change5Cord({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change5Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
                }
                else{
                    setImage2Change5Cord2({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change5Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
                }
                setShowImage2Change5(true);
            }else if ((x >= (change6.x-buffer)*relativex && x <= (change6.x+buffer)*relativex && y >= (change6.y-buffer)*relativey && y <=  (change6.y+buffer)*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0,0,0,0]);
                setCorrect(true);
                setImage2Change6Time(timerLength-counter);
                if(rect.left<e.target.width){
                    setImage2Change6Cord({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change6Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
                }
                else{
                    setImage2Change6Cord2({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change6Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
                }
                setShowImage2Change6(true);
            }else if ((x >= (change7.x-buffer)*relativex && x <= (change7.x+buffer)*relativex && y >= (change7.y-buffer)*relativey && y <=  (change7.y+buffer)*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0,0,0,0]);
                setCorrect(true);
                setImage2Change7Time(timerLength-counter);
                if(rect.left<e.target.width){
                    setImage2Change7Cord({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change7Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
                }
                else{
                    setImage2Change7Cord2({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change7Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
                }
                setShowImage2Change7(true);
            }else if ((x >= (change8.x-buffer)*relativex && x <= (change8.x+buffer)*relativex && y >= (change8.y-buffer)*relativey && y <=  (change8.y+buffer)*relativey) ){
                //console.log("found tie");
                setPts([pts[0], pts[1]+1, 0, 0,0,0,0,0,0,0,0]);
                setCorrect(true);
                setImage2Change8Time(timerLength-counter);
                console.log(rect.left);
                if(rect.left<e.target.width){
                    setImage2Change8Cord({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change8Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
                }
                else{
                    setImage2Change8Cord2({x: e.clientX-20,y:e.clientY-20});
                    setImage2Change8Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
                }
                setShowImage2Change8(true);
            }
             else {
                setWrong(true);
            }
            //console.log("x: " + e.screenX + " y: " + e.screenY);
            //console.log("Image 1 pts: " + pts[0]);
            setTimeout(() => {setCorrect(false)}, 1000);
            setTimeout(() => {setWrong(false)}, 1000);
            console.log(pts);
            if (pts[1] == 7){
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
                setTimes2([{Participant: participantID, T1_change1: Image2Change1Time,
                    T1_change2: Image2Change2Time,
                    T1_change3: Image2Change3Time,
                    T1_change4: Image2Change4Time,
                    T1_change5: Image2Change5Time,
                    T1_change6: Image2Change6Time,
                    T1_change7: Image2Change7Time,
                    T1_change8: Image2Change8Time}]);
            }
    }
    const pickAnswer3 = (e) => {
        setShowImage2Change1(false);
                setShowImage2Change2(false);
                setShowImage2Change3(false);
                setShowImage2Change4(false);
                setShowImage2Change5(false);
                setShowImage2Change6(false);
                setShowImage2Change7(false);
                setShowImage2Change8(false);
        console.log(e.target);
        console.log(e.target.width);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/2235;
        const relativey = e.target.height/1341;
        const buffer = 30;
        const change1 = {x:121,y:1037};
        const change2 = {x:170,y:718};
        const change3 = {x:603,y:1194};
        const change4 = {x:794,y:1257};
        const change5 = {x:1615,y:1326};
        const change6 = {x:1765,y:1283};
        const change7 = {x:1578,y:764};
        const change8 = {x:2204,y:602};
        var rect = e.target.getBoundingClientRect();
        console.log(e.clientX,e.clientY);
        console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((x >= (change1.x-buffer)*relativex && x <= (change1.x+buffer)*relativex && y >= (change1.y-buffer)*relativey && y <=  (change1.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage3Change1Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage3Change1Cord({x: e.clientX-20,y:e.clientY-20});
                setImage3Change1Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage3Change1Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage3Change1Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage3Change1(true);
        }else if ((x >= (change2.x-buffer)*relativex && x <= (change2.x+buffer)*relativex && y >= (change2.y-buffer)*relativey && y <=  (change2.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage3Change2Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage3Change2Cord({x: e.clientX-20,y:e.clientY-20});
                setImage3Change2Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage3Change2Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage3Change2Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage3Change2(true);
        }else if ((x >= (change3.x-buffer)*relativex && x <= (change3.x+buffer)*relativex && y >= (change3.y-buffer)*relativey && y <=  (change3.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage3Change3Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage3Change3Cord({x: e.clientX-20,y:e.clientY-20});
                setImage3Change3Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage3Change3Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage3Change3Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage3Change3(true);
        }else if ((x >= (change4.x-buffer)*relativex && x <= (change4.x+buffer)*relativex && y >= (change4.y-buffer)*relativey && y <=  (change4.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage3Change4Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage3Change4Cord({x: e.clientX-20,y:e.clientY-20});
                setImage3Change4Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage3Change4Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage3Change4Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage3Change4(true);
        }else if ((x >= (change5.x-buffer)*relativex && x <= (change5.x+buffer)*relativex && y >= (change5.y-buffer)*relativey && y <=  (change5.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage3Change5Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage3Change5Cord({x: e.clientX-20,y:e.clientY-20});
                setImage3Change5Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage3Change5Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage3Change5Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage3Change5(true);
        }else if ((x >= (change6.x-buffer)*relativex && x <= (change6.x+buffer)*relativex && y >= (change6.y-buffer)*relativey && y <=  (change6.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage3Change6Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage3Change6Cord({x: e.clientX-20,y:e.clientY-20});
                setImage3Change6Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage3Change6Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage3Change6Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage3Change6(true);
        }else if ((x >= (change7.x-buffer)*relativex && x <= (change7.x+buffer)*relativex && y >= (change7.y-buffer)*relativey && y <=  (change7.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage3Change7Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage3Change7Cord({x: e.clientX-20,y:e.clientY-20});
                setImage3Change7Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage3Change7Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage3Change7Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage3Change7(true);
        }else if ((x >= (change8.x-buffer)*relativex && x <= (change8.x+buffer)*relativex && y >= (change8.y-buffer)*relativey && y <=  (change8.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2]+1, 0,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage3Change8Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage3Change8Cord({x: e.clientX-20,y:e.clientY-20});
                setImage3Change8Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage3Change8Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage3Change8Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage3Change8(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[2] == 7){
            console.log("move to 2");
            setShowImage3Change1(false);
            setShowImage3Change2(false);
            setShowImage3Change3(false);
            setShowImage3Change4(false);
            setShowImage3Change5(false);
            setShowImage3Change6(false);
            setShowImage3Change7(false);
            setShowImage3Change8(false);

            setShowPause3(true);
            setShow3(false);
            setGo(false);
            setCounter(0);
            setTimes3([{Participant: participantID, T1_change1: Image3Change1Time,
                T1_change2: Image3Change2Time,
                T1_change3: Image3Change3Time,
                T1_change4: Image3Change4Time,
                T1_change5: Image3Change5Time,
                T1_change6: Image3Change6Time,
                T1_change7: Image3Change7Time,
                T1_change8: Image3Change8Time}]);
        }
    }
    const pickAnswer4 = (e) => {
        setShowImage3Change1(false);
                setShowImage3Change2(false);
                setShowImage3Change3(false);
                setShowImage3Change4(false);
                setShowImage3Change5(false);
                setShowImage3Change6(false);
                setShowImage3Change7(false);
                setShowImage3Change8(false);
        console.log(e.target);
        console.log(e.target.width);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/1600;
        const relativey = e.target.height/900;
        const buffer = 30;
        const change1 = {x:46,y:450};
        const change2 = {x:205,y:668};
        const change3 = {x:384,y:653};
        const change4 = {x:468,y:548};
        const change5 = {x:1023,y:389};
        const change6 = {x:1124,y:413};
        const change7 = {x:1371,y:676};
        const change8 = {x:1499,y:547};
        var rect = e.target.getBoundingClientRect();
        //console.log(e.clientX,e.clientY);
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((x >= (change1.x-buffer)*relativex && x <= (change1.x+buffer)*relativex && y >= (change1.y-buffer)*relativey && y <=  (change1.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage4Change1Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage4Change1Cord({x: e.clientX-20,y:e.clientY-20});
                setImage4Change1Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage4Change1Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage4Change1Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage4Change1(true);
        }else if ((x >= (change2.x-buffer)*relativex && x <= (change2.x+buffer)*relativex && y >= (change2.y-buffer)*relativey && y <=  (change2.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage4Change2Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage4Change2Cord({x: e.clientX-20,y:e.clientY-20});
                setImage4Change2Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage4Change2Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage4Change2Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage4Change2(true);
        }else if ((x >= (change3.x-buffer)*relativex && x <= (change3.x+buffer)*relativex && y >= (change3.y-buffer)*relativey && y <=  (change3.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage4Change3Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage4Change3Cord({x: e.clientX-20,y:e.clientY-20});
                setImage4Change3Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage4Change3Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage4Change3Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage4Change3(true);
        }else if ((x >= (change4.x-buffer)*relativex && x <= (change4.x+buffer)*relativex && y >= (change4.y-buffer)*relativey && y <=  (change4.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage4Change4Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage4Change4Cord({x: e.clientX-20,y:e.clientY-20});
                setImage4Change4Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage4Change4Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage4Change4Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage4Change4(true);
        }else if ((x >= (change5.x-buffer)*relativex && x <= (change5.x+buffer)*relativex && y >= (change5.y-buffer)*relativey && y <=  (change5.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage4Change5Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage4Change5Cord({x: e.clientX-20,y:e.clientY-20});
                setImage4Change5Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage4Change5Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage4Change5Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage4Change5(true);
        }else if ((x >= (change6.x-buffer)*relativex && x <= (change6.x+buffer)*relativex && y >= (change6.y-buffer)*relativey && y <=  (change6.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage4Change6Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage4Change6Cord({x: e.clientX-20,y:e.clientY-20});
                setImage4Change6Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage4Change6Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage4Change6Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage4Change6(true);
        }else if ((x >= (change7.x-buffer)*relativex && x <= (change7.x+buffer)*relativex && y >= (change7.y-buffer)*relativey && y <=  (change7.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage4Change7Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage4Change7Cord({x: e.clientX-20,y:e.clientY-20});
                setImage4Change7Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage4Change7Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage4Change7Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage4Change7(true);
        }else if ((x >= (change8.x-buffer)*relativex && x <= (change8.x+buffer)*relativex && y >= (change8.y-buffer)*relativey && y <=  (change8.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3]+1,0,0,0,0,0,0,0]);
            setCorrect(true);
            setImage4Change8Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage4Change8Cord({x: e.clientX-20,y:e.clientY-20});
                setImage4Change8Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage4Change8Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage4Change8Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage4Change8(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[3] == 7){
            console.log("move to 2");
            setShowImage4Change1(false);
            setShowImage4Change2(false);
            setShowImage4Change3(false);
            setShowImage4Change4(false);
            setShowImage4Change5(false);
            setShowImage4Change6(false);
            setShowImage4Change7(false);
            setShowImage4Change8(false);

            setShowPause4(true);
            setShow4(false);
            setGo(false);
            setCounter(0);
            setTimes4([{Participant: participantID, T1_change1: Image4Change1Time,
                T1_change2: Image4Change2Time,
                T1_change3: Image4Change3Time,
                T1_change4: Image4Change4Time,
                T1_change5: Image4Change5Time,
                T1_change6: Image4Change6Time,
                T1_change7: Image4Change7Time,
                T1_change8: Image4Change8Time}]);
        }
    }
    const pickAnswer5 = (e) => {
        setShowImage4Change1(false);
                setShowImage4Change2(false);
                setShowImage4Change3(false);
                setShowImage4Change4(false);
                setShowImage4Change5(false);
                setShowImage4Change6(false);
                setShowImage4Change7(false);
                setShowImage4Change8(false);
        console.log(e.target);
        console.log(e.target.width);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/1600;
        const relativey = e.target.height/900;
        const buffer = 30;
        const change1 = {x:422,y:148};
        const change2 = {x:533,y:180};
        const change3 = {x:653,y:593};
        const change4 = {x:1502,y:141};
        const change5 = {x:743,y:786};
        const change6 = {x:1160,y:814};
        const change7 = {x:1229,y:881};
        const change8 = {x:1500,y:720};
        var rect = e.target.getBoundingClientRect();
        //console.log(e.clientX,e.clientY);
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((x >= (change1.x-buffer)*relativex && x <= (change1.x+buffer)*relativex && y >= (change1.y-buffer)*relativey && y <=  (change1.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0,0,0]);
            setCorrect(true);
            setImage5Change1Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage5Change1Cord({x: e.clientX-20,y:e.clientY-20});
                setImage5Change1Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage5Change1Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage5Change1Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage5Change1(true);
        }else if ((x >= (change2.x-buffer)*relativex && x <= (change2.x+buffer)*relativex && y >= (change2.y-buffer)*relativey && y <=  (change2.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0,0,0]);
            setCorrect(true);
            setImage5Change2Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage5Change2Cord({x: e.clientX-20,y:e.clientY-20});
                setImage5Change2Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage5Change2Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage5Change2Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage5Change2(true);
        }else if ((x >= (change3.x-buffer)*relativex && x <= (change3.x+buffer)*relativex && y >= (change3.y-buffer)*relativey && y <=  (change3.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0,0,0]);
            setCorrect(true);
            setImage5Change3Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage5Change3Cord({x: e.clientX-20,y:e.clientY-20});
                setImage5Change3Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage5Change3Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage5Change3Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage5Change3(true);
        }else if ((x >= (change4.x-buffer)*relativex && x <= (change4.x+buffer)*relativex && y >= (change4.y-buffer)*relativey && y <=  (change4.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0,0,0]);
            setCorrect(true);
            setImage5Change4Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage5Change4Cord({x: e.clientX-20,y:e.clientY-20});
                setImage5Change4Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage5Change4Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage5Change4Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage5Change4(true);
        }else if ((x >= (change5.x-buffer)*relativex && x <= (change5.x+buffer)*relativex && y >= (change5.y-buffer)*relativey && y <=  (change5.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0,0,0]);
            setCorrect(true);
            setImage5Change5Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage5Change5Cord({x: e.clientX-20,y:e.clientY-20});
                setImage5Change5Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage5Change5Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage5Change5Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage5Change5(true);
        }else if ((x >= (change6.x-buffer)*relativex && x <= (change6.x+buffer)*relativex && y >= (change6.y-buffer)*relativey && y <=  (change6.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0,0,0]);
            setCorrect(true);
            setImage5Change6Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage5Change6Cord({x: e.clientX-20,y:e.clientY-20});
                setImage5Change6Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage5Change6Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage5Change6Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage5Change6(true);
        }else if ((x >= (change7.x-buffer)*relativex && x <= (change7.x+buffer)*relativex && y >= (change7.y-buffer)*relativey && y <=  (change7.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0,0,0]);
            setCorrect(true);
            setImage5Change7Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage5Change7Cord({x: e.clientX-20,y:e.clientY-20});
                setImage5Change7Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage5Change7Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage5Change7Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage5Change7(true);
        }else if ((x >= (change8.x-buffer)*relativex && x <= (change8.x+buffer)*relativex && y >= (change8.y-buffer)*relativey && y <=  (change8.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4]+1,0,0,0,0,0,0]);
            setCorrect(true);
            setImage5Change8Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage5Change8Cord({x: e.clientX-20,y:e.clientY-20});
                setImage5Change8Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage5Change8Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage5Change8Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage5Change8(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[4] == 7){
            console.log("move to 2");
            setShowImage5Change1(false);
            setShowImage5Change2(false);
            setShowImage5Change3(false);
            setShowImage5Change4(false);
            setShowImage5Change5(false);
            setShowImage5Change6(false);
            setShowImage5Change7(false);
            setShowImage5Change8(false);

            setShowPause5(true);
            setShow5(false);
            setGo(false);
            setCounter(0);
            setTimes5([{Participant: participantID, T1_change1: Image5Change1Time,
                T1_change2: Image5Change2Time,
                T1_change3: Image5Change3Time,
                T1_change4: Image5Change4Time,
                T1_change5: Image5Change5Time,
                T1_change6: Image5Change6Time,
                T1_change7: Image5Change7Time,
                T1_change8: Image5Change8Time}]);
        }
    }
    const pickAnswer12 = (e) => {
        setShowImage5Change1(false);
                setShowImage5Change2(false);
                setShowImage5Change3(false);
                setShowImage5Change4(false);
                setShowImage5Change5(false);
                setShowImage5Change6(false);
                setShowImage5Change7(false);
                setShowImage5Change8(false);
        console.log(e.target);
        console.log(e.target.width);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/1600;
        const relativey = e.target.height/1068;
        const buffer = 30;
        const change1 = {x:296,y:306};
        const change2 = {x:241,y:436};
        const change3 = {x:532,y:543};
        const change4 = {x:602,y:697};
        const change5 = {x:194,y:745};
        const change6 = {x:408,y:981};
        const change7 = {x:1123,y:931};
        const change8 = {x:1390,y:645};
        var rect = e.target.getBoundingClientRect();
        //console.log(e.clientX,e.clientY);
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((x >= (change1.x-buffer)*relativex && x <= (change1.x+buffer)*relativex && y >= (change1.y-buffer)*relativey && y <=  (change1.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0,0,0,0]);
            setCorrect(true);
            setImage12Change1Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage12Change1Cord({x: e.clientX-20,y:e.clientY-20});
                setImage12Change1Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage12Change1Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage12Change1Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage12Change1(true);
        }else if ((x >= (change2.x-buffer)*relativex && x <= (change2.x+buffer)*relativex && y >= (change2.y-buffer)*relativey && y <=  (change2.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0,0,0,0]);
            setCorrect(true);
            setImage12Change2Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage12Change2Cord({x: e.clientX-20,y:e.clientY-20});
                setImage12Change2Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage12Change2Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage12Change2Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage12Change2(true);
        }else if ((x >= (change3.x-buffer)*relativex && x <= (change3.x+buffer)*relativex && y >= (change3.y-buffer)*relativey && y <=  (change3.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0,0,0,0]);
            setCorrect(true);
            setImage12Change3Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage12Change3Cord({x: e.clientX-20,y:e.clientY-20});
                setImage12Change3Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage12Change3Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage12Change3Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage12Change3(true);
        }else if ((x >= (change4.x-buffer)*relativex && x <= (change4.x+buffer)*relativex && y >= (change4.y-buffer)*relativey && y <=  (change4.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0,0,0,0]);
            setCorrect(true);
            setImage12Change4Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage12Change4Cord({x: e.clientX-20,y:e.clientY-20});
                setImage12Change4Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage12Change4Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage12Change4Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage12Change4(true);
        }else if ((x >= (change5.x-buffer)*relativex && x <= (change5.x+buffer)*relativex && y >= (change5.y-buffer)*relativey && y <=  (change5.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0,0,0,0]);
            setCorrect(true);
            setImage12Change5Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage12Change5Cord({x: e.clientX-20,y:e.clientY-20});
                setImage12Change5Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage12Change5Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage12Change5Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage12Change5(true);
        }else if ((x >= (change6.x-buffer)*relativex && x <= (change6.x+buffer)*relativex && y >= (change6.y-buffer)*relativey && y <=  (change6.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0,0,0,0]);
            setCorrect(true);
            setImage12Change6Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage12Change6Cord({x: e.clientX-20,y:e.clientY-20});
                setImage12Change6Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage12Change6Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage12Change6Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage12Change6(true);
        }else if ((x >= (change7.x-buffer)*relativex && x <= (change7.x+buffer)*relativex && y >= (change7.y-buffer)*relativey && y <=  (change7.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0,0,0,0]);
            setCorrect(true);
            setImage12Change7Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage12Change7Cord({x: e.clientX-20,y:e.clientY-20});
                setImage12Change7Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage12Change7Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage12Change7Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage12Change7(true);
        }else if ((x >= (change8.x-buffer)*relativex && x <= (change8.x+buffer)*relativex && y >= (change8.y-buffer)*relativey && y <=  (change8.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5]+1,0,0,0,0,0]);
            setCorrect(true);
            setImage12Change8Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImage12Change8Cord({x: e.clientX-20,y:e.clientY-20});
                setImage12Change8Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImage12Change8Cord2({x: e.clientX-20,y:e.clientY-20});
                setImage12Change8Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImage12Change8(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[5] == 7){
            console.log("move to 2");
            setShowImage12Change1(false);
            setShowImage12Change2(false);
            setShowImage12Change3(false);
            setShowImage12Change4(false);
            setShowImage12Change5(false);
            setShowImage12Change6(false);
            setShowImage12Change7(false);
            setShowImage12Change8(false);

            setShowOver(true);
            setShow12(false);
            setGo(false);
            setCounter(0);
            setTimes12([{Participant: participantID, T1_change1: Image12Change1Time,
                T1_change2: Image12Change2Time,
                T1_change3: Image12Change3Time,
                T1_change4: Image12Change4Time,
                T1_change5: Image12Change5Time,
                T1_change6: Image12Change6Time,
                T1_change7: Image12Change7Time,
                T1_change8: Image12Change8Time}]);
        }
    }
    const pickAnswerNS1 = (e) => {
        setShowImage12Change1(false);
                setShowImage12Change2(false);
                setShowImage12Change3(false);
                setShowImage12Change4(false);
                setShowImage12Change5(false);
                setShowImage12Change6(false);
                setShowImage12Change7(false);
                setShowImage12Change8(false);
        console.log(e.target);
        console.log(e.target.width);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/418;
        const relativey = e.target.height/296;
        const buffer = 30;
        const change1 = {x:27,y:15};
        const change2 = {x:72,y:149};
        const change3 = {x:130,y:98};
        const change4 = {x:173,y:207};
        const change5 = {x:207,y:84};
        const change6 = {x:207,y:58};
        const change7 = {x:355,y:79};
        var rect = e.target.getBoundingClientRect();
        //console.log(e.clientX,e.clientY);
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((x >= (change1.x-buffer)*relativex && x <= (change1.x+buffer)*relativex && y >= (change1.y-buffer)*relativey && y <=  (change1.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6]+1,0,0,0,0]);
            setCorrect(true);
            setImageNS1Change1Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS1Change1Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change1Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS1Change1Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change1Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS1Change1(true);
        }else if ((x >= (change2.x-buffer)*relativex && x <= (change2.x+buffer)*relativex && y >= (change2.y-buffer)*relativey && y <=  (change2.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6]+1,0,0,0,0]);
            setCorrect(true);
            setImageNS1Change2Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS1Change2Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change2Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS1Change2Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change2Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS1Change2(true);
        }else if ((x >= (change3.x-buffer)*relativex && x <= (change3.x+buffer)*relativex && y >= (change3.y-buffer)*relativey && y <=  (change3.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6]+1,0,0,0,0]);
            setCorrect(true);
            setImageNS1Change3Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS1Change3Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change3Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS1Change3Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change3Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS1Change3(true);
        }else if ((x >= (change4.x-buffer)*relativex && x <= (change4.x+buffer)*relativex && y >= (change4.y-buffer)*relativey && y <=  (change4.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6]+1,0,0,0,0]);
            setCorrect(true);
            setImageNS1Change4Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS1Change4Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change4Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS1Change4Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change4Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS1Change4(true);
        }else if ((x >= (change5.x-buffer)*relativex && x <= (change5.x+buffer)*relativex && y >= (change5.y-buffer)*relativey && y <=  (change5.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6]+1,0,0,0,0]);
            setCorrect(true);
            setImageNS1Change5Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS1Change5Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change5Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS1Change5Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change5Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS1Change5(true);
        }else if ((x >= (change6.x-buffer)*relativex && x <= (change6.x+buffer)*relativex && y >= (change6.y-buffer)*relativey && y <=  (change6.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6]+1,0,0,0,0]);
            setCorrect(true);
            setImageNS1Change6Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS1Change6Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change6Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS1Change6Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change6Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS1Change6(true);
        }else if ((x >= (change7.x-buffer)*relativex && x <= (change7.x+buffer)*relativex && y >= (change7.y-buffer)*relativey && y <=  (change7.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6]+1,0,0,0,0]);
            setCorrect(true);
            setImageNS1Change7Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS1Change7Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change7Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS1Change7Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS1Change7Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS1Change7(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[6] == 5){
            console.log("move to 2");
            setShowImageNS1Change1(false);
            setShowImageNS1Change2(false);
            setShowImageNS1Change3(false);
            setShowImageNS1Change4(false);
            setShowImageNS1Change5(false);
            setShowImageNS1Change6(false);
            setShowImageNS1Change7(false);

            setShowPauseNS1(true);
            setShowNS1(false);
            setGo(false);
            setCounter(0);
            setTimesNS1([{Participant: participantID, T1_change1: ImageNS1Change1Time,
                T1_change2: ImageNS1Change2Time,
                T1_change3: ImageNS1Change3Time,
                T1_change4: ImageNS1Change4Time,
                T1_change5: ImageNS1Change5Time,
                T1_change6: ImageNS1Change6Time,
                T1_change7: ImageNS1Change7Time}]);
        }
    }
    const pickAnswerNS2 = (e) => {
        setShowImageNS1Change1(false);
        setShowImageNS1Change2(false);
        setShowImageNS1Change3(false);
        setShowImageNS1Change4(false);
        setShowImageNS1Change5(false);
        setShowImageNS1Change6(false);
        setShowImageNS1Change7(false);
        console.log(e.target);
        console.log(e.target.width);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/1492;
        const relativey = e.target.height/1082;
        const buffer = 30;
        const change1 = {x:439,y:199};
        const change2 = {x:1122,y:213};
        const change3 = {x:879,y:475};
        const change4 = {x:438,y:622};
        const change5 = {x:725,y:666};
        const change6 = {x:490,y:915};
        const change7 = {x:1211,y:905};
        var rect = e.target.getBoundingClientRect();
        //console.log(e.clientX,e.clientY);
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((x >= (change1.x-buffer)*relativex && x <= (change1.x+buffer)*relativex && y >= (change1.y-buffer)*relativey && y <=  (change1.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7]+1,0,0,0]);
            setCorrect(true);
            setImageNS2Change1Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS2Change1Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change1Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS2Change1Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change1Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS2Change1(true);
        }else if ((x >= (change2.x-buffer)*relativex && x <= (change2.x+buffer)*relativex && y >= (change2.y-buffer)*relativey && y <=  (change2.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7]+1,0,0,0]);
            setCorrect(true);
            setImageNS2Change2Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS2Change2Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change2Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS2Change2Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change2Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS2Change2(true);
        }else if ((x >= (change3.x-buffer)*relativex && x <= (change3.x+buffer)*relativex && y >= (change3.y-buffer)*relativey && y <=  (change3.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7]+1,0,0,0]);
            setCorrect(true);
            setImageNS2Change3Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS2Change3Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change3Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS2Change3Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change3Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS2Change3(true);
        }else if ((x >= (change4.x-buffer)*relativex && x <= (change4.x+buffer)*relativex && y >= (change4.y-buffer)*relativey && y <=  (change4.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7]+1,0,0,0]);
            setCorrect(true);
            setImageNS2Change4Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS2Change4Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change4Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS2Change4Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change4Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS2Change4(true);
        }else if ((x >= (change5.x-buffer)*relativex && x <= (change5.x+buffer)*relativex && y >= (change5.y-buffer)*relativey && y <=  (change5.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7]+1,0,0,0]);
            setCorrect(true);
            setImageNS2Change5Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS2Change5Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change5Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS2Change5Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change5Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS2Change5(true);
        }else if ((x >= (change6.x-buffer)*relativex && x <= (change6.x+buffer)*relativex && y >= (change6.y-buffer)*relativey && y <=  (change6.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7]+1,0,0,0]);
            setCorrect(true);
            setImageNS2Change6Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS2Change6Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change6Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS2Change6Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change6Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS2Change6(true);
        }else if ((x >= (change7.x-buffer)*relativex && x <= (change7.x+buffer)*relativex && y >= (change7.y-buffer)*relativey && y <=  (change7.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7]+1,0,0,0]);
            setCorrect(true);
            setImageNS2Change7Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS2Change7Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change7Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS2Change7Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS2Change7Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS2Change7(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[7] == 6){
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
            setTimesNS2([{Participant: participantID, T1_change1: ImageNS2Change1Time,
                T1_change2: ImageNS2Change2Time,
                T1_change3: ImageNS2Change3Time,
                T1_change4: ImageNS2Change4Time,
                T1_change5: ImageNS2Change5Time,
                T1_change6: ImageNS2Change6Time,
                T1_change7: ImageNS2Change7Time}]);
        }
    }
    const pickAnswerNS3 = (e) => {
        setShowImageNS2Change1(false);
        setShowImageNS2Change2(false);
        setShowImageNS2Change3(false);
        setShowImageNS2Change4(false);
        setShowImageNS2Change5(false);
        setShowImageNS2Change6(false);
        setShowImageNS2Change7(false);
        console.log(e.target);
        console.log(e.target.width);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/796;
        const relativey = e.target.height/574;
        const buffer = 30;
        const change1 = {x:140,y:210};
        const change2 = {x:79,y:396};
        const change3 = {x:351,y:167};
        const change4 = {x:371,y:401};
        const change5 = {x:610,y:108};
        const change6 = {x:507,y:379};
        var rect = e.target.getBoundingClientRect();
        //console.log(e.clientX,e.clientY);
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((x >= (change1.x-buffer)*relativex && x <= (change1.x+buffer)*relativex && y >= (change1.y-buffer)*relativey && y <=  (change1.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8]+1,0,0]);
            setCorrect(true);
            setImageNS3Change1Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS3Change1Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS3Change1Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS3Change1Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS3Change1Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS3Change1(true);
        }else if ((x >= (change2.x-buffer)*relativex && x <= (change2.x+buffer)*relativex && y >= (change2.y-buffer)*relativey && y <=  (change2.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8]+1,0,0]);
            setCorrect(true);
            setImageNS3Change2Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS3Change2Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS3Change2Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS3Change2Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS3Change2Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS3Change2(true);
        }else if ((x >= (change3.x-buffer)*relativex && x <= (change3.x+buffer)*relativex && y >= (change3.y-buffer)*relativey && y <=  (change3.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8]+1,0,0]);
            setCorrect(true);
            setImageNS3Change3Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS3Change3Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS3Change3Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS3Change3Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS3Change3Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS3Change3(true);
        }else if ((x >= (change4.x-buffer)*relativex && x <= (change4.x+buffer)*relativex && y >= (change4.y-buffer)*relativey && y <=  (change4.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8]+1,0,0]);
            setCorrect(true);
            setImageNS3Change4Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS3Change4Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS3Change4Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS3Change4Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS3Change4Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS3Change4(true);
        }else if ((x >= (change5.x-buffer)*relativex && x <= (change5.x+buffer)*relativex && y >= (change5.y-buffer)*relativey && y <=  (change5.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8]+1,0,0]);
            setCorrect(true);
            setImageNS3Change5Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS3Change5Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS3Change5Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS3Change5Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS3Change5Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS3Change5(true);
        }else if ((x >= (change6.x-buffer)*relativex && x <= (change6.x+buffer)*relativex && y >= (change6.y-buffer)*relativey && y <=  (change6.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8]+1,0,0]);
            setCorrect(true);
            setImageNS3Change6Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS3Change6Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS3Change6Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS3Change6Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS3Change6Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
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
        if (pts[8] == 5){
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
            setTimesNS2([{Participant: participantID, T1_change1: ImageNS3Change1Time,
                T1_change2: ImageNS3Change2Time,
                T1_change3: ImageNS3Change3Time,
                T1_change4: ImageNS3Change4Time,
                T1_change5: ImageNS3Change5Time,
                T1_change6: ImageNS3Change6Time}]);
        }
    }
    const pickAnswerNS4 = (e) => {
        setShowImageNS3Change1(false);
        setShowImageNS3Change2(false);
        setShowImageNS3Change3(false);
        setShowImageNS3Change4(false);
        setShowImageNS3Change5(false);
        setShowImageNS3Change6(false);
        console.log(e.target);
        console.log(e.target.width);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/790;
        const relativey = e.target.height/556;
        const buffer = 30;
        const change1 = {x:130,y:211};
        const change2 = {x:231,y:238};
        const change3 = {x:440,y:263};
        const change4 = {x:582,y:266};
        const change5 = {x:615,y:330};
        const change6 = {x:721,y:54};
        var rect = e.target.getBoundingClientRect();
        //console.log(e.clientX,e.clientY);
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((x >= (change1.x-buffer)*relativex && x <= (change1.x+buffer)*relativex && y >= (change1.y-buffer)*relativey && y <=  (change1.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9]+1,0]);
            setCorrect(true);
            setImageNS4Change1Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS4Change1Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS4Change1Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS4Change1Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS4Change1Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS4Change1(true);
        }else if ((x >= (change2.x-buffer)*relativex && x <= (change2.x+buffer)*relativex && y >= (change2.y-buffer)*relativey && y <=  (change2.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9]+1,0]);
            setCorrect(true);
            setImageNS4Change2Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS4Change2Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS4Change2Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS4Change2Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS4Change2Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS4Change2(true);
        }else if ((x >= (change3.x-buffer)*relativex && x <= (change3.x+buffer)*relativex && y >= (change3.y-buffer)*relativey && y <=  (change3.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9]+1,0]);
            setCorrect(true);
            setImageNS4Change3Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS4Change3Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS4Change3Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS4Change3Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS4Change3Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS4Change3(true);
        }else if ((x >= (change4.x-buffer)*relativex && x <= (change4.x+buffer)*relativex && y >= (change4.y-buffer)*relativey && y <=  (change4.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9]+1,0]);
            setCorrect(true);
            setImageNS4Change4Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS4Change4Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS4Change4Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS4Change4Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS4Change4Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS4Change4(true);
        }else if ((x >= (change5.x-buffer)*relativex && x <= (change5.x+buffer)*relativex && y >= (change5.y-buffer)*relativey && y <=  (change5.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9]+1,0]); 
            setCorrect(true);
            setImageNS4Change5Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS4Change5Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS4Change5Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS4Change5Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS4Change5Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS4Change5(true);
        }else if ((x >= (change6.x-buffer)*relativex && x <= (change6.x+buffer)*relativex && y >= (change6.y-buffer)*relativey && y <=  (change6.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9]+1,0]);
            setCorrect(true);
            setImageNS4Change6Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS4Change6Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS4Change6Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS4Change6Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS4Change6Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS4Change6(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[9] == 5){
            console.log("move to 2");
            setShowImageNS4Change1(false);
            setShowImageNS4Change2(false);
            setShowImageNS4Change3(false);
            setShowImageNS4Change4(false);
            setShowImageNS4Change5(false);
            setShowImageNS4Change6(false);

            setShowPauseNS4(true);
            setShowNS4(false);
            setGo(false);
            setCounter(0);
            setTimesNS4([{Participant: participantID, T1_change1: ImageNS4Change1Time,
                T1_change2: ImageNS4Change2Time,
                T1_change3: ImageNS4Change3Time,
                T1_change4: ImageNS4Change4Time,
                T1_change5: ImageNS4Change5Time,
                T1_change6: ImageNS4Change6Time}]);
        }
    }

    const pickAnswerNS5 = (e) => {
        
        console.log(e.target);
        console.log(e.target.width);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        const relativex = e.target.width/800;
        const relativey = e.target.height/556;
        const buffer = 30;
        const change1 = {x:112,y:152};
        const change2 = {x:195,y:475};
        const change3 = {x:311,y:108};
        const change4 = {x:703,y:52};
        const change5 = {x:695,y:205};
        const change6 = {x:611,y:309};
        const change7 = {x:560,y:416};
        var rect = e.target.getBoundingClientRect();
        //console.log(e.clientX,e.clientY);
        //console.log(rect.left,rect.top);
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        //console.log(x,y);
        if ((x >= (change1.x-buffer)*relativex && x <= (change1.x+buffer)*relativex && y >= (change1.y-buffer)*relativey && y <=  (change1.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9],pts[10]+1]);
            setCorrect(true);
            setImageNS5Change1Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS5Change1Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change1Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS5Change1Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change1Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS5Change1(true);
        }else if ((x >= (change2.x-buffer)*relativex && x <= (change2.x+buffer)*relativex && y >= (change2.y-buffer)*relativey && y <=  (change2.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9],pts[10]+1]);
            setCorrect(true);
            setImageNS5Change2Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS5Change2Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change2Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS5Change2Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change2Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS5Change2(true);
        }else if ((x >= (change3.x-buffer)*relativex && x <= (change3.x+buffer)*relativex && y >= (change3.y-buffer)*relativey && y <=  (change3.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9],pts[10]+1]);
            setCorrect(true);
            setImageNS5Change3Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS5Change3Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change3Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS5Change3Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change3Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS5Change3(true);
        }else if ((x >= (change4.x-buffer)*relativex && x <= (change4.x+buffer)*relativex && y >= (change4.y-buffer)*relativey && y <=  (change4.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9],pts[10]+1]);
            setCorrect(true);
            setImageNS5Change4Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS5Change4Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change4Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS5Change4Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change4Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS5Change4(true);
        }else if ((x >= (change5.x-buffer)*relativex && x <= (change5.x+buffer)*relativex && y >= (change5.y-buffer)*relativey && y <=  (change5.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9],pts[10]+1]);
            setCorrect(true);
            setImageNS5Change5Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS5Change5Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change5Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS5Change5Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change5Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS5Change5(true);
        }else if ((x >= (change6.x-buffer)*relativex && x <= (change6.x+buffer)*relativex && y >= (change6.y-buffer)*relativey && y <=  (change6.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9],pts[10]+1]);
            setCorrect(true);
            setImageNS5Change6Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS5Change6Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change6Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS5Change6Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change6Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS5Change6(true);
        }else if ((x >= (change7.x-buffer)*relativex && x <= (change7.x+buffer)*relativex && y >= (change7.y-buffer)*relativey && y <=  (change7.y+buffer)*relativey) ){
            //console.log("found tie");
            setPts([pts[0], pts[1], pts[2], pts[3],pts[4],pts[5],pts[6],pts[7],pts[8],pts[9],pts[10]+1]);
            setCorrect(true);
            setImageNS5Change7Time(timerLength-counter);
            if(rect.left<e.target.width){
                setImageNS5Change7Cord({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change7Cord2({x: e.clientX-20+e.target.width, y: e.clientY-20});
            }
            else{
                setImageNS5Change7Cord2({x: e.clientX-20,y:e.clientY-20});
                setImageNS5Change7Cord({x: e.clientX-20-e.target.width, y: e.clientY-20});
            }
            setShowImageNS5Change7(true);
        }
         else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("Image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        console.log(pts);
        if (pts[10] == 6){
            console.log("move to 2");
            setShowImageNS5Change1(false);
            setShowImageNS5Change2(false);
            setShowImageNS5Change3(false);
            setShowImageNS5Change4(false);
            setShowImageNS5Change5(false);
            setShowImageNS5Change6(false);
            setShowImageNS5Change7(false);

            setShowPauseNS5(true);
            setShowNS5(false);
            setGo(false);
            setCounter(0);
            setTimesNS5([{Participant: participantID, T1_change1: ImageNS5Change1Time,
                T1_change2: ImageNS5Change2Time,
                T1_change3: ImageNS5Change3Time,
                T1_change4: ImageNS5Change4Time,
                T1_change5: ImageNS5Change5Time,
                T1_change6: ImageNS5Change6Time,
                T1_change7: ImageNS5Change7Time}]);
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
            {(show1) ? (
                <div>
                    <div> Image 1</div>
                    <h1> Spot the Differences! </h1>
                    <img src={Pic1A} alt="Picture 1A" height="50%" width="50%" onClick={pickAnswer1} />
                    <img src={Pic1B} alt="Picture 1B" height="50%" width="50%" onClick={pickAnswer1}/>
                    <Button onClick={() => goToNext(7)}> Skip</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPause1) ? (
                    <>
                        <Title>Great! You got {pts[0]} out of 8! 🥳</Title>
                        <Button onClick={() => goToNext(7)}> Next</Button>
                        <div> </div>
                        <h1> </h1>
                        {/* <CSVDownload data={times1} target="_blank" /> */}
                        <CSVLink data={times1}>Click to Download Data (Image 1)</CSVLink>
                    </>
            ) : null}

            {/* Image 2 and the following 'Next Page' */}
            {(show2) ? (
                <div>
                    <div> Image 2</div>
                    <h2> Spot the Differences! </h2>
                    <img src={Pic2A} alt="Picture 2A" height="50%" width="50%" onClick={pickAnswer2} />
                    <img src={Pic2B} alt="Picture 2B" height="50%" width="50%" onClick={pickAnswer2}/>
                    <Button onClick={() => goToNext(8)}> Skip</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPause2) ? (
                <>
                    <Title >Great! You got {pts[1]} out of 8! 🥳</Title> 
                    <Button onClick={() => goToNext(8)}> Next </Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={times2}>Click to Download Data (Image 2)</CSVLink>
                </>
            ) : null}

            {/* Image 3 and the following 'Next Page' */}
            {(show3) ? (
                <div>
                    <div> Image 3</div>
                    <h1> Spot the Differences! </h1>
                    <img src={Pic3A} alt="Picture 3A" height="50%" width="50%" onClick={pickAnswer3} />
                    <img src={Pic3B} alt="Picture 3B" height="50%" width="50%" onClick={pickAnswer3}/>
                    <Button onClick={() => goToNext(9)}> Skip</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPause3) ? (
                <>
                    <Title >Great! You got {pts[2]} out of 8! 🥳</Title>
                    <Button onClick={() => goToNext(9)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={times3}>Click to Download Data (Image 3)</CSVLink>
                </>
            ) : null}

            {/* Image 4 and the following 'Next Page' */}
            {(show4) ? (
                <div>
                    <div> Image 4</div>
                    <h1> Spot the Differences! </h1>
                    <img src={Pic4A} alt="Picture 4A" height="50%" width="50%" onClick={pickAnswer4} />
                    <img src={Pic4B} alt="Picture 4B" height="50%" width="50%" onClick={pickAnswer4}/>
                    <Button onClick={() => goToNext(10)}> Skip</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPause4) ? (
                <>
                    <Title >Great! You got {pts[3]} out of 8! 🥳</Title>
                    <Button onClick={() => goToNext(10)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={times4}>Click to Download Data (Image 4)</CSVLink>
                </> 
            ) : null}

            {/* Image 5 and the following 'Next Page' */}
            {(show5) ? (
                <div>
                    <div> Image 5</div>
                    <h1> Spot the Differences! </h1>
                    <img src={Pic5A} alt="Picture 5A" height="50%" width="50%" onClick={pickAnswer5} />
                    <img src={Pic5B} alt="Picture 5B" height="50%" width="50%" onClick={pickAnswer5}/>
                    <Button onClick={() => goToNext(11)}> Skip</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPause5) ? (
                <>
                    <Title >Great! You got {pts[4]} out of 8! 🥳</Title>
                    <Button onClick={() => goToNext(11)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={times5}>Click to Download Data (Image 5)</CSVLink>
                </> 
            ) : null}

            {/* Image 12 and the following 'Next Page' */}
            {(show12) ? (
                <div>
                    <div> Image 12</div>
                    <h2> Spot the Differences! </h2>
                    <img src={Pic12A} alt="Picture 12A" height="50%" width="50%" onClick={pickAnswer12} />
                    <img src={Pic12B} alt="Picture 12B" height="50%" width="50%" onClick={pickAnswer12}/>
                    <Button onClick={() => goToNext(12)}> Finish Game</Button>
                    {/* <div> Timer1: {counter}</div> */}
                     
                </div>
            ) : (showOver) ? (
                <div>
                    
                    <Title >You got {pts[5]} out of 8! 🥳</Title>
                    <CSVLink data={timesNS5}>Click to Download Data (Image 12)</CSVLink>
                    <br/>

                    <CSVLink data={times}>Click to Download All Data (All)</CSVLink>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    
                </ div>
            ) : null} 

            {/* Nonsocial Image 1 and the following 'Next Page' */}
            {(showNS1) ? (
                <div>
                    <div> NS Image 1</div>
                    <h2> Spot the Differences! </h2>
                    <img src={NsPic1A} alt="NS Picture 1A" height="50%" width="50%" onClick={pickAnswerNS1} />
                    <img src={NsPic1B} alt="NS Picture 1B" height="50%" width="50%" onClick={pickAnswerNS1}/>
                    <Button onClick={() => goToNext(2)}> Skip</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPauseNS1) ? (
                <>
                    <Title >Great! You got {pts[6]} out of 6! 🥳</Title>
                    <Button onClick={() => goToNext(2)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={timesNS1}>Click to Download Data (NS Image 1)</CSVLink>
                </> 
            ) : null}

            {/* Nonsocial Image 2 and the following 'Next Page' */}
            {(showNS2) ? (
                <div>
                    <div> NS Image 2</div>
                    <h2> Spot the Differences! </h2>
                    <img src={NsPic2A} alt="NS Picture 2A" height="50%" width="50%" onClick={pickAnswerNS2} />
                    <img src={NsPic2B} alt="NS Picture 2B" height="50%" width="50%" onClick={pickAnswerNS2}/>
                    <Button onClick={() => goToNext(3)}> Skip</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPauseNS2) ? (
                <>
                    <Title >Great! You got {pts[7]} out of 7! 🥳</Title>
                    <Button onClick={() => goToNext(3)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={timesNS2}>Click to Download Data (NS Image 2)</CSVLink>
                </> 
            ) : null}

            {/* Nonsocial Image 3 and the following 'Next Page' */}
            {(showNS3) ? (
                <div>
                    <div> NS Image 3</div>
                    <h2> Spot the Differences! </h2>
                    <img src={NsPic3A} alt="NS Picture 3A" height="50%" width="50%" onClick={pickAnswerNS3} />
                    <img src={NsPic3B} alt="NS Picture 3B" height="50%" width="50%" onClick={pickAnswerNS3}/>
                    <Button onClick={() => goToNext(4)}> Skip</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPauseNS3) ? (
                <>
                    <Title >Great! You got {pts[8]} out of 6! 🥳</Title>
                    <Button onClick={() => goToNext(4)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={timesNS3}>Click to Download Data (NS Image 3)</CSVLink>
                </> 
            ) : null}

            {/* Nonsocial Image 4 and the following 'Next Page' */}
            {(showNS4) ? (
                <div>
                    <div> NS Image 4</div>
                    <h2> Spot the Differences! </h2>
                    <img src={NsPic4A} alt="NS Picture 4A" height="50%" width="50%" onClick={pickAnswerNS4} />
                    <img src={NsPic4B} alt="NS Picture 4B" height="50%" width="50%" onClick={pickAnswerNS4}/>
                    <Button onClick={() => goToNext(5)}> Skip</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPauseNS4) ? (
                <>
                    <Title >Great! You got {pts[9]} out of 6! 🥳</Title>
                    <Button onClick={() => goToNext(5)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={timesNS4}>Click to Download Data (NS Image 4)</CSVLink>
                </> 
            ) : null}

            {/* Nonsocial Image 5 and the following 'Game Over Page' */}
            {(showNS5) ? (
                <div>
                    <div> NS Image 5</div>
                    <h2> Spot the Differences! </h2>
                    <img src={NsPic5A} alt="NS Picture 5A" height="50%" width="50%" onClick={pickAnswerNS5} />
                    <img src={NsPic5B} alt="NS Picture 5B" height="50%" width="50%" onClick={pickAnswerNS5}/>
                    <Button onClick={() => goToNext(6)}> Skip</Button>
                    {/* <div> Timer1: {counter}</div> */}
                </div>
            ) : (showPauseNS5) ? (
                <>
                    <Title >Great! You got {pts[10]} out of 7! 🥳</Title>
                    <Button onClick={() => goToNext(6)}> Next</Button>
                    <div> </div>
                    <h1> </h1>
                    {/* <CSVDownload data={times1} target="_blank" /> */}
                    <CSVLink data={timesNS4}>Click to Download Data (NS Image 5)</CSVLink>
                </> 
            ) : null} 

            {/* Symbols of right or wrong for each click on all Images */} 
            {correct &&
                <div>✅ Correct!</div>
            }
            {wrong &&
                <div> ❌ Keep looking!</div>
            }

            {/* Green circles for the changes in Image 1 */}
            {showImage1Change1 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change1Cord.x}px`,
                    top: `${Image1Change1Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change1Cord2.x}px`,
                    top: `${Image1Change1Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage1Change2 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change2Cord.x}px`,
                    top: `${Image1Change2Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change2Cord2.x}px`,
                    top: `${Image1Change2Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage1Change3 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change3Cord.x}px`,
                    top: `${Image1Change3Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change3Cord2.x}px`,
                    top: `${Image1Change3Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage1Change4 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change4Cord.x}px`,
                    top: `${Image1Change4Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change4Cord2.x}px`,
                    top: `${Image1Change4Cord2.y}px`, }}/>
                </div>
            ) : null}
             {showImage1Change5 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change5Cord.x}px`,
                    top: `${Image1Change5Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change5Cord2.x}px`,
                    top: `${Image1Change5Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage1Change6 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change6Cord.x}px`,
                    top: `${Image1Change6Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change6Cord2.x}px`,
                    top: `${Image1Change6Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage1Change7 ? (
                <div>
                <img alt="Pic1" height="50%" width="50%" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change7Cord.x}px`,
                    top: `${Image1Change7Cord.y}px`, }}/>
                <img height="50%" width="50%" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change7Cord2.x}px`,
                    top: `${Image1Change7Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage1Change8 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change8Cord.x}px`,
                    top: `${Image1Change8Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image1Change8Cord2.x}px`,
                    top: `${Image1Change8Cord2.y}px`, }}/>
                </div>
            ) : null}

            {/* Green circles for the changes in Image2 */}
            {showImage2Change1 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change1Cord.x}px`,
                    top: `${Image2Change1Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change1Cord2.x}px`,
                    top: `${Image2Change1Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage2Change2 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change2Cord.x}px`,
                    top: `${Image2Change2Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change2Cord2.x}px`,
                    top: `${Image2Change2Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage2Change3 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change3Cord.x}px`,
                    top: `${Image2Change3Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change3Cord2.x}px`,
                    top: `${Image2Change3Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage2Change4 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change4Cord.x}px`,
                    top: `${Image2Change4Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change4Cord2.x}px`,
                    top: `${Image2Change4Cord2.y}px`, }}/>
                </div>
            ) : null}
             {showImage2Change5 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change5Cord.x}px`,
                    top: `${Image2Change5Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change5Cord2.x}px`,
                    top: `${Image2Change5Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage2Change6 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change6Cord.x}px`,
                    top: `${Image2Change6Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change6Cord2.x}px`,
                    top: `${Image2Change6Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage2Change7 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change7Cord.x}px`,
                    top: `${Image2Change7Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change7Cord2.x}px`,
                    top: `${Image2Change7Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage2Change8 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change8Cord.x}px`,
                    top: `${Image2Change8Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image2Change8Cord2.x}px`,
                    top: `${Image2Change8Cord2.y}px`, }}/>
                </div>
            ) : null}
            {/* Green circles for the changes in Image3 */}
            {showImage3Change1 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change1Cord.x}px`,
                    top: `${Image3Change1Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change1Cord2.x}px`,
                    top: `${Image3Change1Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage3Change2 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change2Cord.x}px`,
                    top: `${Image3Change2Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change2Cord2.x}px`,
                    top: `${Image3Change2Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage3Change3 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change3Cord.x}px`,
                    top: `${Image3Change3Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change3Cord2.x}px`,
                    top: `${Image3Change3Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage3Change4 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change4Cord.x}px`,
                    top: `${Image3Change4Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change4Cord2.x}px`,
                    top: `${Image3Change4Cord2.y}px`, }}/>
                </div>
            ) : null}
             {showImage3Change5 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change5Cord.x}px`,
                    top: `${Image3Change5Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change5Cord2.x}px`,
                    top: `${Image3Change5Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage3Change6 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change6Cord.x}px`,
                    top: `${Image3Change6Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change6Cord2.x}px`,
                    top: `${Image3Change6Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage3Change7 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change7Cord.x}px`,
                    top: `${Image3Change7Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change7Cord2.x}px`,
                    top: `${Image3Change7Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage3Change8 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change8Cord.x}px`,
                    top: `${Image3Change8Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image3Change8Cord2.x}px`,
                    top: `${Image3Change8Cord2.y}px`, }}/>
                </div>
            ) : null}
            {/* Green circles for the changes in Image4 */}
            {showImage4Change1 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change1Cord.x}px`,
                    top: `${Image4Change1Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change1Cord2.x}px`,
                    top: `${Image4Change1Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage4Change2 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change2Cord.x}px`,
                    top: `${Image4Change2Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change2Cord2.x}px`,
                    top: `${Image4Change2Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage4Change3 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change3Cord.x}px`,
                    top: `${Image4Change3Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change3Cord2.x}px`,
                    top: `${Image4Change3Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage4Change4 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change4Cord.x}px`,
                    top: `${Image4Change4Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change4Cord2.x}px`,
                    top: `${Image4Change4Cord2.y}px`, }}/>
                </div>
            ) : null}
             {showImage4Change5 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change5Cord.x}px`,
                    top: `${Image4Change5Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change5Cord2.x}px`,
                    top: `${Image4Change5Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage4Change6 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change6Cord.x}px`,
                    top: `${Image4Change6Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change6Cord2.x}px`,
                    top: `${Image4Change6Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage4Change7 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change7Cord.x}px`,
                    top: `${Image4Change7Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change7Cord2.x}px`,
                    top: `${Image4Change7Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage4Change8 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change8Cord.x}px`,
                    top: `${Image4Change8Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image4Change8Cord2.x}px`,
                    top: `${Image4Change8Cord2.y}px`, }}/>
                </div>
            ) : null}
            {/* Green circles for the changes in Image5 */}
            {showImage5Change1 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change1Cord.x}px`,
                    top: `${Image5Change1Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change1Cord2.x}px`,
                    top: `${Image5Change1Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage5Change2 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change2Cord.x}px`,
                    top: `${Image5Change2Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change2Cord2.x}px`,
                    top: `${Image5Change2Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage5Change3 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change3Cord.x}px`,
                    top: `${Image5Change3Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change3Cord2.x}px`,
                    top: `${Image5Change3Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage5Change4 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change4Cord.x}px`,
                    top: `${Image5Change4Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change4Cord2.x}px`,
                    top: `${Image5Change4Cord2.y}px`, }}/>
                </div>
            ) : null}
             {showImage5Change5 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change5Cord.x}px`,
                    top: `${Image5Change5Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change5Cord2.x}px`,
                    top: `${Image5Change5Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage5Change6 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change6Cord.x}px`,
                    top: `${Image5Change6Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change6Cord2.x}px`,
                    top: `${Image5Change6Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage5Change7 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change7Cord.x}px`,
                    top: `${Image5Change7Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change7Cord2.x}px`,
                    top: `${Image5Change7Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage5Change8 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change8Cord.x}px`,
                    top: `${Image5Change8Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image5Change8Cord2.x}px`,
                    top: `${Image5Change8Cord2.y}px`, }}/>
                </div>
            ) : null}
            {/* Green circles for the changes in Image12 */}
            {showImage12Change1 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change1Cord.x}px`,
                    top: `${Image12Change1Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change1Cord2.x}px`,
                    top: `${Image12Change1Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage12Change2 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change2Cord.x}px`,
                    top: `${Image12Change2Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change2Cord2.x}px`,
                    top: `${Image12Change2Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage12Change3 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change3Cord.x}px`,
                    top: `${Image12Change3Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change3Cord2.x}px`,
                    top: `${Image12Change3Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage12Change4 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change4Cord.x}px`,
                    top: `${Image12Change4Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change4Cord2.x}px`,
                    top: `${Image12Change4Cord2.y}px`, }}/>
                </div>
            ) : null}
             {showImage12Change5 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change5Cord.x}px`,
                    top: `${Image12Change5Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change5Cord2.x}px`,
                    top: `${Image12Change5Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage12Change6 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change6Cord.x}px`,
                    top: `${Image12Change6Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change6Cord2.x}px`,
                    top: `${Image12Change6Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage12Change7 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change7Cord.x}px`,
                    top: `${Image12Change7Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change7Cord2.x}px`,
                    top: `${Image12Change7Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImage12Change8 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change8Cord.x}px`,
                    top: `${Image12Change8Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${Image12Change8Cord2.x}px`,
                    top: `${Image12Change8Cord2.y}px`, }}/>
                </div>
            ) : null}
            {/* Green circles for the changes in ImageNS1 */}
            {showImageNS1Change1 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change1Cord.x}px`,
                    top: `${ImageNS1Change1Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change1Cord2.x}px`,
                    top: `${ImageNS1Change1Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS1Change2 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change2Cord.x}px`,
                    top: `${ImageNS1Change2Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change2Cord2.x}px`,
                    top: `${ImageNS1Change2Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS1Change3 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change3Cord.x}px`,
                    top: `${ImageNS1Change3Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change3Cord2.x}px`,
                    top: `${ImageNS1Change3Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS1Change4 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change4Cord.x}px`,
                    top: `${ImageNS1Change4Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change4Cord2.x}px`,
                    top: `${ImageNS1Change4Cord2.y}px`, }}/>
                </div>
            ) : null}
             {showImageNS1Change5 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change5Cord.x}px`,
                    top: `${ImageNS1Change5Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change5Cord2.x}px`,
                    top: `${ImageNS1Change5Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS1Change6 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change6Cord.x}px`,
                    top: `${ImageNS1Change6Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change6Cord2.x}px`,
                    top: `${ImageNS1Change6Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS1Change7 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change7Cord.x}px`,
                    top: `${ImageNS1Change7Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS1Change7Cord2.x}px`,
                    top: `${ImageNS1Change7Cord2.y}px`, }}/>
                </div>
            ) : null}
            {/* Green circles for the changes in ImageNS2 */}
            {showImageNS2Change1 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change1Cord.x}px`,
                    top: `${ImageNS2Change1Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change1Cord2.x}px`,
                    top: `${ImageNS2Change1Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS2Change2 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change2Cord.x}px`,
                    top: `${ImageNS2Change2Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change2Cord2.x}px`,
                    top: `${ImageNS2Change2Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS2Change3 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change3Cord.x}px`,
                    top: `${ImageNS2Change3Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change3Cord2.x}px`,
                    top: `${ImageNS2Change3Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS2Change4 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change4Cord.x}px`,
                    top: `${ImageNS2Change4Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change4Cord2.x}px`,
                    top: `${ImageNS2Change4Cord2.y}px`, }}/>
                </div>
            ) : null}
             {showImageNS2Change5  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change5Cord.x}px`,
                    top: `${ImageNS2Change5Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change5Cord2.x}px`,
                    top: `${ImageNS2Change5Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS2Change6 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change6Cord.x}px`,
                    top: `${ImageNS2Change6Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change6Cord2.x}px`,
                    top: `${ImageNS2Change6Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS2Change7 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change7Cord.x}px`,
                    top: `${ImageNS2Change7Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS2Change7Cord2.x}px`,
                    top: `${ImageNS2Change7Cord2.y}px`, }}/>
                </div>
            ) : null}
            {/* Green circles for the changes in ImageNS3 */}
            {showImageNS3Change1 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS3Change1Cord.x}px`,
                    top: `${ImageNS3Change1Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS3Change1Cord2.x}px`,
                    top: `${ImageNS3Change1Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS3Change2 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS3Change2Cord.x}px`,
                    top: `${ImageNS3Change2Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS3Change2Cord2.x}px`,
                    top: `${ImageNS3Change2Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS3Change3 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS3Change3Cord.x}px`,
                    top: `${ImageNS3Change3Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS3Change3Cord2.x}px`,
                    top: `${ImageNS3Change3Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS3Change4 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS3Change4Cord.x}px`,
                    top: `${ImageNS3Change4Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS3Change4Cord2.x}px`,
                    top: `${ImageNS3Change4Cord2.y}px`, }}/>
                </div>
            ) : null}
             {showImageNS3Change5 ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS3Change5Cord.x}px`,
                    top: `${ImageNS3Change5Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS3Change5Cord2.x}px`,
                    top: `${ImageNS3Change5Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS3Change6  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS3Change6Cord.x}px`,
                    top: `${ImageNS3Change6Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS3Change6Cord2.x}px`,
                    top: `${ImageNS3Change6Cord2.y}px`, }}/>
                </div>
            ) : null}
            {/* Green circles for the changes in ImageNS4 */}
            {showImageNS4Change1  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS4Change1Cord.x}px`,
                    top: `${ImageNS4Change1Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS4Change1Cord2.x}px`,
                    top: `${ImageNS4Change1Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS4Change2  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS4Change2Cord.x}px`,
                    top: `${ImageNS4Change2Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS4Change2Cord2.x}px`,
                    top: `${ImageNS4Change2Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS4Change3  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS4Change3Cord.x}px`,
                    top: `${ImageNS4Change3Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS4Change3Cord2.x}px`,
                    top: `${ImageNS4Change3Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS4Change4  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS4Change4Cord.x}px`,
                    top: `${ImageNS4Change4Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS4Change4Cord2.x}px`,
                    top: `${ImageNS4Change4Cord2.y}px`, }}/>
                </div>
            ) : null}
             {showImageNS4Change5  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS4Change5Cord.x}px`,
                    top: `${ImageNS4Change5Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS4Change5Cord2.x}px`,
                    top: `${ImageNS4Change5Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS4Change6  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS4Change6Cord.x}px`,
                    top: `${ImageNS4Change6Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS4Change6Cord2.x}px`,
                    top: `${ImageNS4Change6Cord2.y}px`, }}/>
                </div>
            ) : null}





            {/* Green circles for the changes in ImageNS5 */}
            {showImageNS5Change1  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change1Cord.x}px`,
                    top: `${ImageNS5Change1Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change1Cord2.x}px`,
                    top: `${ImageNS5Change1Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS5Change2  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change2Cord.x}px`,
                    top: `${ImageNS5Change2Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change2Cord2.x}px`,
                    top: `${ImageNS5Change2Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS5Change3  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change3Cord.x}px`,
                    top: `${ImageNS5Change3Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change3Cord2.x}px`,
                    top: `${ImageNS5Change3Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS5Change4  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change4Cord.x}px`,
                    top: `${ImageNS5Change4Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change4Cord2.x}px`,
                    top: `${ImageNS5Change4Cord2.y}px`, }}/>
                </div>
            ) : null}
             {showImageNS5Change5   ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change5Cord.x}px`,
                    top: `${ImageNS5Change5Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change5Cord2.x}px`,
                    top: `${ImageNS5Change5Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS5Change6  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change6Cord.x}px`,
                    top: `${ImageNS5Change6Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change6Cord2.x}px`,
                    top: `${ImageNS5Change6Cord2.y}px`, }}/>
                </div>
            ) : null}
            {showImageNS5Change7  ? (
                <div>
                <img alt="Pic1" height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change7Cord.x}px`,
                    top: `${ImageNS5Change7Cord.y}px`, }}/>
                <img height="50" width="50" src={Circle} style={{
                    position: "absolute",
                    left: `${ImageNS5Change7Cord2.x}px`,
                    top: `${ImageNS5Change7Cord2.y}px`, }}/>
                </div>
            ) : null}




            
            


        </div>
     
    </QuizWindow>
        )
}

export default Quiz

//1 minute per Image, timer more precise with seconds