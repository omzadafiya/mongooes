const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://omzadafiya810911:YWzahikc5qS8XfUg@cluster0.xc6ddxn.mongodb.net/test");

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const main = async () => {
    
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({
        name: "m-8",
        price: 660,
        brand: "LG",
        category: "mobile"
    });
    let result = await data.save();
    console.log(result);
}
const updateMain = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne(
        { name: "y-53" },
        {
            $set: { price: 1300 }
        }
    )
    console.log(data);
}
const deleteMain = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:"y-53"});
    console.log(data);
}

const fiendMain = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find();
    console.log(data);
}
fiendMain();