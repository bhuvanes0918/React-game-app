import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Buttons from '../Buttons'
import GameResultView from '../GameResultView'
import 'reactjs-popup/dist/index.css'

import {
  MainContainer,
  ScoreContainer,
  ItemsContainer,
  Heading,
  ScoreCardContainer,
  ParagraphScore,
  ScoreSpan,
  ItemsImagesContainer,
  PlayAgainButton,
  PopUpContainer,
  PopUpButton,
  RulesImageContainer,
  RulesImage,
  CloseLineContainer,
  CloseLineButton,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    opponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, opponentChoice, resultMessage} = this.state
    const {id, image} = opponentChoice
    return (
      <GameResultView
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, image) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: {id, imageUrl: image},
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: {id, imageUrl: image},
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: {id, imageUrl: image},
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: {id, imageUrl: image},
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: {id, imageUrl: image},
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: {id, imageUrl: image},
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: {id, imageUrl: image},
        opponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props
    return (
      <ItemsImagesContainer>
        {choicesList.map(eachItem => (
          <Buttons
            key={eachItem.id}
            buttonDetails={eachItem}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ItemsImagesContainer>
    )
  }

  render() {
    const {showResult, score, myChoice, opponentChoice} = this.state

    return (
      <MainContainer>
        <ScoreContainer>
          <ItemsContainer>
            <Heading>
              Rock
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
          </ItemsContainer>
          <ScoreCardContainer>
            <ParagraphScore>Score</ParagraphScore>
            <ScoreSpan>{score}</ScoreSpan>
          </ScoreCardContainer>
        </ScoreContainer>
        {showResult ? this.onGetResult() : this.onGetImages()}
        <PopUpContainer>
          <Popup modal trigger={<PopUpButton type="button">Rules</PopUpButton>}>
            {close => (
              <RulesImageContainer>
                <CloseLineContainer>
                  <CloseLineButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseLineButton>
                </CloseLineContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopUpContainer>
      </MainContainer>
    )
  }
}

export default Game




........
import styled from 'styled-components'

export const MainContainer = styled.div`
background-color: #223a5f;
height: 100vh;
padding:30px;
color: #ffffff;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const ScoreContainer = styled.div`
padding:20px;
border: 2px solid #ffffff;
border-radius: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const ItemsContainer = styled.div``

export const Heading = styled.h1`
font-family:'Bree Serif';
font-size: 20px;
`

export const ScoreCardContainer = styled.div`
margin: 15px;
background-color: #ffffff;
border-radius: 10px;
width: 100px;
padding: 5px;
`

export const ParagraphScore = styled.p`
color: #000000;
text-align: center;
font-weight: bold;
font-size: 25px;
font-family:'Roboto';
margin: 0;
`

export const ScoreSpan = styled.p`
color: #000000;
text-align: center;
font-weight: bold;
font-size: 30px;
font-family:'Roboto';
margin: 0;
`

export const ItemsImagesContainer = styled.ul`
padding:0;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
width: 100%;
height: 50%;
`
export const PlayAgainButton = styled.button`
border:0;
color: #000000;
background-color: #ffffff;
font-weight: bold;
font-size: 15px;
font-family:'Roboto';
padding: 10px;
border-radius: 10px;
cursor: pointer;
`

export const PopUpContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`
export const PopUpButton = styled(PlayAgainButton)`
width:100px;
`
export const RulesImageContainer = styled.div``

export const RulesImage = styled.img`
width: 100px;
height: 100%;
`

export const CloseLineButton = styled.button`
border: 0;
background-color: transparent;
cursor: pointer;
font-size: 25px;
`

export const CloseLineContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`

