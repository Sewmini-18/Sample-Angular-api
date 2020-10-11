import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highmarks',
  templateUrl: './highmarks.component.html',
  styleUrls: ['./highmarks.component.css']
})

export class HighmarksComponent implements OnInit {
  highdetailList = [];
  _id: string;
  studentname: string;
  maths: string;
  science: string;
  english: string;
  totmarks: Number;

  constructor(
    private studentService: StudentService, private router: Router
  ) { }

  ngOnInit(): void {
    this.gethighdetailList();
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  gethighdetailList() {
    this.studentService.getDetailHighMarks().subscribe((res: any) => {
      // console.log('This is the response');
      console.log(res)
      this.highdetailList = res.data;
      console.log("List2 ->" + this.highdetailList)

    });
  }

}
