
// LIFO

class Stack {

    constructor(){
        this.Stack=[];
    }
    add(item){
        this.Stack.push(item)
    }
    remove(){
        if(this.Stack.length){
            return this.Stack.pop()
        }
    }
}
const guest = new Stack()
guest.add('atik')
guest.add('asib')
guest.add('abid')
guest.add('antor')
guest.remove()

console.log(guest.Stack);













