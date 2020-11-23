import Card from 'react-bootstrap/Card'
import StarRatingComponent from 'react-star-rating-component';
import {ListGroup,ListGroupItem}  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function MovieCard(props) {
 const edit = () => {
  props.setdescription(props.movies.overview);

 }

    return (
     
     <div className="card">
        

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movies.backdrop_path || props.movies.poster_path}`} />
  <Card.Body>
  <Card.Title>{props.movies.title}</Card.Title>
  <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={props.movies.Rate}
        />
    <Card.Text>
    
   
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{props.movies.release_date}</ListGroupItem>
   
  </ListGroup>

  <button onClick={() => {

props.setdescr(true); 
edit();
} 
  }> Description</button>
  
</Card>


          )
 
        
      </div>
    );
  }


export default MovieCard;


