import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],

})


export class StudentComponent implements OnInit {
  detailList = [];
  _id: string;
  studentname: string;
  maths: string;
  science: string;
  english: string;
  totmarks: Number;
  editMode: boolean = false;

  detailListHigh = [];
  constructor(
    private studentService: StudentService, private router: Router
  ) { }

  ngOnInit(): void {
    this.getList();

  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  getList() {
    this.studentService.getDetail().subscribe((res: any) => {
      // console.log('This is the response');
      console.log(res)
      this.detailList = res.data;
      //console.log("List ->" + this.detailList)

    });
  }



  addDetail() {
    //alert('Added?');


    let newDetail = {
      _id: this._id,
      studentname: this.studentname,
      maths: this.maths,
      science: this.science,
      english: this.english,
      totmarks: parseInt(this.maths) + parseInt(this.science) + parseInt(this.english)
    }

    //console.log("nw ->" + newDetail);

    this.studentService.addDetail(newDetail).subscribe((res: any) => {
      this.getList();
      this._id = "";
      this.studentname = "";
      this.maths = "";
      this.science = "";
      this.english = "";
      console.log(res);

    });
  }




  editDeail(editDetails: any) {
    this.editMode = true;
    this._id = editDetails._id;
    this.studentname = editDetails.studentname;
    this.maths = editDetails.maths;
    this.science = editDetails.science;
    this.english = editDetails.english;
  }

  udpateDetail() {
    let updatedDeatils = {
      _id: this._id,
      studentname: this.studentname,
      maths: this.maths,
      science: this.science,
      english: this.english,
      totmarks: parseInt(this.maths) + parseInt(this.science) + parseInt(this.english)
    }

    this.studentService.udpateDetail(updatedDeatils).subscribe((res: any) => {
      this.getList();
      this._id = "";
      this.studentname = "";
      this.maths = "";
      this.science = "";
      this.english = "";
      this.editMode = false;
    });
  }

  deleteDetail(_id: String) {
    this.studentService.deleteDetail(_id).subscribe((res: any) => {
      this.getList();
    });
  }

  reset() {
    this.getList();
    this._id = "";
    this.studentname = "";
    this.maths = "";
    this.science = "";
    this.english = "";

  }



}
