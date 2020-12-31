
let messages = [];
let id = 0;

module.exports = {

  create: (req, res) => {
    const { text, time } = req.body;

    /*let message = {
      id: id,
      text: text,
      time: time
    } */

    messages.push({ id, text, time });
    //messages.push(message);
    id++;
    res.status(200).send(messages);
  },

  read: (req, res) => {
    res.status(200).send(messages);
  },

  update: (req, res) => {

    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];
    //const { id, text } = req.params;
    //let editText = messages.find(element => element.id === +id);

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).send(messages);
    //equiv. to res.status(200).send('message')
    //res.sendStatus(200);
  },

  delete: (req, res) => {
    //const { id } = req.params;
    const deleteID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
  }
  /*
      let deleteText = messages.findIndex(element => element.id === +id)
      messages.splice(deleteText, 1);
  
    res.status(200).send(messages);
  */
}

