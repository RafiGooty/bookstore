var mongoose=require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    genre:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    author:{
        type:String,
        require:true
    },
    publisher:{type:String},
    pages:{type:String},
    image_url:{type:String},
    bur_url:{
        type:String
    },
    create_date:{
        type:Date,
        default:Date.now
    }
})

var Book=module.exports=mongoose.model('books',bookSchema);

//Get Books
module.exports.getBook=function(callback,limit){
    Book.find(callback).limit(limit);
}
// Get single id
module.exports.getBookById=function(id,callback){
    Book.findById(id,callback);
}

// Add Book
module.exports.addBook=function(book,callback){
    Book.create(book,callback);
    }

    // Update Book
    module.exports.updateBook=function(id,book,options,callback){
        var query={_id:id};
        var update={
            title:book.title,
            genre:book.genre,
            description:book.description,
            author:book.author,
            publisher:book.publisher,
            pages:book.pages,
            image_url:book.image_url,
            bur_url:book.bur_url
        }
        Book.findOneAndUpdate(query,update,options,callback);
        }

// Delete Book

module.exports.deleteBook=function(id,callback){
    var query={_id:id};
    Book.remove (query,callback);
    }        