import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact:ContactSchema={} //inherit properties of ContactSchema
  errorMsg=''
  groups:any=[]
  constructor(private api:ApiService , private addContactRouter:Router){
    this.contact.groupId="Select a Group"
  }
  ngOnInit():void{

   // api call to get a particular contact details
   this.api.getGroups().subscribe({
    next:(response:any)=>{
      console.log(response);
      this.groups=response
    },
    error:(err:any)=>{
      console.log(err.message);
      this.errorMsg=err.message
    }
  })

 

}
  
addContact(contact:ContactSchema){
    // call api in service
    this.api.addContact(contact).subscribe({
      next:(response:any)=>{
        console.log(response);

        // navigate to allcontacts page
        this.addContactRouter.navigateByUrl(``)

      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
}

} 