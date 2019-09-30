let person = {
    name:'Pablo',
    lastName:'Rebolledo',
    age:35,
    currentDate: new Date(),
    getName: function(){
        return this.name
    },
    setName: function(name){
        this.name = name
        return this
    }
}

let {...person2} = person
person2.setName('X')
console.log(person)