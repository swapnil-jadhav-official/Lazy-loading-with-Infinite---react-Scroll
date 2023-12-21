import React, { useState } from 'react';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroller';
import { useCardsDataContext } from '../provider';

export default function CardComponent() {
  const [data, setData] = useState([]);
  const cardsData = useCardsDataContext();

  const loadMore = async (page) => {
    // Assuming each page contains a portion of cardsData
    const startIndex = (page - 1) * 20;
    const endIndex = startIndex + 20;
    const newData = cardsData.slice(startIndex, endIndex);

    setData((prevData) => [...prevData, ...newData]);
  };

  return (
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <Row>
          {data?.map((card, index) => (
            <Col md={4} key={index}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card.thumbnailUrl} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.title}</Card.Text>
                  <Button variant="primary">{card.id}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
}
