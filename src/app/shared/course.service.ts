import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url = "http://localhost:4243/courses"

  // constructor(private http: HttpClient) {
  // }

  constructor( private database: AngularFirestore, private http: HttpClient ) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }


  //TODO: could use snapshot changes - give smore info but not needed here?
  // getCourses(): Observable<Course[]> {
  //   // return this.database.collection<Course>('courses').valueChanges();
  // }

  getCourse = (uid: number): Observable<Course> =>{
    return this.database.doc<Course>('courses/${uid}').valueChanges();
  }

  //TODO: check other options
  updateCourse(course: Course) {
    return this.database.doc<Course>('courses/${uid}').set(course, {merge: true});
  }

  deleteCourse(course: Course) {
    return this.database.doc<Course>('courses/${uid}').delete();
  }

  getNewUid(): string {
    return this.database.createId();
  }


  getAlbumById(id: number): Observable<Course> {
    return this.http.get<Course>(this.url + "/" + id);
  }

//   exampleCreateCourse(data){
//     return new Promise<any>((resolve, reject) => {
//        this.firestore
//            .collection("collectionNameHere")
//            .add(data)
//            .then(
//                res => {},
//                err => reject(err)
//            )
//     }
//  )}

//  exampleGetCollection(){
//   return
//     this.firestore
//         .collection("collectionNameHere")
//         // you can either use:
//         // .valueChanges()
//         // .snapshotChanges()
//         // .stateChanges()
//         // or .auditTrail()
// }



}
