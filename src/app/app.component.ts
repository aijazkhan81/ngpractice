import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  environmentName = environment;
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot);

  }

  ngOnInit(): void {
  }
}
