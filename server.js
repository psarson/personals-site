const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY! IF YOU CAN SEE ME, THEN ITS WORKING')
})
app.listen(3000, () => console.log('Server running on port 3000'))
