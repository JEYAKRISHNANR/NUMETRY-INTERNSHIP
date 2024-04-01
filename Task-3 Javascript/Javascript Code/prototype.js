     //prototype chain
     let object={
        name:"jey",
        city:"coimbatore",
        print:function(){
            console.log(this.name+" from "+this.city);
        }
    }
    let object2={
        name:"krish",
    
    }
    object2.__proto__=object;
    object2.print();// output- krish from coimbatore