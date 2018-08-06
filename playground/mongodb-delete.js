const MongoCliet = require('mongodb').MongoClient;



MongoCliet.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err){
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // deleteMany
    db.collection('Todos').deleteMany({text :'Eat lunch'}).then((result)=> {
        console.log(result)
    });
    // deleteOne

    // findOneAndDelete

    
    client.close();
});