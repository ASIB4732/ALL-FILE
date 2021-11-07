
// FIFO

 class Queue {

    constructor(){
        this.Queue=[];
    }
    add(item){
        this.Queue.push(item)
    }
    remove(){
        if(this.Queue.length){
            return this.Queue.shift()
        }
    }
}
const food=new Queue()
food.add('appele')
food.add('orenge')
food.add('banaba')
food.add('paynapel')
food.add('mango')
food.add('stovary')
console.log(food);
const xxx= food.remove()
console.log(xxx);
console.log(food);





