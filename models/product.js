const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({ //constructor
 //_id is aded automatically
  title: {
    type: String,
    required: true
  },
  price : {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);


// const mongodb =require('mongodb');
// const getDb = require('../util/database').getDb;

// class Product {
//   constructor(title, price, description, imageUrl, id, userId){
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = id ? new mongodb.ObjectId(id) : null;
//     this.userId = userId;
//   }

//   save() {
//     const db = getDb();
//     let dbOp;
//     if (this._id) {
//       //update the product
//         dbOp = db
//         .collection('products')
//         .updateOne({ _id: this._id }, { $set: this });
//     } else {
//         dbOp = db.collection('products').insertOne(this);
//     }
//     //connect to mongo DB
//     //db.collection('products').insertOne({name: 'A book',price: 12.99});
//     return dbOp
//     .then(result => {
//       console.log(result);
//     })
//     .catch(err => {  //this is the product
//       console.log(err);
//     });
//   }

//   static fetchAll(){
//     const db=getDb(); //get access to the database
//     return db.collection('products')
//     .find() //find is a mongodb key word that finds all
//     .toArray()
//     .then(products =>{
//       console.log(products);
//       return products;
//     })
//       .catch(err => {  //this is the product
//       console.log(err);
//     }); 
//   }

//   static findById(prodId) {
//     const db = getDb();
//     return db
//     .collection('products')
//     .find({_id: new mongodb.ObjectId(prodId)}) //can't compre a string to object Id from MongoDB
//     .next()
//     .then(product => {
//       console.log(product);
//       return product;
//     })
//     .catch(err => {  
//       console.log(err);
//     });
//   }
//   static deleteById(prodId){
//     const db = getDb();
//     return db
//     .collection('products')
//     .deleteOne({_id: new mongodb.ObjectID(prodId) })
//     .then(result => {
//       console.log('Deleted');
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }
// }




// module.exports = Product;
