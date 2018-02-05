import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HikeListComponent} from './hike-list.component';
import {HikeService} from "./hike.service";
import {HikeDetailsComponent} from "./hike-details.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HikeFilterPipe} from "./hike-filter.pipe";


@NgModule({
  imports: [CommonModule,RouterModule,FormsModule],
  declarations: [HikeListComponent,HikeDetailsComponent,HikeFilterPipe],
  exports: [HikeListComponent],
  providers: [HikeService]
})
export class HikeModule {
}
