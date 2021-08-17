
function gitelemens(name,add){
   add(name);
}

function add(name){
    console.log("good morning",name);
}

function evening(name){
    console.log('good evening',name);
}

let addname ='asibur rahman';
gitelemens(addname,evening);

gitelemens(addname, function(name){
    console.log('speshal wellcome ',name);
});