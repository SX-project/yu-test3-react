export const InlineStyle = () => {

    const containerStyle = {
        border: "solid 2px blue",
        borderRadius: "8px",
        padding: "8px",
        margin: "8px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }
    const titleStyle = {
        margin: "0",
        color: "blue",
    }
    const buttonStyle = {
        border: "none",
        borderRadius: "8px",
        backgroundColor: "lightgreen",
        padding: "8px"
    }

    return(
        <div style={containerStyle}>
            <p style={titleStyle}>＝Inline Style＝</p>
            <button style={buttonStyle}>FIGHT!!</button>
        </div>
    )
};