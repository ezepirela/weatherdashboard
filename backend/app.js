const   express       =   require('express'),
        path                    =   require('path'),
        app =   express(),
        bodyParser = require('body-parser'),
        mainRoutes = require('./Routes/mainRoutes');
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})
app.use(express.static(path.join('public')));

app.use('/api', mainRoutes);
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    };
    res.json({error: error.message, code: error.code})
})
app.listen(process.env.PORT  || 4000, () => {
    console.log('the app is running')
})