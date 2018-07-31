import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  @Input() languages;
  @Input() selectedLanguage;
  @Output() onSelectChange = new EventEmitter<any>();

  isOpened = false;

  constructor() { }

  ngOnInit() {
  }

  togglePanel() {
    this.isOpened = !this.isOpened;
  }

  changeSelection(language) {
    this.onSelectChange.next(language);
    this.isOpened = false;
  }
}
