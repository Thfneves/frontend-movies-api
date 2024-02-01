import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieService } from "../../api/MovieService";

const MovideDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  async function getMovie() {
    const { data } = await MovieService.getMoviedDetails(id);
    console.log(data);
    setMovie(data);
  }

  useEffect(() => {}, []);

  useEffect(() => {
    console.log(movie);
  });

  return (
    <section>
      <div className="MovieDetail">
        <div className="MovieDetail_container">
          <div className="MovieDetail_col">
            <h1 className="MovieDetail_title">{movie.title}</h1>
            <div className="MovieDetail-IMAGE">
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt=""
              />
            </div>
          </div>
          <div className="MovieDetail_col">
            <div className="MovieDetail_details">
              <div className="MovieDetail_detail">
                <span>Budget:</span>
                {movie.budget}
              </div>
              <div className="MovieDetail_detail">
                <span> Original language:</span> {movie.original_language}
              </div>
              <div className="MovieDetail_detail">
                <span> Popularity:</span>
                {movie.popularity}
              </div>
              <div className="MovieDetail_detail">
                <span>Overview:</span> {movie.overview}
              </div>
            </div>
          </div>
          <Link to={"/"} className="MovieDetail_button">
            Voltar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovideDetail;
