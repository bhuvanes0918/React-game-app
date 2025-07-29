import {
  ShowResultContainer,
  ResultImagesContainer,
  ResultTextImgContainer,
  ResultText,
  ResultImageItem,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {myChoice, opponentChoice, resultMessage, playAgain} = props

  const {id, imageUrl} = opponentChoice
  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ResultImagesContainer>
        <ResultTextImgContainer>
          <ResultText>YOU</ResultText>
          <ResultImageItem src={myChoice.imageUrl} alt="your choice" />
        </ResultTextImgContainer>
        <ResultTextImgContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImageItem src={imageUrl} alt="opponent choice" />
        </ResultTextImgContainer>
      </ResultImagesContainer>
      <ResultText>{resultMessage}</ResultText>
      <ResultButtonContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
          Play Again
        </PlayAgainButton>
      </ResultButtonContainer>
    </ShowResultContainer>
  )
}

export default GameResultView




..........
import styled from 'styled-components'

export const ShowResultContainer = styled.div`
width: 100%;
`

export const ResultImagesContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`
export const ResultTextImgContainer = styled.div``

export const ResultText = styled.p`
text-align: center;
font-weight: bold;
font-size: 20px;
`

export const ResultImageItem = styled.img`
width: 150px;
height: 150px;
`

export const ResultButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

export const PlayAgainButton = styled.button`
border: 0;
background-color: #ffffff;
color: #000000;
font-family: 'Roboto';
font-size: 15px;
padding: 10px;
font-weight: bold;
border-radius: 10px;
cursor: pointer;
`

