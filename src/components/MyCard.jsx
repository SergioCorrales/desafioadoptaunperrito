import Card from 'react-bootstrap/Card';
import RazaTags from './Tags';

const MyCard = ({ image, title, description, background, text }) => {
  return (
    <div className='targetaperros'>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <RazaTags tagBackgroundColor={background} tagText={text} />
        </Card.Body>
        </Card>
    </div>
  );
};

export default MyCard;