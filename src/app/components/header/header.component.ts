import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() public header: string;
  @Input() public hasBack: boolean;
  @Input() public routeBack: string;
  @Input() public showSideMenu: boolean;

  constructor() { }

  ngOnInit() { }

}
