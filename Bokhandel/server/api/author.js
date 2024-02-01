export default function (server, mongoose){
    
    const authorSchema = mongoose.Schema({
        name: String,
        age: Number
    })

    const Author = mongoose.model("authors", authorSchema)

    server.get("/api/authors", async (req, res) => {
        const authors = await Author.find()
        res.json(authors)
    })

    server.post("/api/authors", async (req, res) => {
    try {
      const newAuthor = new Author({
        name: req.body.name,
        age: req.body.age
      })
      const savedAuthor = await newAuthor.save()
      res.status(201).json(savedAuthor)
      }catch (err) {
        res.status(500).json({ message: "Something went wrong in the /api/authors-route! "})
      }
    })
}