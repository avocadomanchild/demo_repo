const express = require('express'); 
const app = express(); 
app.use(express.json()); // built-in middleware for express

const libary  = [];

function sort_by_key(array, key)
{
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
}

app.get('/api/books', (req, res)=>{
  sort_books = sort_by_key(libary,'title')
  res.send(sort_books);
});

app.post('/api/books', function(req, res){
  const book = {
    id: libary.length+ 1,
    author: req.body.author,
    title : req.body.title,
    yearPublished : req.body.yearPublished
  };
  
  libary.push(book);
  res.status(201).send(book);
  
});

app.delete('/api/books', function (req, res) {
  while(libary.length>0){
    libary.pop();
  }
  // res.send(libary)
  res.status(204).end();
  
})

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listen to port ${port}`));




// app.get('/api', (req, res)=>{
//   res.send(libary)
//   // res.send(libary.length)
// });