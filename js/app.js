function returnOrgName(cli) {

    data.reduce((acc, el) => {
        const filtered = el.clients.filter((client ) => {
            if(sectionIndex) {
                if(client.type.includes('index')) {
                    cli = client;

                    // return client;
                }
            }
        });
    
        if (filtered.length > 0) {
            acc.push({ org_name: el.org_name, clients: filtered });
        }
    
        return acc;

    }, []);
    return cli;

}


function smallContent() {
    if(document.getElementById('small-content-st')) {

        var smallContentList = document.getElementById('small-content-st');

        

    }
} 

function psThumbnail(txt) {
    const showText = returnOrgName(txt);

    if(document.getElementById('ps-thumbnail-st')) {
    
        var thumbnailList = document.getElementById('ps-thumbnail-st');

        if(sectionIndex) {
            thumbnailList.innerHTML = 
                `
                    <h4 class="h4-title">${showText.post}</h4>
                    <img class="thumbnail-obj" src="${showText.url}" alt="" title="${showText.title}">
                    <span class="post-category">${showText.category}</span> 
                `;
        }


    }
}


function returnHtmlST() {
    const stList = document.getElementById("site-st-content");
    const st_row = document.createElement("div");
    const st_col_01 = document.createElement("div");

    st_row.classList.add("row");
    st_col_01.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "col-xl-4");

    st_col_01.innerHTML = 
        `
            <div class="ps-thumbnail" id="ps-thumbnail-st">
                
            </div>
            <div class="small-content" id="small-content-st"> 

            </div>
        `;

    stList.appendChild(st_row);
    st_row.appendChild(st_col_01);
}

/**
* Get Functions
*/

if(siteSTContent) { 
    returnHtmlST();
    psThumbnail();
}

