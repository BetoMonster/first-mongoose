
const mongoose = require('mongoose')

const DB_USER       = 'beto'
const DB_PASSWORD   = 'beto1234'
const DB_HOST       = 'kodemia-beto.qcaoa.mongodb.net'
const DB_NAME       = 'kodemia'



//schema 

const koderSchema = new mongoose.Schema({ 
    name: {
        type: String,
        minLength: 2,
        maxLenght: 100,
        require: true 
    },
    lastname:{
        type: String,
        minLength: 2,
        maxLenght: 100,
        require: true 
    },
    age: {
        type: Number,
        min: 0,
        max: 150,
        require: true 
    },
    gender: {
        type: String,
        enum: ['m', 'f'],
        require: true 
    }

})

//model

const koder = mongoose.model('koders', koderSchema)  // ( colletion_name, schema )

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

mongoose.connect( url , { useNewUrlParser: true, useUnifiedTopology: true })
.then((conn)=>{
    console.log('DB connected :D: ', conn)
    /*
    koder.find({gender:'f'})  //Para hacer una consulta se hace a partir del modelo
        .then((kodersFound)=>{
            console.log('kodersFound: ',kodersFound)
        })
        .catch((error)=>{
            console.log('Error: ', error)
        })
    */
    koder.create({
        name: 'Mario',
        lastname: 'Andrade',
        age: 21,
        gender: 'm'
    })
        .then((koderCreated)=>{
            console.log('kodersCreated: ',koderCreated)
        })
        .catch((error)=>{
            console.log('Error: ', error)
        })    
})
.catch((error)=>{
    console.log('Error :( :', error)

})
