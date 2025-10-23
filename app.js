const http = require('http')

const PORT = 3000

const server = http.createServer((req, res)=>{
    const payload = {
        name: 'stephen oisewemen',
        role: 'backend developer in training',
        message: 'excited to build my first api'
    }
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    res.end(JSON.stringify(payload))
}).listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})

   
