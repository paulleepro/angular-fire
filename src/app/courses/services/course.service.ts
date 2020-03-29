import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  AngularFirestore,
  DocumentChangeAction,
  Action,
  DocumentSnapshot,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url = 'http://localhost:4243/courses';

  private courseCollection: AngularFirestoreCollection<Course>;
  courses: Observable<Course[]>;

  constructor(private database: AngularFirestore, private http: HttpClient) {
    this.courseCollection = database.collection<Course>('courses');

    this.courses = this.courseCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Course;
          const id = a.payload.doc.id;
          // console.log({ id, ...data });
          return { id, ...data };
        })
      )
    );
  }

  getCourses(): Observable<Course[]> {
    return this.courses;
  }

  getCourse(userKey) {
    return this.courseCollection
      .doc(userKey)
      .snapshotChanges()
      // .pipe(tap((stuff) => console.log('stuff :', stuff)))

      ;
  }

  // tslint:disable-next-line: align
  // getCourse(uid: string): Observable<any> {
  //   return this.database.doc<Course>(`courses/${uid}`)
  //     .snapshotChanges()
  //     .pipe(
  //       map(actions => actions.map(a => {
  //         const data = a.payload.doc.data() as Course;
  //         const id = a.payload.doc.id;
  //         return { id, ...data };
  //       }))
  //   );
  // }

  addCourse(course: Course) {
    this.courseCollection.add(course);
  }

  // createUser(value, avatar){
  //   return this.db.collection('users').add({
  //     name: value.name,
  //     nameToSearch: value.name.toLowerCase(),
  //     surname: value.surname,
  //     age: parseInt(value.age),
  //     avatar: avatar
  //   });
  // }
}

