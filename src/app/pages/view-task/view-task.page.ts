import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.page.html',
  styleUrls: ['./view-task.page.scss'],
})
export class ViewTaskPage implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    console.log('ngOninit view task', id);
  }

}
