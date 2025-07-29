import {ButtonLiContainer, ButtonImage, ImageItem} from './styledComponents'

const Buttons = props => {
  const {buttonDetails, onGetId} = props
  const {id, imageUrl} = buttonDetails
  const lowercaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, imageUrl)
  }

  return (
    <ButtonLiContainer>
      <ButtonImage
        type="button"
        data-testid={`${lowercaseId}Button`}
        onClick={onClickButton}
      >
        <ImageItem src={imageUrl} alt={id} />
      </ButtonImage>
    </ButtonLiContainer>
  )
}

export default Buttons


import styled from 'styled-components'

export const ButtonLiContainer = styled.li`
list-style: none;
display: flex;
flex-direction: row;
justify-content: center;
width: 50%
`

export const ButtonImage = styled.button`
background-color: transparent;
border: 0;
cursor: pointer;
`

export const ImageItem = styled.img`
height:150px;
width: 150px;
`
