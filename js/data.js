let site = document.querySelector("section").id;

/* Section */
const index = document.getElementById("sct-dashboard");

/* Data */
let return_data = "";

let x = "";
let y = "";
let z = "";

/* Mail */
let host = "";
let username = "";
let password = "";
let to = "";
let from = "";
let message = "";


const data = {
    index: [
        {
            location: "first-content",
            clients: [
                {
                    id: "post-01",
                    title: "Beijing streets empty as Covid cases explode",
                    thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/221214120831-beijing-china-ciudad-fantasma-restricciones-covid19-selina-wang-pkg-digital-00001330-large-tease.jpg",
                    url: "",
                    type: "main-title-thumbnail-category",
                    category: "covid",
                    content: {
                        date: "",
                        header: "A significant and spreading outbreak -- a first for the Chinese capital -- comes a week after leaders eased the country's restrictive zero-Covid policy",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-02",
                    title: "Indian and Chinese troops fight with sticks and bricks in video",
                    thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/221214144052-clash-between-indian-and-chinese-troops-medium-tease.jpg",
                    url: "",
                    type: "sub-title-thumbnail-category",
                    category: null,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-03",
                    title: "This country has arrested 2% of its adult population in its war on gangs",
                    thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/221214134700-el-salvador-soldiers-file-120522-medium-tease.jpg",
                    url: "",
                    type: "sub-title-thumbnail-category",
                    category: null,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-04",
                    title: "Chinese diplomats wanted by UK police for questioning return to Beijing",
                    thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/221017110705-protest-turns-violent-outside-chinese-consulate-medium-tease.jpg",
                    url: "",
                    type: "sub-title-thumbnail-category",
                    category: null,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-05",
                    title: "Why people in China are panic buying canned yellow peaches",
                    // thumbnail: null,
                    url: "",
                    type: "small-title",
                    // category: null,
                    video: false,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-06",
                    title: "Hong Kong scraps some remaining restrictions for travelers",
                    // thumbnail: null,
                    url: "",
                    type: "small-title",
                    // category: null,
                    video: false,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-07",
                    title: "Here's why streets are empty in Beijing despite ease of Covid restrictions",
                    // thumbnail: null,
                    url: "",
                    type: "small-title",
                    // category: null,
                    video: true,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-08",
                    title: "Chinese student appears in US court over alleged threats to pro-democracy advocate",
                    // thumbnail: null,
                    url: "",
                    type: "small-title",
                    // category: null,
                    video: false,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-09",
                    title: "France ends Morocco's Qatar 2022 dream and advances to World Cup final",
                    // thumbnail: null,
                    url: "",
                    type: "small-title",
                    // category: null,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-10",
                    title: "Bali bomber apologizes for nightclub attacks that killed 202",
                    // thumbnail: null,
                    url: "",
                    type: "small-title",
                    // category: null,
                    video: false,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-11",
                    title: "American one of seven charged in Russian military grade weapon smuggling ring",
                    // thumbnail: null,
                    url: "",
                    type: "small-title",
                    // category: null,
                    video: false,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
            ]
        }, 
        {
            location: "second-content",
            clients: [
                {
                    name: "TLBT Business",
                    link: "",
                    details: [
                        {
                            id: "post-12",
                            title: "Warren Buffett is beating the market this year",
                            thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/221007135046-warren-buffett-050419-file-large-169.jpg",
                            url: "",
                            type: "sub-title-thumbnail",
                            category: null,
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-13",
                            title: " China's economy faltered before major Covid policy shift",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-14",
                            title: "Bernard Arnault just became the world's richest person. So who is he?",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-15",
                            title: "An electric scooter company just pulled off Russia's only IPO of the year",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-16",
                            title: "The Fed lifts rates by half a point, acknowledging that inflation is finally easing",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                    ]
                },
                {
                    name: "Covid",
                    link: "",
                    details: [
                        {
                            id: "post-17",
                            title: "Paxlovid reduces risk of long Covid, Veterans Affairs study finds",
                            thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/220722220136-paxlovid-large-tease.jpg",
                            url: "",
                            type: "sub-title-thumbnail",
                            category: null,
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-18",
                            title: " Children's health leaders call for emergency response as respiratory viruses continue to spread across the US",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-19",
                            title: "Pfizer says Covid-19 vaccine list price could be $130 per dose once government contracts end",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-20",
                            title: "Quick and stealthy 'Scrabble variants' are poised to drive a winter Covid-19 surge",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-21",
                            title: "Long Covid and smell: How to get the treatment you need",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                    ]
                },
                {
                    name: "Election",
                    link: "",
                    details: [
                        {
                            id: "post-22",
                            title: "Biden administration to pilot new portions of citizenship test next year",
                            thumbnail: "https://media.cnn.com/api/v1/images/stellar/prod/221213190400-white-house-exterior-0721.jpg?c=16x9&q=h_270,w_480,c_fill",
                            url: "",
                            type: "sub-title-thumbnail",
                            category: null,
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-23",
                            title: "US intel agencies likely missed chances to investigate Covid pandemic's origin, House Democrats' report says",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-24",
                            title: "Moderate Republicans weigh hardball tactics to counter anti-McCarthy crew",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-25",
                            title: "New Hampshire Gov. Sununu says 'we're moving on' from Trump",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-26",
                            title: "Stephen Miller-led group emerges as top legal foe of Biden initiatives",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                    ]
                },
                {
                    name: "Sport",
                    link: "",
                    details: [
                        {
                            id: "post-27",
                            title: "How a 2003 song became the unofficial anthem of Argentina's World Cup success",
                            thumbnail: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F221219214614-pba-nacho-pkg.jpg",
                            url: "",
                            type: "sub-title-thumbnail",
                            category: null,
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-28",
                            title: "'We are on top of the world:' Argentina's players struggle to find the words to sum up their World Cup triumph",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-29",
                            title: "How has holding a World Cup changed the way the world sees Qatar?",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-30",
                            title: "The real cost of sponsoring this World Cup",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-31",
                            title: "They helped build Qatar's World Cup. Now they are struggling to survive",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                    ]
                },
                {
                    name: "Healthy",
                    link: "",
                    details: [
                        {
                            id: "post-32",
                            title: "Over 80% of adults don't meet US strength guidelines. Don't forget these muscles",
                            thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/221209172551-02-overlooked-muscles-birdog-crunch-large-169.jpeg",
                            url: "",
                            type: "sub-title-thumbnail",
                            category: null,
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-33",
                            title: "How introverts can stay sane this holiday season",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-34",
                            title: "Do you really need deodorant? Experts weigh in",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-35",
                            title: "Here's how many times you need to reuse your reusable grocery bags",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                        {
                            id: "post-36",
                            title: "Researchers have found that snakes have a clitoris. Here's what it could mean",
                            // thumbnail: "",
                            url: "",
                            type: "small-title",
                            // category: "",
                            content: {
                                date: "",
                                header: "",
                                html: [
        
                                ],
                            },
                        },
                    ]
                },
            ],
        },
        {
            location: "third-content",
            clients: [
                {
                    id: "post-37",
                    title: "Meet the signing Santa who makes Christmas special for deaf children",
                    thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/221221153345-04-santa-charles-exlarge-tease.jpg",
                    type: "box-video",
                    category: null,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-38",
                    title: "Piece of 1986 Space Shuttle Challenger found in Atlantic by film crew",
                    thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/221110143307-02-bermuda-triangle-challenger-discovery-exlarge-tease.jpg",
                    type: "box-video",
                    category: null,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-39",
                    title: "See world's longest passenger train run through Swiss Alpsw",
                    thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/221031153304-video-thumbnail-switzerland-train-exlarge-tease.jpg",
                    type: "box-video",
                    category: null,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-40",
                    title: "'SNL' cast says goodbye to Cecily Strong with 'Blue Christmas'",
                    thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/221218012835-snl-cecily-strong-1-exlarge-tease.jpg",
                    type: "box-video",
                    category: null,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
                {
                    id: "post-41",
                    title: "See arrival of migrants dropped off in front of vice president's home",
                    thumbnail: "https://media.cnn.com/api/v1/images/stellar/prod/220915095424-02-migrants-naval-observatory-0915.jpg?c=original",
                    type: "box-video",
                    category: null,
                    content: {
                        date: "",
                        header: "",
                        html: [

                        ],
                    },
                },
            ]
        }
    ],

    other: [

    ],

    city: [
        {
            
        }
    ],

    feedback: [
        {
            
        }
    ],

};