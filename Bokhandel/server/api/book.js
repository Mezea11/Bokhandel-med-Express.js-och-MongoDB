export default function (server, mongoose){
    
    const bookSchema = mongoose.Schema({
        title: String,
        description: String,
        author: { type: mongoose.Schema.Types.ObjectId, ref: "authors" }
    })

    const Book = mongoose.model("books", bookSchema)

    server.get("/api/books", async (req, res) => {
        const books = await Book.find()
        res.json(books)
    })

    server.post("/api/books", async (req, res) => {
    try {

      const newBook = new Book({
        title: req.body.title,
        description: req.body.description,
        author: req.body.authorID
      })

      const savedBooks = await newBook.save()
      res.status(201).json(savedBooks)
      } catch (err) {
        res.status(500).json({ message: "Something went wrong in the /api/book-route! "})
      }

    })
    
}