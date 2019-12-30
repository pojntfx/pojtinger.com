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
      avatarLink:
        "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-19/s320x320/36986286_2142786699331022_1530632417654603776_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_ohc=3Fxq7qeP95MAX-QJWaJ&oh=961ade99e7c780dd187fbc200ff42c67&oe=5E9B885A"
    },
    {
      name: "Michael",
      username: "@michaelpojtinger",
      followLink: "https://www.instagram.com/michaelpojtinger/",
      emailLink: "mailto:michael@pojtinger.com",
      path: "/michael",
      avatarLink:
        "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-19/s150x150/13381258_259063154456746_965134386_a.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_ohc=bJO_AC83qioAX-7deWB&oh=ca2c3f7b4f2258d7c3665fc283e96522&oe=5E8D2F72"
    }
  ],
  children: [
    {
      name: "Toni",
      username: "@toni.pojtinger",
      followLink: "https://www.instagram.com/toni.pojtinger/",
      emailLink: "mailto:toni@pojtinger.com",
      path: "/toni",
      avatarLink:
        "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-19/s320x320/69318062_511613642922670_4868879376055271424_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_ohc=1A2_3t1c1jYAX-Nq3sI&oh=94dd56862fac9b1179ff951577a6174b&oe=5EA00918"
    },
    {
      name: "Luis",
      username: "@luispojtinger",
      followLink: "https://www.instagram.com/luispojtinger/",
      emailLink: "mailto:luis@pojtinger.com",
      path: "/luis",
      avatarLink:
        "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-19/s320x320/57625259_2211766638936320_6528318777744949248_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_ohc=j8kaFl1Ir60AX8W8zZe&oh=3d34c898428bbacd0cad9c99f65562c9&oe=5E98FD2E"
    },
    {
      name: "Felix",
      username: "@pojntfx",
      followLink: "https://felix.pojtinger.com/",
      emailLink: "https://felix.pojtinger.com/",
      path: "/felix",
      remoteLink: "https://felix.pojtinger.com/",
      avatarLink:
        "https://s.gravatar.com/avatar/db856df33fa4f4bce441819f604c90d5?s=512"
    }
  ]
};

export { constants, Person };
