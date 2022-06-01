import React from 'react'
import styled from 'styled-components'

function Trending() {
    return (
        <Container>
            <h4>Trendings</h4>
            <ContentComponent>
                <Wrap>
                    <img src="/images/viewers-national.png"/>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png"/>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png"/>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png"/>
                </Wrap>
            </ContentComponent>
        </Container>
    )
}

export default Trending

const ContentComponent = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Container = styled.div`
    padding: 0 0 26px;
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0/ 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100px;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        transform: scale(1.05);
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
        rgba(0 0 0/ 72%) 0px 30px 22px -10px;
        border-color: rgba(249,249,249,0.8);
    }
`