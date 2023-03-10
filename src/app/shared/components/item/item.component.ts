import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie';
import { IMAGES_PATHS } from '../../constants/images-paths';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;

  readonly IMAGES_PATHS = IMAGES_PATHS;

  constructor() {}

  ngOnInit(): void {}
}
