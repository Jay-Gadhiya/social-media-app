import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import img1 from "../../assets/dpp1.jpeg";
import img2 from "../../assets/dpp2.jpeg";
import img3 from "../../assets/dpp3.jpg";
import img4 from "../../assets/dpp4.jpg";
import img5 from "../../assets/dpp5.jpg";
import mainProfile from "../../assets/main-dp.jpeg";


/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    email : "adarshbalika@gmail.com",
    bio: "Hy, i am aspiring web developer",
    website : "https//adarshportfolio.com",
    img : mainProfile,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Quil",
    username: "JohnQuil",
    password: "john23",
    email : "john@gmail.com",
    bio: "Hy, i am aspiring web developer",
    website : "https//john.com",
    img : img1,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Cherry",
    lastName: "Blossom",
    username: "cherryblossom",
    password: "cherry123",
    email : "cherry@gmail.com",
    bio: "Hy, i am aspiring web developer",
    website : "https//Cherry.com",
    img : img5,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Liza",
    lastName: "Doolittle",
    username: "lizadoolittle",
    password: "liza123",
    email : "liza@gmail.com",
    bio: "Hy, i am aspiring web developer",
    website : "https//liza.com",
    createdAt: formatDate(),
    img : img2,
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Chris",
    lastName: "Bacon",
    username: "chrisbacon",
    password: "chris123",
    email : "chris@gmail.com",
    bio: "Hy, i am aspiring web developer",
    website : "https//chris.com",
    img : img4,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jack",
    lastName: "Aranda",
    username: "jackaranda",
    password: "jack123",
    email : "jack@gmail.com",
    bio: "Hy, i am aspiring web developer",
    website : "https//jack.com",
    img : img3,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
