import React, {Component} from 'react';
import {Link} from 'react-router';
let genres = [
  {
    genre: 'Action',
    image: '../assets/img/search-action.jpg',
    path: 'action',
  },
  {
    genre: 'Animation',
    image: '../assets/img/search-animation.jpg',
    path: 'animation',
  },
  {
    genre: 'Comedy',
    image: '../assets/img/search-comedy.jpg',
    path: 'comedy',
  },
  {
    genre: 'Drama',
    image: '../assets/img/search-drama.jpg',
    path: 'drama',
  },
  {
    genre: 'Horror',
    image: '../assets/img/search-horror.gif',
    path: 'horror',
  },
  {
    genre: 'Romance',
    image: '../assets/img/search-romance.jpg',
    path: 'romance',
  },
  {
    genre: 'Sci-Fi & Fantastique',
    image: './assets/img/search-scifi.jpg',
    path: 'scifi',
  },
  {
    genre: 'Thriller & Crime',
    image: './assets/img/search-thriller.jpg',
    path: 'thriller',
  },
];
class Gallery extends Component {
  renderGenres(genres) {
    let genresGallery = genres.map((genre, index) => {
      return (
        <div className="col-sm-4" key={index} style={{margin: '10px 0'}}>
          <Link to={`/movies/${genre.path}/`} className="" genre={genre.path}>
            <img src={genre.image} height="300px" width="380px" />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '300px',
                width: '400px',
                textAlign: 'center',
                verticalAlign: 'middle',
                backgroundColor: 'rgba(0,0,0,0.8)',
                opacity: 0,
                transition: 'opacity 0.6s',
                verticalAlign: 'middle',
                lineHeight: '200px',
                color: 'white',
              }}
            >
              {genre.genre.toUpperCase()}
            </div>
          </Link>
        </div>
      );
    });
    return genresGallery;
  }
  render() {
    return <div>{this.renderGenres(genres)}</div>;
  }
}

export default Gallery;
