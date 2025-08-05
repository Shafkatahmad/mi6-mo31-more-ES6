const products = [
  {id: 1, name: 'lenovo', price: 65000},
  {id: 2, name: 'dell', price: 45000},
  {id: 3, name: 'hp', price: 40000},
  {id: 4, name: 'mac', price: 150000},
]

// has some properties, method
class product{
  country = 'Bangladesh';
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`Talking about ${talk}`);
  }
}

const lenevo = new product('Le Le Lenovo');
// console.log(lenevo);
// lenevo.speak('Hello there');

class Teacher{
  constructor(name, subject){
    this.name = name;
    this.subject = subject;
  }
  lecture(){
    console.log('Sir is teaching Math');
  }
}

const tapan = new Teacher('Tapon sir', 'Physics');
console.log(tapan);

const rashid = new Teacher('Rashid sir', 'English');
console.log(rashid);