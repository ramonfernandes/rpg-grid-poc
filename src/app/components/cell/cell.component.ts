import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cell",
  templateUrl: "./cell.component.html",
  styleUrls: ["./cell.component.scss"],
})
export class CellComponent implements OnInit {
  public painted: boolean;
  @Input() selectedAction: string

  @Input() icon: string;

  constructor() {}

  ngOnInit(): void {
    this.painted = false;
  }

  public cellClick() {
    console.log(this.selectedAction);
    this.painted = !this.painted;
  }
}
