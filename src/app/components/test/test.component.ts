import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input() title = 'hello';
  @Output() titleChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  checkTest() {
    this.titleChange.emit('ansar');
  }

}
