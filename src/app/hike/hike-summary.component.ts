import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Hike} from "../shared/hike";


@Component({
  moduleId:module.id,
  selector:'hike-summary',
  templateUrl:'hike-summary.component.html',
  styles: [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
    }
    .counter {
      position: relative;
    }
    input {
      border: 0;
      border-radius: 3px;
      height: 30px;
      max-width: 100px;
      text-align: center;
    }
    button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      border: 0;
      border-radius: 3px;
      background: #0088cc;
      color: #fff;
    }
  `]
})

export class HikeSummaryComponent{
  visible: boolean = true;
  @Input()
  count: number = 0;
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  @Input() hike: Hike;
  @Output() addHikeasFavorit=new EventEmitter <Hike>();
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  myCount: number = 10;
  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
   toggleAsTodoHike(){
     this.visible = !this.visible;
     if (this.visible) {
       this.open.emit('habib');
       console.log('open'+this.open);
     } else {
       console.log('close'+this.close);
       this.close.emit(null);

     }
  }
}
