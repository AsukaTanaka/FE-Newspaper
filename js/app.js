function returnData() {
    switch (page) {
        case "post-index" :
            x = data.index;
            break;
        case "post-news" :
            x = data.news;
            break;
        case "post-covid" : 
            x = data.covid;
            break;
        case "post-election" : 
            x = data.election;
            break;
        case "post-sport" :
            x = data.sport;
            break;
        case "post-healthy" : 
            x = data.healthy;
            break;
        case "post-city" :
            x = data.city;
            break;
        case "post-feedback" :
            x = data.feedback;
            break;
        default :
            break;
    }

    return x;
}

function createElementIndex() {
    const st = document.getElementById("site-st-content");
    const nd = document.getElementById("site-nd-content");
    const rd = document.getElementById("site-rd-content");

    if(st) {
        const row = document.createElement("div");

        const col_01 = document.createElement("div");
        const col_02 = document.createElement("div");
        const col_03 = document.createElement("div");

        row.classList.add("row");

        col_01.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "col-xl-4", "col-st-01");
        col_02.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col-st-02");
        col_03.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col-st-03");

        col_01.innerHTML = 
        `
            <div class="ps-thumbnail" id="ps-thumbnail-st"></div>
            <div class="small-content" id="small-content-st-01"></div>
        `;

        col_02.innerHTML = 
        `
        `;

        col_03.innerHTML = 
        `
            <div class="only-ps-thumbnail"></div>
            <div class="small-content" id="small-content-st-03"></div>
        `;
        
        row.appendChild(col_01);
        row.appendChild(col_02);
        row.appendChild(col_03);
        st.appendChild(row);
    }

    if(nd) {
        const row = document.createElement("div");

        const col_01 = document.createElement("div");
        const col_02 = document.createElement("div");
        const col_03 = document.createElement("div");
        const col_04 = document.createElement("div");
        const col_05 = document.createElement("div");
        const col_06 = document.createElement("div");

        row.classList.add("row");

        nd.appendChild(row);

        

    }

    if(rd) {

    }


    

}

function returnHtmlST_Index(tx) {
    if(!document.getElementById("site-st-content")) return;

    var ps_thumbnail_st = document.getElementById("ps-thumbnail-st");
    var small_content_st_01 = document.getElementById("small-content-st-01");
    var only_ps_thumbnail_st_03 = document.querySelector(".col-st-03 .only-ps-thumbnail"); 
    var small_content_st_03 = document.getElementById("small-content-st-03");

    const ul_01 = document.createElement("ul");
    const ul_03 = document.createElement("ul");

    if(tx[0]["type"] == "ps-thumbnail-st") {
        ps_thumbnail_st.innerHTML = 
        `
            <div class="title-ps-thumbnail">
                <a href="">${tx[0]["title"]}</a>
            </div>
            <div class="post-category">
                <img class="thumbnail" src="${tx[0]["thumbnail"]}" alt="" title="${tx[0]["title"]}">
                <div class="status-category">
                    <span class="">${tx[0]["category"]}</span>
                </div>
            </div>
            <div class="child-ps-thumbnail-content">
                <a href="">${tx[0]["header"]}</a>
            </div>
        `;
    } else {
        return;
    }

    if(tx[1]["type"] == "only-ps-thumbnail-st-03") {
        only_ps_thumbnail_st_03.innerHTML = 
        `
            <div class="">
                <img alt="" class="thumbnail" title=""
                    src="${tx[1]["thumbnail"]}">
            </div>
            <div class="child-only-ps-thumbnail-content mb-0">
                <a href="">${tx[1]["title"]}</a>
            </div>
        `;
    }

    for (let i = 0; i < tx.length; i++) {
        var only_ps_thumbnail_st_02 = document.querySelector(".only-ps-thumbnail-st-02");

        const li_01 = document.createElement("li");
        const li_03 = document.createElement("li");


        let video = ``;

        if(tx[i]["type"] == "small-content-st-01") {

            if(tx[i]["video"] == true) {
                video = `<span class="icon-play"><i class="bx bx-play-circle"></i></span>`;
            } else {
                video = ``;
            }

            li_01.innerHTML =
            `
                <a href="">
                    <span class="line-horizontal"></span>
                    ${video}
                    <span class="text-small-content">
                        ${tx[i]["title"]}
                    </span>
                </a>
            `;
        } else {

        }

        if(tx[i]["type"] == "small-content-st-03") {

            if(tx[i]["video"] == true) {
                video = `<span class="icon-play"><i class="bx bx-play-circle"></i></span>`;
            } else {
                video = ``;
            }

            li_03.innerHTML =
            `
                <a href="">
                    <span class="line-horizontal"></span>
                    ${video}
                    <span class="text-small-content">
                        ${tx[i]["title"]}
                    </span>
                </a>
            `;
        } else {

        }


        if(tx[i]["type"] == "only-ps-thumbnail-st-02") {
            const div = document.createElement("div");
            div.classList.add("only-ps-thumbnail");
            
            div.innerHTML =
            `
                <div class="">
                    <img alt="" class="thumbnail" title=""
                        src="${tx[i]["thumbnail"]}">
                </div>
                <div class="child-only-ps-thumbnail-content">
                    <a href="">${tx[i]["title"]}</a>
                </div>
            `;
            document.querySelector(".col-st-02").appendChild(div);
        } else {

        }


        ul_01.appendChild(li_01);
        ul_03.appendChild(li_03);
        
    }   

    small_content_st_01.appendChild(ul_01);
    small_content_st_03.appendChild(ul_03);
}

function returnHtmlND_Index(tx) {

}

function returnHtmlRD_Index(tx) {

}

function getIndex() {
    let y = returnData(x);
    let cli = "";

    for (let i = 0 ; i < y.length; i++) {
        switch (y[i]["org_name"]) {
            case "index-st" :                
                cli = y[i]["clients"];
                returnHtmlST_Index(cli);
                break;
            case "index-nd" :
                cli = y[i]["clients"];
                returnHtmlND_Index(cli);
                break;
            case "index-rd" :
                cli = y[i]["clients"];
                returnHtmlRD_Index(cli);
                break;
            default :
                break;
        };     
    }
}

function getNews() {

}

function getCovid() {

}

function getElection() {

}

function getSport() {
    
}

function getHealthy() {

}

function getFeedback() {

}

function init() {
    switch (page) {
        case "post-index" :
            createElementIndex();
            getIndex();
            break;
        case "post-news" :
            getNews();
            break;
        case "post-covid" : 
            getCovid();
            break;
        case "post-election" : 
            getElection();
            break;
        case "post-sport" :
            getSport();
            break;
        case "post-healthy" : 
            getHealthy();
            break;
        case "post-city" :
            getCity();
            break;
        case "post-feedback" :
            getFeedback();
            break;
        default :
            break;
    }
}

init();