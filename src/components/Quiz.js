import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import GameOver from './GameOver';
import Pic1A from '../Image 1_original (1).jpg';
import Pic1B from '../Image 1 Change_final.jpg';
import Pic2A from '../Image 2_original (1).jpg'
import Pic2B from '../Image 2 Change_final_use this.png'
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

    //variables to control timer
    const [timerLength, setTimerLength] = useState(60);
    const [counter, setCounter] = useState(timerLength);
    const [go, setGo] = useState(true);

    const [index, setIndex] = useState(1);
    const [pts, setPts] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [correct, setCorrect] = useState(false);
    const [wrong, setWrong] = useState(false);

    //Image 1 times to find each change
    const [tieTime, setTieTime] = useState("not found");
    const [buttonsTime, setButtonsTime] = useState("not found");
    const [buttons2Time, setButtons2Time] = useState("not found");
    const [lampTime, setLampTime] = useState("not found");
    const [BooksTime, setBooksTime] = useState("not found");
    const [rightPlantTime, setRightPlantTime] = useState("not found");
    const [watchTime, setWatchTime] = useState("not found");
    const [bookTime, setBookTime] = useState("not found");
    //Image 2 times to find each change
    const [leftTreeTime, setLeftTreeTime] = useState("not found");
    const [rightTreeTime, setRightTreeTime] = useState("not found");
    const [leftGarageTime, setLeftGarageTime] = useState("not found");
    const [rightGarageTime, setRightGarageTime] = useState("not found");
    const [shoeTime, setShoeTime] = useState("not found");
    const [silverWheelTime, setSilverWheelTime] = useState("not found");
    const [greenWheelTime, setGreenWheelTime] = useState("not found");
    const [shirtTime, setShirtTime] = useState("not found");
    //Image 3 times to find each change
    const [appleTime, setAppleTime] = useState("not found");
    const [chairTime, setChairTime] = useState("not found");
    const [beltTime, setBeltTime] = useState("not found");
    const [sleeveTime, setSleeveTime] = useState("not found");
    const [laptopTime, setLaptopTime] = useState("not found");
    const [gloveTime, setGloveTime] = useState("not found");
    const [mopTime, setMopTime] = useState("not found");
    const [curtainTime, setCurtainTime] = useState("not found");
    //Image 4 times to find each change
    const [leftBuildingTime, setLeftBuildingTime] = useState("not found");
    const [plateTime, setPlateTime] = useState("not found"); //license plate
    const [lineTime, setLineTime] = useState("not found"); 
    const [mopHeadTime, setMopHeadTime] = useState("not found");
    const [gableTime, setGableTime] = useState("not found"); //gable roof on white building
    const [topTieTime, setTopTieTime] = useState("not found");
    const [carWheelTime, setCarWheelTime] = useState("not found");
    const [mirrorTime, setMirrorTime] = useState("not found");
    //Image 5 times to find each change
    const [plantTime, setPlantTime] = useState("not found");
    const [ceilingTime, setCeilingTime] = useState("not found");
    const [starTime, setStarTime] = useState("not found"); 
    const [leftWatchTime, setLeftWatchTime] = useState("not found");
    const [noteTime, setNoteTime] = useState("not found");
    const [rightWatchTime, setRightWatchTime] = useState("not found");
    const [shelfTime, setShelfTime] = useState("not found");
    const [posterTime, setPosterTime] = useState("not found");
    //Image 12 times to find each change
    const [signTime, setSignTime] = useState(-1);
    const [fullTieTime, setFullTieTime] = useState("not found");
    const [necklaceTime, setNecklaceTime] = useState("not found"); 
    const [clothesTime, setClothesTime] = useState("not found");
    const [trashTime, setTrashTime] = useState("not found");
    const [leftShoeTime, setLeftShoeTime] = useState("not found");
    const [buttonTime, setButtonTime] = useState("not found");
    const [washerTime, setWasherTime] = useState("not found");

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
    const [showRightTree, setShowRightTree] = useState(false);
    const [showLeftGarage, setShowLeftGarage] = useState(false);
    const [showRightGarage, setShowRightGarage] = useState(false);
    const [showShoe, setShowShoe] = useState(false);
    const [showSilverWheel, setShowSilverWheel] = useState(false);
    const [showGreenWheel, setShowGreenWheel] = useState(false);
    const [showShirt, setShowShirt] = useState(false);
    //variables to control highlighting found changes in Image 3
    const [showApple, setShowApple] = useState(false);
    const [showChair, setShowChair] = useState(false);
    const [showBelt, setShowBelt] = useState(false);
    const [showSleeve, setShowSleeve] = useState(false);
    const [showLaptop, setShowLaptop] = useState(false);
    const [showGlove, setShowGlove] = useState(false);
    const [showMop, setShowMop] = useState(false);
    const [showCurtain, setShowCurtain] = useState(false);
    //variables to control highlighting found changes in Image 4
    const [showLeftBuilding, setShowLeftBuilding] = useState(false);
    const [showPlate, setShowPlate] = useState(false);
    const [showLine, setShowLine] = useState(false);
    const [showMopHead, setShowMopHead] = useState(false);
    const [showGable, setShowGable] = useState(false);
    const [showTopTie, setShowTopTie] = useState(false);
    const [showCarWheel, setShowCarWheel] = useState(false);
    const [showMirror, setShowMirror] = useState(false);
    //variables to control highlighting found changes in Image 5
    const [showPlant, setShowPlant] = useState(false);
    const [showCeiling, setShowCeiling] = useState(false);
    const [showStar, setShowStar] = useState(false);
    const [showLeftWatch, setShowLeftWatch] = useState(false);
    const [showNote, setShowNote] = useState(false);
    const [showRightWatch, setShowRightWatch] = useState(false);
    const [showShelf, setShowShelf] = useState(false);
    const [showPoster, setShowPoster] = useState(false);
    //variables to control highlighting found changes in Image 12
    const [showSign, setShowSign] = useState(false);
    const [showFullTie, setShowFullTie] = useState(false);
    const [showNecklace, setShowNecklace] = useState(false);
    const [showClothes, setShowClothes] = useState(false);
    const [showTrash, setShowTrash] = useState(false);
    const [showLeftShoe, setShowLeftShoe] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showWasher, setShowWasher] = useState(false);
    
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
    const [rightTreeCo, setRightTreeCo] = useState({x: 0, y: 0});
    const [rightTreeCo2, setRightTreeCo2] = useState({x: 0, y: 0});
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
    //Image 3 coordinates
    const [appleCo, setAppleCo] = useState({x: 0, y: 0});
    const [appleCo2, setAppleCo2] = useState({x: 0, y: 0});
    const [chairCo, setChairCo] = useState({x: 0, y: 0});
    const [chairCo2, setChairCo2] = useState({x: 0, y: 0});
    const [beltCo, setBeltCo] = useState({x: 0, y: 0});
    const [beltCo2, setBeltCo2] = useState({x: 0, y: 0});
    const [sleeveCo, setSleeveCo] = useState({x: 0, y: 0});
    const [sleeveCo2, setSleeveCo2] = useState({x: 0, y: 0});
    const [laptopCo, setLaptopCo] = useState({x: 0, y: 0});
    const [laptopCo2, setLaptopCo2] = useState({x: 0, y: 0});
    const [gloveCo, setGloveCo] = useState({x: 0, y: 0});
    const [gloveCo2, setGloveCo2] = useState({x: 0, y: 0});
    const [mopCo, setMopCo] = useState({x: 0, y: 0});
    const [mopCo2, setMopCo2] = useState({x: 0, y: 0});
    const [curtainCo, setCurtainCo] = useState({x: 0, y: 0});
    const [curtainCo2, setCurtainCo2] = useState({x: 0, y: 0});
    //Image 4 coordinates
    const [leftBuildingCo, setLeftBuildingCo] = useState({x: 0, y: 0});
    const [leftBuildingCo2, setLeftBuildingCo2] = useState({x: 0, y: 0});
    const [plateCo, setPlateCo] = useState({x: 0, y: 0});
    const [plateCo2, setPlateCo2] = useState({x: 0, y: 0});
    const [lineCo, setLineCo] = useState({x: 0, y: 0});
    const [lineCo2, setLineCo2] = useState({x: 0, y: 0});
    const [mopHeadCo, setMopHeadCo] = useState({x: 0, y: 0});
    const [mopHeadCo2, setMopHeadCo2] = useState({x: 0, y: 0});
    const [gableCo, setGableCo] = useState({x: 0, y: 0});
    const [gableCo2, setGableCo2] = useState({x: 0, y: 0});
    const [topTieCo, setTopTieCo] = useState({x: 0, y: 0});
    const [topTieCo2, setTopTieCo2] = useState({x: 0, y: 0});
    const [carWheelCo, setCarWheelCo] = useState({x: 0, y: 0});
    const [carWheelCo2, setCarWheelCo2] = useState({x: 0, y: 0});
    const [mirrorCo, setMirrorCo] = useState({x: 0, y: 0});
    const [mirrorCo2, setMirrorCo2] = useState({x: 0, y: 0});
    //Image 5 coordinates
    const [plantCo, setPlantCo] = useState({x: 0, y: 0});
    const [plantCo2, setPlantCo2] = useState({x: 0, y: 0});
    const [ceilingCo, setCeilingCo] = useState({x: 0, y: 0});
    const [ceilingCo2, setCeilingCo2] = useState({x: 0, y: 0});
    const [starCo, setStarCo] = useState({x: 0, y: 0});
    const [starCo2, setStarCo2] = useState({x: 0, y: 0});
    const [leftWatchCo, setLeftWatchCo] = useState({x: 0, y: 0});
    const [leftWatchCo2, setLeftWatchCo2] = useState({x: 0, y: 0});
    const [noteCo, setNoteCo] = useState({x: 0, y: 0});
    const [noteCo2, setNoteCo2] = useState({x: 0, y: 0});
    const [rightWatchCo, setRightWatchCo] = useState({x: 0, y: 0});
    const [rightWatchCo2, setRightWatchCo2] = useState({x: 0, y: 0});
    const [shelfCo, setShelfCo] = useState({x: 0, y: 0});
    const [shelfCo2, setShelfCo2] = useState({x: 0, y: 0});
    const [posterCo, setPosterCo] = useState({x: 0, y: 0});
    const [posterCo2, setPosterCo2] = useState({x: 0, y: 0});
    //Image 12 coordinates
    const [signCo, setSignCo] = useState({x: 0, y: 0});
    const [signCo2, setSignCo2] = useState({x: 0, y: 0});
    const [fullTieCo, setFullTieCo] = useState({x: 0, y: 0});
    const [fullTieCo2, setFullTieCo2] = useState({x: 0, y: 0});
    const [necklaceCo, setNecklaceCo] = useState({x: 0, y: 0});
    const [necklaceCo2, setNecklaceCo2] = useState({x: 0, y: 0});
    const [clothesCo, setClothesCo] = useState({x: 0, y: 0});
    const [clothesCo2, setClothesCo2] = useState({x: 0, y: 0});
    const [trashCo, setTrashCo] = useState({x: 0, y: 0});
    const [trashCo2, setTrashCo2] = useState({x: 0, y: 0});
    const [leftShoeCo, setLeftShoeCo] = useState({x: 0, y: 0});
    const [leftShoeCo2, setLeftShoeCo2] = useState({x: 0, y: 0});
    const [buttonCo, setButtonCo] = useState({x: 0, y: 0});
    const [buttonCo2, setButtonCo2] = useState({x: 0, y: 0});
    const [washerCo, setWasherCo] = useState({x: 0, y: 0});
    const [washerCo2, setWasherCo2] = useState({x: 0, y: 0});

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
        setCounter(timerLength); 
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
                setShowRightTree(false);
                setShowLeftGarage(false);
                setShowRightGarage(false)
                setShowShoe(false);
                setShowSilverWheel(false);
                setShowGreenWheel(false);
                setShowShirt(false);
                setTimes2([{Participant: 1, T2_leftTree: leftTreeTime, T2_rightTree: rightTreeTime, T2_leftGarage: leftGarageTime, T2_rightGarage: rightGarageTime, T2_shoe: shoeTime, T2_silverWheel: silverWheelTime, T2_greenWheel: greenWheelTime, T2_shirt: shirtTime}]);

            } else if (index == 3){
                setShowPause3(true);
                setShow3(false);
                setGo(false);
                //setCounter(0);

                setShowApple(false);
                setShowChair(false);
                setShowBelt(false)
                setShowSleeve(false);
                setShowLaptop(false);
                setShowGlove(false);
                setShowMop(false);
                setShowCurtain(false);
                setTimes3([{Participant: 1, T3_apple: appleTime, T3_chair: chairTime, T3_belt: beltTime, T3_sleeve: sleeveTime, T3_laptop: laptopTime, T3_glove: gloveTime, T3_mop: mopTime, T3_curtain: curtainTime}]);

            } else if (index == 4){
                setShowPause4(true);
                setShow4(false);
                setGo(false);
                //setCounter(0);

                setShowLeftBuilding(false);
                setShowPlate(false);
                setShowLine(false);
                setShowMopHead(false);
                setShowGable(false);
                setShowTopTie(false);
                setShowCarWheel(false);
                setShowMirror(false);
                setTimes4([{Participant: 1, T4_leftBuilding: leftBuildingTime, T4_plate: plateTime, T4_line: lineTime, T4_mopHead: mopHeadTime, T4_gable: gableTime, T4_topTie: topTieTime, T4_carWheel: carWheelTime, T4_mirror: mirrorTime}]);

            } else if (index == 5){
                setShowPause5(true);
                setShow5(false);
                setGo(false);
                //setCounter(0);

                setShowPlant(false);
                setShowCeiling(false);
                setShowStar(false);
                setShowLeftWatch(false);
                setShowNote(false);
                setShowRightWatch(false);
                setShowShelf(false);
                setShowPoster(false);
                setTimes5([{Participant: 1, T5_plant: plantTime, T5_ceiling: ceilingTime, T5_starTime: starTime, T5_leftWatch: leftWatchTime, T5_note: noteTime, T5_rightWatch: rightWatchTime, T5_shelf: shelfTime, T5_poster: posterTime}]);

            } else if (index == 6){
                setShowPause12(true);
                setShow12(false);
                setGo(false);
                //setCounter(0);
                setShowSign(false);
                setShowFullTie(false);
                setShowNecklace(false);
                setShowClothes(false);
                setShowTrash(false);
                setShowLeftShoe(false);
                setShowButton(false);
                setShowWasher(false);
                setTimes12([{Participant: 1, T12_sign: signTime, T12_fullTie: fullTieTime, T12_necklace: necklaceTime, T12_clothes: clothesTime, T12_trash: trashTime, T12_leftShoe: leftShoeTime, T12_button: buttonTime, T12_washer: washerTime}]);

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
        //console.log("x: " + e.screenX + ", y: " + e.screenY);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //setPts([pts[0], pts[1] + 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        //console.log("image 2 pts: " + pts[1]); 649
        if ((e.screenX >= 197 && e.screenX <= 230 && e.screenY >= 448 && e.screenY <= 490) || (e.screenX >= 843 && e.screenX <= 881 && e.screenY >= 448 && e.screenY <= 490)){
            setPts([pts[0], pts[1] + 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setLeftTreeTime(timerLength-counter);
            setLeftTreeCo({x: 190, y: 310}); 
            setLeftTreeCo2({x: 840, y: 310});
            setShowLeftTree(true);
        } else if ((e.screenX >= 525 && e.screenX <= 564 && e.screenY >= 535 && e.screenY <= 573) || (e.screenX >= 1174 && e.screenX <= 1204 && e.screenY >= 535 && e.screenY <= 573)){
            setPts([pts[0], pts[1] + 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setRightTreeTime(timerLength-counter);
            setRightTreeCo({x: 527, y: 395});
            setRightTreeCo2({x: 1175, y: 395});
            setShowRightTree(true);
        } else if ((e.screenX >= 129 && e.screenX <= 162 && e.screenY >= 550 && e.screenY <= 600) || (e.screenX >= 778 && e.screenX <= 815 && e.screenY >= 550 && e.screenY <= 600)){
            setPts([pts[0], pts[1] + 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setLeftGarageTime(timerLength-counter);
            setLeftGarageCo({x: 122, y: 412});
            setLeftGarageCo2({x: 770, y: 412});
            setShowLeftGarage(true);
        } else if ((e.screenX >= 580 && e.screenX <= 605 && e.screenY >= 560 && e.screenY <= 610) || (e.screenX >= 1230 && e.screenX <= 1255 && e.screenY >= 560 && e.screenY <= 610)){
            setPts([pts[0], pts[1] + 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setRightGarageTime(timerLength-counter);
            setRightGarageCo({x: 570, y: 423});
            setRightGarageCo2({x: 1215, y: 423});
            setShowRightGarage(true);
        } else if ((e.screenX >= 195 && e.screenX <= 243 && e.screenY >= 696 && e.screenY <= 739) || (e.screenX >= 840 && e.screenX <= 882 && e.screenY >= 696 && e.screenY <= 739)){
            setPts([pts[0], pts[1] + 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setShoeTime(timerLength-counter);
            setShoeCo({x: 195, y: 556});
            setShoeCo2({x: 843, y: 556});
            setShowShoe(true);
        } else if ((e.screenX >= 215 && e.screenX <= 260 && e.screenY >= 627 && e.screenY <= 665) || (e.screenX >= 862 && e.screenX <= 903 && e.screenY >= 627 && e.screenY <= 665)){
            setPts([pts[0], pts[1] + 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setSilverWheelTime(timerLength-counter);
            setSilverWheelCo({x: 215, y: 480});
            setSilverWheelCo2({x: 865, y: 480});
            setShowSilverWheel(true);
        } else if ((e.screenX >= 435 && e.screenX <= 473 && e.screenY >= 674 && e.screenY <= 729) || (e.screenX >= 1075 && e.screenX <= 1115 && e.screenY >= 674 && e.screenY <= 729)){
          setPts([pts[0], pts[1] + 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setGreenWheelTime(timerLength-counter);
            setGreenWheelCo({x: 433, y: 540});
            setGreenWheelCo2({x: 1078, y: 540});
            setShowGreenWheel(true);
        } else if ((e.screenX >= 476 && e.screenX <= 501 && e.screenY >= 534 && e.screenY <= 549) || (e.screenX >= 1124 && e.screenX <= 1149 && e.screenY >= 534 && e.screenY <= 549)){
            setPts([pts[0], pts[1] + 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
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
        if (pts[1] == 7){ //8 if change pic is correct
            setShowLeftTree(false);
            setShowRightTree(false);
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

            setTimes2([{Participant: 1, T2_leftTree: leftTreeTime, T2_rightTree: rightTreeTime, T2_leftGarage: leftGarageTime, T2_rightGarage: rightGarageTime, T2_shoe: shoeTime, T2_silverWheel: silverWheelTime, T2_greenWheel: greenWheelTime, T2_shirt: shirtTime}]);
        }
    }
    const pickAnswer3 = (e) => {
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 722
        if ((e.screenX >= 39 && e.screenX <= 72 && e.screenY >= 597 && e.screenY <= 620) || (e.screenX >= 761 && e.screenX <= 794 && e.screenY >= 597 && e.screenY <= 620)){
            setPts([pts[0], pts[1], pts[2] + 1, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setAppleTime(timerLength-counter);
            setAppleCo({x: 33, y: 450});
            setAppleCo2({x: 750, y: 450});
            setShowApple(true);
        }else if ((e.screenX >= 23 && e.screenX <= 73 && e.screenY >= 694 && e.screenY <= 725) || (e.screenX >= 743 && e.screenX <= 795 && e.screenY >= 694 && e.screenY <= 725)){
            setPts([pts[0], pts[1], pts[2] + 1, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setChairTime(timerLength-counter);
            setChairCo({x: 18, y: 540});
            setChairCo2({x: 738, y: 540});
            setShowChair(true);
        } else if ((e.screenX >= 176 && e.screenX <= 206 && e.screenY >= 750 && e.screenY <= 775) || (e.screenX >= 897 && e.screenX <= 929 && e.screenY >= 750 && e.screenY <= 775)){
            setPts([pts[0], pts[1], pts[2] + 1, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setBeltTime(timerLength-counter);
            setBeltCo({x: 170, y: 600});
            setBeltCo2({x: 890, y: 600});
            setShowBelt(true);
        } else if ((e.screenX >= 237 && e.screenX <= 275 && e.screenY >= 774 && e.screenY <= 794) || (e.screenX >= 956 && e.screenX <= 994 && e.screenY >= 774 && e.screenY <= 794)){
            setPts([pts[0], pts[1], pts[2] + 1, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setSleeveTime(timerLength-counter);
            setSleeveCo({x: 230, y: 620});
            setSleeveCo2({x: 950, y: 620});
            setShowSleeve(true);
        } else if ((e.screenX >= 489 && e.screenX <= 518 && e.screenY >= 615 && e.screenY <= 659) || (e.screenX >= 1208 && e.screenX <= 1236 && e.screenY >= 615 && e.screenY <= 659)){
            setPts([pts[0], pts[1], pts[2] + 1, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setLaptopTime(timerLength-counter);
            setLaptopCo({x: 481, y: 470});
            setLaptopCo2({x: 1200, y: 470});
            setShowLaptop(true);
        } else if ((e.screenX >= 498 && e.screenX <= 536 && e.screenY >= 785 && e.screenY <= 808) || (e.screenX >= 1216 && e.screenX <= 1258 && e.screenY >= 785 && e.screenY <= 808)){
            setPts([pts[0], pts[1], pts[2] + 1, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setGloveTime(timerLength-counter);
            setGloveCo({x: 495, y: 640});
            setGloveCo2({x: 1213, y: 640});
            setShowGlove(true);
        } else if ((e.screenX >= 557 && e.screenX <= 583 && e.screenY >= 769 && e.screenY <= 808) || (e.screenX >= 1276 && e.screenX <= 1301 && e.screenY >= 769 && e.screenY <= 808)){
            setPts([pts[0], pts[1], pts[2] + 1, 0, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setMopTime(timerLength-counter);
            setMopCo({x: 545, y: 630});
            setMopCo2({x: 1265, y: 630});
            setShowMop(true);
        } else if ((e.screenX >= 689 && e.screenX <= 719 && e.screenY >= 557 && e.screenY <= 636) || (e.screenX >= 1413 && e.screenX <= 1435 && e.screenY >= 557 && e.screenY <= 636)){
            setPts([pts[0], pts[1], pts[2] + 1, 0, 0, 0, 0, 0, 0, 0, 0]);            
            setCorrect(true);
            setCurtainTime(timerLength-counter);
            setCurtainCo({x: 679, y: 430});
            setCurtainCo2({x: 1403, y: 430});
            setShowCurtain(true);
        } else {
            setWrong(true);
        }
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        //console.log("image 3 pts: " + pts[2]);
        if (pts[2] == 7){
            setShowApple(false);
            setShowChair(false);
            setShowBelt(false)
            setShowSleeve(false);
            setShowLaptop(false);
            setShowGlove(false);
            setShowMop(false);
            setShowCurtain(false);
            //console.log("move to 4");

            setShowPause3(true);
            setShow3(false);
            setGo(false);
            setCounter(0);

            setTimes3([{Participant: 1, T3_apple: appleTime, T3_chair: chairTime, T3_belt: beltTime, T3_sleeve: sleeveTime, T3_laptop: laptopTime, T3_glove: gloveTime, T3_mop: mopTime, T3_curtain: curtainTime}]);
        }
    }
    const pickAnswer4 = (e) => {
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 237, 275, 774, 794, 956, 994,
        if ((e.screenX >= 6 && e.screenX <= 47 && e.screenY >= 572 && e.screenY <= 593) || (e.screenX >= 726 && e.screenX <= 769 && e.screenY >= 572 && e.screenY <= 593)){
            setPts([pts[0], pts[1], pts[2], pts[3] + 1, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setLeftBuildingTime(timerLength-counter);
            setLeftBuildingCo({x: 5, y: 420});
            setLeftBuildingCo2({x: 720, y: 420});
            setShowLeftBuilding(true);
        }else if ((e.screenX >= 77 && e.screenX <= 107 && e.screenY >= 664 && e.screenY <= 725) || (e.screenX >= 798 && e.screenX <= 827 && e.screenY >= 664 && e.screenY <= 725)){
            setPts([pts[0], pts[1], pts[2], pts[3] + 1, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setPlateTime(timerLength-counter);
            setPlateCo({x: 70, y: 515});
            setPlateCo2({x: 790, y: 515});
            setShowPlate(true);
        } else if ((e.screenX >= 161 && e.screenX <= 191 && e.screenY >= 661 && e.screenY <= 677) || (e.screenX >= 885 && e.screenX <= 915 && e.screenY >= 661 && e.screenY <= 677)){
            setPts([pts[0], pts[1], pts[2], pts[3] + 1, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setLineTime(timerLength-counter);
            setLineCo({x: 150, y: 505});
            setLineCo2({x: 873, y: 505});
            setShowLine(true);
        } else if ((e.screenX >= 190 && e.screenX <= 240 && e.screenY >= 592 && e.screenY <= 643) || (e.screenX >= 912 && e.screenX <= 957 && e.screenY >= 592 && e.screenY <= 643)){
            setPts([pts[0], pts[1], pts[2], pts[3] + 1, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setMopHeadTime(timerLength-counter);
            setMopHeadCo({x: 190, y: 460});
            setMopHeadCo2({x: 910, y: 460});
            setShowMopHead(true);
        } else if ((e.screenX >= 445 && e.screenX <= 474 && e.screenY >= 548 && e.screenY <= 570) || (e.screenX >= 1163 && e.screenX <= 1194 && e.screenY >= 548 && e.screenY <= 570)){
            setPts([pts[0], pts[1], pts[2], pts[3] + 1, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setGableTime(timerLength-counter);
            setGableCo({x: 435, y: 400});
            setGableCo2({x: 1155, y: 400});
            setShowGable(true);
        } else if ((e.screenX >= 491 && e.screenX <= 522 && e.screenY >= 553 && e.screenY <= 570) || (e.screenX >= 1213 && e.screenX <= 1248 && e.screenY >= 553 && e.screenY <= 570)){
            setPts([pts[0], pts[1], pts[2], pts[3] + 1, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setTopTieTime(timerLength-counter);
            setTopTieCo({x: 483, y: 400});
            setTopTieCo2({x: 1203, y: 400});
            setShowTopTie(true);
        } else if ((e.screenX >= 606 && e.screenX <= 637 && e.screenY >= 653 && e.screenY <= 689) || (e.screenX >= 1335 && e.screenX <= 1360 && e.screenY >= 653 && e.screenY <= 689)){
            setPts([pts[0], pts[1], pts[2], pts[3] + 1, 0, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setCarWheelTime(timerLength-counter);
            setCarWheelCo({x: 600, y: 512});
            setCarWheelCo2({x: 1327, y: 512});
            setShowCarWheel(true);
        } else if ((e.screenX >= 651 && e.screenX <= 687 && e.screenY >= 619 && e.screenY <= 637) || (e.screenX >= 1373 && e.screenX <= 1408 && e.screenY >= 619 && e.screenY <= 637)){
            setPts([pts[0], pts[1], pts[2], pts[3] + 1, 0, 0, 0, 0, 0, 0, 0]);          
            setCorrect(true);
            setMirrorTime(timerLength-counter);
            setMirrorCo({x: 646, y: 470});
            setMirrorCo2({x: 1368, y: 470});
            setShowMirror(true);
        } else {
            setWrong(true);
        }
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        //console.log("image 4 pts: " + pts[3]);
        if (pts[3] == 7){
            setShowLeftBuilding(false);
            setShowPlate(false);
            setShowLine(false);
            setShowMopHead(false);
            setShowGable(false);
            setShowTopTie(false);
            setShowCarWheel(false);
            setShowMirror(false);

            setShowPause4(true);
            setShow4(false);
            setGo(false);
            setCounter(0);

            setTimes4([{Participant: 1, T4_leftBuilding: leftBuildingTime, T4_plate: plateTime, T4_line: lineTime, T4_mopHead: mopHeadTime, T4_gable: gableTime, T4_topTie: topTieTime, T4_carWheel: carWheelTime, T4_mirror: mirrorTime}]);
        }
    }
    const pickAnswer5 = (e) => {
        //console.log("x: " + e.screenX + " y: " + e.screenY);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        if ((e.screenX >= 144 && e.screenX <= 192 && e.screenY >= 412 && e.screenY <= 475) || (e.screenX >= 861 && e.screenX <= 912 && e.screenY >= 412 && e.screenY <= 475)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4] + 1, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setPlantTime(timerLength-counter);
            setPlantCo({x: 145, y: 290});
            setPlantCo2({x: 863, y: 290});
            setShowPlant(true);
        }else if ((e.screenX >= 217 && e.screenX <= 271 && e.screenY >= 450 && e.screenY <= 466) || (e.screenX >= 935 && e.screenX <= 994 && e.screenY >= 450 && e.screenY <= 466)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4] + 1, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setCeilingTime(timerLength-counter);
            setCeilingCo({x: 220, y: 297});
            setCeilingCo2({x: 938, y: 297});
            setShowCeiling(true);
        } else if ((e.screenX >= 297 && e.screenX <= 316 && e.screenY >= 634 && e.screenY <= 653) || (e.screenX >= 1011 && e.screenX <= 1037 && e.screenY >= 634 && e.screenY <= 653)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4] + 1, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setStarTime(timerLength-counter);
            setStarCo({x: 285, y: 480});
            setStarCo2({x: 1000, y: 480});
            setShowStar(true);
        } else if ((e.screenX >= 320 && e.screenX <= 356 && e.screenY >= 709 && e.screenY <= 731) || (e.screenX >= 1038 && e.screenX <= 1077 && e.screenY >= 709 && e.screenY <= 731)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4] + 1, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setLeftWatchTime(timerLength-counter);
            setLeftWatchCo({x: 313, y: 560});
            setLeftWatchCo2({x: 1033, y: 560});
            setShowLeftWatch(true);
        } else if ((e.screenX >= 506 && e.screenX <= 540 && e.screenY >= 736 && e.screenY <= 750) || (e.screenX >= 1224 && e.screenX <= 1258 && e.screenY >= 736 && e.screenY <= 750)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4] + 1, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setNoteTime(timerLength-counter);
            setNoteCo({x: 495, y: 580});
            setNoteCo2({x: 1215, y: 580});
            setShowNote(true);
        } else if ((e.screenX >= 539 && e.screenX <= 572 && e.screenY >= 763 && e.screenY <= 781) || (e.screenX >= 1260 && e.screenX <= 1293 && e.screenY >= 763 && e.screenY <= 781)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4] + 1, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setRightWatchTime(timerLength-counter);
            setRightWatchCo({x: 530, y: 612});
            setRightWatchCo2({x: 1250, y: 612});
            setShowRightWatch(true);
        } else if ((e.screenX >= 650 && e.screenX <= 718 && e.screenY >= 655 && e.screenY <= 737) || (e.screenX >= 1368 && e.screenX <= 1435 && e.screenY >= 655 && e.screenY <= 737)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4] + 1, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setShelfTime(timerLength-counter);
            setShelfCo({x: 660, y: 540});
            setShelfCo2({x: 1380, y: 540});
            setShowShelf(true);
        } else if ((e.screenX >= 659 && e.screenX <= 700 && e.screenY >= 410 && e.screenY <= 460) || (e.screenX >= 1375 && e.screenX <= 1419 && e.screenY >= 410 && e.screenY <= 460)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4] + 1, 0, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setPosterTime(timerLength-counter);
            setPosterCo({x: 652, y: 274});
            setPosterCo2({x: 1372, y: 274});
            setShowPoster(true);
        } else {
            setWrong(true);
        }
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        if (pts[4] == 7){
            setShowPlant(false);
            setShowCeiling(false);
            setShowStar(false);
            setShowLeftWatch(false);
            setShowNote(false);
            setShowRightWatch(false);
            setShowShelf(false);
            setShowPoster(false);
            
            setShowPause5(true);
            setShow5(false);
            setGo(false);
            setCounter(0);

            setTimes5([{Participant: 1, T5_plant: plantTime, T5_ceiling: ceilingTime, T5_starTime: starTime, T5_leftWatch: leftWatchTime, T5_note: noteTime, T5_rightWatch: rightWatchTime, T5_shelf: shelfTime, T5_poster: posterTime}]);
        }
    }
    const pickAnswer12 = (e) => {
        console.log("x: " + e.screenX + " y: " + e.screenY);
        //let userAnswer = e.target.outerText;
        // if (quiz[number].answer === userAnswer) 
        //console.log("image 4 pts: " + pts[3]);
        if ((e.screenX >= 115 && e.screenX <= 144 && e.screenY >= 432 && e.screenY <= 475) || (e.screenX >= 861 && e.screenX <= 912 && e.screenY >= 432 && e.screenY <= 475)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5] + 1, 0, 0, 0, 0, 0]);            
            setCorrect(true);
            setSignTime(timerLength-counter);
            setSignCo({x: 113, y: 287});
            setSignCo2({x: 833, y: 287});
            setShowSign(true);
        }else if ((e.screenX >= 100 && e.screenX <= 118 && e.screenY >= 496 && e.screenY <= 528) || (e.screenX >= 822 && e.screenX <= 838 && e.screenY >= 496 && e.screenY <= 528)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5] + 1, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setFullTieTime(timerLength-counter);
            setFullTieCo({x: 85, y: 350});
            setFullTieCo2({x: 807, y: 350});
            setShowFullTie(true);
        } else if ((e.screenX >= 71 && e.screenX <= 100 && e.screenY >= 643 && e.screenY <= 657) || (e.screenX >= 791 && e.screenX <= 819 && e.screenY >= 643 && e.screenY <= 657)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5] + 1, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setNecklaceTime(timerLength-counter);
            setNecklaceCo({x: 60, y: 490});
            setNecklaceCo2({x: 780, y: 490});
            setShowNecklace(true);
        } else if ((e.screenX >= 151 && e.screenX <= 211 && e.screenY >= 741 && e.screenY <= 776) || (e.screenX >= 865 && e.screenX <= 935 && e.screenY >= 741 && e.screenY <= 776)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5] + 1, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setClothesTime(timerLength-counter);
            setClothesCo({x: 160, y: 595});
            setClothesCo2({x: 877, y: 595});
            setShowClothes(true);
        } else if ((e.screenX >= 220 && e.screenX <= 261 && e.screenY >= 551 && e.screenY <= 569) || (e.screenX >= 934 && e.screenX <= 983 && e.screenY >= 551 && e.screenY <= 569)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5] + 1, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setTrashTime(timerLength-counter);
            setTrashCo({x: 218, y: 400});
            setTrashCo2({x: 934, y: 400});
            setShowTrash(true);
        } else if ((e.screenX >= 260 && e.screenX <= 285 && e.screenY >= 623 && e.screenY <= 638) || (e.screenX >= 975 && e.screenX <= 1007 && e.screenY >= 623 && e.screenY <= 683)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5] + 1, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setLeftShoeTime(timerLength-counter);
            setLeftShoeCo({x: 246, y: 470});
            setLeftShoeCo2({x: 965, y: 470});
            setShowLeftShoe(true);
        } else if ((e.screenX >= 494 && e.screenX <= 517 && e.screenY >= 724 && e.screenY <= 741) || (e.screenX >= 1213 && e.screenX <= 1236 && e.screenY >= 724 && e.screenY <= 741)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5] + 1, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setButtonTime(timerLength-counter);
            setButtonCo({x: 480, y: 570});
            setButtonCo2({x: 1200, y: 570});
            setShowButton(true);
        } else if ((e.screenX >= 604 && e.screenX <= 658 && e.screenY >= 566 && e.screenY <= 664) || (e.screenX >= 1327 && e.screenX <= 1378 && e.screenY >= 566 && e.screenY <= 664)){
            setPts([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5] + 1, 0, 0, 0, 0, 0]);
            setCorrect(true);
            setWasherTime(timerLength-counter);
            setWasherCo({x: 605, y: 450});
            setWasherCo2({x: 1325, y: 450});
            setShowWasher(true);
        } else {
            setWrong(true);
        }
        setTimeout(() => {setCorrect(false)}, 1000);
        setTimeout(() => {setWrong(false)}, 1000);
        if (pts[5] == 7){
            setShowSign(false);
            setShowFullTie(false);
            setShowNecklace(false);
            setShowClothes(false);
            setShowTrash(false);
            setShowLeftShoe(false);
            setShowButton(false);
            setShowWasher(false);

            setShowPause12(true);
            setShow12(false);
            setGo(false);
            setCounter(0);

            setTimes12([{Participant: 1, T12_sign: signTime, T12_fullTie: fullTieTime, T12_necklace: necklaceTime, T12_clothes: clothesTime, T12_trash: trashTime, T12_leftShoe: leftShoeTime, T12_button: buttonTime, T12_washer: washerTime}]);
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
                        <Title >Great! You got {pts[1]} out of 8! 🥳</Title> 
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
                    <div>
                        ✅ Correct!
                    </div>
                }
                {wrong &&
                    <div> 
                        ❌ Keep looking!
                    </div>
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
                {showRightTree ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${rightTreeCo.x}px`,
                        top: `${rightTreeCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${rightTreeCo2.x}px`,
                        top: `${rightTreeCo2.y}px`, }}/>
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
                {showApple ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${appleCo.x}px`,
                        top: `${appleCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${appleCo2.x}px`,
                        top: `${appleCo2.y}px`, }}/>
                    </div>
                ) : null}
                {showChair ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${chairCo.x}px`,
                        top: `${chairCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${chairCo2.x}px`,
                        top: `${chairCo2.y}px`, }}/>
                    </div>
                ) : null}
                {showBelt &&
                    <div>
                    <img alt="Pic2" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${beltCo.x}px`,
                        top: `${beltCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${beltCo2.x}px`,
                        top: `${beltCo2.y}px`, }}/>
                    </div>
                }
                {showSleeve &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${sleeveCo.x}px`,
                        top: `${sleeveCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${sleeveCo2.x}px`,
                        top: `${sleeveCo2.y}px`, }}/>
                    </div>
                }
                {showLaptop &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${laptopCo.x}px`,
                        top: `${laptopCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${laptopCo2.x}px`,
                        top: `${laptopCo2.y}px`, }}/>
                    </div>
                }
                {showGlove &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${gloveCo.x}px`,
                        top: `${gloveCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${gloveCo2.x}px`,
                        top: `${gloveCo2.y}px`, }}/>
                    </div>
                }
                {showMop &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${mopCo.x}px`,
                        top: `${mopCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${mopCo2.x}px`,
                        top: `${mopCo2.y}px`, }}/>
                    </div>
                } 
                {showCurtain &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${curtainCo.x}px`,
                        top: `${curtainCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${curtainCo2.x}px`,
                        top: `${curtainCo2.y}px`, }}/>
                    </div>
                }
                {/* Green circles for the changes in Image 4 */}
                {showLeftBuilding ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${leftBuildingCo.x}px`,
                        top: `${leftBuildingCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${leftBuildingCo2.x}px`,
                        top: `${leftBuildingCo2.y}px`, }}/>
                    </div>
                ) : null}
                {showPlate ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${plateCo.x}px`,
                        top: `${plateCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${plateCo2.x}px`,
                        top: `${plateCo2.y}px`, }}/>
                    </div>
                ) : null}
                {showLine &&
                    <div>
                    <img alt="Pic2" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${lineCo.x}px`,
                        top: `${lineCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${lineCo2.x}px`,
                        top: `${lineCo2.y}px`, }}/>
                    </div>
                }
                {showMopHead &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${mopHeadCo.x}px`,
                        top: `${mopHeadCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${mopHeadCo2.x}px`,
                        top: `${mopHeadCo2.y}px`, }}/>
                    </div>
                }
                {showGable &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${gableCo.x}px`,
                        top: `${gableCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${gableCo2.x}px`,
                        top: `${gableCo2.y}px`, }}/>
                    </div>
                }
                {showTopTie &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${topTieCo.x}px`,
                        top: `${topTieCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${topTieCo2.x}px`,
                        top: `${topTieCo2.y}px`, }}/>
                    </div>
                }
                {showCarWheel &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${carWheelCo.x}px`,
                        top: `${carWheelCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${carWheelCo2.x}px`,
                        top: `${carWheelCo2.y}px`, }}/>
                    </div>
                } 
                {showMirror &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${mirrorCo.x}px`,
                        top: `${mirrorCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${mirrorCo2.x}px`,
                        top: `${mirrorCo2.y}px`, }}/>
                    </div>
                }
                {/* Green circles for the changes in Image 5 */}
                {showPlant ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${plantCo.x}px`,
                        top: `${plantCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${plantCo2.x}px`,
                        top: `${plantCo2.y}px`, }}/>
                    </div>
                ) : null}
                {showCeiling ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${ceilingCo.x}px`,
                        top: `${ceilingCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${ceilingCo2.x}px`,
                        top: `${ceilingCo2.y}px`, }}/>
                    </div>
                ) : null}
                {showStar &&
                    <div>
                    <img alt="Pic2" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${starCo.x}px`,
                        top: `${starCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${starCo2.x}px`,
                        top: `${starCo2.y}px`, }}/>
                    </div>
                }
                {showLeftWatch &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${leftWatchCo.x}px`,
                        top: `${leftWatchCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${leftWatchCo2.x}px`,
                        top: `${leftWatchCo2.y}px`, }}/>
                    </div>
                }
                {showNote &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${noteCo.x}px`,
                        top: `${noteCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${noteCo2.x}px`,
                        top: `${noteCo2.y}px`, }}/>
                    </div>
                }
                {showRightWatch &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${rightWatchCo.x}px`,
                        top: `${rightWatchCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${rightWatchCo2.x}px`,
                        top: `${rightWatchCo2.y}px`, }}/>
                    </div>
                }
                {showShelf &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${shelfCo.x}px`,
                        top: `${shelfCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${shelfCo2.x}px`,
                        top: `${shelfCo2.y}px`, }}/>
                    </div>
                } 
                {showPoster &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${posterCo.x}px`,
                        top: `${posterCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${posterCo2.x}px`,
                        top: `${posterCo2.y}px`, }}/>
                    </div>
                }
                {/* Green circles for the changes in Image 12 */}
                {showSign ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${signCo.x}px`,
                        top: `${signCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${signCo2.x}px`,
                        top: `${signCo2.y}px`, }}/>
                    </div>
                ) : null}
                {showFullTie ? (
                    <div>
                    <img alt="Pic1" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${fullTieCo.x}px`,
                        top: `${fullTieCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${fullTieCo2.x}px`,
                        top: `${fullTieCo2.y}px`, }}/>
                    </div>
                ) : null}
                {showNecklace &&
                    <div>
                    <img alt="Pic2" height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${necklaceCo.x}px`,
                        top: `${necklaceCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${necklaceCo2.x}px`,
                        top: `${necklaceCo2.y}px`, }}/>
                    </div>
                }
                {showClothes &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${clothesCo.x}px`,
                        top: `${clothesCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${clothesCo2.x}px`,
                        top: `${clothesCo2.y}px`, }}/>
                    </div>
                }
                {showTrash &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${trashCo.x}px`,
                        top: `${trashCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${trashCo2.x}px`,
                        top: `${trashCo2.y}px`, }}/>
                    </div>
                }
                {showLeftShoe &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${leftShoeCo.x}px`,
                        top: `${leftShoeCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${leftShoeCo2.x}px`,
                        top: `${leftShoeCo2.y}px`, }}/>
                    </div>
                }
                {showButton &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${buttonCo.x}px`,
                        top: `${buttonCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${buttonCo2.x}px`,
                        top: `${buttonCo2.y}px`, }}/>
                    </div>
                } 
                {showWasher &&
                    <div>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${washerCo.x}px`,
                        top: `${washerCo.y}px`, }}/>
                    <img height="50" width="50" src={Circle} style={{
                        position: "absolute",
                        left: `${washerCo2.x}px`,
                        top: `${washerCo2.y}px`, }}/>
                    </div>
                }

            </div>
         
        </QuizWindow>
        )
}

export default Quiz;