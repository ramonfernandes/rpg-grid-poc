import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortcut-bar',
  templateUrl: './shortcut-bar.component.html',
  styleUrls: ['./shortcut-bar.component.scss']
})
export class ShortcutBarComponent implements OnInit {

  constructor() { }

  icon: string;

  ngOnInit(): void {
    this.icon = 'assets/img/orc.png';
  }

}
