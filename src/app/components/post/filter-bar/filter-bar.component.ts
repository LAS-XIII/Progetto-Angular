import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent {
  
  @Output() sendData = new EventEmitter<{search: string}>()

  search: string = "";
  constructor() {}

  onSubmit() {
    this.sendData.emit({search: this.search});
  }

}
