import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course';
import { CourseService } from '../shared/course.service';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-courses-list',
	templateUrl: './courses-list.component.html',
	styleUrls: [ './courses-list.component.css' ]
})
export class CoursesListComponent implements OnInit {
	courses: Course[];
	starterCourse: Course[];
	frontEndCourse: Course[];
	backEndCourse: Course[];

	constructor(private service: CourseService) {}

	ngOnInit(): void {
		this.service.getCourses().subscribe({
			next: (courses: Course[]) => {
				this.courses = courses;
				this.starterCourse = this.courses.filter((course) => course.category === 'starter');
				this.frontEndCourse = this.courses.filter(
					(course) => course.category === 'front-end'
				);
				this.backEndCourse = this.courses.filter(
					(course) => course.category === 'back-end'
				);
			}
		});
	}
}
