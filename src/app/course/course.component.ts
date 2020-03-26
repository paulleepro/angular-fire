import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../shared/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input()
  course: Course;

  constructor() { }

  ngOnInit(): void {
  }

  showDetail() {
    alert('button clicked')
  }

}
