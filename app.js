const express = require('express');
const app = express();

const users_router = require('./routes/users.routes.js')
const render_router = require('./routes/render.routes.js')
const leads_router = require('./routes/leads.routes.js')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/users',users_router)
app.use('/render',render_router)
app.use('/leads',leads_router)

app.listen(3001, () => {
  console.log("run on port 3001");
});

