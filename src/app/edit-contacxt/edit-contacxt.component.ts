import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-edit-contacxt',
  templateUrl: './edit-contacxt.component.html',
  styleUrls: ['./edit-contacxt.component.css']
})
export class EditContacxtComponent {

  contact: any={};
   errorMsg:string=''
  groups:any={}
  constructor(private editActivatedRoute:ActivatedRoute,private api
    :ApiService,private router:Router){}
  ngOnInit():void{
    this.editActivatedRoute.params.subscribe({
      next:(pathParameter:any)=>{
        const {id}=pathParameter
        console.log(id);
        

        // call api to get viewcontact

        this.api.viewContact(id).subscribe({
          next:(response)=>{
            console.log(response);
            this.contact=response


          }
        })


   
      }
    })

    // get all groups
    this.api.getGroups().subscribe({
      next:(allGroups:any)=>{
        this.groups=allGroups
        console.log(this.groups);
        
      }
    })
  }

  // edit contact
  editContact(id:any){
    // api call to edit contact
    this.api.editContact(id,this.contact).subscribe({
      next:(response)=>{
        // navigate all contact
      this.router.navigateByUrl('')
      }
    })
  
  }
}
