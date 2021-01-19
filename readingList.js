let books = [{
        title: 'Javascript Easy',
        author: 'h.G Abu',
        alreadyRead: true,
    },
    {
        title: 'Python Jam',
        author: 'u.L Abdul',
        alreadyRead: true,
    },
    {
        title: 'Java Science ',
        author: 'J.K Abiodun',
        alreadyRead: false,
    },
]

books.forEach((book) => {
    console.log(book.title + ' by ' + book.author);
    if (book.alreadyRead === true) {
        console.log('You already read ' + book.title);
    } else if (book.alreadyRead === false) {
        console.log('You still need to read ' + book.title);
    }
})