function postThumbnail(tx) {

    if(document.getElementById("post-index")) {
        if (tx[0]["location"]["type"] == "st") {
            if (tx[0]["location"]["position"] == "col-01") {
                var html = document.querySelector("#st .post-thumbnail");

                html.innerHTML = 
                `
                    <div class="title-post-thumbnail">
                        <a href="">${tx[0]["title"]}</a>
                    </div>
                    <div class="post-category">
                        <img class="thumbnail" src="${tx[0]["thumbnail"]}" alt="" title="${tx[0]["title"]}">
                        <div class="status-category">
                            <span>${tx[0]["category"]}</span>
                        </div>
                    </div>
                    <div class="little-post-thumbnail-content">
                        <a href="">${tx[0]["header"]}</a>
                    </div>
                `;
            }
        }
    }

}

function childPostThumbnail(tx) {
    if(document.getElementById("post-index")) {
        for (let i = 0; i < tx.length; i++) {
            if (tx[i]["location"]["type"] == "st") {
                if (tx[i]["location"]["position"] == "col-02") {
                    var html = document.querySelector("#st #col-02");
                    const div = document.createElement("div");

                    div.classList.add("child-post-thumbnail");

                    div.innerHTML = 
                    `
                        <div class="child-header">
                            <img class="thumbnail" src="${tx[i]["thumbnail"]}" alt="" title="${tx[i]["title"]}">
                        </div>
                        <div class="little-child-post-thumbnail-content">
                            <a href="">${tx[i]["title"]}</a>
                        </div>
                    `;

                    html.appendChild(div);
                }

                if (tx[i]["location"]["position"] == "col-03") {
                    var html = document.querySelector("#st #col-03 .child-post-thumbnail");

                    html.innerHTML = 
                    `
                        <div class="child-header">
                            <img class="thumbnail" src="${tx[i]["thumbnail"]}" alt="" title="${tx[i]["title"]}">
                        </div>
                        <div class="little-child-post-thumbnail-content mb-0">
                            <a href="">${tx[i]["title"]}</a>
                        </div>
                    `;

                }
            }
            if (tx[i]["location"]["type"] == "nd") { 
                if (tx[i]["location"]["position"] == "col-01") { 
                    var html = document.querySelector("#nd #col-01 .child-post-thumbnail");

                    html.innerHTML = 
                    `
                        <div class="child-header">
                            <a href="" class="bg-title">
                                <span>TLBT Business</span>
                                <span class="icon-next">
                                    <i class='bx bx-chevron-right'></i>
                                </span>
                            </a>
                            <img class="thumbnail" src="${tx[i]["thumbnail"]}" alt="" title="${tx[i]["title"]}">
                        </div>
                        <div class="little-child-post-thumbnail-content mb-0">
                            <a href="">${tx[i]["title"]}</a>
                        </div>
                    `;
                }

                if (tx[i]["location"]["position"] == "col-02") { 
                    var html = document.querySelector("#nd #col-02 .child-post-thumbnail");

                    html.innerHTML = 
                    `
                        <div class="child-header">
                            <a href="" class="bg-title">
                                <span>Covid</span>
                                <span class="icon-next">
                                    <i class='bx bx-chevron-right'></i>
                                </span>
                            </a>
                            <img class="thumbnail" src="${tx[i]["thumbnail"]}" alt="" title="${tx[i]["title"]}">
                        </div>
                        <div class="little-child-post-thumbnail-content mb-0">
                            <a href="">${tx[i]["title"]}</a>
                        </div>
                    `;
                }

                if (tx[i]["location"]["position"] == "col-03") { 
                    var html = document.querySelector("#nd #col-03 .child-post-thumbnail");

                    html.innerHTML = 
                    `
                        <div class="child-header">
                            <a href="" class="bg-title">
                                <span>Election</span>
                                <span class="icon-next">
                                    <i class='bx bx-chevron-right'></i>
                                </span>
                            </a>
                            <img class="thumbnail" src="${tx[i]["thumbnail"]}" alt="" title="${tx[i]["title"]}">
                        </div>
                        <div class="little-child-post-thumbnail-content mb-0">
                            <a href="">${tx[i]["title"]}</a>
                        </div>
                    `;
                }

                if (tx[i]["location"]["position"] == "col-04") { 
                    var html = document.querySelector("#nd #col-04 .child-post-thumbnail");

                    html.innerHTML = 
                    `
                        <div class="child-header">
                            <a href="" class="bg-title">
                                <span>Sport</span>
                                <span class="icon-next">
                                    <i class='bx bx-chevron-right'></i>
                                </span>
                            </a>
                            <img class="thumbnail" src="${tx[i]["thumbnail"]}" alt="" title="${tx[i]["title"]}">
                        </div>
                        <div class="little-child-post-thumbnail-content mb-0">
                            <a href="">${tx[i]["title"]}</a>
                        </div>
                    `;
                }

                if (tx[i]["location"]["position"] == "col-05") { 
                    var html = document.querySelector("#nd #col-05 .child-post-thumbnail");

                    html.innerHTML = 
                    `
                        <div class="child-header">
                            <a href="" class="bg-title">
                                <span>Healthy</span>
                                <span class="icon-next">
                                    <i class='bx bx-chevron-right'></i>
                                </span>
                            </a>
                            <img class="thumbnail" src="${tx[i]["thumbnail"]}" alt="" title="${tx[i]["title"]}">
                        </div>
                        <div class="little-child-post-thumbnail-content mb-0">
                            <a href="">${tx[i]["title"]}</a>
                        </div>
                    `;
                }
            }
        }
    
    }
}

function smallContent(tx) {
    if(document.getElementById("post-index")) {
        for (let i = 0; i < tx.length; i++) {
            let video = ``;
            if (tx[i]["location"]["type"] == "st") {
                if (tx[i]["location"]["position"] == "col-01") {
                    var html = document.querySelector("#st #col-01 .small-content ul");
                    const li = document.createElement("li");

                    if(tx[i]["video"] == true) {
                        video = `<span class="icon-play"> <i class="bx bx-play-circle"></i> </span>`;
                    }

                    li.innerHTML = 
                    `
                        <a href="">
                            <span class="line-horizontal"></span>
                            ${video}
                            <span class="title-small-content">
                                ${tx[i]["title"]}
                            </span>
                        </a>
                    `;
                    html.appendChild(li);
                }

                if (tx[i]["location"]["position"] == "col-03") {
                    var html = document.querySelector("#st #col-03 .small-content ul");
                    const li = document.createElement("li");

                    if(tx[i]["video"] == true) {
                        video = `<span class="icon-play"> <i class="bx bx-play-circle"></i> </span>`;
                    }

                    li.innerHTML = 
                    `
                        <a href="">
                            <span class="line-horizontal"></span>
                            ${video}
                            <span class="title-small-content">
                                ${tx[i]["title"]}
                            </span>
                        </a>
                    `;
                    html.appendChild(li);
                }
            }

            if(tx[i]["location"]["type"] == "nd") {
                if (tx[i]["location"]["position"] == "col-01") {
                    var html = document.querySelector("#nd #col-01 .small-content ul");
                    const li = document.createElement("li");

                    if(tx[i]["video"] == true) {
                        video = `<span class="icon-play"> <i class="bx bx-play-circle"></i> </span>`;
                    }

                    li.innerHTML = 
                    `
                        <a href="">
                            <span class="line-horizontal"></span>
                            ${video}
                            <span class="title-small-content">
                                ${tx[i]["title"]}
                            </span>
                        </a>
                    `;
                    html.appendChild(li);
                }

                if (tx[i]["location"]["position"] == "col-02") {
                    var html = document.querySelector("#nd #col-02 .small-content ul");
                    const li = document.createElement("li");

                    if(tx[i]["video"] == true) {
                        video = `<span class="icon-play"> <i class="bx bx-play-circle"></i> </span>`;
                    }

                    li.innerHTML = 
                    `
                        <a href="">
                            <span class="line-horizontal"></span>
                            ${video}
                            <span class="title-small-content">
                                ${tx[i]["title"]}
                            </span>
                        </a>
                    `;
                    html.appendChild(li);
                }

                if (tx[i]["location"]["position"] == "col-03") {
                    var html = document.querySelector("#nd #col-03 .small-content ul");
                    const li = document.createElement("li");

                    if(tx[i]["video"] == true) {
                        video = `<span class="icon-play"> <i class="bx bx-play-circle"></i> </span>`;
                    }

                    li.innerHTML = 
                    `
                        <a href="">
                            <span class="line-horizontal"></span>
                            ${video}
                            <span class="title-small-content">
                                ${tx[i]["title"]}
                            </span>
                        </a>
                    `;
                    html.appendChild(li);
                }

                if (tx[i]["location"]["position"] == "col-04") {
                    var html = document.querySelector("#nd #col-04 .small-content ul");
                    const li = document.createElement("li");

                    if(tx[i]["video"] == true) {
                        video = `<span class="icon-play"> <i class="bx bx-play-circle"></i> </span>`;
                    }

                    li.innerHTML = 
                    `
                        <a href="">
                            <span class="line-horizontal"></span>
                            ${video}
                            <span class="title-small-content">
                                ${tx[i]["title"]}
                            </span>
                        </a>
                    `;
                    html.appendChild(li);
                }

                if (tx[i]["location"]["position"] == "col-05") {
                    var html = document.querySelector("#nd #col-05 .small-content ul");
                    const li = document.createElement("li");

                    if(tx[i]["video"] == true) {
                        video = `<span class="icon-play"> <i class="bx bx-play-circle"></i> </span>`;
                    }

                    li.innerHTML = 
                    `
                        <a href="">
                            <span class="line-horizontal"></span>
                            ${video}
                            <span class="title-small-content">
                                ${tx[i]["title"]}
                            </span>
                        </a>
                    `;
                    html.appendChild(li);
                }
            }
        }
    }
}

function createElIndex() {
    const st = document.querySelector("#post-index #st");
    const nd = document.querySelector("#post-index #nd");
    const rd = document.querySelector("#post-index #rd");

    if(st) {
        const row = document.createElement("div");
        const col_01 = document.createElement("div");
        const col_02 = document.createElement("div");
        const col_03 = document.createElement("div");

        row.classList.add("row");
        col_01.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "col-xl-4", "col");
        col_02.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col");
        col_03.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col");
        
        col_01.setAttribute("id", "col-01");
        col_02.setAttribute("id", "col-02");
        col_03.setAttribute("id", "col-03");
        
        col_01.innerHTML =
        `
            <div class="post-thumbnail"></div>
            <div class="small-content">
                <ul></ul>    
            </div>
        `;

        col_02.innerHTML = 
        `
            
        `;

        col_03.innerHTML = 
        `
            <div class="child-post-thumbnail"></div>
            <div class="small-content">
                <ul></ul>
            </div>
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
        col_01.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col");
        col_02.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col");
        col_03.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col");
        col_04.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col");
        col_05.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col");
        col_06.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "col");

        col_01.setAttribute("id", "col-01");
        col_02.setAttribute("id", "col-02");
        col_03.setAttribute("id", "col-03");
        col_04.setAttribute("id", "col-04");
        col_05.setAttribute("id", "col-05");
        col_06.setAttribute("id", "col-06");

        col_01.innerHTML = 
        `
            <div class="child-post-thumbnail"></div>
            <div class="small-content">
                <ul></ul>
            </div>
        `;

        col_02.innerHTML = 
        `
            <div class="child-post-thumbnail"></div>
            <div class="small-content">
                <ul></ul>
            </div>
        `;

        col_03.innerHTML = 
        `
            <div class="child-post-thumbnail"></div>
            <div class="small-content">
                <ul></ul>
            </div>
        `;
        
        col_04.innerHTML = 
        `
            <div class="child-post-thumbnail"></div>
            <div class="small-content">
                <ul></ul>
            </div>
        `;

        col_05.innerHTML = 
        `
            <div class="child-post-thumbnail"></div>
            <div class="small-content">
                <ul></ul>
            </div>
        `;

        col_06.innerHTML = 
        `
            <div>
                <img class="animation" src="" alt="" title="" id="animation">
            </div>
        `;

        row.appendChild(col_01);
        row.appendChild(col_02);
        row.appendChild(col_03);
        row.appendChild(col_04);
        row.appendChild(col_05);
        row.appendChild(col_06);
        nd.appendChild(row);
    }
}

function Index() {
    
    createElIndex();


    let d = Data(x);
    let client = "";

    // console.log(d);

    for (let i = 0; i < d.length; i++) {
        // console.log(d[i]);
        switch (d[i]["org_name"]) {
            case "post-thumbnail" :
                client = d[i]["clients"];
                postThumbnail(client);
                break;
            case "small-content" :
                client = d[i]["clients"];
                smallContent(client);
                break;
            case "child-post-thumbnail" :
                client = d[i]["clients"];
                childPostThumbnail(client);
                break;
        }
    }

}

/**
 * Data Function
 */

function Data() {
    switch (site) {
        case "post-index" :
            x = data.index; break;
        case "post-news" :
            x = data.news; break;
        case "post-covid" :
            x = data.covid; break;
        case "post-election" :
            x = data.election; break;
        case "post-sport" :
            x = data.sport; break;
        case "post-healthy" :
            x = data.healthy; break;
        case "post-city" :
            x = data.city; break;
        case "post-feedback" :
            x = data.feedback; break;
        default : break;
    }

    return x;
}

/**
 * App Function
 */

function App() {
    switch (site) {
        case "post-index" :
            Index();
            break;
        case "post-news" :
            break;
        case "post-covid" :
            break;
        case "post-election" :
            break;
        case "post-sport" :
            break;
        case "post-healthy" :
            break;
        case "post-city" :
            break;
        case "post-feedback" :
            break;
        default :
            break;
    }
}

App();