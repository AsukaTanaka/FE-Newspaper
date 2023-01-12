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
            name_tag: "london",
            top: 1,
            country: "London",
            thumbnail: "https://images.wallpaperscraft.com/image/single/london_big_ben_night_river_building_top_view_black_white_30804_1920x1080.jpg",
            note: "Big Ben, London, Black White 1920x1080",
            location: "https://media.worldsbestcities.com/wp-content/uploads/2020/02/06205923/London-300x300%402x.png",
            metro: "11,120,000",
            acreage: "1.572 km²",
            population: "8,982 million (2019)",
            header: "As the 'capital of capitals' negotiates the uncharted, perilous terrain of a post-Brexit and pandemic world, London continues to reign as the planet's best cities for the seventh year running. Right. Can we talk about this year, then?",
            wiki: "",
            details: [
                {
                    text: "London is back! But, given the past few months, have citizens even noticed?",
                    tag: "p",
                    note: "",
                },
                {
                    text: "This has been the busiest start to summer London has seen in more than a decade—with the Queen's Platinum Jubilee, Royal Ascot, RHS Chelsea Flower Show, Wimbledon, Boris's resignation and, in the worst kind of end to summer, the Queen's death and weeks of mourning.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Of course the eyes of the world were fixed on London throughout all the tumult more than any other city—save for maybe Kyiv—reminding everyone that London is spectacular and it's been a really long while since they visited. Not that the city's promotion engine was waning. The city still tops our Promotions category, coming out in front for Insta hashtags, Facebook (or is it Meta) check-ins and TripAdvisor reviews.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Fortunately the city is almost back to pre-pandemic capacity, if the tube is any indication. The London Underground Night Tube reopened over the summer while certain lines are slowly restoring all service, with the Piccadilly line the last to have come online in August.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Despite much-warranted hand-wringing about the flight of talent and capital due to the pall of Brexit (and the follow-up specter of an airborne pandemic), London is hanging in just fine, relying on a dipping currency to attract investment and, of course, previously priced-out tourists. And new residents. New wealthy residents who can now afford to check off a big item on the multi-millionaire bucket list: property in the best city on the planet.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "An astonishing 61 luxury London properties—each worth $11.5 million or more—were sold in the first six months of 2022, which was the highest number in a decade.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "The highest-profile new residents include Instagram CEO Adam Mosseri, who may have come for the most #1 rankings of any city in our Top 100—from Culture to Nightlife, but stayed for another of London's assets: the best-educated citizenry on the planet. And available at a relative discount to Silicon Valley and New York. As much is confirmed by salary site Glassdoor, which estimates an average Meta software engineer in London can expect to earn just over $102,000 versus $169,000 in San Francisco. The tech giant is in the process of building its largest global engineering base in two offices in London's King's Cross neighborhood. The first, at 11-21 Canal Reach, opened in early 2022 after a three-year build designed by Bennetts Associates with interiors by TP Bennett based on a concept design by Gehry Partners. A second building opened a few months later to bring the new office space to 425,000 square feet. Plus, of course, a 42,000-square-foot rooftop park for what will likely be almost 10,000 employees in a few years.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Another reason for Meta's entrenchment? Mortal enemy TikTok has prioritized London for years and just started a 15-year lease on an entire office block at Farringdon Crossrail station.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "These seismic moves have dislodged the pandemic blockage for the global investment torrent into London. According to fDi Markets, the Financial Times' foreign investment tracker, London has pulled in the most foreign direct investments into tech from international companies since 2018, ahead of New York, Singapore and Dubai.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Of course none of this happens without the sustained facilitation of London & Partners, London's official publicity arm, and the economic development organization that works to offer financial perks for all that relocation.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Recent tax incentives have included the lowest corporation tax rate among G7 countries and a cornucopia of research and development tax credits.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "A recent report from real estate firm Cushman & Wakefield illustrated the run on London: of the 398 central London leasing transactions over 5,000 square feet in 2021, 59 were new businesses setting up for the first time or those relocating from outside London—the highest number ever recorded since tracking began in 2013. Another, more disturbing metric of tech and foreign investment into the city?",
                    tag: "p",
                    note: "",
                },
                {
                    text: "An electricity shortage, specifically pressure on the grid in West London, made worse by energy-sucking data centers being built along the M4 corridor in the past few years. According to the Financial Times, “major new applicants to the distribution network … including housing developments, commercial premises and industrial activities will have to wait several years to receive new electricity connections.”",
                    tag: "p",
                    note: "",
                },
                {
                    text: "If all those newcomers can't cook at home, they came to the right place, especially these days, when the culinary industry is being reborn after dozens of the city's most iconic restaurants shuttered over the pandemic. The city with the fourth-best restaurants on the planet is buzzing again with big-name openings like Dubai-based izakaya-style restaurant Kinoya in Harrods. There are hundreds of other rooms soon joining this increasingly daring culinary destination serving—and welcoming the world once more.",
                    tag: "p",
                    note: "",
                },
            ],
        },
        {
            name_tag: "tokyo",
            top: 2,
            country: "Tokyo",
            thumbnail: "https://vcdn1-dulich.vnecdn.net/2021/02/02/tokyodongduc-1612237882-161223-3329-8606-1612237924.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BibuITjugKn6Y3q8_PBwMA",
            note: "Tokyo, Fancy",
            location: "https://media.worldsbestcities.com/wp-content/uploads/2020/02/06205805/Tokyo-300x300%402x.png",
            metro: "39,105,000",
            acreage: "2.194 km²",
            population: "13,96 million (2021)",
            header: "The futuristic metropolis is tapping its ancient feudal roots by investing in street-level livability and resident well-being—in the wake of the Olympics.",
            wiki: "",
            details: [
                {
                    text: "Despite earthquakes, tsunamis and typhoons, Tokyo has long held on to its top spot as one of the safest metropolises on the planet. After dipping amid last year's scramble to host the 2021 Summer Olympic Games, the city remains incredibly safe, ranking #4 in our Safety subcategory.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Young kids playing and walking to school unattended—a pre-pandemic mind- bender for visitors to the world's largest city—is a common sight once more after almost three years of lockdowns and intermittent school closures.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Those delayed Olympics went on, of course, despite a tourism ban and local crowds not allowed to watch the live events. Tens of billions spent on infra- structure to welcome the world sat mostly empty and the 2,000 hotels, inns and guest houses opened around the city will be underwater financially for years, to say nothing of the shopping complexes and other tourist infrastructure.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Despite the pandemic and subsequent derailment of Japan's plans—or perhaps because of them—the Japanese government remains steadfast, keeping its target of 60 million visitors and $136 billion in tourism revenue by 2030. It's not as delusional as it sounds: the country enjoyed record tourism for seven straight years and can now accommodate even more visitors to Tokyo, with the expansion of the international terminal at Haneda, the city's main airport (ranked #65 globally).",
                    tag: "p",
                    note: "",
                },
                {
                    text: "The global reverence for the city has returned with international travel.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "It earned the #1 spot in Shopping for its world-class experiences, like Ginza's luxury department stores, newly enhanced with the art-bedecked and sharply designed Ginza Six shopping center.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "The newly renovated Miyashita Park boasts 90 boutique shops and restaurants, plus a new hotel with a view of the famed Shibuya district, complete with volleyball courts and a skatepark sprawling over 2.5 acres. Last year the city unveiled the planet's first Netflix store. Earlier this year, two pop-up stores dedicated to the Netflix show Stranger Things added to the fun.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "New openings will ensure retail domination for the foreseeable future, like Kameido Clock near Kameido Station, home to 139 commercial tenants, including Tsutaya Books and Uniqlo, as well as green spaces for families. Mikan Shimokita in the Shimokitazawa neighborhood is a just-opened shopping and restaurant complex where shopping is upstaged by cuisine spanning Chinese, Vietnamese, Korean, Italian and fusion.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Appropriately, Tokyo boasts the second-highest number of restaurants of any city—topping our Restaurant category—and is moving far beyond its internationally beloved food traditions. The metropolis is home to approximately 100,000 restaurants, so visitors and residents alike could never hope to experience a fraction of them. But should you wish to, there are plenty of places to stay.",
                    tag: "p",
                    note: "",
                },
            ],
        },
        {
            name_tag: "paris",
            top: 3,
            country: "Paris",
            thumbnail: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/84000/84621-Paris.jpg",
            note: "Paris, Fancy",
            location: "https://media.worldsbestcities.com/wp-content/uploads/2020/02/06205803/Paris-300x300%402x.png",
            metro: "11,027,00",
            acreage: "105,4 km²",
            population: "2,161 million (2019)",
            header: "Paris attacked the pandemic not only with its doctors and health-care workers, but also with its urban planners.",
            wiki: "",
            details: [
                {
                    text: "For all the talk of learning from the pandemic, one city appears to be going all-in on the hard lessons it gave and their application to molecular urban change.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "While the face of Paris's pandemic evolution is Mayor Anne Hidalgo and her aggressive empowerment of self-propelled mobility—from a city-wide speed limit of 30 km/h introduced last year to the obsessive addition of bike paths, with the promise of 745 miles by 2026 across most arrondissements—it's the citizenry's embrace of this boldness that is changing the city's fabric for good.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "While the city has been wracked by unemployment and economic calamity since 2020 (Paris, while much improved from 2021, ranks #183 globally in our Employment subcategory this year), the walkable city ambition has aligned with the need for natural therapy and outdoor social distancing. Of course, being able to enjoy a city ranked best in the world in our Sights & Landmarks subcategory, as well as in the top three for Museums (the city has well over 100), has a tendency to distract one from the modern world's perils.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Almost as soon as the pandemic started, Parisians poured out of their close quarters onto the iconic Rue de Rivoli, the famed artery that intersects the heart of the capital, when it became off-limits to cars. Cars were also banned from the banks of the Seine and pretty much every other one of the world's favorite spots where, surreally, flâneurs found themselves able to take a deep breath of air without a hint of exhaust while actually hearing birdsong in what many say felt like a walk back in time.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Especially the fact that there was nary a selfie stick or sudden-stopping tourist to run into.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "All of that has changed, of course, with France's removal of health measures earlier this year and tourism rushing back into the de-motorized streets, injecting much-needed revenues and, in some cases, exceeding pre-pandemic levels, according to government estimates. Almost three years without Paris certainly drove the voraciousness, but so did the euro being on par with the U.S. dollar for most of 2022.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "According to French government estimates, tourists actually spent 10 percent more in France this summer than they did in 2019, which itself was one of the highest tourism-spending years on record. Not surprisingly, the single biggest beneficiary was the City of Light.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "What returning visitors find is a city that has codified pedestrianism and alfresco living.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "To ensure cars didn't take back control of Paris streets as pandemic urban pilot projects waned—as was the case in many other cities—Mayor Hidalgo legislated that the 60,000 parking spots loaned to restaurants for outdoor seating simply remained. The same went for closing off lesser-driven streets entirely for public walking and seating for local businesses in need of additional outdoor space.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Nowhere is the transformation more dramatic than along the River Seine in the heart of Paris's tourist district, near Notre Dame Cathedral and city hall itself. With the reduced car traffic, this is now Paris's town square (in a city with dozens of historic spots worthy of the honor). The riverside promenade hosted thousands night after night, even after Paris's Right Bank summer event wrapped up. The Paris Plages urban beach initiative welcomes picnicking and other low-cost access to a city long criticized as pricey and exclusive.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "And speaking of Notre Dame, its reopening in 2024 aligns with what will be a vital year for the city, when it also hosts the 2024 Olympic Summer Games, with many events integrated right into the revered urban fabric. And nothing would go further to demonstrate the city's efficacy in achieving a cleaner, healthier Paris than being able to host swimming events for athletes and the general public post-Games. After wild Atlantic salmon first returned to the Seine 13 years ago, it is today home to more than 30 species of fish, like trout, perch and eel. Considering Paris's plan to hold the 2024 opening ceremonies not in a stadium but by floating down its sacred river, nursing it back to health would be incredibly poetic, even in a town that invented poetic gestures. Those Paris heatwaves would certainly become more tolerable.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "The Champs-Élysées is next on the city leadership's list, set to be transformed for the Games into a massive garden, with vehicle access cut in half and millions of euros invested in pedestrian-focused amenities.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "The torrent of new and renoed hotels in the city is also doubling down on outdoor spaces. The year-old Kimpton St Honoré is topped by a bucolic 3,200-square-foot terrace called Sequoia that serves up panoramic views of the iconic skyline. The Hôtel Rochechouart, which opened in late 2020 in the 9th arrondissement, also has a little-publicized 1,000-square-foot perch from which to admire Sacré-Cœur and the Eiffel Tower in air scented by the wild lavender and berry bushes planted all around. A bientôt mes amis.",
                    tag: "p",
                    note: "",
                },
            ],
        },
        {
            name_tag: "new-york",
            top: 4,
            country: "New York",
            thumbnail: "https://www.history.com/.image/t_share/MTkyNDQ5NzY0ODY2OTI1OTgw/gettyimages-1395722285.jpg",
            note: "New York",
            location: "https://media.worldsbestcities.com/wp-content/uploads/2020/02/06205924/New-York-300x300%402x.png",
            metro: "19,294,236",
            acreage: "783,8 km²",
            population: "8,468 million (2021)",
            header: "After a hellish two years, few places on the planet were as ready to relaunch as NYC.",
            wiki: "",
            details: [
                {
                    text: "The greatest city in America—lauded and crowned in our rankings for the past seven years and in countless others for many more—was a ghastly reminder during the pandemic of the vulnerability of even the colossal and seemingly all-powerful; we saw here what awaited the rest of the country. And the world. As early cases spiked, Gotham became the nation's nightmarish coronavirus core.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "It was this city-scale tragedy that first landed in the crosshairs of the sniping haters declaring that the big, vibrant, cheek-by-jowl city experiment was finally over. But for resilient New Yorkers, those attacks of course merely steeled their resolve for better days amid the death, protest and malaise.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Those better days are here. And the city is doing everything in its power to bring back not only apprehensive New Yorkers whose hunger for regular bites of the Big Apple has for two years been sated instead by takeout or delivery and a scrolling thumb tic, but also the nearly 70 million people who visited in 2019 and invested $46 billion across its expansive quilt of Sights & Landmarks (ranked #13 globally).",
                    tag: "p",
                    note: "",
                },
                {
                    text: "“Fortunately, we're anticipating being back to 85 percent of 2019 levels within the year,” said Chris Heywood, former executive vice president, global communications at NYC & Company, the destination marketing organization of the five boroughs. “We have benchmarked 2024 to be back to previous record-setting numbers.”",
                    tag: "p",
                    note: "",
                },
                {
                    text: "First order of business: getting those not already here to town. Fortunately, the suspension of travel for more than a year expedited the long-planned transformations of New York's international gateways. LaGuardia Airport, Newark Liberty International Airport and John F. Kennedy International Airport all have new terminals, with the new Terminal B at LaGuardia alone boasting 35 gates (to say nothing of the FAO Schwarz on site). And, yes, a new Terminal C should be open by the time you read this. Newark Liberty International's updated Terminal A has opened with 33 new gates and construction will start later this year on a new, congestion-easing 2.5-mile elevated guideway train system. The infra- structure year ends with JFK's Terminal 8 unveiling 130,000 square feet of new and renovated space. The New Terminal One at JFK opens later this decade.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Back on the ground, Moynihan Train Hall is a new 17-track expansion of Penn Station that, if you squint, can pass for a northern European transit hub from the future.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "With so many expected arrivals, NYC is certainly making sure everyone has a place to stay. More than 9,000 new hotel rooms have either opened or will be coming online this year, including the already opened (and headline grabbing) Aman New York, an “urban sanctuary” on Fifth Avenue. Also open is the Ritz-Carlton, NoMad, a temple dedicated to the nearby and recently opened Madison Square Park, as well as The Thompson Central Park, a renovated property in Midtown. The build-out stretches across the city, with new Renaissance Hotels properties in Harlem and Flushing opening in late 2022. Moxy Hotels is also opening multiple locations in the Lower East Side and Williamsburg.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "At street level the city's firehose turns cultural, with massive museums (#5 globally) going all in on expansions and new openings.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "The Louis Armstrong House Museum in Corona, Queens, is undergoing a physical and programmatic expansion for a new cultural center, expected to debut later this year, that includes an interactive exhibit, archival collections, a 68-seat jazz club and store. And the Bronx Children's Museum is also opening this year after moving to a new home in Mill Pond Park. Dia Chelsea is a new contemporary installation space, and the Frick Madison (the temporary home of the Frick Collection) has opened in the Breuer on Madison Avenue in a building formerly used by the Met. Speaking of the Met, just last year New York's 152-year-old cultural institution (housing 1.5 million objects and hosting seven million visitors in a non-pandemic year) announced a $500-million reno of its modern and contemporary wing. Not as storied but equally New York is the new Museum of Broadway, the first permanent museum dedicated to the famed heartland of the stage, just opened in Times Square with a behind-the-scenes look at the creation of major theater productions.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "And the big shows are back, too (with the odd COVID-related cancellation this past spring): Hugh Jackman returns for The Music Man; Sarah Jessica Parker and Matthew Broderick star in a revival of Neil Simon's Plaza Suite… even Daniel Craig in Macbeth.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "For those who prefer their urban exploration outdoors, classics like the High Line and Central Park are joined by the city's newest green space, Little Island—2.4 acres floating on the Hudson near the Meatpacking District on the site of an old pier. Like most things here, you have to see it to believe it.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "When it's your turn to return to America's best city, do yourself a favor and make time to see the phoenix rise from above: there are the classics, like the Empire State Building and the Top of the Rock, but there are also new spectacular perches, like SUMMIT One Vanderbilt and its all-glass exterior elevators, called Ascent. Go up, look down and breathe out.",
                    tag: "p",
                    note: "",
                },
            ],
        },
        {
            name_tag: "dubai",
            top: 5,
            country: "Dubai",
            thumbnail: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
            note: "Dubai",
            location: "https://media.worldsbestcities.com/wp-content/uploads/2020/02/06205806/Dubai-300x300%402x.png",
            metro: "39,105,000",
            acreage: "35 km²",
            population: "3,331 million (2019)",
            header: "The futuristic metropolis is tapping its ancient feudal roots by investing in street-level livability and resident well-being—in the wake of the Olympics.",
            wiki: "",
            details: [
                {
                    text: "Dubai is a city of superlatives: you can ride the elevator to the top of the world's tallest building for a bird's-eye view, and bet on the ponies at the world's richest horse race. And, as of a few months ago, dive into the world's deepest swimming pool (for diving), as certified by Guinness World Records (which, if it hasn't already, should really just relocate permanently to this place solely dedicated to rewriting it). All this happens in one of the planet's safest cities.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Dubai's firehose of only-here experiences is not by accident: the city reinvented itself yet again throughout the 2010s, growing from a sterile playground for a handful of ultra-rich Emiratis to an international tourism and business destination. That has helped attract global talent that today ranks #27 for Educational Attainment worldwide while enjoying top-10 Income Equality.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Dubai's next challenge will be not blowing its pandemic reopening by doing too much too fast. The city is hoping to bring back the tourists (16.7 million in 2019) who have become critical to its economy, and has spent its downtime building and recalibrating at a velocity unprecedented even for this Energizer Bunny of a metropolis.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "The most visited mall on the planet is already here, and helps Dubai climb to #28 in our Shopping subcategory. It would be a mistake to focus on the “mall” part of the name, however; like the city itself, the Dubai Mall is more of an attempt to capture every human experience and repackage it for consumption. It has the world's tallest tower, the Burj Khalifa, and one of the largest aquarium tanks anywhere. The city's reinvention goes on through Cityland Mall, the world's first “nature-inspired” shopping mall, which should be fully open by the time you read this.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Likewise, the Burj Khalifa's time in the sun may be nearing an end: Santiago Calatrava's Tower at Dubai Creek will eclipse the skyscraper as the tallest building in the world when completed in the next few years.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "Speaking of the future, the city's sensory overload of a Museum of the Future just opened to instant landmark status. It's difficult to argue with National Geographic's declaration that this massive, singular steel-and-glass-clad torus is one of the most beautiful museums in the world.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "There are, of course, a dozen other massive openings that would top most cities' 2022 announcements, from the new Mohammed Bin Rashid Library on Dubai Creek to the unprecedented engineering of geography at The Palm, Ain Dubai and the Dubai Islands and the new, towering perches from which to see it all. Our pick? The AURA Skypool, which is (of course) the world's first and highest 360-degree infinity pool.",
                    tag: "p",
                    note: "",
                },
                {
                    text: "A new standard of luxury arrived in October 2022 with the 795-room Atlantis Royal, with restaurants from celebrity chefs Ariana Bundy and José Andrés.",
                    tag: "p",
                    note: "",
                },
            ],
        },
    ],

    feedback: [
        {
            user: "Pham Quoc Thang",
            avatar: "../images/profile-1.png",
            position: "Web Developer",
            facebook: "",
            github: "",
            twitter: "",
            instagram: "",
        },
        {
            user: "Duong Hoa Long",
            avatar: "../images/profile-2.png",
            position: "Web Developer",
            facebook: "",
            github: "",
            twitter: "",
            instagram: "",
        },
        {
            user: "Tran Hoang Quoc Tai",
            avatar: "../images/profile.png",
            position: "Web Designer",
            facebook: "",
            github: "",
            twitter: "",
            instagram: "",
        },
        {
            user: "Trinh Gia Bao",
            avatar: "../images/profile-3.png",
            position: "Web Designer",
            facebook: "",
            github: "",
            twitter: "",
            instagram: "",
        },
    ],

};