import { Component, Input } from '@angular/core';

import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Panes', 'Refrescos', 'Tacos'];

  public data1 = [
    [10, 15, 40],
  ];
  
}
