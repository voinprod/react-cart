import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import HeaderMenu from '../containers/CartMenu';
import { Container, Card, Grid } from 'semantic-ui-react';
import CardComponent from '../containers/Card';
import Sort from '../containers/Sort';

class App extends Component {

    async componentWillMount() {
        const { data } = await axios.get('/books.json')
        this.props.setBook(data);
    }

    render() {
        const { books, preloader } = this.props;
        return (
            <Container>
                <HeaderMenu />
                <Grid columns={2} >
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Card.Group itemsPerRow={3}>
                                {!preloader ? 'Загрузка...' :
                                    books && books.map(book => {
                                        return <CardComponent key={book.id} {...book} />
                                    })
                                }
                            </Card.Group>
                        </Grid.Column>
                        <Grid.Column width={4} textAlign={"right"}>
                            <Sort />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>


        )
    }
}




export default App;
