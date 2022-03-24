import canicamp from "../../assets/images/canicamp.jpeg"
import blue42 from "../../assets/images/blue-42.png"
import stockwatch from "../../assets/images/stockwatch.png"
import noteTaker from "../../assets/images/note-taker.png"
import workSchedule from "../../assets/images/work-schedule.png"


const data = 
[
    {
        "key": "1",
        "title": "CanICamp",
        "image": canicamp,
        "description": "This app allows you search for National Parks by state and make a quest map to map your own outdoor adventure. ",
        "tech": "HTML, CSS, JAVASCRIPT, JQUERY, BULMA",
        "deployedTo": "https://awolrob.github.io/Project1/",
        "gitRepo": "https://github.com/awolrob/Project1"
    },
    {
        "key": "2",
        "title": "Blue42",
        "image": blue42,
        "description": "Are you a college football fan? Do you like fantasy football but don't feel like going through the hassle of picking individual players? Blue42 lets you create an account so you and your friends can pick a few overall teams instead. Scores are calculated by the difference of the score in the actual games and added to a total for the week.",
        "tech": "HandleBars, CSS, JavaScript, Materialize, MySQL, Sequelize, Various NPM packages, Third Party API (college football), Node.js, MVC",
        "deployedTo": "https://secret-everglades-56686.herokuapp.com/",
        "gitRepo": "https://github.com/DanM1996/blue-42"    
    },
    {
        "key": "4",
        "title": "Stock Watch",
        "image": stockwatch,
        "description": "Create an account or log in, search for stocks and save them in a dashboard where you can keep track of their trends.",
        "tech": "HTML, CSS, Javascript, MongoDB, GraphQL/Apollo, React, Node, Ant Design, Bootstrap, Stock API's Service Worker/PWA, JWT Authentication",
        "deployedTo": "www.stockwatch.life",
        "gitRepo": "https://github.com/awolrob/stock-watch"       
    },
    {
        "key": "4",
        "title": "Note Taker",
        "image": noteTaker,
        "description": "This application allows you to make a note and save it so you don't forget what you have to do during the day.",
        "tech": "HTML, CSS, Javascript, Express, Node, Bootstrap",
        "deployedTo": "https://protected-cliffs-17594.herokuapp.com/notes",
        "gitRepo": "https://github.com/GinleyP87/note-taker"       
    },
    {
        "key": "5",
        "title": "Work-Day Scheduler",
        "image": workSchedule,
        "description": "This application allows you to keep track of your work day by the hour. A user can simply add a note and the js in the background will turn the rows red as the hour passes. The rowes will be green if the hour has yet to pass",
        "tech": "HTML, CSS, Javascript, Bootstrap",
        "deployedTo": "https://ginleyp87.github.io/work-day-scheduler/",
        "gitRepo": "https://github.com/GinleyP87/work-day-scheduler"  
    }
];

export default data