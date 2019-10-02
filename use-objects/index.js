const person = {
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

const {...personTwo} = person
personTwo.setName('Other Name')
console.log(personTwo)
console.log(person)


