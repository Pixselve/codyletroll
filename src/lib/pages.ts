const settings: Record<string, Settings> = {
  "cody": {
    backgroundColor: "#f1ff59",
    textMainColor: "#00F7FF",
    textSecondaryColor: "#77FF00",
    textMainContent: "$name vous a Codysé !",
    textSecondaryContent: "Gros bisous sur tes joues mon loulou",
    imageURL: "/userPictures/cody.webp",
    title: "$name a quelque chose à vous dire",
    description: "Hey ! C'est moi $name. J'ai vraiment envie de te dire quelque chose... Mais je t'avoue que je ne sais pas trop comment m'y prendre. ❤😘😍💋"
  },
  "cande": {
    backgroundColor: "#ce03fc",
    textMainColor: "#00F7FF",
    textSecondaryColor: "#77FF00",
    textMainContent: "$name vous a Candisé !",
    textSecondaryContent: "Tu veux être ma lampe de chevet ? Pour que je t'allume tous les soirs",
    imageURL: "/userPictures/cande.webp",
    title: "$name a quelque chose à vous dire",
    description: "Hey ! C'est moi $name. J'ai vraiment envie de te dire quelque chose... Mais je t'avoue que je ne sais pas trop comment m'y prendre. ❤😘😍💋"
  },
  "guigui": {
    backgroundColor: "#99c9ff",
    textMainColor: "#fc03ba",
    textSecondaryColor: "#f0fc03",
    textMainContent: "Eh non, c'est toi qui t'es fait livré par $name !",
    textSecondaryContent: "Guigui's Delivery Service à la rescousse",
    imageURL: "/userPictures/guigui.webp",
    title: "$name a quelque chose à vous livrer",
    description: "Toc toc toc ! J'ai un colis de la part de $name !"
  },
  "pascal": {
    backgroundColor: "#73b0af",
    textMainColor: "#16e7fa",
    textSecondaryColor: "#b5f9ff",
    textMainContent: "$name vous a kidnappé dans sa cave à Lolis !",
    textSecondaryContent: "Tu peux crier comme tu veux, personne ne t'entendra dans mes plantations à Lolis",
    imageURL: "/userPictures/pascal.webp",
    title: "$name a quelque chose à vous dire",
    description: "Hey ! C'est moi $name. J'ai vraiment envie de te dire quelque chose... Mais je t'avoue que je ne sais pas trop comment m'y prendre. ❤😘😍💋"
  },
  "testiscala": {
    backgroundColor: "#0377fc",
    textMainColor: "#fc03ba",
    textSecondaryColor: "#f0fc03",
    textMainContent: "$name vous a Testiboulé !",
    textSecondaryContent: "J'ai pas le permis pour piloter une fiat mais j'ai le permis pour piloter ton fiak",
    imageURL: "/userPictures/testiscala.webp",
    title: "$name a quelque chose à vous dire",
    description: "Hey ! C'est moi $name. J'ai vraiment envie de te dire quelque chose... Mais je t'avoue que je ne sais pas trop comment m'y prendre. ❤😘😍💋"
  },
  "yami": {
    backgroundColor: "#7EB260",
    textMainColor: "#8428c9",
    textSecondaryColor: "#b05fed",
    textMainContent: "$name vous a YAtoMIsé !",
    textSecondaryContent: "Je te demande de te préparer parce que je vais te GOUMER",
    imageURL: "/userPictures/yami.webp",
    title: "$name a quelque chose à vous chuchoter",
    description: "Yo ! C'est moi $name. J'ai vraiment envie de te dire quelque chose... Depêche toi de cliquer avant que je ne te goume !🔪"
  },
  "yanis": {
    backgroundColor: "#0E0E0E",
    textMainColor: "#C60B0B",
    textSecondaryColor: "#8615FF",
    textMainContent: "Noooon, c'était un piège !",
    textSecondaryContent: "Kh..! Maudit $name ! Transgresser la convention de Genève de la sorte ! \n Fait attention ! Une marée de creepy crawlies approche ta position !",
    imageURL: "/userPictures/yanis.webp",
    title: "$name a besoin de ton aide",
    description: "Regardes là bas ! On dirais $name en train de ramper, va vite l'aider !"
  },
  "toto": {
    backgroundColor: "#D1D1D1",
    textMainColor: "#4600FF",
    textSecondaryColor: "#FF0059",
    textMainContent: "Trop cool ! $name vous a totomisé 😱",
    textSecondaryContent: "Oh merde, j'ai perdu mon numéro, j'peux avoir le tiens 😉😎❤😜 ?",
    imageURL: "https://cdn.discordapp.com/attachments/823314539407343646/823317296217849916/toto_detoure.png",
    title: "$name a quelque chose à vous dire",
    description: "Ouvre ce message de $name, tu sera pas déçu"
  }
};

export default settings;

export interface Settings {
  backgroundColor: string
  textMainColor: string,
  textMainContent: string
  textSecondaryColor: string,
  textSecondaryContent: string
  imageURL: string,
  title: string,
  description: string,
  music?: string,
  ogImage?: string
}


export function getPages() {
  let result: any[] = [];
  for (const pagesKey in settings) {
    result = [...result, { ...settings[pagesKey], author: pagesKey }];
  }
  return result;
}
