import { Injectable } from '@angular/core';
import { Survey } from '../shared/survey';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  surveysList: AngularFireList<any>;
  surveyObject: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  AddSurvey(survey: Survey){
    this.surveysList.push({
      name: survey.name,
      order: survey.order,
      date: survey.date,
      group1: survey.group1,
      group1b: survey.group1b,
      group1c: survey.group1c,
      group1d: survey.group1d,
      group2: survey.group2,
      group3: survey.group3,
      group3b: survey.group3b,
      group4: survey.group4,
      group5: survey.group5
    });
  }

  GetSurveysList(){
    this.surveysList = this.db.list('surveys-list', ref =>
      ref.orderByChild('date')
    );
    return this.surveysList;
  }
}
