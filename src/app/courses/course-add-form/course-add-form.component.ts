import { Component, OnInit } from '@angular/core';
import { Author } from '../../shared/author';
import { AuthorService } from '../../shared/author.service';
import { Course } from '../../shared/course';
import { CourseService } from '../../shared/course.service';
import 'firebase/firestore';

@Component({
  selector: 'app-course-add-form',
  templateUrl: './course-add-form.component.html',
  styleUrls: ['./course-add-form.component.css']
})
export class CourseAddFormComponent implements OnInit {
  authors: Author[];
  durationUnits = ['Days', 'Weeks', 'Months'];
  categories = ['starter', 'front-end', 'back-end'];

  constructor(private authorService: AuthorService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe({
      next: (authors: Author[]) => {
        this.authors = authors;
      }
    });
  }

  onAddCourse(newCourse) {
    this.courseService.addCourse(newCourse.value);
  }
}
