function returnOrgNamePT(cli) {

    data.reduce((acc, el) => {
        const filtered = el.clients.filter((client ) => {

            switch(el.org_name) {
                case 'postThumbnail' :
                    if(sectionIndex && client.type.includes('index')) {
                        cli = client;
                        // return client;
                    }
                    if(sectionNews && client.type.includes('news')) {
                        cli = client;
                        // return client;
                    }
                    break;
                default: 
                    break;
            };

           
        });
    
        if (filtered.length > 0) {
            acc.push({ org_name: el.org_name, clients: filtered });
        }
        
         return acc;

    }, []);
    return cli;

}

function returnOrgNameSC() {

}

function contentIndexST() {
    document.getElementById('small-content-st-idx01').innerHTML = 
    `
        <ul class="list-small-content">
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        Why people in China are panic buying canned yellow peaches
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        Hong Kong scraps some remaining restrictions for travelers
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="icon-play">
                        <i class="bx bx-play-circle"></i>
                    </span>
                    <span class="text-small-content">
                        Here's why streets are empty in Beijing despite ease of Covid restrictions
                    </span>
                </a>
            </li>
        </ul> 
    `;

    document.getElementById('only-ps-thumbnail-idx01').innerHTML =
    `
        <div class="">
            <img alt="" class="thumbnail-obj" title=""
                src="https://cdn.cnn.com/cnnnext/dam/assets/221214144052-clash-between-indian-and-chinese-troops-medium-tease.jpg">
        </div>
        <div class="child-only-ps-thumbnail-content">
            <a href="">Indian and Chinese troops fight with sticks and bricks in video</a>
        </div>
    `;

    document.getElementById('only-ps-thumbnail-idx02').innerHTML = 
    `
        <div class="">
            <img alt="" class="thumbnail-obj" title=""
                src="https://cdn.cnn.com/cnnnext/dam/assets/221214134700-el-salvador-soldiers-file-120522-medium-tease.jpg">
        </div>
        <div class="child-only-ps-thumbnail-content mb-0">
            <a href="">This country has arrested 2% of its adult population in its war on gangs</a>
        </div>
    `;

    document.getElementById('only-ps-thumbnail-idx03').innerHTML = 
    `
        <div class="">
            <img alt="" class="thumbnail-obj" title=""
                src="https://cdn.cnn.com/cnnnext/dam/assets/221017110705-protest-turns-violent-outside-chinese-consulate-medium-tease.jpg">
        </div>
        <div class="child-only-ps-thumbnail-content mb-0">
            <a href="">Chinese diplomats wanted by UK police for questioning return to Beijing</a>
        </div>
    `;

    document.getElementById('small-content-st-idx02').innerHTML = 
    `
        <ul class="list-small-content">
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        Chinese student appears in US court over alleged threats to pro-democracy advocate
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        France ends Morocco's Qatar 2022 dream and advances to World Cup final
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        Bali bomber apologizes for nightclub attacks that killed 202
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="icon-play">
                        <i class="bx bx-play-circle"></i>
                    </span>
                    <span class="text-small-content">
                        American one of seven charged in Russian military grade weapon smuggling ring
                    </span>
                </a>
            </li>
        </ul>
    `;
}

function contentIndexND() {
    document.getElementById('only-ps-thumbnail-idx-newstt').innerHTML =
    `
        <div class="">
            <a href="" class="bg-title">
                <span class="news-title">TLBT Business</span>
                <span class="icon-next">
                    <i class='bx bx-chevron-right'></i>
                </span>
            </a>
            <img alt="" class="thumbnail-obj" title=""
                src="https://cdn.cnn.com/cnnnext/dam/assets/221007135046-warren-buffett-050419-file-large-169.jpg">
        </div>
        <div class="child-only-ps-thumbnail-content mb-0">
            <a href="">Warren Buffett is beating the market this year</a>
        </div>
    `;

    document.getElementById('small-content-nd-newstt').innerHTML = 
    `
        <ul class="list-small-content">
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        China's economy faltered before major Covid policy shift
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        Bernard Arnault just became the world's richest person. So who is he?
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        An electric scooter company just pulled off Russia's only IPO of the year
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        The Fed lifts rates by half a point, acknowledging that inflation is finally easing
                    </span>
                </a>
            </li>
        </ul>
    `;

    document.getElementById('only-ps-thumbnail-idx-covidtt').innerHTML = 
    `
        <div class="">
            <a href="" class="bg-title">
                <span class="news-title">Covid</span>
                <span class="icon-next">
                    <i class='bx bx-chevron-right'></i>
                </span>
            </a>
            <img alt="" class="thumbnail-obj" title=""
                src="https://cdn.cnn.com/cnnnext/dam/assets/220722220136-paxlovid-large-tease.jpg">
        </div>
        <div class="child-only-ps-thumbnail-content mb-0">
            <a href="">Paxlovid reduces risk of long Covid, Veterans Affairs study finds</a>
        </div>
    `;

    document.getElementById('small-content-nd-covidtt').innerHTML = 
    `
        <ul class="list-small-content">
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        Children's health leaders call for emergency response as respiratory viruses continue to spread across the US
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        Pfizer says Covid-19 vaccine list price could be $130 per dose once government contracts end
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        Quick and stealthy 'Scrabble variants' are poised to drive a winter Covid-19 surge
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        Long Covid and smell: How to get the treatment you need
                    </span>
                </a>
            </li>
        </ul>
    `;

    document.getElementById('only-ps-thumbnail-idx-electiontt').innerHTML = 
    `
        <div class="">
            <a href="" class="bg-title">
                <span class="news-title">Election</span>
                <span class="icon-next">
                    <i class='bx bx-chevron-right'></i>
                </span>
            </a>
            <img alt="" class="thumbnail-obj" title=""
                src="https://media.cnn.com/api/v1/images/stellar/prod/221213190400-white-house-exterior-0721.jpg?c=16x9&q=h_270,w_480,c_fill">
        </div>
        <div class="child-only-ps-thumbnail-content mb-0">
            <a href="">
                Biden administration to pilot new portions of citizenship test next year
            </a>
        </div>
    `;

    document.getElementById('small-content-nd-electiontt').innerHTML = 
    `
        <ul class="list-small-content">
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        US intel agencies likely missed chances to investigate Covid pandemic's origin, House Democrats' report says
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        Moderate Republicans weigh hardball tactics to counter anti-McCarthy crew
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        New Hampshire Gov. Sununu says 'we're moving on' from Trump
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="line-horizontal"></span>
                    <span class="text-small-content">
                        Stephen Miller-led group emerges as top legal foe of Biden initiatives
                    </span>
                </a>
            </li>
        </ul>
    `;
}

function psThumbnail(txt) {
    const showTextPT = returnOrgNamePT(txt);
    
    if(document.getElementById('ps-thumbnail-st')) {

        if(sectionIndex) {
            if(data.find(item => item.org_name === 'postThumbnail')) {
                document.getElementById('ps-thumbnail-st').innerHTML = 
                `
                    <div class="title-ps-thumbnail">
                        <a href="">${showTextPT.post}</a>
                    </div>
                    <div class="post-category">
                        <img class="thumbnail-obj" src="${showTextPT.thumbnail}" alt="" title="${showTextPT.title}">
                        <div class="div-status-category"> 
                            <span class="">${showTextPT.category}</span> 
                        </div>
                    </div>
                    <div class="child-ps-thumbnail-content">
                        <a href="">${showTextPT.little_content}</a>
                    </div>
                `;
            }

            
        
        }


    }
}


function htmlIndexPageST() {
    const stList = document.getElementById("site-st-content");
    const st_row = document.createElement("div");
    const st_col_01 = document.createElement("div");
    const st_col_02 = document.createElement("div");
    const st_col_03 = document.createElement("div");

    
    st_row.classList.add("row");
    st_col_01.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "col-xl-4", "col-st-01");
    st_col_02.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col-st-02");
    st_col_03.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col-st-03");


    st_col_01.innerHTML = 
        `
            <div class="ps-thumbnail" id="ps-thumbnail-st">
                        
            </div>
            <div class="small-content" id="small-content-st-idx01"> 
        
            </div>
        `;
    
    st_col_02.innerHTML = 
        `
            <div class="only-ps-thumbnail" id="only-ps-thumbnail-idx01">

            </div>
            <div class="only-ps-thumbnail" id="only-ps-thumbnail-idx02">
                 
            </div>
        `;
    
    st_col_03.innerHTML = 
        `
            <div class="only-ps-thumbnail" id="only-ps-thumbnail-idx03">

            </div>
            <div class="small-content" id="small-content-st-idx02"> 
        
            </div>
        `;

    stList.appendChild(st_row);
    st_row.appendChild(st_col_01);
    st_row.appendChild(st_col_02);
    st_row.appendChild(st_col_03);
}

function htmlIndexPageND() {
    const ndList = document.getElementById('site-nd-content');
    const nd_row = document.createElement('div');
    const nd_col_01 = document.createElement('div');
    const nd_col_02 = document.createElement('div');
    const nd_col_03 = document.createElement('div');
    const nd_col_04 = document.createElement('div');
    const nd_col_05 = document.createElement('div');
    const nd_col_06 = document.createElement('div');

    nd_row.classList.add("row");
    nd_col_01.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col-nd-01");
    nd_col_02.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col-nd-02");
    nd_col_03.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col-nd-03");

    nd_col_01.innerHTML = 
        `
            <div class="only-ps-thumbnail" id="only-ps-thumbnail-idx-newstt">

            </div>
            <div class="small-content" id="small-content-nd-newstt">

            </div>
        `;

    nd_col_02.innerHTML = 
        `
            <div class="only-ps-thumbnail" id="only-ps-thumbnail-idx-covidtt">
            
            </div>
            <div class="small-content" id="small-content-nd-covidtt">

            </div>
        `;

    nd_col_03.innerHTML = 
        `
            <div class="only-ps-thumbnail" id="only-ps-thumbnail-idx-electiontt">
            
            </div>
            <div class="small-content" id="small-content-nd-electiontt">

            </div>
        `;
    
    nd_col_04.innerHTML = 
        `
        
        `;
    
    nd_col_05.innerHTML = 
        `
        
        `;
    
    nd_col_06.innerHTML = 
        `
        
        `;

    ndList.appendChild(nd_row);
    nd_row.appendChild(nd_col_01);
    nd_row.appendChild(nd_col_02);
    nd_row.appendChild(nd_col_03);
    // nd_row.appendChild(nd_col_04);
    // nd_row.appendChild(nd_col_05);
    // nd_row.appendChild(nd_col_06);
}

function scrollToTop() {
    const toTop = document.querySelector(".scroll-to-top");

    window.addEventListener("scroll", () => {
        if(window.pageYOffset > 100) {
            toTop.classList.add("active");

            toTop.addEventListener("click", () => {
                toTop.classList.remove("active");
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            });

        } else {
            toTop.classList.remove("active");
        }
    });
}

/**
* Get Functions
*/

if(siteSTContent) {
    if(sectionIndex) {
        htmlIndexPageST();
        htmlIndexPageND();
        contentIndexST();
        contentIndexND();
    } 
    psThumbnail();
    scrollToTop();
}





