// function Person(fullName, favColor) {
//     this.myName = fullName
//     this.favoriteColor = favColor
//     this.greet = () => {
//         console.log(`Hi, my name is ${this.myName} and my favorite color is ${this.favoriteColor}`)
//     }
// }

class Person {
    constructor(name, favColor) {
        this.myName = name
        this.favoriteColor = favColor
    }
    greet() {
        console.log(`Hi, my name is ${this.myName} and my favorite color is ${this.favoriteColor}`)
    }
}

export default Person