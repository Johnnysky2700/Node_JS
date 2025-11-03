var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb+srv://test:test@test.ej2tlvl.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

// Save an initial item
var itemOne = new Todo({ item: 'buy flowers' });
itemOne.save()
    .then(() => console.log('item saved'))
    .catch(err => console.error('Error saving item:', err));

var data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'kick some coding ass' }];
var urlencodedParser = bodyParser.urlencoded({ extended: false }); // middleware

module.exports = function(app) {

    // Set up controller page
    app.get('/todo', function(req, res) {
        res.render('todo', { todos: data });
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        var newTodo = new Todo(req.body);
        newTodo.save()
            .then(() => {
                data.push(req.body);
                res.json(data);
            })
            .catch(err => {
                console.error('Error saving todo:', err);
                res.status(500).send('Error saving todo');
            });
    });

    app.delete('/todo/:item', function(req, res) {
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });
}