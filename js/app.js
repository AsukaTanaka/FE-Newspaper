

function Data() {
    switch (site) {
        case "sct-dashboard" : 
            return_data = data.index;
            break;
        case "sct-other" :
            return_data = data.other;
            break;
        case "sct-city" :
            return_data = data.city;
            break;
        case "sct-feedback" :
            return_data = data.feedback;
            break;
        default :
            break;
    }

    return return_data;
}

function createElDashboard() {
    const first = document.querySelector(".sct-dashboard .first-content");
    const second = document.querySelector(".sct-dashboard .second-content");
    const third = document.querySelector(".sct-dashboard .third-content");

    if(first) {
        first.innerHTML = 
        `
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-01">
                    <div class="main-title-thumbnail">
                    </div>

                    <div class="small-title">

                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-02">
                    
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-03">
                    <div class="sub-title-thumbnail">
                    </div>

                    <div class="small-title">
                    </div>
                </div>
            </div>
        `;
    }

    if(second) {
        second.innerHTML = 
        `
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-01">
                    <div class="sub-title-thumbnail">
                    </div>

                    <div class="small-title">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-02">
                    <div class="sub-title-thumbnail">
                    </div>

                    <div class="small-title">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-03">
                    <div class="sub-title-thumbnail">
                    </div>

                    <div class="small-title">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-04">
                    <div class="sub-title-thumbnail">
                    </div>

                    <div class="small-title">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-05">
                    <div class="sub-title-thumbnail">
                    </div>

                    <div class="small-title">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-06">
                    <div class="advertise-animation">
                        <img class="img-animation" src="" alt="" title="" id="img-animation">
                    </div>
                </div>
            </div>
        `;
    }


}


function FirstDashboard(yx) {
    if(index) {
        var main_title = document.querySelector(".sct-dashboard .first-content .col-01 .main-title-thumbnail");

        var sub_title_02 = document.querySelector(".sct-dashboard .first-content .col-02");
        var sub_title_03 = document.querySelector(".sct-dashboard .first-content .col-03 .sub-title-thumbnail");
        
        var small_title_01 = document.querySelector(".sct-dashboard .first-content .col-01 .small-title");
        var small_title_03 = document.querySelector(".sct-dashboard .first-content .col-03 .small-title");

        var item_main = yx.slice(0, 1);

        var item_sub_02 = yx.slice(1, 3);
        var item_sub_03 = yx.slice(3, 4);

        var item_small_01 = yx.slice(4, 7);
        var item_small_03 = yx.slice(7, 11);

        const ul_01 = document.createElement("ul");
        const ul_03 = document.createElement("ul");

        /* Main */
        for (let i = 0; i < item_main.length; i++) {

            main_title.innerHTML =
            `
                <div class="post-title">
                    <a href="" data-post="${item_main[i]["id"]}">${item_main[i]["title"]}</a>
                </div>
    
                <div class="post-img-category">
                    <img class="size-img" src="${item_main[i]["thumbnail"]}" alt="" title="">
                    <div class="status">
                        <span>${item_main[i]["category"]}</span>
                    </div>
                </div>
    
                <div class="post-header">
                    <a href="">${item_main[i]["content"]["header"]}</a>
                </div>
            `;
        }

        /* Sub 2 */
        for (let i = 0; i < item_sub_02.length; i++) {
            const div = document.createElement("div");
            div.classList.add("sub-title-thumbnail");

            div.innerHTML =
            `
                <div class="sub-header">
                    <img class="size-img" src="${item_sub_02[i]["thumbnail"]}" alt="" title="${item_sub_02[i]["title"]}">
                </div>
                <div class="sub-post">
                    <a href="">${item_sub_02[i]["title"]}</a>
                </div>
            `;

            sub_title_02.appendChild(div);
        }

        /* Sub 3 */
        for (let i = 0; i < item_sub_03.length; i++) {
            const div = document.createElement("div");
            div.classList.add("sub-title-thumbnail");

            div.innerHTML =
            `
                <div class="sub-header">
                    <img class="size-img" src="${item_sub_03[i]["thumbnail"]}" alt="" title="${item_sub_03[i]["title"]}">
                </div>
                <div class="sub-post">
                    <a href="">${item_sub_03[i]["title"]}</a>
                </div>
            `;

            sub_title_03.appendChild(div);
        }

        /* Small 1 */
        for (let i = 0; i < item_small_01.length; i++) {
            const li = document.createElement("li");

            let video = ``;
            
            if(item_small_01[i]["video"] == true) {
                video = `<span class="icon-video"> <i class="bx bx-play-circle"></i> </span>`;
            } else {
                video = ``;
            }

            li.innerHTML = 
            `
                <span class="line-horizontal"></span>
                <a href="" data-post="${item_small_01[i]["id"]}"> 

                    ${video}

                    <span class="post-sm-title">
                        ${item_small_01[i]["title"]}
                    </span>
                </a>
            `;
            ul_01.appendChild(li);
        }
        small_title_01.appendChild(ul_01);

        /* Small 3 */
        for (let i = 0; i < item_small_03.length; i++) {
            const li = document.createElement("li");

            let video = ``;
            
            if(item_small_03[i]["video"] == true) {
                video = `<span class="icon-video"> <i class="bx bx-play-circle"></i> </span>`;
            } else {
                video = ``;
            }

            li.innerHTML = 
            `
                <span class="line-horizontal"></span>
                <a href="" data-post="${item_small_03[i]["id"]}"> 

                    ${video}

                    <span class="post-sm-title">
                        ${item_small_03[i]["title"]}
                    </span>
                </a>
            `;
            ul_03.appendChild(li);
        }
        small_title_03.appendChild(ul_03);

    }
}

function SecondDashboard(yx) {
    if(index) {
        var sub_title_01 = document.querySelector(".sct-dashboard .second-content .col-01 .sub-title-thumbnail");
        var sub_title_02 = document.querySelector(".sct-dashboard .second-content .col-02 .sub-title-thumbnail");
        var sub_title_03 = document.querySelector(".sct-dashboard .second-content .col-03 .sub-title-thumbnail");
        var sub_title_04 = document.querySelector(".sct-dashboard .second-content .col-04 .sub-title-thumbnail");
        var sub_title_05 = document.querySelector(".sct-dashboard .second-content .col-05 .sub-title-thumbnail");

        
    }
}

function ThirdDashboard(yx) {
    if(index) {
        
    }
}

function Dashboard() {
    createElDashboard();

    let d = Data(x);

    let client = "";

    // console.log(d);

    for (let i = 0; i < d.length; i++) {
        // console.log(d[i]);
        switch (d[i]["location"]) {
            case "first-content" : 
                client = d[i]["clients"];
                FirstDashboard(client);
                break;
            case "second-content" : 
                client = d[i]["clients"];
                SecondDashboard(client);
                break;
            case "third-content" : 
                client = d[i]["clients"];
                ThirdDashboard(client);
                break;
            default : 
                break;
        }
    }
}

function _Random() {

}

function App() {
    switch (site) {
        case "sct-dashboard" : 
            Dashboard();
            _Random();
            break;
        case "sct-other" :
            break;
        case "sct-city" :
            break;
        case "sct-feedback" :
            break;
        default :
            break;
    }
}


App();