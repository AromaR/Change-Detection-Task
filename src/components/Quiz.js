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

    const [timerLength, setTimerLength] = useState(60);
    const [pts, setPts] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [correct, setCorrect] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [counter, setCounter] = useState(timerLength);

    //Image 1 times to find each change
    const [tieTime, setTieTime] = useState(-1);
    const [buttonsTime, setButtonsTime] = useState(-1);
    const [buttons2Time, setButtons2Time] = useState(-1);
    const [lampTime, setLampTime] = useState(-1);
    const [BooksTime, setBooksTime] = useState(-1);
    const [rightPlantTime, setRightPlantTime] = useState(-1);
    const [watchTime, setWatchTime] = useState(-1);
    const [bookTime, setBookTime] = useState(-1);

    //Image 2 times to find each change
    const [leftTreeTime, setLeftTreeTime] = useState(-1);
        //const [rightTreeTime, setRightTreeTime] = useState(-1);
    const [leftGarageTime, setLeftGarageTime] = useState(-1);
    const [rightGarageTime, setRightGarageTime] = useState(-1);
        //const [shirtTime, setShirtTime] = useState(-1);
    const [shoeTime, setShoeTime] = useState(-1);
        //const [grassTime, setGrassTime] = useState(-1);
    const [silverWheelTime, setSilverWheelTime] = useState(-1);
    const [greenWheelTime, setGreenWheelTime] = useState(-1);
        //const [sidewalkTime, setSidewalkTime] = useState(-1);
    const [shirtTime, setShirtTime] = useState(-1);


    //variables to control highlighting found changes in Image 1
    const [showTie, setShowTie] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [showButtons2, setShowButtons2] = useState(false);
    const [showLamp, setShowLamp] = useState(false);
    const [showBooks, setShowBooks] = useState(false);
    const [showRightPlant, setShowRightPlant] = useState(false);
    const [showWatch, setShowWatch] = useState(false);
    const [showBook, setShowBook] = useState(false);
    //variables to control highlighting found changes in Image 2
    const [showLeftTree, setShowLeftTree] = useState(false);
        //const [rightTreeTime, setRightTreeTime] = useState(-1);
    const [showLeftGarage, setShowLeftGarage] = useState(false);
    const [showRightGarage, setShowRightGarage] = useState(false);
        //const [shirtTime, setShirtTime] = useState(-1);
    const [showShoe, setShowShoe] = useState(false);
        //const [grassTime, setGrassTime] = useState(-1);
    const [showSilverWheel, setShowSilverWheel] = useState(false);
    const [showGreenWheel, setShowGreenWheel] = useState(false);
        //const [sidewalkTime, setSidewalkTime] = useState(-1);
    const [showShirt, setShowShirt] = useState(false);

    
    //Image 1 coordinates
    const [tieCo, setTieCo] = useState({x: 0, y: 0});
    const [tieCo2, setTieCo2] = useState({x: 0, y: 0});
    const [buttonsCo, setButtonsCo] = useState({x: 0, y: 0});
    const [buttonsCo2, setButtonsCo2] = useState({x: 0, y: 0});
    const [buttons2Co, setButtons2Co] = useState({x: 0, y: 0});
    const [buttons2Co2, setButtons2Co2] = useState({x: 0, y: 0});
    const [lampCo, setLampCo] = useState({x: 0, y: 0});
    const [lampCo2, setLampCo2] = useState({x: 0, y: 0});
    const [BooksCo, setBooksCo] = useState({x: 0, y: 0});
    const [BooksCo2, setBooksCo2] = useState({x: 0, y: 0});
    const [rightPlantCo, setRightPlantCo] = useState({x: 0, y: 0});
    const [rightPlantCo2, setRightPlantCo2] = useState({x: 0, y: 0});
    const [watchCo, setWatchCo] = useState({x: 0, y: 0});
    const [watchCo2, setWatchCo2] = useState({x: 0, y: 0});
    const [bookCo, setBookCo] = useState({x: 0, y: 0});
    const [bookCo2, setBookCo2] = useState({x: 0, y: 0});
    //Image 2 coordinates
    const [leftTreeCo, setLeftTreeCo] = useState({x: 0, y: 0});
    const [leftTreeCo2, setLeftTreeCo2] = useState({x: 0, y: 0});
    const [leftGarageCo, setLeftGarageCo] = useState({x: 0, y: 0});
    const [leftGarageCo2, setLeftGarageCo2] = useState({x: 0, y: 0});
    const [rightGarageCo, setRightGarageCo] = useState({x: 0, y: 0});
    const [rightGarageCo2, setRightGarageCo2] = useState({x: 0, y: 0});
    const [shoeCo, setShoeCo] = useState({x: 0, y: 0});
    const [shoeCo2, setShoeCo2] = useState({x: 0, y: 0});
    const [silverWheelCo, setSilverWheelCo] = useState({x: 0, y: 0});
    const [silverWheelCo2, setSilverWheelCo2] = useState({x: 0, y: 0});
    const [greenWheelCo, setGreenWheelCo] = useState({x: 0, y: 0});
    const [greenWheelCo2, setGreenWheelCo2] = useState({x: 0, y: 0});
    const [shirtCo, setShirtCo] = useState({x: 0, y: 0});
    const [shirtCo2, setShirtCo2] = useState({x: 0, y: 0});

    // variables to control showing each set of images
    const[show, setShow] = useState(true);
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

    //variables to control showing the 'Next' pages in between images
    const[showPause, setShowPause] = useState(false);
    const[showPause2, setShowPause2] = useState(false);
    const[showPause3, setShowPause3] = useState(false);
    const[showPause4, setShowPause4] = useState(false);
    const[showPause5, setShowPause5] = useState(false);
    const[showPause12, setShowPause12] = useState(false);
    const[showPauseNS1, setShowPauseNS1] = useState(false);
    const[showPauseNS2, setShowPauseNS2] = useState(false);
    const[showPauseNS3, setShowPauseNS3] = useState(false);
    const[showPauseNS4, setShowPauseNS4] = useState(false);
    const[go, setGo] = useState(true);
    const[index, setIndex] = useState(1);

    //variables to store all the detection times in arrays for each image
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

    const goToNext = num => {
        setGo(true);
        setCounter(60); 
        if (num == 2){
            //setShow(false);
            setShowPause(false);
            setShow2(true);
        } else if (num == 3){
            setShowPause2(false);
            setShow3(true);
        } else if (num == 4){
            setShowPause3(false);
            setShow4(true);
        } else if (num == 5){
            setShowPause4(false);
            setShow5(true);
        }
        else if (num == 6){
            setShowPause5(false);
            setShow12(true);
        }
        else if (num == 7){
            setShowPause12(false);
            setShowNS1(true);
        }
        else if (num == 8){
            setShowPauseNS1(false);
            setShowNS2(true);
        }
        else if (num == 9){
            setShowPauseNS2(false);
            setShowNS3(true);
        }
        else if (num == 10){
            setShowPauseNS3(false);
            setShowNS4(true);
        } else if (num == 11){
            setShowPauseNS4(false);
            setShowNS5(true);
        }
        else {
            setShowNS5(false);
            setShowOver(true);
        }
        setIndex(index + 1);
    }

    useEffect(() => {
        if (counter == 0){
            //console.log(index);
            setGo(false);
            setCounter(-1);
            if (index == 1){
                setShow(false);
                setShowPause(true);
                //setShow(false);
                //setGo(false);
                //setCounter(0);
                setShowBook(false);
                setShowButtons(false);
                setShowButtons2(false)
                setShowRightPlant(false);
                setShowTie(false);
                setShowBooks(false);
                setShowWatch(false);
                setShowLamp(false);
                setTimes1([{Participant: 1, T1_tie: tieTime, T1_buttons: buttonsTime, T1_buttons2: buttons2Time, T1_books: BooksTime, T1_rightPlant: rightPlantTime, T1_watch: watchTime, T1_book: bookTime, T1_lamp: lampTime}]);
                
            } else if (index == 2){
                setShowPause2(true);
                setShow2(false);
                setGo(false);
                //setCounter(0);

                setShowLeftTree(false);
                setShowLeftGarage(false);
                setShowRightGarage(false)
                setShowShoe(false);
                setShowSilverWheel(false);
                setShowGreenWheel(false);
                setShowShirt(false);
                setTimes2([{Participant: 1, T2_leftTree: leftTreeTime, T2_leftGarage: leftGarageTime, T2_rightGarage: rightGarageTime, T2_shoe: shoeTime, T2_silverWheel: silverWheelTime, T2_greenWheel: greenWheelTime, T2_shirt: shirtTime}]);

            } else if (index == 3){
                setShowPause3(true);
                setShow3(false);
                setGo(false);
                //setCounter(0);
            } else if (index == 4){
                setShowPause4(true);
                setShow4(false);
                setGo(false);
                //setCounter(0);
            } else if (index == 5){
                setShowPause5(true);
                setShow5(false);
                setGo(false);
                //setCounter(0);
            } else if (index == 6){
                setShowPause12(true);
                setShow12(false);
                setGo(false);
                //setCounter(0);
            } else if (index == 7){
                setShowPauseNS1(true);
                setShowNS1(false);
                setGo(false);
                //setCounter(0);
            } else if (index == 8){
                setShowPauseNS2(true);
                setShowNS2(false);
                setGo(false);
                //setCounter(0);
            } else if (index == 9){
                setShowPauseNS3(true);
                setShowNS3(false);
                setGo(false);
                //setCounter(0);
            } else if (index == 10){
                setShowPauseNS4(true);
                setShowNS4(false);
                setGo(false);
                //setCounter(0);
            } else {
                setShowOver(true);
                setShowNS5(false);
                setGo(false);
                //setCounter(0);
            } 
        }
    }
    );
    useEffect(() => {
        go && counter > 0 && setTimeout(() => 
            setCounter(counter - 1), 1000);
    }, [counter]);

    const pickAnswer1 = (e) => {
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("X coordinate: " + e.screenX + " Y coordinate" + e.screenY);
        //console.log("x: " + e.screenX + ", y: " + e.screenY);
        if ((e.screenX >= 222 && e.screenX <= 251 && e.screenY >= 619 && e.screenY <= 703) || (e.screenX >= 938 && e.screenX <= 967 && e.screenY >= 619 && e.screenY <= 703)){
            //console.log("found tie");
            setPts([pts[0] + 1, 0, 0, 0]);
            setCorrect(true);
            setTieTime(timerLength-counter);
            setTieCo({x: 215, y: 500});
            setTieCo2({x: 936, y: 500});
            setShowTie(true);
        }else if ((e.screenX >= 215 && e.screenX <= 269 && e.screenY >= 754 && e.screenY <= 780) || (e.screenX >= 931 && e.screenX <= 986 && e.screenY >= 754 && e.screenY <= 780)){
            //console.log("found buttons");
            setPts([pts[0] + 1, 0, 0, 0]);
            setCorrect(true);
            setButtonsTime(timerLength-counter);
            setButtonsCo({x: 217, y: 610});
            setButtonsCo2({x: 943, y: 610});
            setShowButtons(true);
        } else if ((e.screenX >= 488 && e.screenX <= 533 && e.screenY >= 756 && e.screenY <= 780) || (e.screenX >= 1204 && e.screenX <= 1255 && e.screenY >= 756 && e.screenY <= 780)){
            //console.log("found second buttons");
            setPts([pts[0] + 1, 0, 0, 0]);
            setCorrect(true);
            setButtons2Time(timerLength-counter);
            setButtons2Co({x: 486, y: 610});
            setButtons2Co2({x: 1202, y: 610});
            setShowButtons2(true);
        } else if ((e.screenX >= 630 && e.screenX <= 690 && e.screenY >= 560 && e.screenY <= 580) || (e.screenX >= 1355 && e.screenX <= 1400 && e.screenY >= 560 && e.screenY <= 580)){
            //console.log("found stack of books");
            setPts([pts[0] + 1, 0, 0, 0]);
            setCorrect(true);
            setBooksTime(timerLength-counter);
            setBooksCo({x: 630, y: 410});
            setBooksCo2({x: 1345, y: 410});
            setShowBooks(true);
        } else if ((e.screenX >= 538 && e.screenX <= 592 && e.screenY >= 457 && e.screenY <= 537) || (e.screenX >= 1256 && e.screenX <= 1308 && e.screenY >= 457 && e.screenY <= 537)){
            //console.log("found right plant");
            setPts([pts[0] + 1, 0, 0, 0]);
            setCorrect(true);
            setRightPlantTime(timerLength-counter);
            setRightPlantCo({x: 540, y: 330});
            setRightPlantCo2({x: 1255, y: 330});
            setShowRightPlant(true);
        } else if ((e.screenX >= 480 && e.screenX <= 513 && e.screenY >= 694 && e.screenY <= 730) || (e.screenX >= 1196 && e.screenX <= 1229 && e.screenY >= 694 && e.screenY <= 730)){
            //console.log("found watch"); 716
            setPts([pts[0] + 1, 0, 0, 0]);
            setCorrect(true);
            setWatchTime(timerLength-counter);
            setWatchCo({x: 470, y: 550});
            setWatchCo2({x: 1190, y: 550});
            setShowWatch(true);
        } else if ((e.screenX >= 158 && e.screenX <= 201 && e.screenY >= 539 && e.screenY <= 572) || (e.screenX >= 874 && e.screenX <= 921 && e.screenY >= 539 && e.screenY <= 572)){
            //console.log("found book");
            setPts([pts[0] + 1, 0, 0, 0]);
            setCorrect(true);
            setBookTime(timerLength-counter);
            setBookCo({x: 155, y: 400});
            setBookCo2({x: 875, y: 400});
            setShowBook(true);
        } else if ((e.screenX >= 0 && e.screenX <= 41 && e.screenY >= 490 && e.screenY <= 522) || (e.screenX >= 735 && e.screenX <= 768 && e.screenY >= 490 && e.screenY <= 522)){
            //console.log("found lamp");
            setPts([pts[0] + 1, 0, 0, 0]);
            setCorrect(true);
            setLampTime(timerLength-counter);
            setLampCo({x: -10, y: 345});
            setLampCo2({x: 716, y: 345});
            setShowLamp(true);
        } else {
            setWrong(true);
        }
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //console.log("image 1 pts: " + pts[0]);
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        if (pts[0] == 7){
            //console.log("move to 2");
            setShowBook(false);
            setShowButtons(false);
            setShowButtons2(false)
            setShowRightPlant(false);
            setShowTie(false);
            setShowBooks(false);
            setShowWatch(false);
            setShowLamp(false);

            setShowPause(true);
            setShow(false);
            setGo(false);
            setCounter(0);

            setTimes1([{Participant: 1, T1_tie: tieTime, T1_buttons: buttonsTime, T1_buttons2: buttons2Time, T1_books: BooksTime, T1_rightPlant: rightPlantTime, T1_watch: watchTime, T1_book: bookTime, T1_lamp: lampTime}]);
        }
    }
    const pickAnswer2 = (e) => {
        console.log("x: " + e.screenX + ", y: " + e.screenY);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //setPts([pts[0], pts[1] + 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        //console.log("image 2 pts: " + pts[1]); 649
        if ((e.screenX >= 197 && e.screenX <= 230 && e.screenY >= 448 && e.screenY <= 490) || (e.screenX >= 843 && e.screenX <= 881 && e.screenY >= 448 && e.screenY <= 490)){
            setPts([pts[0], pts[1] + 1, 0]);
            setCorrect(true);
            setLeftTreeTime(timerLength-counter);
            setLeftTreeCo({x: 190, y: 310}); 
            setLeftTreeCo2({x: 840, y: 310});
            setShowLeftTree(true);
        } else if ((e.screenX >= 129 && e.screenX <= 162 && e.screenY >= 550 && e.screenY <= 600) || (e.screenX >= 778 && e.screenX <= 815 && e.screenY >= 550 && e.screenY <= 600)){
            setPts([pts[0], pts[1] + 1, 0]);
            setCorrect(true);
            setLeftGarageTime(timerLength-counter);
            setLeftGarageCo({x: 122, y: 412});
            setLeftGarageCo2({x: 770, y: 412});
            setShowLeftGarage(true);
        } else if ((e.screenX >= 580 && e.screenX <= 605 && e.screenY >= 570 && e.screenY <= 610) || (e.screenX >= 1230 && e.screenX <= 1255 && e.screenY >= 570 && e.screenY <= 610)){
            setPts([pts[0], pts[1] + 1, 0]);
            setCorrect(true);
            setRightGarageTime(timerLength-counter);
            setRightGarageCo({x: 570, y: 423});
            setRightGarageCo2({x: 1215, y: 423});
            setShowRightGarage(true);
        } else if ((e.screenX >= 195 && e.screenX <= 243 && e.screenY >= 696 && e.screenY <= 739) || (e.screenX >= 840 && e.screenX <= 882 && e.screenY >= 696 && e.screenY <= 739)){
            setPts([pts[0], pts[1] + 1, 0, 0, 0]);
            setCorrect(true);
            setShoeTime(timerLength-counter);
            setShoeCo({x: 195, y: 556});
            setShoeCo2({x: 843, y: 556});
            setShowShoe(true);
        } else if ((e.screenX >= 222 && e.screenX <= 252 && e.screenY >= 632 && e.screenY <= 661) || (e.screenX >= 862 && e.screenX <= 903 && e.screenY >= 632 && e.screenY <= 661)){
            setPts([pts[0], pts[1] + 1, 0, 0, 0]);
            setCorrect(true);
            setSilverWheelTime(timerLength-counter);
            setSilverWheelCo({x: 215, y: 480});
            setSilverWheelCo2({x: 865, y: 480});
            setShowSilverWheel(true);
        } else if ((e.screenX >= 435 && e.screenX <= 473 && e.screenY >= 674 && e.screenY <= 729) || (e.screenX >= 1075 && e.screenX <= 1115 && e.screenY >= 674 && e.screenY <= 729)){
          setPts([pts[0], pts[1] + 1, 0, 0, 0, 0]);
            setCorrect(true);
            setGreenWheelTime(timerLength-counter);
            setGreenWheelCo({x: 433, y: 540});
            setGreenWheelCo2({x: 1078, y: 540});
            setShowGreenWheel(true);
        } else if ((e.screenX >= 476 && e.screenX <= 501 && e.screenY >= 534 && e.screenY <= 549) || (e.screenX >= 1124 && e.screenX <= 1149 && e.screenY >= 534 && e.screenY <= 549)){
            setPts([pts[0], pts[1] + 1, 0, 0, 0, 0]);
            setCorrect(true);
            setShirtTime(timerLength-counter);
            setShirtCo({x: 465, y: 380});
            setShirtCo2({x: 1113, y: 380});
            setShowShirt(true);
          }else {
            setWrong(true);
        }
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        if (pts[1] == 6){ //8 if change pic is correct
            setShowLeftTree(false);
            setShowLeftGarage(false);
            setShowRightGarage(false)
            setShowShoe(false);
            setShowSilverWheel(false);
            setShowGreenWheel(false);
            setShowShirt(false);

            setShowPause2(true);
            setShow2(false);
            setGo(false);
            setCounter(0);

            setTimes2([{Participant: 1, T2_leftTree: leftTreeTime, T2_leftGarage: leftGarageTime, T2_rightGarage: rightGarageTime, T2_shoe: shoeTime, T2_silverWheel: silverWheelTime, T2_greenWheel: greenWheelTime, T2_shirt: shirtTime}]);
        }
    }
    const pickAnswer3 = (e) => {
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        setPts([pts[0], pts[1], pts[2] + 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        //console.log("image 3 pts: " + pts[2]);
        if (pts[2] == 7){
            // setShowBook(false);
            // setShowButtons(false);
            // setShowButtons2(false)
            // setShowRightPlant(false);
            // setShowTie(false);
            // setShowBooks(false);
            // setShowWatch(false);
            // setShowLamp(false);
            //console.log("move to 4");

            setShowPause3(true);
            setShow3(false);
            setGo(false);
            setCounter(0);
        }
    }
    const pickAnswer4 = (e) => {
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        setPts([pts[0], pts[1], pts[2], pts[3] + 1, 0, 0, 0, 0, 0, 0, 0]);
        //console.log("image 4 pts: " + pts[3]);
        if (pts[3] == 7){
            setShowPause4(true);
            setShow4(false);
            setGo(false);
            setCounter(0);
        }
    }
    const pickAnswer5 = (e) => {
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        setPts([pts[0], pts[1], pts[2], pts[3], pts[4] + 1, 0, 0, 0, 0, 0, 0]);
        //console.log("image 4 pts: " + pts[3]);
        if (pts[4] == 7){
            setShowPause5(true);
            setShow5(false);
            setGo(false);
            setCounter(0);
        }
    }
    const pickAnswer12 = (e) => {
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5] + 1, 0, 0, 0, 0, 0]);
        //console.log("image 4 pts: " + pts[3]);
        if (pts[5] == 7){
            setShowPause12(true);
            setShow12(false);
            setGo(false);
            setCounter(0);
        }
    }
    const pickAnswerNS1 = (e) => {
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5], pts[6] + 1, 0, 0, 0, 0]);
        //console.log("image 4 pts: " + pts[3]);
        if (pts[6] == 5){
            setShowPauseNS1(true);
            setShowNS1(false);
            setGo(false);
            setCounter(0);
        }
    }
    const pickAnswerNS2 = (e) => {
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5], pts[6], pts[7] + 1, 0, 0, 0]);
        //console.log("image 4 pts: " + pts[3]);
        if (pts[7] == 6){
            setShowPauseNS2(true);
            setShowNS2(false);
            setGo(false);
            setCounter(0);
        }
    }
    const pickAnswerNS3 = (e) => {
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5], pts[6], pts[7], pts[8] + 1, 0, 0]);
        //console.log("image 4 pts: " + pts[3]);
        if (pts[8] == 7){
            setShowPauseNS3(true);
            setShowNS3(false);
            setGo(false);
            setCounter(0);
        }
    }
    const pickAnswerNS4 = (e) => {
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5], pts[6], pts[7], pts[8], pts[9] + 1, 0]);
        //console.log("image 4 pts: " + pts[3]);
        if (pts[9] == 5){
            setShowPauseNS4(true);
            setShowNS4(false);
            setGo(false);
            setCounter(0);
        }
    }
    const pickAnswerNS5 = (e) => {
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5], pts[6], pts[7], pts[8], pts[9], pts[10] + 1]);
        //console.log("image 4 pts: " + pts[3]);
        if (pts[10] == 6){
            setShowOver(true);
            setShowNS5(false);
            setGo(false);
            setCounter(0);
        }
    }
    //help

    return (
         <QuizWindow>
            <div className='quiz' align="center">

                {/* Image 1 and the following 'Next Page' */}
                {(show) ? (
                    <div>
                        <div> Image 1</div>
                        <h1> Spot the Differences! </h1>
                        <img src={Pic1A} alt="Picture 1A" height="50%" width="50%" onClick={pickAnswer1} />
                        <img src={Pic1B} alt="Picture 1B" height="50%" width="50%" onClick={pickAnswer1}/>
                        {/* <div> Timer1: {counter}</div> */}
                    </div>
                ) : (showPause) ? (
                        <>
                            <Title>Great! You got {pts[0]} out of 8! 🥳</Title>
                            <Button onClick={() => goToNext(2)}> Next</Button>
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
                        <img src={Pic2A} alt="Picture 2A" height="20%" width="45%" onClick={pickAnswer2} />
                        <img src={Pic2B} alt="Picture 2B" height="20%" width="45%" onClick={pickAnswer2}/>
                        {/* <div> Timer1: {counter}</div> */}
                    </div>
                ) : (showPause2) ? (
                    <>
                        <Title >Great! You got {pts[1]} out of 7! 🥳</Title> 
                        <Button onClick={() => goToNext(3)}> Next </Button>
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
                        <img src={Pic3A} alt="Picture 3A" height="20%" width="50%" onClick={pickAnswer3} />
                        <img src={Pic3B} alt="Picture 3B" height="20%" width="50%" onClick={pickAnswer3}/>
                        {/* <div> Timer1: {counter}</div> */}
                    </div>
                ) : (showPause3) ? (
                    <>
                        <Title >Great! You got {pts[2]} out of 8! 🥳</Title>
                        <Button onClick={() => goToNext(4)}> Next</Button>
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
                        {/* <div> Timer1: {counter}</div> */}
                    </div>
                ) : (showPause4) ? (
                    <>
                        <Title >Great! You got {pts[3]} out of 8! 🥳</Title>
                        <Button onClick={() => goToNext(5)}> Next</Button>
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
                        {/* <div> Timer1: {counter}</div> */}
                    </div>
                ) : (showPause5) ? (
                    <>
                        <Title >Great! You got {pts[4]} out of 8! 🥳</Title>
                        <Button onClick={() => goToNext(6)}> Next</Button>
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
                        {/* <div> Timer1: {counter}</div> */}
                    </div>
                ) : (showPause12) ? (
                    <>
                        <Title >Great! You got {pts[5]} out of 8! 🥳</Title>
                        <Button onClick={() => goToNext(7)}> Next</Button>
                        <div> </div>
                        <h1> </h1>
                        {/* <CSVDownload data={times1} target="_blank" /> */}
                        <CSVLink data={times12}>Click to Download Data (Image 12)</CSVLink>
                    </> 
                ) : null}

                {/* Nonsocial Image 1 and the following 'Next Page' */}
                {(showNS1) ? (
                    <div>
                        <div> NS Image 5</div>
                        <h2> Spot the Differences! </h2>
                        <img src={NsPic1A} alt="NS Picture 1A" height="50%" width="50%" onClick={pickAnswerNS1} />
                        <img src={NsPic1B} alt="NS Picture 1B" height="50%" width="50%" onClick={pickAnswerNS1}/>
                        {/* <div> Timer1: {counter}</div> */}
                    </div>
                ) : (showPauseNS1) ? (
                    <>
                        <Title >Great! You got {pts[6]} out of 6! 🥳</Title>
                        <Button onClick={() => goToNext(8)}> Next</Button>
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
                        {/* <div> Timer1: {counter}</div> */}
                    </div>
                ) : (showPauseNS2) ? (
                    <>
                        <Title >Great! You got {pts[7]} out of 7! 🥳</Title>
                        <Button onClick={() => goToNext(9)}> Next</Button>
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
                        {/* <div> Timer1: {counter}</div> */}
                    </div>
                ) : (showPauseNS3) ? (
                    <>
                        <Title >Great! You got {pts[8]} out of 8! 🥳</Title>
                        <Button onClick={() => goToNext(10)}> Next</Button>
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
                        {/* <div> Timer1: {counter}</div> */}
                    </div>
                ) : (showPauseNS4) ? (
                    <>
                        <Title >Great! You got {pts[9]} out of 6! 🥳</Title>
                        <Button onClick={() => goToNext(11)}> Next</Button>
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
                        {/* <div> Timer1: {counter}</div> */}
                    </div>
                ) : (showOver) ? (
                    <div>
                        
                        <Title >You got {pts[10]} out of 7! 🥳</Title>
                        <CSVLink data={timesNS5}>Click to Download Data (NS Image 5)</CSVLink>
                        {/* <CSVDownload data={times1} target="_blank" /> */}
                        
                        
                        <GameOver pts = {pts} />
                        
                        {/* <Table striped border hover> 
                            <thead className='bgvi'>
                                <tr>
                                    <th>Participant # </th>
                                    <th>Time 4.1 </th>
                                    <th>Time 4.2 </th>
                                    <th>Time 4.3 </th>
                                    <th>Time 4.4 </th>
                                    <th>Time 4.5 </th>
                                    <th>Time 4.6 </th>
                                    <th>Time 4.7 </th>
                                    <th>Time 4.8 </th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr className='even'>
                                <td> 0045 </td>
                                <td>{tieTime} </td>
                                <td>{buttonsTime}    </td>
                                <td>{buttons2Time}    </td>
                                <td>{BooksTime}    </td>
                                <td>{rightPlantTime}    </td>
                                <td>{watchTime}    </td>
                                <td>{bookTime}    </td>
                                <td>{lampTime}    </td>
                            </tr>
                            </tbody>
                        </Table> */}
                    </ div>
                ) : null}  

                {/* Symbols of right or wrong for each click on all images */} 
                {correct &&
                    <div>✅ Correct!</div>
                }
                {wrong &&
                    <div> ❌ Keep looking!</div>
                }

                {/* Green circles for the changes in Image 1 */}
                {showButtons ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${buttonsCo.x}px`,
                        top: `${buttonsCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${buttonsCo2.x}px`,
                        top: `${buttonsCo2.y}px`, }}/>
                    </div>
                ) : null}
                {showButtons2 ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${buttons2Co.x}px`,
                        top: `${buttons2Co.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${buttons2Co2.x}px`,
                        top: `${buttons2Co2.y}px`, }}/>
                    </div>
                ) : null}
                {showTie &&
                    <div>
                    <img alt="Pic2" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${tieCo.x}px`,
                        top: `${tieCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${tieCo2.x}px`,
                        top: `${tieCo2.y}px`, }}/>
                    </div>
                }
                {showBooks &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${BooksCo.x}px`,
                        top: `${BooksCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${BooksCo2.x}px`,
                        top: `${BooksCo2.y}px`, }}/>
                    </div>
                }
                {showRightPlant &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${rightPlantCo.x}px`,
                        top: `${rightPlantCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${rightPlantCo2.x}px`,
                        top: `${rightPlantCo2.y}px`, }}/>
                    </div>
                }
                {showBook &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${bookCo.x}px`,
                        top: `${bookCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${bookCo2.x}px`,
                        top: `${bookCo2.y}px`, }}/>
                    </div>
                }
                {showWatch &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${watchCo.x}px`,
                        top: `${watchCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${watchCo2.x}px`,
                        top: `${watchCo2.y}px`, }}/>
                    </div>
                } 
                {showLamp &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${lampCo.x}px`,
                        top: `${lampCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${lampCo2.x}px`,
                        top: `${lampCo2.y}px`, }}/>
                    </div>
                }
                {/* Green circles for the changes in Image 2 */}
                {showLeftTree ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${leftTreeCo.x}px`,
                        top: `${leftTreeCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${leftTreeCo2.x}px`,
                        top: `${leftTreeCo2.y}px`, }}/>
                    </div>
                ) : null}
                {showLeftGarage ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${leftGarageCo.x}px`,
                        top: `${leftGarageCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${leftGarageCo2.x}px`,
                        top: `${leftGarageCo2.y}px`, }}/>
                    </div>
                ) : null}
                {showRightGarage &&
                    <div>
                    <img alt="Pic2" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${rightGarageCo.x}px`,
                        top: `${rightGarageCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${rightGarageCo2.x}px`,
                        top: `${rightGarageCo2.y}px`, }}/>
                    </div>
                }
                {showShoe &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${shoeCo.x}px`,
                        top: `${shoeCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${shoeCo2.x}px`,
                        top: `${shoeCo2.y}px`, }}/>
                    </div>
                }
                {showSilverWheel &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${silverWheelCo.x}px`,
                        top: `${silverWheelCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${silverWheelCo2.x}px`,
                        top: `${silverWheelCo2.y}px`, }}/>
                    </div>
                }
                {showGreenWheel &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${greenWheelCo.x}px`,
                        top: `${greenWheelCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${greenWheelCo2.x}px`,
                        top: `${greenWheelCo2.y}px`, }}/>
                    </div>
                }
                {showShirt &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${shirtCo.x}px`,
                        top: `${shirtCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${shirtCo2.x}px`,
                        top: `${shirtCo2.y}px`, }}/>
                    </div>
                }
                {/* Green circles for the changes in Image 3 */}

                {/* Green circles for the changes in Image 4 */}

                {/* Green circles for the changes in Image 5 */}

                {/* Green circles for the changes in Image 12 */}


            </div>
         
        </QuizWindow>
        )
}

export default Quiz

//1 minute per image, timer more precise with seconds