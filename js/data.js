let site = document.querySelector(".site-section").id;
let x = "";
let y = "";
let z = "";
let host = "";
let username = "";
let password = "";
let to = "";
let from = "";

const data = {
    index: [
        {
            org_name: "post-thumbnail",
            clients: [
                {
                    id: 1,
                    title: "Beijing streets empty as Covid cases explode",
                    thumbnail: 
                        "https://cdn.cnn.com/cnnnext/dam/assets/221214120831-beijing-china-ciudad-fantasma-restricciones-covid19-selina-wang-pkg-digital-00001330-large-tease.jpg",
                    header: 
                        "A significant and spreading outbreak -- a first for the Chinese capital -- comes a week after leaders eased the country's restrictive zero-Covid policy",
                    category: "covid",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "st",
                        position: "col-01",
                    }
                }
            ],
        }, 
        {
            org_name: "small-content",
            clients: [
                {
                    id: 2,
                    title: "Why people in China are panic buying canned yellow peaches",
                    url: "",
                    video: false,
                    content: {

                    },
                    location: {
                        type: "st",
                        position: "col-01",
                    }
                },
                {
                    id: 3,
                    title: "Hong Kong scraps some remaining restrictions for travelers",
                    url: "",
                    video: false,
                    content: {

                    },
                    location: {
                        type: "st",
                        position: "col-01",
                    },
                }, 
                {
                    id: 4,
                    title: "Here's why streets are empty in Beijing despite ease of Covid restrictions",
                    url: "",
                    video: true,
                    content: {

                    },
                    location: {
                        type: "st",
                        position: "col-01",
                    },
                },
                {
                    id: 5,
                    title: "Chinese student appears in US court over alleged threats to pro-democracy advocate",
                    url: "",
                    video: false,
                    content: {

                    },
                    location: {
                        type: "st",
                        position: "col-03",
                    },
                },
                {
                    id: 6,
                    title: "France ends Morocco's Qatar 2022 dream and advances to World Cup final",
                    url: "",
                    video: false,
                    content: {

                    },
                    location: {
                        type: "st",
                        position: "col-03",
                    },
                },
                {
                    id: 7,
                    title: "Bali bomber apologizes for nightclub attacks that killed 202",
                    url: "",
                    video: false, 
                    content: {

                    },
                    location: {
                        type: "st",
                        position: "col-03"
                    }
                },
                {
                    id: 8,
                    title: "American one of seven charged in Russian military grade weapon smuggling ring",
                    url: "",
                    video: false,
                    content: {

                    },
                    location: {
                        type: "st",
                        position: "col-03",
                    },
                }, 
                {
                    id: 16,
                    title: "China's economy faltered before major Covid policy shift",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-01",
                    }
                },
                {
                    id: 17,
                    title: "Bernard Arnault just became the world's richest person. So who is he?",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-01",
                    }
                },
                {
                    id: 18,
                    title: "An electric scooter company just pulled off Russia's only IPO of the year",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-01",
                    }
                },
                {
                    id: 19,
                    title: "The Fed lifts rates by half a point, acknowledging that inflation is finally easing",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-01",
                    }
                },
                {
                    id: 20,
                    title: "Children's health leaders call for emergency response as respiratory viruses continue to spread across the US",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-02",
                    }
                },
                {
                    id: 21,
                    title: "Pfizer says Covid-19 vaccine list price could be $130 per dose once government contracts end",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-02",
                    }
                },
                {
                    id: 22,
                    title: "Quick and stealthy 'Scrabble variants' are poised to drive a winter Covid-19 surge",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-02",
                    }
                },
                {
                    id: 23,
                    title: "Long Covid and smell: How to get the treatment you need",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-02",
                    }
                },
                {
                    id: 24,
                    title: "US intel agencies likely missed chances to investigate Covid pandemic's origin, House Democrats' report says",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-03",
                    }
                },
                {
                    id: 25,
                    title: "Moderate Republicans weigh hardball tactics to counter anti-McCarthy crew",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-03",
                    }
                },
                {
                    id: 26,
                    title: "New Hampshire Gov. Sununu says 'we're moving on' from Trump",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-03",
                    }
                },
                {
                    id: 27,
                    title: "Stephen Miller-led group emerges as top legal foe of Biden initiatives",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-03",
                    }
                },
                {
                    id: 28,
                    title: "'We are on top of the world:' Argentina's players struggle to find the words to sum up their World Cup triumph",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-04",
                    }
                },
                {
                    id: 29,
                    title: "How has holding a World Cup changed the way the world sees Qatar?",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-04",
                    }
                },
                {
                    id: 30,
                    title: "The real cost of sponsoring this World Cup",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-04",
                    }
                },
                {
                    id: 31,
                    title: "They helped build Qatar's World Cup. Now they are struggling to survive",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-04",
                    }
                },
                {
                    id: 32,
                    title: "How introverts can stay sane this holiday season",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-05",
                    }
                },
                {
                    id: 33,
                    title: "Do you really need deodorant? Experts weigh in",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-05",
                    }
                },
                {
                    id: 34,
                    title: "Here's how many times you need to reuse your reusable grocery bags",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-05",
                    }
                },
                {
                    id: 35,
                    title: "Researchers have found that snakes have a clitoris. Here's what it could mean",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-05",
                    }
                },
            ],
        }, 
        {
            org_name: "child-post-thumbnail",
            clients: [
                {
                    id: 9,
                    title: "Indian and Chinese troops fight with sticks and bricks in video",
                    thumbnail: 
                        "https://cdn.cnn.com/cnnnext/dam/assets/221214144052-clash-between-indian-and-chinese-troops-medium-tease.jpg",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "st",
                        position: "col-02",
                    },
                },
                {
                    id: 10,
                    title: "This country has arrested 2% of its adult population in its war on gangs",
                    thumbnail: 
                        "https://cdn.cnn.com/cnnnext/dam/assets/221214134700-el-salvador-soldiers-file-120522-medium-tease.jpg",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "st",
                        position: "col-02",
                    },
                },
                {
                    id: 11,
                    title: "Chinese diplomats wanted by UK police for questioning return to Beijing",
                    thumbnail: 
                        "https://cdn.cnn.com/cnnnext/dam/assets/221017110705-protest-turns-violent-outside-chinese-consulate-medium-tease.jpg",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "st",
                        position: "col-03",
                    },
                },
                {
                    id: 12,
                    title: "Warren Buffett is beating the market this year",
                    thumbnail: 
                        "https://cdn.cnn.com/cnnnext/dam/assets/221007135046-warren-buffett-050419-file-large-169.jpg",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-01",
                    },
                }, 
                {
                    id: 13,
                    title: "Paxlovid reduces risk of long Covid, Veterans Affairs study finds",
                    thumbnail: 
                        "https://cdn.cnn.com/cnnnext/dam/assets/220722220136-paxlovid-large-tease.jpg",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-02",
                    },
                },
                {
                    id: 14,
                    title: "Biden administration to pilot new portions of citizenship test next year",
                    thumbnail:
                        "https://media.cnn.com/api/v1/images/stellar/prod/221213190400-white-house-exterior-0721.jpg?c=16x9&q=h_270,w_480,c_fill",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-03",
                    },
                },
                {
                    id: 15,
                    title: "How a 2003 song became the unofficial anthem of Argentina's World Cup success",
                    thumbnail:
                        "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F221219214614-pba-nacho-pkg.jpg",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-04",
                    },
                },
                {
                    id: 16,
                    title: "Over 80% of adults don't meet US strength guidelines. Don't forget these muscles",
                    thumbnail:
                        "https://cdn.cnn.com/cnnnext/dam/assets/221209172551-02-overlooked-muscles-birdog-crunch-large-169.jpeg",
                    url: "",
                    content: {

                    },
                    location: {
                        type: "nd",
                        position: "col-05",
                    },
                }
            ],
        }
    ],

    news: [
        
    ],

    covid: [

    ],

    election: [

    ],

    sport: [

    ],

    healthy: [

    ],

    city: [
        {
            org_name: "london",
            clients: [
                
            ]
        },
        {
            org_name: "tokyo",
            clients: [

            ]
        },
        {
            org_name: "paris",
            clients: [

            ]
        },
        {
            org_name: "new york",
            clients: [

            ]
        },
        {
            org_name: "dubai",
            clients: [

            ]
        },
    ],

    feedback: [

    ],
};

