import { Component, OnInit } from '@angular/core';
import { appartments } from '../data/appartments';

@Component({
  selector: 'app-appartment-listing',
  templateUrl: './appartment-listing.component.html',
  styleUrls: ['./appartment-listing.component.css']
})
export class AppartmentListingComponent implements OnInit {

  appartments: Array<any> = appartments;

  constructor() { }

  ngOnInit(): void {
  }

}
