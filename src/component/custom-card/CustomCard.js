
import Card from 'react-bootstrap/Card';

export const CustomCard = ({thumbnail, name, author, publishYr}) => {
  return (
    <Card style={{ width: '18rem' }} className='shadow flex-grow-1'>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {author} - {publishYr}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

