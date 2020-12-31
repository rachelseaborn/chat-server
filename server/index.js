const express = require("express");
const ctrl = require("./controllers/messages_controller");

const app = express();

//Parse JSON from the body
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const port = 3001;

app.post('/api/messages', ctrl.create);
app.get('/api/messages', ctrl.read);
app.put('/api/messages/:id', ctrl.update);
app.delete('/api/messages/:id', ctrl.delete);

/*
const messagesBaseUrl = "/api/messages";
app.get(messagesBaseUrl, ctrl.create);
app.post(messagesBaseUrl, ctrl.read);
app.put(`${messagesBaseUrl}/:id`, ctrl.update);
app.delete(`${messagesBaseUrl}/:id`, ctrl.delete);
*/
app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
});