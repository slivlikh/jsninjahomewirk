class CoinsApi {
    static subscribersPool = {};
    static stackOfMessages = [];
    static socket;
    static isOpenSocket;
    static isOpeningSocket;

    static sendMess = (mess) => {
        if(CoinsApi.isOpenSocket){
            CoinsApi.socket.send(mess);
        }else if(CoinsApi.isOpeningSocket) {
            CoinsApi.stackOfMessages.push(mess);
        }else {
            CoinsApi.openSocket();
            CoinsApi.stackOfMessages.push(mess);
        }
    };

    static sendMessInStack = () => {
        CoinsApi.stackOfMessages.forEach((mess)=>{
            CoinsApi.socket.send(mess);
        });

        CoinsApi.stackOfMessages = [];
    }

    static openSocket = () => {
        return new Promise((res, rej)=>{
           if(CoinsApi.isOpenSocket) {
               res();
           } else {
               CoinsApi.socket =  new WebSocket("ws://coins-stream.demo.javascript.ninja");
               CoinsApi.isOpeningSocket = true;

               CoinsApi.socket.addEventListener('open', (event) => {
                   CoinsApi.isOpenSocket = true;
                   CoinsApi.sendMessInStack()
                   res(CoinsApi.socket);
               });

               CoinsApi.socket.addEventListener('message', ({ data }) => {
                   const parcedData = JSON.parse(data);

                   CoinsApi.broadcast(parcedData);
               });

               CoinsApi.socket.addEventListener('error', (event) => {
                   CoinsApi.isOpenSocket = false;
               });

               CoinsApi.socket.addEventListener('close', (event) => {
                   CoinsApi.isOpenSocket = false;
               });
           }
        });
    };

    static broadcast = (data) => {
        if( data.currency in CoinsApi.subscribersPool && CoinsApi.subscribersPool[data.currency].length > 0 ) {
            CoinsApi.subscribersPool[data.currency].forEach((cb)=>{
                cb(data);
            })
        }
    };

    async subscribeOnCoin(coin){

        CoinsApi.sendMess(JSON.stringify({ type: 'subscribe', currency: coin }))

    }

    async unSubscribeOnCoin(coin){
        console.log('unsubscribe', coin)
        CoinsApi.sendMess(JSON.stringify({ type: 'unsubscribe', currency: coin }))

    }

    subscribe(coin, func) {
        if (coin in CoinsApi.subscribersPool) {
            CoinsApi.subscribersPool[coin].push(func);
        }else {
            this.subscribeOnCoin(coin);

            CoinsApi.subscribersPool[coin] = [func];
        }
    }

    unSubscribe(coin, func) {
        console.log('unSubscribe')

        if (coin in CoinsApi.subscribersPool && CoinsApi.subscribersPool[coin]) {
            CoinsApi.subscribersPool[coin] = CoinsApi.subscribersPool[coin].filter((item)=>( item !== func ));

            if(CoinsApi.subscribersPool[coin].length === 0) {
                this.unSubscribeOnCoin(coin)
            }
        }
    }
}

export default CoinsApi;