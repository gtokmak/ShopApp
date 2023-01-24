module.exports = function () {
    return {
        products :[
            {id:1,  category:'Telefon',      name:"Samsung S5",  price: 1000,    imageUrl:"1.jpg",   description:"idare eder."   },
            {id:2,  category:'Telefon',      name:"Samsung S6",  price: 2000,    imageUrl:"2.jpeg",  description:"iyi telefon"   },
            {id:3,  category:'Telefon',      name:"Samsung S7",  price: 3000,    imageUrl:"3.jpeg",  description:"güzel"         },
            {id:4,  category:'Bilgisayar',   name:"Samsung S8",  price: 4000,    imageUrl:"4.jpeg",  description:"harika"        },
            {id:5,  category:'Bilgisayar',   name:"Samsung S9",  price: 5000,    imageUrl:"5.jpeg",  description: "yavaş"        },
        ],
        categories :[
            {id: 1, name:"Telefon"},
            {id: 2, name:"Bilgisayar"},
            {id: 3, name:"Elektronik"},
        ],
        orders :[]

    }
}