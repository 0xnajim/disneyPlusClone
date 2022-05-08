import React from 'react'
import styled from 'styled-components';


const Details = () => {
    return (
        <Container>
            <Background>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg' />
            </Background>
            <ImageTitle>
                <img src='https://1.bp.blogspot.com/-SFIcHjsKs6w/WsGKiBqr8sI/AAAAAAAAVx0/mrXzRPfHjOktGXKq9UIPF-ieUs3jiKejgCLcBGAs/s1600/Pixar-Bao-Logo.jpg' />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png' />
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                2018 . 7m .  Family , kids , Animation
            </Subtitle>
            <Description>
                An ageing Chinese mother, feeling alone when her child moves out, gets a second chance at motherhood when one of her dumplings comes to life.
            </Description>
        </Container>
    )
}

export default Details

const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index:-1;
    opacity: 0.8;

    img{
        width: 100%; 
        height: 100%; 
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    heigth: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 50px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
    `

const PlayButton = styled.button`
    cursor: pointer;
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    left-spacing: 1.8px;
    
    &:hover{
        background:rgb(190, 190, 190)
    }
    `
    const TrailerButton = styled.button`
    cursor: pointer;
    margin-right: 22px;
    display: flex;
    border-radius: 4px;
    height: 56px;
    padding: 0px 24px;
    align-items: center;
    background: rgb(0,0,0, 0.3);
    border: 1px solid rgba(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
    &:hover{
        background:rgb(190, 190, 190)
    }
    `
    const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgb(0, 0, 0, 0.6);
    cursor: pointer;
    span{
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0, 0, 0);
`

const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 15px;
    margin-top: 26px;
`
const Description = styled.div`
    max-width: 760px;
    line-height: 1.4;
    font-size:20px;
    margin-top: 16px;
    color: (249, 249, 249);
`