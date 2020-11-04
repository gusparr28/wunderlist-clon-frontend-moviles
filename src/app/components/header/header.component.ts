import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  @Input() public deleteButton: boolean;
  @Input() public headerAuthButton: string;
  @Input() public showHeaderAuthButton: boolean;
  @Input() public authRedirect: string;

  constructor() { }

  ngOnInit() { }

}
