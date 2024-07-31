import { Component, OnInit } from '@angular/core';
import { IUniDetails } from '../../interface/iuni-details';
import { UniServiceService } from '../../service/uni-service.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.css'
})
export class UniversitiesComponent implements OnInit {
  uniList$!: IUniDetails[];

  constructor(public uniService: UniServiceService) {}

  ngOnInit() {
    this.uniService.getUniDetails().subscribe((data) => {
      this.uniList$ = data;
    });

    console.log("list", this.uniList$);
  }
}