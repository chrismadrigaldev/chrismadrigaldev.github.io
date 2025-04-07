export const MainMenuText = () => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                padding: "40px"
            }}
        >
            <button 
                style={{ 
                    fontFamily: "var(--fontFamily)",
                    fontSize: "36px",
                    background: "none",
                    border: "none"
                }}
            >
                Play
            </button>
            <button 
                style={{ 
                    fontFamily: "var(--fontFamily)",
                    fontSize: "36px",
                    background: "none",
                    border: "none"
                }}
            >
                Portfolio
            </button>
            <button 
                style={{ 
                    fontFamily: "var(--fontFamily)",
                    fontSize: "36px",
                    background: "none",
                    border: "none"
                }}
            >
                About
            </button>
            <button 
                style={{ 
                    fontFamily: "var(--fontFamily)",
                    fontSize: "36px",
                    background: "none",
                    border: "none"
                }}
            >
                Contact
            </button>
        </div>
    );
}