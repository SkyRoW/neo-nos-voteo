import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PoolsService} from '../../shared/pools/pools.service';

@Component({
  selector: 'app-new-question-page',
  templateUrl: './new-question-page.component.html',
  styleUrls: ['./new-question-page.component.scss']
})
export class NewQuestionPageComponent implements OnChanges {

  @Output()
  onUpdate = new EventEmitter();
  @Output()
  afterNextQuestionPressed = new EventEmitter<any>();
  @Output()
  afterPreviousQuestionPressed = new EventEmitter();
  @Output()
  afterClickOnRemove = new EventEmitter<number>();

  @Input()
  question;
  @Input()
  numberOfQuestions;
  @Input()
  currentQuestionIndex;

  createQuestionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.question) {
      this.initForm();

      if (this.question) {
        if (this.question.options) {
          for (const option of this.question.options) {
           this.addOption();
          }
        }

        this.createQuestionForm.patchValue(this.question);
      }
    }
  }

  initForm() {
    this.createQuestionForm = this.fb.group({
      'name': [''],
      'openEnded': [false],
      'multiple': [false],
      'options': this.fb.array([])
    });

    this.createQuestionForm.valueChanges.subscribe(
      questions => {
        console.log('questions change', questions);
        this.onUpdate.emit(questions);
      }
    );
  }

  addOption(label = '') {
    const option = this.fb.group({
      'label': [label, Validators.required]
    });
    this.options.push(option);
  }

  getNextQuestion({value}) {
    this.afterNextQuestionPressed.next(value);
  }

  getPreviousQuestion({value}) {
    this.afterPreviousQuestionPressed.next(value);
  }

  removeCurrentQuestion() {
    this.afterClickOnRemove.next(this.currentQuestionIndex);
  }

  get hasMoreQuestions() {
    return this.currentQuestionIndex < this.numberOfQuestions - 1;
  }
  get options() {
    return this.createQuestionForm.get('options') as FormArray;
  }

  get operation() {
    return this.currentQuestionIndex < this.numberOfQuestions ? '>' : '+';
  }
}
