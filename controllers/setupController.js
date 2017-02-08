var Todos = require('../models/todoModel');

module.exports = function(app) {

  app.get('/api/setupTodos', function(req, res) {

    var starterTodos = [

     {
       username: 'test',
       todo: 'Buy coffee',
       isDone: false,
       hasAttachment: false

     } ,

     {
       username: "test",
       todo: "Pet the cat",
       isDone: false,
       hasAttachment: false

     },

     {
       username: "test",
       todo: "Learn MEAN stack",
       isDone: false,
       hasAttachment: false
     }

   ];
   Todos.create(starterTodos, function(err, results) {
     res.send(results);
   });

 });
}
