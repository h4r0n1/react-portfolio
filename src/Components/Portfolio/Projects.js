import { uid } from "../../Utils/Uid";
const id = uid();

export const projects = [
  {
    id: id,
    title: "Tayeur",
    description: "Order management system for tailors.",
    githubLink: "",
    deployLink: "http://web.recette.tayeur.com",
    techno: ["React JS", "Ionic", "Django"],
  },
  {
    id: id,
    title: "Bakeli Carrière",
    description:
      "Bakeli Carrière helps you find an internship during or at the end of your training.",
    githubLink: "",
    deployLink: "https://carriere.bakeli.tech",
    techno: ["React JS", "Bootstrap", "Laravel"],
  },
  {
    id: id,
    title: "Bakeli-SI",
    description:
      "Bakeli School of Technology's information system created for a better management of students.",
    githubLink: "",
    deployLink: "https://alter.bakeli.tech",
    techno: ["React JS", "Bootstrap", "Laravel"],
  },
  {
    id: id,
    title: "Bakeli Store",
    description:
      "Bakeli Store is a digital library created by Bakeli School of Technology's students with applications templates.",
    githubLink: "",
    deployLink: "https://Store.bakeli.tech",
    techno: ["Wordpress"],
  },
  {
    id: id,
    title: "React-Portfolio",
    description: "React version of my HTML & CSS Portfolio.",
    githubLink: "https://github.com/h4r0n1/react-portfolio",
    deployLink: "",
    techno: ["React JS", "Syled-Components", "Vite"],
  },
];
