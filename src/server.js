import http from "node:http"

const PORT = 3000;

const users = [
  {
    "name": "Filipe",
    "age": 20
  }
]

const server = http.createServer((req, res) => {

  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    res
      .setHeader("Content-type","application/json")
      .end(JSON.stringify(users));
  }

  if (method === 'GET' && url === '/') {
    res
      .setHeader("Content-type","application/json")
      .end("Home!");
  }

  return res.writeHead(404).end()

});

server.listen(PORT)
