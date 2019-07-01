const http = require('http');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
let generateKey = () =>{
    let output = ''
    while(output.length<16){
        output+=String.fromCharCode(Math.ceil(Math.random()*256))
    }    
    return output
}
let serverOptions = {

}
let db = new sqlite3.Database(':memory:')
let server = http.createServer((req, res) => {    
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
    let pattino = req.url.split('/').slice(1);
    let myRes = pattino[pattino.length - 1].split('.');
    if (myRes.length > 1) {
        if (myRes[1] == 'html') {
            //error page
        }
    }
    if (pattino[0] == 'api') {
        let cmd = pattino[1]        
        if (cmd == 'givesome') {
            //read from database
            res.write('test');
        } else if (cmd=='storeUser'){
            //generate key
        } else if (cmd =='login'){
            //verify on database email and password
            //generate key
            res.write(generateKey())
        } else if (cmd=='storesession'){
            
        }
        res.end();
    } else {
        if (myRes.length == 1) {
            pattino.unshift('html');
            myRes = myRes == '' ? 'index' : myRes;
            pattino[pattino.length - 1] = myRes + ".html";
        }
        pattino = pattino.join('/');
        try {
            //fs.readFile(req.url.)        
            // //parse the url
            //let ptoFile = 'html/' + numOfPath[1] + ".html";
            fs.readFile(pattino, (err, data) => {
                try {
                    if (err)
                        res.write(err)
                    else
                        res.write(data);
                    res.end();
                    console.log('OK - ' + pattino);
                } catch (e) {
                    console.log('FAIL - ' + pattino);
                    res.end();
                }
            });
        } catch (e) {
            console.log('FAIL - ' + pattino);
            res.end();
        }
    }
});
server.listen(80);