let obj = {
    a:1,
    b:"harry"

}
console.log(obj);

let animal = {
    eats:true
}
let rabbit= {
    jumps:true
}
// this __proto__ function makes protoype of rabbit and adds animal property to it as well
// this is used as there are diff objects and we want to add similiar property to it so in this case we use prototype so that we dont have to remake diff properties
rabbit.__proto__=animal


//the code in line 20 makes a new class as function
// class is the template of something
// and object is the values inside it
class animall{
    constructor(name){
        // the cod ein the line 25 is the way of making a new property it made a new property named "name"
        this.name=name
        console.log('Object is created');
    }
    eats(){
        console.log('I am eating');
    }
    jump(){
        console.log('I am jumping');
    }
}
//  a uses animal as function, as classes are the template
let a  = new animall("Bunny")// object of animal, as class is the template and the input is the object
console.log(a);



// inheritnece 
// this extends key word helps us to make new class with the property of the old class animal
class lion extends animall{
    // if we want to change the constructor  we cannot normally make a new one we have to use super or else it will give error
    // super wll connect the constructer to the above constructor of animal 
    constructor(name){
        super(name)
        // this.name=name it is alredy in the animal so we dont need to add it again
        console.log('Object is created and he is a lion .....');
    }
    // methods overwriting
    eats(){
        //the code in line 53 will give the above rats in it also 
        super.eats()
        console.log('I am eating and roar');
    }
    
}
let l = new lion("sheeeru")
console.log(l);

// instence of 
// tell wheter the object belongs to that class or not or parent class
console.log(l instanceof lion)