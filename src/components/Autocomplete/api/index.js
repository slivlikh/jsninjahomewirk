const db = [
    {name: 'ETH', id: 0, balance: 12.30},
    {name: 'ETC', id: 1, balance: 15.12},
    {name: 'BTH', id: 2, balance: 30.30},
];


// class MyPromise extends Promise{
//     constructor(func){
//       return  super(func);
//     }
//
//     abort() {
//         console.log(this);
//     }
// }

export function getAutocomplite(text) {
    return new Promise((res, rej)=> {
        let matchedItems = [];

        if(text){
            const a = new RegExp("^" + text, "i");
            matchedItems = db.filter((val)=> ( a.test(val.name) ));
        }else {
            matchedItems = []
        }

        setTimeout(()=>{
            res(matchedItems);
        }, 300);
    });
}