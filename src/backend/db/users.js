import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Quil",
    username: "JohnQuil55",
    password: "john23",
    email : "john@gmail.com",
    bio: "Hy, i am aspiring web developer",
    website : "https//john.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Cherry",
    lastName: "Blossom",
    username: "Cherry34",
    password: "cherry123",
    email : "cherry@gmail.com",
    bio: "Hy, i am aspiring web developer",
    website : "https//Cherry.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Liza",
    lastName: "Doolittle",
    username: "Liza444",
    password: "liza123",
    email : "liza@gmail.com",
    bio: "Hy, i am aspiring web developer",
    website : "https//liza.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Chris",
    lastName: "Bacon",
    username: "ChrisVolter",
    password: "chris123",
    email : "chris@gmail.com",
    bio: "Hy, i am aspiring web developer",
    website : "https//chris.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jack",
    lastName: "Aranda",
    username: "jack007",
    password: "jack123",
    email : "jack@gmail.com",
    bio: "Hy, i am aspiring web developer",
    website : "https//jack.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
