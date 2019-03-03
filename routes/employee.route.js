module.exports = (app) => {
    
    const apiPath = '/api/v1';
    const employeeController = require('../controllers/employee.controller');

    app.get(`${apiPath}/employees`, employeeController.getTodos);
    app.get(`${apiPath}/employee/:id`, employeeController.getTodo);
    app.get(`${apiPath}/delete/:id`, employeeController.deleteTodo);
    app.post(`${apiPath}/create`, employeeController.createTodo);
    app.put(`${apiPath}/employee/:id`, employeeController.updateTodo);
    

}