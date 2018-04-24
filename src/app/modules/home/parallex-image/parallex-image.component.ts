import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parallex-image',
  templateUrl: './parallex-image.component.html',
  styleUrls: ['./parallex-image.component.css']
})
export class ParallexImageComponent implements OnInit {
  @Input() className: string;

  constructor() { }

  ngOnInit() {
    console.log(this.className);
  }
}
