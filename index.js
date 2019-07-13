const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('พะเยาฮาเก๋าคนเหล่ว'))
app.get('/about', (req, res) => res.send('สันกำแปงฮาเก๋าคนเหล่ว'))
app.get('/Contact', (req, res) => res.send('0909459216'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
