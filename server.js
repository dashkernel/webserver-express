const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000; //Si no exste la variable global asignar el puerto 3000

//Middleware = instrucción o callback que se va a ejecutar siempre no importando que URL sea la que la persona pida
app.use(express.static(__dirname + '/public'));

//Express HBS engine (handlebars)
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


//No es necesario pero se recomienda no tener ambos recursos en ejecucion en /
app.get('/', (req, res) => {
    // let salida = {
    //     nombre: 'dario',
    //     edad: 33,
    //     url: req.url
    // };

    // res.send(salida);

    // res.send('Hola mundo')

    //Render es para renderizar home.hbs
    // res.render('home', {
    //     nombre: 'Dario',
    //     anio: new Date().getFullYear()
    // });
    res.render('home', {
        nombre: 'darIo'
    });
});

app.get('/about', (req, res) => {

    // res.render('about', {
    //     anio: new Date().getFullYear()
    // });
    res.render('about');

});


/*crear otro recurso
app.get('/data', (req, res) => {
    res.send('Hola data');
});
*/

app.listen(3000, () => {
    console.log(`Escuchando peticiones el puerto ${port}`);
})