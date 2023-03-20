//change the parameters and to fix the onload

class FXMLHttpRequest {

    //fields
    data = {};
    onload;
    network = new network();


    // const
    UNSENT = 0;

    // methods: ctor, open and save function

    //default ctor
    constructor() {
        this.onload=()=>{};
    }

    //function of open that get: method, url etc
    open(method, url, Asyncronic = true, user = null, password = null) {
        this.data = {
            "method": method,
            "url": url,
            "Asyncronic": Asyncronic,
            "user": user,
            "password": password
        };
    }

    //function save that get only body
    send(body = "") {       
        const d = this.data;
        if (this.data["Asyncronic"]) {
            let response= this.network.isAsyncronic(JSON.stringify({ d, body }));
            if(response)
                this.onload(response);
            else
                this.onload();
        }
        else {
            this.network.Syncronic(JSON.stringify({ d, body }));
        }
    }


    
    //********************************************/
    //*****************TODO***********************/
    //onload
    onload(XMLHttpRqst) {
        if (XMLHttpRqst.status === 200) {
            console.log(XMLHttpRqst.responseText);
        } else {
            console.log('Request failed with status ' + xhr.status);
        }
    };
}