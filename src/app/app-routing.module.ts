import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MatRadioModule } from "@angular/material/radio";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatRadioModule],
  exports: [RouterModule, MatRadioModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
