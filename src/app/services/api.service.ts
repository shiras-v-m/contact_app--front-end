import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL='https://contact-app-20g4.onrender.com'
  constructor(private http:HttpClient ) { }



  // handle error
  handleError(error:HttpErrorResponse){
    // let errorMsg:string=''


    //   // client error
    //   errorMsg=`Error : ${error.message}`
  
    // return throwError(()=>errorMsg)
  }
    //get all contacts api
    getAllContacts(){
      // api call: url="http://localhost:3000/contacts request:get"
      return this.http.get(`${this.BASE_URL}/contacts`)
      // return this.http.get(`${this.BASE_URL}/contacts`).pipe(catchError(this.handleError))
    }
   viewContact(id:any){

    return this.http.get(`${this.BASE_URL}/contacts/${id}`)
   }

 


  //  get a particular group
  getGroup(id:any){
    // api call:url=http://localhost:3000/group/3 req:get
    return this.http.get(`${this.BASE_URL}/groups/${id}`)
    
  }
  // get all groups
  getGroups(){
    return this.http.get(`${this.BASE_URL}/groups`)
  }

  // add contact
  addContact(contact:ContactSchema){ //here we choose type as any instead contactscheme
    // api call
    return this.http.post(`${this.BASE_URL}/contacts`,contact)
  }

  // delete contact
  deleteContact(id:any){
    // api call server
    return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
  }

  // edit a contact
  editContact(id:any,contact:ContactSchema){
    // api call
    return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
  }
}
