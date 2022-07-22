import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0%,
    10%,
    100% {
        width: 0;
    }
    70%,
    90% {
        width: 100%;
}
`

export const BoxLoaderFirst = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BoxLoaderSecond = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoaderStyled = styled.h2`
    position: relative;
    font-size: 24px;
    color: #252839;
    -webkit-text-stroke: 0.3px #383d52;
    text-transform: uppercase;
    &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    color: #01fe87;
    -webkit-text-stroke: 0 #383d52;
    border-right: 2px solid #01fe87;
    overflow: hidden;
    animation: ${fadeIn}  3s linear infinite;
    }
`

