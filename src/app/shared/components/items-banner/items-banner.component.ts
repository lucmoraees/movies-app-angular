import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {
  @Input() title: string = '';
  @Input() items: Movie[] = [];
}
