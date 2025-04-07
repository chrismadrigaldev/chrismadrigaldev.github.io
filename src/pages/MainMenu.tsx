import { MainMenuText } from "../components/MainMenuText";

const MainMenu = () => {
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
        }}>
            <img
                src="/gifs/retrosun.gif"
                style={{
                    width: "640px",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            />
            <MainMenuText />
        </div>
    );
};

export default MainMenu;