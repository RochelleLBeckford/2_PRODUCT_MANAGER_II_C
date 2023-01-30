const express = require('express');

const app = express();

const cors = require('cors');

app.use(express.json(), cors());

const connectDb = require('./config/mongoose.config');
connectDb();

const productRouter = require('./routes/product.routes');
app.use('/api/products', productRouter )

const port = 8000;
app.listen(port, () => console.log(`Listening on Port ${port}`));
