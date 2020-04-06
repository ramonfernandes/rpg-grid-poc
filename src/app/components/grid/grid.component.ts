import { Component, OnInit } from "@angular/core";
import { CellModel } from "src/app/model/cell.model";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"],
})
export class GridComponent implements OnInit {
  public cellList: CellModel[][];
  public colsize = 5;
  public linesize = 5;
  public selectedAction: string;

  constructor() {}

  ngOnInit(): void {
    this.cellList = [];
    this.setupCellMatrix();
  }

  setupCellMatrix() {
    this.cellList = [];
    for (let i = 0; i < this.linesize; i++) {
      let items = new Array<CellModel>();
      for (let j = 0; j < this.colsize; j++) {
        items.push({ background: 'white' });
      }
      this.cellList.push(items);
    }
  }

  setLineSize(input) {
    this.linesize = input;
    this.setupCellMatrix();
  }

  setColSize(input) {
    this.colsize = input;
    this.setupCellMatrix();
  }
}
