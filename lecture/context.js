const book = require('./context2.js')

class Person {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}

const guy = new Person('kyle', 'thomas')

console.log(guy)
console.log(guy.getFullName())
console.log(book.getNameForPhonebook.apply(guy,['9']))
console.log(book.getNameForPhonebook.call(guy,'9'))
console.log(book.getNameForPhonebook.bind(guy,'9'))
Person.prototype.getNameForPhonebook = book.getNameForPhonebook
const phoneBook = guy.getNameForPhonebook('!')
console.log(phoneBook)

//Arrow functions DO NOT work with bind(this)
function bind2(obj, fn){
  return function (){
      fn.apply(obj, arguments)
  }
}

exports.module.bind2 = bind2