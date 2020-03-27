import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../shared/course';

@Component({
  selector: 'app-course',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  constructor() { }

  ngOnInit(): void {
  }

  showDetail() {
    alert('button clicked')
  }

}
