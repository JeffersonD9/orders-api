import app from './app.js'

const main = () => {
    
    app.listen(app.get('port'), '0.0.0.0');
    console.log(app.get('port'))
    console.log(`Server listening on port ${app.get('port')} (0.0.0.0)`);
}

main()