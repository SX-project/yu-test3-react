export const StyledJsx = () => {
    return(
        <>
            <div className="container">
                <p className="title">=Styled Jsx=</p>
                <button className="button">FIGHT!!</button>
            </div>
            <style jsx = "true">{`
                .container {
                    border: solid 2px blue;
                    border-radius: 8px;
                    padding: 8px;
                    margin: 8px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                .title {
                    margin: 0;
                    color: blue;
                }

                .button{
                    border: none;
                    border-radius: 8px;
                    background-color: lightgreen;
                    padding: 8px;
                    &:hover {
                        background-color: aquamarine;
                        color: white;
                        cursor: pointer;
                    }
                }

            `}</style>
        </>
    )
}