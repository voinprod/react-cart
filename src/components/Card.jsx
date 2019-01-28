import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const CardComponent = (book) => (
    <Card>
        <Image src={book.image} />
        <Card.Content>
            <Card.Header>{book.title}</Card.Header>
            <Card.Meta>
                <span className='date'>{book.author}</span>
            </Card.Meta>
            <Card.Description>Rating: <b>{book.rating}</b></Card.Description>
        </Card.Content>
        <Card.Content extra>

            <Icon name='rub' />
            {book.price}

        </Card.Content>
        <Button onClick={book.addToCart.bind(this, book)}>Добавить в корзину</Button>
    </Card>
)
export default CardComponent