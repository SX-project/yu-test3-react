import styled from "styled-components";

export const StyledComponents = () => {
    return(
        <SContainer>
            <STitle>=Styled Components=</STitle>
            <SButton>FIGHT!!</SButton>
        </SContainer>
    )
}

const SContainer = styled.div`
    border: solid 2px blue;
    border-radius: 8px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const STitle = styled.p`
    margin: 0;
    color: blue;
`

const SButton = styled.button`
    border: none;
    border-radius: 8px;
    background-color: lightgreen;
    padding: 8px;
    &:hover {
        background-color: aquamarine;
        color: white;
        cursor: pointer;
`