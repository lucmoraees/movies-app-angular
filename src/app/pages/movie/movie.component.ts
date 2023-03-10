import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_PATHS } from '../../shared/constants/images-paths';
import { Movie, MovieCredits, MovieImages, MovieVideo } from '../../models/movie';
import { MoveisService } from '../../services/moveis.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  IMAGES_PATHS = IMAGES_PATHS;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: Movie[] = [];

  constructor(private route: ActivatedRoute, private moviesService: MoveisService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getMovieSimilar(id);
    });
  }

  ngOnDestroy(): void {}

  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((videos) => {
      this.movieVideos = videos;
    });
  }

  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((images) => {
      this.movieImages = images;
    });
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((credits) => {
      this.movieCredits = credits;
    });
  }

  getMovieSimilar(id: string) {
    this.moviesService.getMovieSimilar(id).subscribe((movieSimilarData) => {
      this.similarMovies = movieSimilarData;
    });
  }

  identify(index: number, item: MovieVideo) {
    return item.key;
  }
}
