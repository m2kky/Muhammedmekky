// This file defines the list of companies / organizations that have collaborated or offered internships.
// Each object should contain at least a `name` and a `logo` field. Feel free to extend the fields as your
// application evolves (e.g. add `url`, `description`, etc.)

export type Collaboration = {
  name: string;
  logo: string; // path to an image placed in the public folder
};

export const collaborations: Collaboration[] = [
  {
    name: "Qudraat",
    logo: "/internship/qudraat.svg",
  },
  {
    name: "Elaraby Group",
    logo: "/internship/Elaraby.svg",
  },
  {
    name: "Concentrix",
    logo: "/internship/Concentrix.svg",
  },
];
