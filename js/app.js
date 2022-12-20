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
            <div class="only-ps-thumbnail" id="only-ps-thumbnail-01"></div>
            <div class="only-ps-thumbnail" id="only-ps-thumbnail-02"></div>
        `;

        col_03.innerHTML = 
        `
            <div class="only-ps-thumbnail" id="only-ps-thumbnail-03"></div>
            <div class="small-content" id="small-content-st-02"></div>
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

function returnHtmlST(tx) {
    if(!document.getElementById("site-st-content")) return;
    
}

function returnHtmlND(tx) {

}

function returnHtmlRD(tx) {

}

function getIndex() {
    let y = returnData(x);
    let cli = "";

    for (let i = 0 ; i < y.length; i++) {
        switch (y[i]["org_name"]) {
            case "index-st" :                
                cli = y[i]["clients"];
                returnHtmlST(cli);
                break;
            case "index-nd" :
                cli = y[i]["clients"];
                returnHtmlND(cli);
                break;
            case "index-rd" :
                cli = y[i]["clients"];
                returnHtmlRD(cli);
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