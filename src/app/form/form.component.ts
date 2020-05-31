import { Component } from '@angular/core';

import { FamilyMember } from '../family-member';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Relation } from '../relation';
import { TargetMember } from '../target-member';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FamilyMemberClassComponent implements OnInit {

  index: number = 0;
  regTitle: string = "[A-Za-z]{2,20}";

  firstFormGroup : FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;

  constructor(private _formBuilder: FormBuilder) {}

  FamilyList: Array<FamilyMember> = [];
  familyNumber: number;
  familynumberList: Array<number> = [];

  myimage: string = 'assets/tree.png';

  relationType = ['mother', 'father', 'brother', 'sister'];


  model = new FamilyMember(this.index, '', '');

  title: string = '';

  saveTitle() {
    this.title = this.title;
    console.log(this.title);
  }
  submitted = false;

  add() {
    this.FamilyList.push(this.model);
    console.log(this.model);
  }

  onSubmit() {
    this.submitted = true;
  }

  newFamilyMember() {
    this.add();
    this.index = this.index + 1;
    this.model = new FamilyMember(this.index, '', '');
    console.log(this.FamilyList);
  }


  relation = new Relation(0, 1, 'father');

  relations: Array<Relation> = [];


  newRelation() {
    this.relations.push(this.relation);
    this.relation = new Relation(0, 1, 'father');
    console.log(this.relations);
  }

  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
