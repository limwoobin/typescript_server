function Member(name) {
    this.name = name;    
}

Member.staticMethod = function() { 
    console.log(this.name); 
}

Member.prototype.getName = function() {
     return this.name 
};

const mem = new Member("test");

Member.staticMethod();
console.log(mem.getName());