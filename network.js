class network{
    //obj from server class
    server= new server;

    Asyncronic (data){
        this.server.prossessRequest(data);
    }

    Syncronic(data){
        let result=this.server.prossessRequest(data);
        return result;
    }
}