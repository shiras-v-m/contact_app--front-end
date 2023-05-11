import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit {
  // t
  allContacts:any=[]
  isLoading:boolean=true
  errorMsg:string=''
  searchKey:string=''
  
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.getAllContacts()
  }

  // get all contact
  getAllContacts(){
    this.api.getAllContacts().subscribe({
      next:(response:any)=>{
        console.log(response);
        setTimeout(() => {
          this.allContacts=response
          this.isLoading=false
        }, 2000);
  
      },
      error:(err:any)=>{
        console.log(err.message);
        
        this.errorMsg=err.message
        this.isLoading=false
      }
    
      
    })
  }


  // delet Contact
  deleteContact(id:any){
    // call delete api from api service
    this.api.deleteContact(id).subscribe({
      next:(response:any)=>{
        this.getAllContacts()
      }
    })
  }
}
