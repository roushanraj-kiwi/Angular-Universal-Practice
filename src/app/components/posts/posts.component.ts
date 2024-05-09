import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  constructor(private api:ApiService){}
  data:any=[]
  ngOnInit(){
    this.api.getData().subscribe((data:any)=>{
      this.data =data.products
      // console.log(data.products)
      // console.log(data.products[0].images[0])
    })
  }

}
