
class Dictionary{
    constructor(){
        this.Dictionary={}
    }
    add(key, value){
        this.Dictionary[key]=value
    }
    get(key){
       return this.Dictionary[key];
    }
}

const phoneBook = new Dictionary();

phoneBook.add('asib',01303474414)
phoneBook.add('rony','12353')
console.log(phoneBook.Dictionary);
const asib= phoneBook.get('asib')
console.log(asib);
