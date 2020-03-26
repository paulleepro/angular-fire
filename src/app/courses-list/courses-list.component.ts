import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course';
import { CourseService } from '../shared/course.service';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Course[];

  constructor(private service: CourseService) {
    service.getCourses().pipe(tap((info) => { console.log("info", info) })).subscribe({
      next: (courses: Course[]) => {
        this.courses = courses;
      }
    });
  }

  ngOnInit(): void {


    // this.service.getCourses()
    // .subscribe(courses => this.courses = courses);


  }


}
