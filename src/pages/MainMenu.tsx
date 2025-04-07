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
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "40px"
                }}
            >
                <div style={{ fontSize: "36px" }}>Play</div>
                <div style={{ fontSize: "36px" }}>Portfolio</div>
                <div style={{ fontSize: "36px" }}>About</div>
                <div style={{ fontSize: "36px" }}>Contact</div>
            </div>
        </div>
    );
};

export default MainMenu;