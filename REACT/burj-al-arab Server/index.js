const express = require('express')
const bodyparser=require('body-parser')
const cors= require('cors')
const port = 5000

const admin = require('firebase-admin');


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }))




var serviceAccount = require("./burj-al-arab-32191-firebase-adminsdk-80ex0-eaf05d854a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://arabian:arabianhoars79@cluster0.sjl2g.mongodb.net/burjAlArab?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const bookings = client.db("burjAlArab").collection("Bokings");

  
   app.post('/addBooking', (req, res)=>{
   try{
    const newBooking = req.body;
    bookings.insertOne(newBooking)
    .then(result=>{
      res.send(result.acknowledged)
    })
    console.log(newBooking);
   }catch(err){
     console.log(err);
   }
  })

  app.get("/bookings",(req,res)=>{
    const Bearer=req.headers.authorization;
    if(Bearer && Bearer.startsWith('Bearer ')){
      // const idTocen=Bearer.split(' ')[1];
      // console.log(idTocen);

      // admin
      // .auth()
      // .verifyIdToken(idToken)
      // .then((decodedToken) => {
      //   const uid = decodedToken.uid;
      //   console.log(8888);
      //   console.log({uid});
      // })
      // .catch((error) => {
      // });
    }
  
 

    bookings.find({email: req.query.email})
    .toArray((err,document)=>{
      res.send(document)
    })
  })
}); 


app.get('/', (req, res) => {
  res.send('Hello World people')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})