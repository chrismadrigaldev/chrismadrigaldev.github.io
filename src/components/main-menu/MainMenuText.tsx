import { 
	mainMenuButtonStyle, 
	mainMenuContainerStyle 
} from "../../styles/main-menu/mainMenuStyles";

export const MainMenuText = () => {
    return (
        <div style={mainMenuContainerStyle}>
            <button style={mainMenuButtonStyle}>Portfolio</button>
            <button style={mainMenuButtonStyle}>About</button>
            <button style={mainMenuButtonStyle}>Contact</button>
        </div>
    );
}