

function Dashboard() {
    
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
        default :
            break;
    }
}


App();