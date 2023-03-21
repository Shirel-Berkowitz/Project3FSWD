class network{
    //obj from server class
    server= new server;

    isAsyncronic (data){
        return this.server.prossessRequest(data);
    }

    Syncronic(data){
        let result=this.server.prossessRequest(data);
        return result;
    }
}