import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Formals",
    imagPath: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwc2hvZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Boots",
    imagPath: 'https://images.unsplash.com/photo-1646215279503-7dd99848a8ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJvb3RzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    imagPath: 'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNwb3J0cyUyMHNob2VzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "Sneakers",
    imagPath: 'https://images.unsplash.com/photo-1624006389438-c03488175975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "Hiking",
    imagPath: 'https://images.unsplash.com/photo-1581017316696-709bf1da2ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGhpa2luZyUyMHNob2VzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  }
];
