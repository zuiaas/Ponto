export function createGameButton({

    id,
    divClass,
    icon,
    idImg,
    imgClass,
    label

}) {

    const button = document.createElement("button");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");

    button.id = id;
    button.type = 'button';
    button.className = "game-button border-button-stroke border-[1px]  bg-gradient-to-br from-gameButton-midOne/90 to-gameButton-midTwo  opacity-0 scale-125 transition-all duration-700 ease-out flex flex-col rounded-3xl p-4 justify-between items-center w-32 h-32";

    div.className = `${divClass || "icon-container bg-[#2D3C4F]  transition-all 0.2s ease-in-out flex justify-center p-4 rounded-full w-14 h-14"}`;

    img.id = `${idImg || "icon-default"}`;
    img.src = icon;
    img.className = imgClass || '';

    title.className = "text-xl text-yellow-500";
    title.textContent = label;

    div.appendChild(img);
    button.appendChild(div);
    button.appendChild(title);

    return button;
}

// U S I N G

const lineOne = document.querySelector("#line-one");
const lineTwo = document.querySelector("#line-two");

lineOne.appendChild(createGameButton({
    id: "pondeto",
    icon: "../../public/icons/secret.svg",
    imgClass: "brightness-100 invert-none",
    label: "Pondeto"
}));

lineOne.appendChild(createGameButton({
    id: "diario",
    icon: "../../public/icons/secret.svg",
    imgClass: "brightness-100 invert-none",
    label: "Diário"
}));

lineOne.appendChild(createGameButton({
    id: "ponteto",
    icon: "../../public/icons/secret.svg",
    imgClass: "brightness-100 invert-none",
    label: "Ponteto"
}));

lineTwo.appendChild(createGameButton({
    id: "history",
    icon: "../../public/icons/history.svg",
    imgClass: "brightness-100 invert-none",
    label: "Histórico"
}));

lineTwo.appendChild(createGameButton({
    id: "rank",
    icon: "../../public/icons/rank.svg",
    imgClass: "brightness-100 invert-none",
    label: "Ranking"
}));

lineTwo.appendChild(createGameButton({
    id: "settings",
    divClass: "icon-container flex justify-center rounded-full w-14 h-14 border-2 border-[#313E52] overflow-hidden p-0",
    imgClass: "object-cover w-full h-full",
    idImg: "icon-profile",
    icon: "../../public/testing/cat.jpg",
    label: "Perfil"
}));