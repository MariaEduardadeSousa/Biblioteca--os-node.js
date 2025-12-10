const http = require('http');
const os = require('os'); 

const server = http.createServer((req, res) => {
    //req, requisiçao
    //res,resposta

    if (req.url === "/") {
        res.end("<h1>Página Inicial</h1><p>Bem-vindo ao servidor Node.js!</p>");
        //mensagem a ser exibida na pagina inicial
    } else if (req.url === "/interface") {
        const teste=os.networkInterfaces()
        res.end(JSON.stringify(teste,null,2));
//UM ERRO COMUM NESSE CODIGO É O TPO DE SAIDA DESSE METODO E FORMA CORRETA DE EXIBIR NA PAGINA, QUE NESSE CASO É O JSON 

    } else if (req.url === "/home") {
        res.end(os.homedir())
        //retorno de string
    } 

    else if (eq.url === "/info"){
        res.end(os.cpus())
        //retorno de um array de objetos
    }
    else if (req.url === "/maquina"){
        res.end(os.machine())
        //retorno de string
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Página não encontrada");
    }
});

server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});