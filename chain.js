// data access
const data = [{id: 1, name: 'john', address: 'LA'}];

// console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    {id: 1, name: 'lenevo', price: 65000},
    {id: 2, name: 'macbook', price: 165000},
  ]
}

// second product price
console.log(products.data[1].price);


const user = {
  id: 5001,
  name: 'Shoriful Raj',
  address: {
    street: {
      first: '54/1 uttor side',
      second: 'pori er goli',
      third: 'taltola road'
    },
    city: 'Dhaka'
  }
}

const user2 = {
  id: 5002,
  name: 'Anu Bhai',
  address: {
    city: 'chittagong',
    country: 'bangladesh'
  }
}

console.log(user.address.street?.second)
console.log(user2.address.street?.second)