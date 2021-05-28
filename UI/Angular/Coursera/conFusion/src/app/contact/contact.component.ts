import { Component, OnInit , ViewChild } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { Feedback , ContactType } from '../shared/feedback';
import { flyInOut, expand } from '../animations/app.animation';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host : {
    '[@flyInOut]' : 'true',
    'style' : 'display:block'
  },
  animations : [
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {

  @ViewChild('fform',{static : false}) feedbackFormDirective;

  feedbackForm : FormGroup;
  feedback : Feedback;
  contactType = ContactType;
  displaySubmittedForm : boolean = false;
  sendingFeedback : boolean = false;
  errorMess : string;

  formErrors = {
    'firstname' : '',
    'lastname' :'',
    'telnum' : '',
    'email' : ''
  }

  validationMessages = {
    'firstname': {
      'required' : "First name is required",
      'minlength' : 'First name must be at least 2 characters long',
      'maxlength' : 'First name cannot be more than 25 characters long'
    },
    'lastname': {
      'required' : "Last name is required",
      'minlength' : 'Last name must be at least 2 characters long',
      'maxlength' : 'Last name cannot be more than 25 characters long'
    },
    'telnum': {
      'required' : "Telephone number is required",
      'pattern' : 'Telephone number must contain only numbers'
    },
    'email': {
      'required' : "Email id is required",
      'pattern' : 'Email id not in valid format'
    }
  }

  constructor(private fb : FormBuilder,private feedbackService : FeedbackService) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm()
  {
    this.feedbackForm = this.fb.group({
      firstname : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      lastname : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      telnum : [0, [Validators.required,Validators.maxLength(10),Validators.pattern]],
      email : ['',[Validators.required,Validators.email]],
      agree : false,
      contacttype : 'None',
      message : ''
    });

    this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) 
  {
    if(!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for(const field in this.formErrors) 
    {
      if(this.formErrors.hasOwnProperty(field)) 
      {
        this.formErrors[field] = '';
        const control = form.get(field);
        if(control && control.dirty && !control.valid) 
        {
          const messages = this.validationMessages[field];
          for(const key in control.errors) 
          {
            if(control.errors.hasOwnProperty(key)) 
            {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit()
  {
    this.feedback = this.feedbackForm.value;
    this.sendingFeedback = true;

    this.feedbackService.submitFeedback(this.feedback)
    .subscribe(dish => {
      this.sendingFeedback = false
      this.displaySubmittedForm = true
      setTimeout(() => this.displaySubmittedForm = false,5000);
    },
    errorMsg  => {
      this.sendingFeedback = false
      this.feedback = null;
      this.errorMess = <any>errorMsg;
    });

    this.feedbackForm.reset({
      firstname : '',
      lastname : '',
      telnum : 0,
      email : '',
      contacttype : 'None',
      agree : false,
      message : ''
    });

    this.feedbackFormDirective.resetForm();
  }



}
