// @ts-ignore
import Nette from "./img/nette.jpg";
// @ts-ignore
import Michael from "./img/michael.jpg";
// @ts-ignore
import Toni from "./img/toni.jpg";
// @ts-ignore
import Luis from "./img/luis.jpg";

interface Person {
  name: string;
  path: string;
  remoteLink?: string;
  avatarLink: string;
  username: string;
  followLink: string;
  emailLink: string;
}

const constants: {
  familyName: string;
  parents: Person[];
  children: Person[];
} = {
  familyName: "Pojtinger",
  parents: [
    {
      name: "Nette",
      username: "@an.nette.pojtinger",
      followLink: "https://www.instagram.com/an.nette.pojtinger/",
      emailLink: "mailto:nette@pojtinger.com",
      path: "/nette",
      avatarLink: Nette
    },
    {
      name: "Michael",
      username: "@michaelpojtinger",
      followLink: "https://www.instagram.com/michaelpojtinger/",
      emailLink: "mailto:michael@pojtinger.com",
      path: "/michael",
      avatarLink: Michael
    }
  ],
  children: [
    {
      name: "Toni",
      username: "@toni.pojtinger",
      followLink: "https://www.instagram.com/toni.pojtinger/",
      emailLink: "mailto:toni@pojtinger.com",
      path: "/toni",
      avatarLink: Toni
    },
    {
      name: "Luis",
      username: "@luispojtinger",
      followLink: "https://www.instagram.com/luispojtinger/",
      emailLink: "mailto:luis@pojtinger.com",
      path: "/luis",
      avatarLink: Luis
    },
    {
      name: "Felicitas",
      username: "@pojntfx",
      followLink: "https://felicitas.pojtinger.com/",
      emailLink: "https://felicitas.pojtinger.com/",
      path: "/felicitas",
      remoteLink: "https://felicitas.pojtinger.com/",
      avatarLink:
        "https://s.gravatar.com/avatar/db856df33fa4f4bce441819f604c90d5?s=512"
    }
  ]
};

export { constants, Person };
