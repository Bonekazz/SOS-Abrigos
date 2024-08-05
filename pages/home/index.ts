import BoneModal from "../../lib/Modals";


const openHelpBtn = document.getElementById("help-btn") as HTMLButtonElement;
const closeHelpBtn = document.querySelectorAll<HTMLElement>(".close-help-modal") as NodeListOf<HTMLElement>;
const helpModalDiv = document.getElementById("help-modal-div") as HTMLElement;

new BoneModal({wrapperElement: helpModalDiv, openTriggers: [openHelpBtn], closeTriggers: closeHelpBtn});
