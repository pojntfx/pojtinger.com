interface Person {
    name: string
    path: string
}

const constants: {
    parents: Person[],
    children: Person[],
} = {
    parents: [
        {
            name: "Nette",
            path: "/nette"
        }
    ],
    children: [
        {
            name: "Toni",
            path: "/toni"
        }
    ]
};

export {
    constants
}