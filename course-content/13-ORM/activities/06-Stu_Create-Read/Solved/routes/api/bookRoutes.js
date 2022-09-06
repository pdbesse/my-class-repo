const router = require('express').Router();
const Book = require('../../models/Book');

// GET all books
// http://localhost:3001/api/books
router.get('/', (req, res) => {
  // Get all books from the book table
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

// GET all paperback books
// http://localhost:3001/api/books/paperbacks
router.get('/paperbacks', (req, res) => {
  Book.findAll({
    // Order by title in ascending order
    order: ['title'],
    where: {
      // Only get books that have this boolean set to TRUE
      is_paperback: true
    },
    attributes: {
      // Don't include these fields in the returned data
      exclude: ['is_paperback', 'edition']
    }
  }).then((bookData) => {
    res.json(bookData);
  });
});

// GET a single book
// http://localhost:3001/api/books/1
router.get('/:id', (req, res) => {
  // Find a single book by its primary key (book_id)
  Book.findByPk(req.params.id).then((bookData) => {
    res.json(bookData);
  });

  // Book.findAll({
  //   where: {
  //     // Only get books that have this boolean set to TRUE
  //     book_id: req.params.id
  //   }
  // }).then((bookData) => {
  //   res.json(bookData[0]);
  // });
});

// CREATE a book
router.post('/', (req, res) => {
  Book.create(req.body)
    .then((newBook) => {
      res.json(newBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

// CREATE multiple books
router.post('/seed', (req, res) => {
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      isbn: '978-0674729018',
      pages: 336,
      edition: 1,
      is_paperback: false
    },
    {
      title: 'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      isbn: '978-0137043293',
      pages: 500,
      edition: 1,
      is_paperback: true
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      isbn: '978-0135957059',
      pages: 352,
      edition: 2,
      is_paperback: false
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      isbn: '978-0201896831',
      pages: 672,
      edition: 3,
      is_paperback: false
    }
  ])
    .then(() => {
      res.send('Database seeded!');
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
