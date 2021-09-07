const express = require('express')
const app = express()
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
const Ably = require('ably/promises')
app.get('/createTokenRequest', async (req, res) => {
  const client = new Ably.Realtime(process.env.ABLY_API_KEY)
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: 'malengames'
  })
  res.json(tokenRequestData)
})
module.exports = app
