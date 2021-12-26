import '../styles/styles.css'
// import Person from './modules/Person'
import MobileMenu from './modules/MobileMenu'

let mobileMenu = new MobileMenu()

    if(module.hot) {
        module.hot.accept()
    }

console.log('Test from App.js!')
// // Example code
// class Adult extends Person {
//     payTaxes() {
//         console.log(this.myName + ' don\'t pay taxes...')
//     }
// }

// let john = new Person('John', 'blue')
// john.greet()
// let jane = new Adult('Jane', 'green')
// jane.greet()
// jane.payTaxes()

