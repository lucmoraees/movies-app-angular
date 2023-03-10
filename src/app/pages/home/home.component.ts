import { Component, OnInit } from '@angular/core';
import { Tv } from 'src/app/models/tv';
import { Movie } from '../../models/movie';
import { MoveisService } from '../../services/moveis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  popularTvShows: Tv[] = [];

  constructor(private moviesService: MoveisService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
    this.moviesService.getTvs('popular').subscribe((tvShows) => {
      this.popularTvShows = tvShows;
    });
  }
}
