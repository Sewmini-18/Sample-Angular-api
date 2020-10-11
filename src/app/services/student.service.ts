import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  apiEndPoint = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  getDetail() {
    return this.http.get(this.apiEndPoint + '/details')
  }
  addDetail(newDetail: any) {
    return this.http.post(this.apiEndPoint + '/details', newDetail)
  }

  getDetailHighMarks() {
    return this.http.get(this.apiEndPoint + '/highmarks')
  }
  udpateDetail(updatedDeatils: any) {
    return this.http.put(this.apiEndPoint + '/details/' + updatedDeatils._id, updatedDeatils);
  }

  deleteDetail(_id: any) {
    return this.http.delete(this.apiEndPoint + '/details/' + _id);
  }

}
