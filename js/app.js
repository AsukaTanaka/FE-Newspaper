const app = {
    baseURL: 'http://jsonplaceholder.typicode.com/AsukaTanaka/FE-Newspaper/',
    init: () => {
        document.addEventListener('DOMContentLoaded', app.load);
        console.log('HTML Loaded');
    },
    load: () => {
        app.getMenu();
        app.getData();
    },
    getMenu: () => {

    },
    getData: () => {
        let page = document.body.id;
        switch (page) {
            case 'index':
                app.getIndex();
                break;
            default:
                
        }
    },
    getIndex: () => {
        
    },
}

app.init();