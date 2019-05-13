const express = require('express')
const app = express()
const fetch = require('node-fetch')



app.set('view engine', 'ejs');

app.use(express.static('public'))


app.get('/', function (req, res) {
    res.render('pages/index');

    console.log("mainpage")

});


app.get('/collection', function (req, res) {
    res.render('pages/collection');

    console.log("conllection")

});

app.get('/search', function (req, res) {
    router.searchResults().then(data => {
        res.render('pages/search', {
            data
        });
    });


    


});
app.get('/offline', function (req, res) {
    res.render('pages/offline');
    

});

app.get('/boek/:id', function (req, res) {
    storage.bookId = req.params.id
    const data = storage.data
    const book = data.find(storage.bookFind);

    console.log(book);
    router.searchResults();

    res.render('pages/boek', {
        book
    });


});

const storage = {
    data: undefined,

    bookId: undefined,

    bookFind: function (book) {

        return book.id === storage.bookId
    }

}

const router = {

    constructor: {
        URL: 'https://raw.githubusercontent.com/stijn-aa/hond/master/hond.json'
    },

    searchResults: function () {

        console.log(this.constructor.URL)

       return fetch(this.constructor.URL)
            .then(body => body.json())
            .then(data => storage.data = data)
            .catch(error => console.log(error))


    }
}





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Our app is running on port ${ PORT }`);
})