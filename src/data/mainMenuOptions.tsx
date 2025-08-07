type MainMenuOption = {
    id: string;
    label: string;
    isSelected: boolean;
}

export const MainMenuOptions: MainMenuOption[] = [
    {
        id: "play",
        label: "Play",
        isSelected: true
    },
    {
        id: "portfolio",
        label: "Portfolio",
        isSelected: false
    },
    {
        id: "about",
        label: "About",
        isSelected: false
    },
    {
        id: "contact",
        label: "Contact",
        isSelected: false
    }
]