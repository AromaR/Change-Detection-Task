import styled from 'styled-components'
import {Button} from './Button'

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const GameOver = ({pts}) => {

    const refreshPage = () => window.location.reload();
    setTimeout(1000);
    return (
        <>
            <Title>Thank you! You're all done!</Title>
            {/* <h4>Image 1: </h4>
            <Points>You got {pts[0]} out of 8! 🥳</Points>
            <h4> Image 2: </h4>
            <Points>You got {pts[1]} out of 8! 🥳</Points>
            <h4> Image 3: </h4>
            <Points>You got {pts[2]} out of 8! 🥳</Points>
            <h4> Image 4: </h4>
            <Points>You got {pts[3]} out of 8! 🥳</Points> */}
            {/* {pts[0] == 6 &&
                <Points>You got {pts[0]} out of 8! 🥳</Points>
            }   */}
            {/* <h4>Image 2:</h4>
            <Points>Participant got {pts[1]} out of 5!</Points>
            <h4>...</h4>
            <h4>Image 10:</h4>
            <Points>Participant got __ out of 5!</Points> */}
            <Button onClick={refreshPage}>Reset</Button>
        </>
    )
}

export default GameOver
