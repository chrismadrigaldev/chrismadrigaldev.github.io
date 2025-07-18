import { 
	mainMenuButtonStyle, 
	mainMenuContainerStyle 
} from "../../styles/main-menu/mainMenuStyles";

export const MainMenuText = () => {
    return (
        <div style={mainMenuContainerStyle}>
            <button style={buttonStyle}>Play</button>
            <button style={buttonStyle}>Portfolio</button>
            <button style={buttonStyle}>About</button>
            <button style={buttonStyle}>Contact</button>
        </div>
    );
}