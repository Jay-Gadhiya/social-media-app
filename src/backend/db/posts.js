import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import image1 from "../../assets/n1.jpeg";
import image2 from "../../assets/n3.jpg";
import image3 from "../../assets/n22.jpeg";
import image4 from "../../assets/n4.jpeg";
import image5 from "../../assets/n5.jpeg";
import image6 from "../../assets/n6.jpeg";


/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:"In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "adarshbalika",
    caption : "exploring nature",
    image : image1,
    createdAt: formatDate(),
    updatedAt: formatDate(),

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    content:"I go to nature to be soothed and healed, and to have my senses put in order",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "JohnQuil",
    caption : "wonder of world is here",
    image : image2,

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:"There's a whole world out there, right outside your window. You'd be a fool to miss it",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "cherryblossom",
    caption : "wonder of world is here",
    image : image3,

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:"To forget how to dig the earth and to tend the soil is to forget ourselves",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "chrisbacon",
    caption : "wonder of world is here",
    image : image4,

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:" Study nature, love nature, stay close to nature. It will never fail you",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "jackaranda",
    caption : "wonder of world is here",
    image : image5,

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:"All my life through, the new sights of Nature made me rejoice like a child.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "lizadoolittle",
    caption : "wonder of world is here",
    image : image6,

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

