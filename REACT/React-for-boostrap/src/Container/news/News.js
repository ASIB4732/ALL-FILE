import React from 'react';
import {Button,Card} from 'react-bootstrap';

const News = (props) => {
    const articles=props.articles1
    const articles2=props.articles2
    console.log(articles)

    return (

            <Card>
               <Card.Header as="h5">Featured</Card.Header>
                 <Card.Body>
                  <Card.Title>{articles}</Card.Title>
                  <Card.Text>{articles2}</Card.Text>
               <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

    );
};

export default News;