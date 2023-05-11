import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{

  contact:any={}
  errorMsg:string=''
  group:string=''

  constructor(private api:ApiService, private viewRouter:ActivatedRoute){}
    ngOnInit():void{
      // get contact id from its url
      this.viewRouter.params.subscribe((data:any)=>{
        const {id}=data         // destructuring , ie, data object containe only one key so we can take it directly
        
        console.log(data);
        
      

      // api call to get a particular contact details
      this.api.viewContact(id).subscribe({
        next:(response:any)=>{
          console.log(response);
          this.contact=response
          const {groupId}=response
          this.api.getGroup(groupId).subscribe((data:any)=>{
            console.log(data);
            const {name}= data
            this.group=name
            
          })
          this.contact=response
        },
        error:(err:any)=>{
          console.log(err.message);
          this.errorMsg=err.message
        }
      })
    })
  }
}
