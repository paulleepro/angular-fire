import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../shared/course.service';
import { Course } from '../shared/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course;

  constructor(private activatedRoute: ActivatedRoute,
    private service: CourseService) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getCourse(id).subscribe((course) => this.course = course);
  }

}
