import {MongoClient} from 'mongodb'

async function handler(req,res){
    if(req.method === 'POST'){
        const data = req.body

        const {title, image,address,description} = data;

       const client= await MongoClient.connect('mongodb+srv://twardowskirobert1908:Wa8PAj8G7yystjZv@cluster0.iaxlx3e.mongodb.net/')
        const db =client.db()

        const meetupsCollection = db.collection('meetups')

        meetupsCollection.insertOne(data)

        const result = await meetupsCollection.insertOne(data)

        res.status(201).json({ message: "meetup passed"})
    }
}

export default handler