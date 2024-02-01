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
}