import { useSprings } from "@react-spring/web";
import { MainMenuOptions } from "../../data/mainMenuOptions";

export const useMainMenuButtonSprings = () => {
    const [mainMenuButtonsSprings, mainMenuButtonsApi] = useSprings(
        MainMenuOptions.length, 
        () => ({
            color: "#f2f2f2"
        })
    );

    // TODO: Create the handler for item clicking for main menu buttons
    /*const handleItemClick = (index: number) => {
        if(mainMenuButtonsSprings[index].color.get() === "#f2f2f2")
    };*/
}