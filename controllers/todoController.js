var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb+srv://test:test@test.ej2tlvl.mongodb.net/');

// Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

// var data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'kick some coding ass' }];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

    // Set up controller page
    app.get('/todo', async (req, res) => {
        //get data from mongodb and pass it to view
        try {
            const data = await Todo.find({});
            res.render('todo', { todos: data });
        } catch (err) {
            console.error(err);
            res.status(500).send('Error fetching todos');
        }
    });

    app.post('/todo', urlencodedParser, async (req, res) => {
        //get data from the view and add it to mongodb
        try {
            const newTodo = new Todo(req.body);
            const data = await newTodo.save();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error saving todo');
        }
    });

    app.delete('/todo/:item', async (req, res) => {
        //delete the requested item from mongodb
        try {
            const data = await Todo.findOneAndDelete(
                { item: req.params.item.replace(/\-/g, " ") }
            );
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error deleting todo');
        }
    });
}