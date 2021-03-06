import { Component, OnInit, Input } from '@angular/core';
import { OptionsService } from '../../../options.service';

@Component({
  selector: 'app-code-js',
  templateUrl: './code-js.component.html'
})
export class CodeJsComponent implements OnInit {
  @Input() tileWidth: number;
  @Input() widthInTiles: number;
  @Input() heightInTiles: number;

  path: string;

  constructor(private data: OptionsService) { }

  ngOnInit() {
    this.data.currentPath$.subscribe(path => this.path = path);
  }

}
