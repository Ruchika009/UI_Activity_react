import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard({image,title,text,buttonText,link}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
        <a href={link}><Button variant="primary">{buttonText}</Button></a>
      </Card.Body>
    </Card>
  );
}

export default MyCard;