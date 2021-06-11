/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
    const containerStyle = css`
        border: solid 2px blue;
        border-radius: 8px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    const titleStyle = css({
        margin: "0",
        color: "blue",
    });

    return(
        <div css={containerStyle}>
            <p css={titleStyle}>=Emotion=</p>
            <SButton>FIGHT!!</SButton>
        </div>
    )
}

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