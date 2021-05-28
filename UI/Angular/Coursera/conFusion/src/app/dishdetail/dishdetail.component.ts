import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Comment } from '../shared/comment';
import { visibility, flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  host : {
    '[@flyInOut]' : 'true',
    'style' : 'display:block'
  },
  animations : [
    flyInOut(),
    visibility(),
    expand()
  ]    
})
export class DishdetailComponent implements OnInit {

  @ViewChild('cmtform',{static : false}) commentFormDirective;

  dish : Dish;
  dishIds : string[];
  prev : string;
  next : string;
  errorMess : string;
  dishCopy : Dish;
  visibility = 'shown';

  commentForm : FormGroup;

  formErrors = {
    'author' : '',
    'comment' :''
  }

  validationMessages = {
    'author': {
      'required' : "Author is required",
      'minlength' : 'Author name must be at least 2 characters long',
    },
    'comment': {
      'required' : "Comment is required",
    }
  }
  constructor(private route : ActivatedRoute, private dishService : DishService,private location : Location,private fb : FormBuilder,@Inject('BaseURL') public BaseURL) { 
    this.createForm();
  }

  ngOnInit() {
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) =>{ this.visibility = 'hidden'; return this.dishService.getDish(params['id']); } ))
    .subscribe(dish => { this.dish = dish; this.dishCopy = dish; this.setPrevNext(dish.id); this.visibility = 'shown'; },
    errorMsg => this.errorMess = <any>errorMsg);
  }

  createForm()
  {
    this.commentForm = this.fb.group({
      author : ['',[Validators.required,Validators.minLength(2)]],
      rating : 5,
      comment : ['',[Validators.required]]
    });
    
    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) 
  {
    if(!this.commentForm) { return; }
    const form = this.commentForm;

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


  goBack()
  {
    this.location.back();
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  onSubmit()
  {
    let comment : Comment =  {
      author : this.commentForm.get('author').value,
      rating : this.commentForm.get('rating').value,
      comment : this.commentForm.get('comment').value,
      date : new Date().toISOString()
    };;
   
    this.dishCopy.comments.push(comment);

    this.dishService.putDish(this.dishCopy)
      .subscribe(dish => {
        this.dish = dish;
        this.dishCopy = dish;
      },
      errorMsg  => {
        this.dish = null;
        this.dishCopy = null;
        this.errorMess = <any>errorMsg;
      });

    this.commentFormDirective.resetForm();
    this.commentForm.reset({
      author : '',
      rating : 5,
      comment : '',
    });

  }

}
