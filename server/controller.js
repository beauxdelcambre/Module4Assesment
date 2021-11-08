// const books = 
// globalId = 

// module.exports = {
//     getBooks: (req, res) => res.status(200).send(book), 
//     addBook: (req, res) => {
//         let {title, author} = req.body
//         let newBook= {
//             id:globalId, 
//             title, 
//             author
//         }
//         books.push(newBook)
//         res.status(200).send(books)
//         globalId++
//     },
//     deleteBook: (req, res) => {
//         let index = books.findIndex(elem => elem.id === +req.params.id)
//         books.splice(index, 1)
//         res.status(200).send(books)
//     }

// }
