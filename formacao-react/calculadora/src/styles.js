import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    border: 2px solid #000;
    box-shadow: 2px 3px 8px #000;
    border-radius: 5px;
    background-color: #FFF;
    width: 80%;
    flex-wrap: wrap;
    max-width: 400px;
    min-height: 350px;
`
export const Row = styled.span`
    display: flex;
    align-items: center;
    width: 100%;
`