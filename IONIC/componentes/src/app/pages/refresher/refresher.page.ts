import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  constructor() { }

  items: any[] = [];

  ngOnInit() {
  }

  doRefresh(event){

      setTimeout( ()=>{
        this.items.push(...Array(20));
        console.log(this.items);
        event.target.complete();
      },1500)


  }

}
