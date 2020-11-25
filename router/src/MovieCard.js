import Card from 'react-bootstrap/Card'
import StarRatingComponent from 'react-star-rating-component';
import {ListGroup,ListGroupItem}  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import {Route} from "react-router-dom"
//import {MoviesData} from './MoviesData';
//import { useState } from 'react';


function MovieCard(props) {
 console.log(props.movies);
 //const [movie] = useState(MoviesData);

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
  {
        <div key={props.movies.id}>
          <Link to={`/MovieCard/${props.movies.id}`}>{props.movies.title}</Link>
         

        </div>
      }

<Route path={`/MovieCard/${props.movies.id}`} render={() => <h1>Home</h1>} />

      
  
</Card>


          )
 
        
      </div>
    );
  }


export default MovieCard;


