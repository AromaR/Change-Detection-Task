import React, {useState} from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';
import { Form } from 'react-bootstrap'

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({props}) => {

    const [partid, setPartid] = useState("");

    const startQuiz = (e) => {
        props(true);
    }

    const setPartID = (e) => {
        setPartid("something");
    }

    return (
        <Intro>
            <h1>Welcome!</h1>
            <Button onClick={startQuiz} css={btnCSS}>Begin</Button>
        </Intro>
    )
}

export default Start
