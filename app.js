const express = require('express')
const app = express();
const port = 3030;
const path = require('path') //CON ESTO ARMO LAS RUTAS

app.use(express.static('public'))
app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views','home.html')))         //el req y res son callbacks
app.get('/contacto',(req,res) => res.sendFile(path.join(__dirname,'views','contacto.html')))
app.listen(port, () => {
    console.log('Server open as ' + 3030);
})


