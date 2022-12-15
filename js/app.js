function returnOrgName(cli) {

    data.reduce((acc, el) => {
        const filtered = el.clients.filter((client ) => {

            switch(el.org_name) {
                case 'postThumbnail' :
                    if(sectionIndex && client.type.includes('index')) {
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

function psThumbnail(txt) {
    const showText = returnOrgName(txt);
    
    if(document.getElementById('ps-thumbnail-st')) {

        if(sectionIndex) {
            if(data.find(item => item.org_name === 'postThumbnail')) {
                document.getElementById('ps-thumbnail-st').innerHTML = 
                `
                    <div class="title-ps-thumbnail">
                        <a href="">${showText.post}</a>
                    </div>
                    <div class="post-category">
                        <img class="thumbnail-obj" src="${showText.thumbnail}" alt="" title="${showText.title}">
                        <div class="div-status-category"> 
                            <span class="">${showText.category}</span> 
                        </div>
                    </div>
                    <div class="child-ps-thumbnail-content">
                        <a href="">${showText.little_content}</a>
                    </div>
                `;
            }

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


    }
}


function htmlIndexPageST() {
    const stList = document.getElementById("site-st-content");
    const st_row = document.createElement("div");
    const st_col_01 = document.createElement("div");
    const st_col_02 = document.createElement("div");
    const st_col_03 = document.createElement("div");

    
    st_row.classList.add("row");
    st_col_01.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "col-xl-4");
    st_col_02.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4");
    st_col_03.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4");


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

/**
* Get Functions
*/

if(siteSTContent) {
    if(sectionIndex) {
        htmlIndexPageST();
    } 
    psThumbnail();
}

