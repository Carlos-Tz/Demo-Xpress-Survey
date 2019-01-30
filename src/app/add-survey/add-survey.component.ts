import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';

import { SurveyService } from '../shared/survey.service';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {
  public surveyForm: FormGroup;

  constructor(
    public toastr: ToastrService,
    public surveyApi: SurveyService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.surveyApi.GetSurveysList();
    this.sForm();
  }

  sForm(){
    this.surveyForm = this.fb.group({
      name: ['',[Validators.required]],
      order:['',[Validators.required]],
      date:['',[Validators.required]],
      group1:['',[Validators.required]],
      group1b:['',[Validators.required]],
      group1c:['',[Validators.required]],
      group1d:[''],
      group2:['',[Validators.required]],
      group3:['',[Validators.required]],
      group3b:[''],
      group4:['',[Validators.required]],
      group5:['',[Validators.required]]
    });
  }

  ResetForm(){
    this.surveyForm.reset();
  }

  submitSurveyData(){
    this.surveyApi.AddSurvey(this.surveyForm.value);
    this.toastr.success('Encuesta Enviada!');
    this.ResetForm();
  }

}
