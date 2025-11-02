module.exports = function(app){

    //set up controller page
    app.get('/todo', function(req, res){
        res.render('todo');
    });

    app.post('/todo', function(req, res){
        
    });

    app.delete('/todo/:item', function(req, res){
      
    });
}