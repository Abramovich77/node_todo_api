const MongoCliet = require('mongodb').MongoClient;



MongoCliet.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err){
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
/*
    db.collection('Todos').find().toArray().then((docs) =>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    }

    );
*/

db.collection('Users').find({name: 'Oleg'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));        
},(err) => {
    console.log('Unable to insert to todo', err);
});

    client.close();
});