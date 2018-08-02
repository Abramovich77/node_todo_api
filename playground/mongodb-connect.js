const MongoCliet = require('mongodb').MongoClient;

MongoCliet.connect('mongodb://localhost:27017/Users', (err,client) => {
    if (err){
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Users');
/*
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false

    },(err,result)=> {
        if(err){
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined,2));
    }); */

  /*

    db.collection('Users').insertOne({
        name: 'Oleg',
        age:28,
        location: 'Petag Tikva'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert to todo', err);
        }
        
    console.log(JSON.stringify(result.ops,undefined,2));            
    }


    )
*/

    db.collection('Users').find({name:{$eq : 'Oleg'}}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));        
    },(err) => {
        console.log('Unable to insert to todo', err);
    });

    client.close();
});