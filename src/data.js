import ndcisImg from "./assets/ndcis.jpg"
import stepsImg from "./assets/steps.png"
import genshinImg from "./assets/genshin.jpg"
import thesisImg from "./assets/thesis.jpg"

export default [
    {
        id: 0,
        name: "NDCIS: Nicdao Dental Clinic Inventory System",
        description: "A project for Nicdao Dental Clinic which is being used as the client's inventory system for " +
        "their dental instruments. This app has a login page with 2 types of users, namely dentist and assistant. " + 
        "The database includes a CRUD system as well as a printable log of the database.",
        image: ndcisImg,
        date: "August 2021 - May 2022",
    },
    {
        id: 1,
        name: "STEPS QMS - Queue Management System",
        description: "A software application that we built during my time as an intern in the Santo Tomas e-Service Providers. " +
        "This app is the prototype that would later be used by the treasury office of the University of Santo Tomas. This involves " +
        "a queueing system with priority queues for elderly/diasbled people.",
        image: stepsImg,
        date: "January 2023 - May 2023",
    },
    {
        id: 2,
        name: "Genshin Impact Character Planner",
        description: "A mobile project based on the video game \"Genshin Impact's\" character planner. This app was built with flutter and " +
        "applies the basic principles of mobile programming like widgets and widget trees. This application can create an instance of a character " + 
        "and calculate differents statistics of the character using api calls and JSON data.",
        image: genshinImg,
        date: "October 2021 - December 2021",
    },
    {
        id: 3,
        name: "ML Research on Pneumonia Detection with Image Enhancement Algorithms",
        description: "A thesis based on Kundu et. al.'s research on Pneumonia Detection. This study uses Convolutional Neural Networks to " +
        "detect pneumonia on patients. Our group modified the base research by using a number of enhancement techniques like contrast enhancement " + 
        "and Image segmentation. The model will produce a classification whether Normal or Pneumonia.",
        image: thesisImg,
        date: "January 2022 - December 2022",
    }
]
