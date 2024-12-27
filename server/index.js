import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"
import Stripe from 'stripe';
dotenv.config()
const app = express()
const port = process.env.PORT
const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY
)

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/v1/check', async (req, res) => {
    const { product } = req.body
    const line_items = product.map((item) => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.productName
            },
            unit_amount: item.price * 100,
        },
        quantity: item.quantity
    }
    ))

    const session = await stripe.Checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    })

    res.json({
        message: 'sessions completed',
        id: session.id,
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})