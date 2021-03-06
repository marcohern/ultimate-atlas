import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DailyCat } from '../../../models/daily-cat';
import { IOption } from '../../inputs/ua-select-base';

import { ErrorMessageService } from '../../inputs/error-message.service';
import { DailyService } from '../daily.service';
import { recordAnimation } from '../../../animations';

@Component({
  moduleId: module.id,
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css'],
  animations: [ recordAnimation ]
})
export class CatListComponent implements OnInit {

  constructor(
    private ds: DailyService,
    private ems: ErrorMessageService,
    private router: Router
  ) { }

  private cats: DailyCat[];
  private hypercats: IOption[];
  private catForm: FormGroup;
  private editIndex:null|number;
  private edit:boolean;
  private create:boolean;

  ngOnInit() {

    this.hypercats = [
      { value: 'TRANSPORT', text: 'Transport' },
      { value: 'FOOD', text: 'Food' },
      { value: 'PURCHASES', text: 'Purchases' },
      { value: 'SORTIE', text: 'Sortie' },
      { value: 'OTHER', text: 'Other' }
    ];

    this.catForm = this.ems.build({
      id: {
        control:[''],
        messages:{}
      },
      name: {
        control: ['', Validators.required],
        messages: {required: 'Required.'}
      },
      hypercat: {
        control: ['', Validators.required],
        messages: {required: 'Required.'}
      }
    });

    this.ds.getCategories().subscribe(cats => this.cats = cats);
  }

  deleteCat(i) {
    let cat = this.cats[i];
    if (confirm('Are you sure you want to delete ' +  cat.id + ' ' + cat.name + '?')) {
        this.ds.deleteCategory(cat.id).subscribe(data => {
        this.cats[i].status = 'gone';
      });
    }
  }

  editCat(cat:DailyCat, i:number) {
    this.editIndex=i;
    this.catForm.setValue({id:cat.id, name:cat.name,hypercat:cat.hypercat});
  }

  saveCat(value) {
    console.log("saveCat",value);
    let edit = (value.id=='') ? false:true;

    let cat: DailyCat = {
      id: (edit) ? value.id : null,
      name: value.name,
      hypercat: value.hypercat,
      status: ''
    };

    this.ds.saveCategory(cat).subscribe(data => {
      if (edit) {
        this.cats[this.editIndex].id = data.daily_cat.id;
        this.cats[this.editIndex].name = data.daily_cat.name;
        this.cats[this.editIndex].hypercat = data.daily_cat.hypercat;
      } else {
        this.cats.unshift(data.daily_cat);
      }
      this.catForm.reset();
      //this.router.navigate(['/daily/cats']);
    });
  }

  clearCat() {
    this.catForm.reset();
  }
}
