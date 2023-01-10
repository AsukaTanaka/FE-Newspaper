

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

    if(third) {
        third.innerHTML = 
        `
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div class="box-video">

                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div class="scroll-bar-list">
                    
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

        var small_title_01 = document.querySelector(".sct-dashboard .second-content .col-01 .small-title");
        var small_title_02 = document.querySelector(".sct-dashboard .second-content .col-02 .small-title");
        var small_title_03 = document.querySelector(".sct-dashboard .second-content .col-03 .small-title");
        var small_title_04 = document.querySelector(".sct-dashboard .second-content .col-04 .small-title");
        var small_title_05 = document.querySelector(".sct-dashboard .second-content .col-05 .small-title");

        const news = yx.find(x=>x.name === "TLBT Business");
        const covid = yx.find(x=>x.name === "Covid");
        const election = yx.find(x=>x.name === "Election");
        const sport = yx.find(x=>x.name === "Sport");
        const healthy = yx.find(x=>x.name === "Healthy");

        var min_sub = 0;
        var max_sub = 1;

        var min_small = 1;
        var max_small = 5;

        var item_sub_01 = news["details"].slice(min_sub, max_sub);
        var item_sub_02 = covid["details"].slice(min_sub, max_sub);
        var item_sub_03 = election["details"].slice(min_sub, max_sub);
        var item_sub_04 = sport["details"].slice(min_sub, max_sub);
        var item_sub_05 = healthy["details"].slice(min_sub, max_sub);

        var item_small_01 = news["details"].slice(min_small, max_small);
        var item_small_02 = covid["details"].slice(min_small, max_small);
        var item_small_03 = election["details"].slice(min_small, max_small);
        var item_small_04 = sport["details"].slice(min_small, max_small);
        var item_small_05 = healthy["details"].slice(min_small, max_small);

        const ul_01 = document.createElement("ul");
        const ul_02 = document.createElement("ul");
        const ul_03 = document.createElement("ul");
        const ul_04 = document.createElement("ul");
        const ul_05 = document.createElement("ul");

        /* Sub 1 */        
        for (let i = 0; i < item_sub_01.length; i++){
            sub_title_01.innerHTML = 
            `
            <div class="sub-header">
                <a href="">
                    <span>${news["name"]}</span>
                    <span class="icon-next">
                        <i class="bx bx-chevron-right"></i>
                    </span>
                </a>
                <img class="size-img" src="${item_sub_01[i]["thumbnail"]}" alt="" title="${item_sub_01[i]["title"]}">
            </div>
            <div class="sub-post mb-0">
                <a href="" data-post="${item_sub_01[i]["id"]}">${item_sub_01[i]["title"]}</a>
            </div>
            `;
        }

        /* Small 1 */
        for (let i = 0; i < item_small_01.length; i++) {
            const li = document.createElement("li");

            li.innerHTML = 
            `
                <span class="line-horizontal"></span>
                <a href="" data-post="${item_small_01[i]["id"]}">
                    <span class="post-sm-title">
                        ${item_small_01[i]["title"]}
                    </span>
                </a>
            `;

            ul_01.appendChild(li);
        }

        small_title_01.appendChild(ul_01);


        /* Sub 2 */        
        for (let i = 0; i < item_sub_02.length; i++){
            sub_title_02.innerHTML = 
            `
            <div class="sub-header">
                <a href="">
                    <span>${covid["name"]}</span>
                    <span class="icon-next">
                        <i class="bx bx-chevron-right"></i>
                    </span>
                </a>
                <img class="size-img" src="${item_sub_02[i]["thumbnail"]}" alt="" title="${item_sub_02[i]["title"]}">
            </div>
            <div class="sub-post mb-0">
                <a href="" data-post="${item_sub_02[i]["id"]}">${item_sub_02[i]["title"]}</a>
            </div>
            `;
        }

        /* Small 2 */
        for (let i = 0; i < item_small_02.length; i++) {
            const li = document.createElement("li");

            li.innerHTML = 
            `
                <span class="line-horizontal"></span>
                <a href="" data-post="${item_small_02[i]["id"]}">
                    <span class="post-sm-title">
                        ${item_small_02[i]["title"]}
                    </span>
                </a>
            `;

            ul_02.appendChild(li);
        }

        small_title_02.appendChild(ul_02);

        /* Sub 3 */        
        for (let i = 0; i < item_sub_03.length; i++){
            sub_title_03.innerHTML = 
            `
            <div class="sub-header">
                <a href="">
                    <span>${election["name"]}</span>
                    <span class="icon-next">
                        <i class="bx bx-chevron-right"></i>
                    </span>
                </a>
                <img class="size-img" src="${item_sub_03[i]["thumbnail"]}" alt="" title="${item_sub_03[i]["title"]}">
            </div>
            <div class="sub-post mb-0">
                <a href="" data-post="${item_sub_03[i]["id"]}">${item_sub_03[i]["title"]}</a>
            </div>
            `;
        }

        /* Small 3 */
        for (let i = 0; i < item_small_03.length; i++) {
            const li = document.createElement("li");

            li.innerHTML = 
            `
                <span class="line-horizontal"></span>
                <a href="" data-post="${item_small_03[i]["id"]}">
                    <span class="post-sm-title">
                        ${item_small_03[i]["title"]}
                    </span>
                </a>
            `;

            ul_03.appendChild(li);
        }

        small_title_03.appendChild(ul_03);

        /* Sub 4 */        
        for (let i = 0; i < item_sub_04.length; i++){
            sub_title_04.innerHTML = 
            `
            <div class="sub-header">
                <a href="">
                    <span>${sport["name"]}</span>
                    <span class="icon-next">
                        <i class="bx bx-chevron-right"></i>
                    </span>
                </a>
                <img class="size-img" src="${item_sub_04[i]["thumbnail"]}" alt="" title="${item_sub_04[i]["title"]}">
            </div>
            <div class="sub-post mb-0">
                <a href="" data-post="${item_sub_04[i]["id"]}">${item_sub_04[i]["title"]}</a>
            </div>
            `;
        }

        /* Small 4 */
        for (let i = 0; i < item_small_04.length; i++) {
            const li = document.createElement("li");

            li.innerHTML = 
            `
                <span class="line-horizontal"></span>
                <a href="" data-post="${item_small_04[i]["id"]}">
                    <span class="post-sm-title">
                        ${item_small_04[i]["title"]}
                    </span>
                </a>
            `;

            ul_04.appendChild(li);
        }

        small_title_04.appendChild(ul_04);

        /* Sub 5 */        
        for (let i = 0; i < item_sub_05.length; i++){
            sub_title_05.innerHTML = 
            `
            <div class="sub-header">
                <a href="">
                    <span>${sport["name"]}</span>
                    <span class="icon-next">
                        <i class="bx bx-chevron-right"></i>
                    </span>
                </a>
                <img class="size-img" src="${item_sub_05[i]["thumbnail"]}" alt="" title="${item_sub_05[i]["title"]}">
            </div>
            <div class="sub-post mb-0">
                <a href="" data-post="${item_sub_05[i]["id"]}">${item_sub_05[i]["title"]}</a>
            </div>
            `;
        }

        /* Small 5 */
        for (let i = 0; i < item_small_05.length; i++) {
            const li = document.createElement("li");

            li.innerHTML = 
            `
                <span class="line-horizontal"></span>
                <a href="" data-post="${item_small_05[i]["id"]}">
                    <span class="post-sm-title">
                        ${item_small_05[i]["title"]}
                    </span>
                </a>
            `;

            ul_05.appendChild(li);
        }

        small_title_05.appendChild(ul_05);
    }
}

function ThirdDashboard(yx) {
    if(index) {
        var box_video_left = document.querySelector(".sct-dashboard .third-content .box-video");
        var box_video_right = document.querySelector(".sct-dashboard .third-content .scroll-bar-list");

        var item_video_left = yx.slice(0, 1);
        var item_video_right = yx.slice(1, 5);

        /* Box Video Left */

        for (let i = 0; i < item_video_left.length; i++) {
            box_video_left.innerHTML = 
            `
                <a href="" data-post="${item_video_left[i]["id"]}">
                    <div class="position-video">
                        <img alt="" title="${item_video_left[i]["title"]}" class="size-img"
                            src="${item_video_left[i]["thumbnail"]}">
                        <div class="icon-play">
                            <i class="bx bx-play"></i>
                        </div>
                    </div>
                </a>
                <a href="" data-post="${item_video_left[i]["id"]}">
                    <span>${item_video_left[i]["title"]}</span>
                </a> 

            `;
        }

        /* Box Video Right */

        for (let i = 0; i < item_video_right.length; i++) {
            const row = document.createElement("div");

            row.classList.add("row");

            row.innerHTML = 
            `
                <div class="col-4 col-xl-4">
                    <a href="">
                        <div class="position-video">
                            <img alt="" title="${item_video_right[i]["title"]}" class="size-img"
                                src="${item_video_right[i]["thumbnail"]}">
                            <div class="icon-play">
                                <i class="bx bx-play"></i>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-8 col-xl-8">
                    <a href="" data-post="${item_video_right[i]["id"]}">
                        <span>${item_video_right[i]["title"]}</span>
                    </a>
                </div>
            `;

            box_video_right.appendChild(row);
        }
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
    let image = document.getElementById("img-animation");

    let arrImage = 
        [
            "https://tpc.googlesyndication.com/simgad/11619033556789528890", 
            "https://tpc.googlesyndication.com/simgad/6752156452048706148", 
            "https://tpc.googlesyndication.com/simgad/11396136500387258322", 
            "https://tpc.googlesyndication.com/simgad/33911536141169662"
        ];

    // 10000s
    setInterval(function() {
        let random = Math.floor(Math.random() *4);
        image.src = arrImage[random];
    }, 10000);
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