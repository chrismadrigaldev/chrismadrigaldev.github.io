import { buttonStyle } from "../../styles/main-menu/mainMenuStyles";

export const MainMenuText = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                padding: "40px"
            }}
        >
            <button style={buttonStyle}>Play</button>
            <button style={buttonStyle}>Portfolio</button>
            <button style={buttonStyle}>About</button>
            <button style={buttonStyle}>Contact</button>
        </div>
    );
}