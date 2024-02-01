import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = () => {
  //Aqui estamos criando uma variavel para identificar uma lista de variaveis, em useState ([]) e uma lista vazia que sera preenchida com interacao do usuario.

  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const {
      data: { results },
    } = await MovieService.getMovies();

    setMovies(results);
  }

  useEffect(() => {
    getMovies();
    console.log();
  }, []);
  useEffect(() => {
    console.log(movies);
  });
  // linha 26 a 30
  //existe uma lista de objeto, o parametro movie, se torna um parametro como uma callback, dessa forma ele passa por cada objeto, pega o parametro movie
  // => arrow function significa que ele vai retornar o movie.titl(onde title e a forma de texto os titulos do movie.
  // a key, e porque todo elementro filho de uma lista(array) precisa de uma chave para chamar de sua.
  return (
    <section className="Home">
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard movieProp={movie} />
        </div>
      ))}
    </section>
  );
};

export default Home;
