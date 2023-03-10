import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDTO, MovieImages, MovieVideoDTO } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TvDTO } from '../models/tv';
import { GenresDTO } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class MoveisService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'f4fd9b6f320e1b8e7c386462bcbdf532';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http
      .get<MovieDTO>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => of(res.results.slice(0, count))));
  }

  searchMovies(page: number, searchValue?: string) {
    const url = searchValue ? '/search/movie' : '/movie/popular';

    return this.http.get<MovieDTO>(
      `${this.baseUrl}${url}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
    );
  }

  getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<MovieDTO>(
        `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
      )
      .pipe(switchMap((res) => of(res.results)));
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieVideos(id: string) {
    return this.http
      .get<MovieVideoDTO>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => of(res.results)));
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getMovieSimilar(id: string) {
    return this.http
      .get<MovieDTO>(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => of(res.results.slice(0, 12))));
  }

  getMovieGenres() {
    return this.http
      .get<GenresDTO>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => of(res.genres.slice(0, 12))));
  }

  getTvs(type: string = 'latest', count: number = 12) {
    return this.http
      .get<TvDTO>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => of(res.results.slice(0, count))));
  }
}
