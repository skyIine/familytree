import { Component } from '@angular/core';

import { FamilyMember } from '../family-member';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Relation } from '../relation';
import { TargetMember } from '../target-member';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FamilyMemberClassComponent {

  index:number =0;

  FamilyList: Array<FamilyMember> = [];
  familyNumber: number;
  familynumberList: Array<number> = [];

  myimage: string = 'assets/tree.png';

  relationType = ['mother', 'father', 'sister', 'brother'];


  model = new FamilyMember(this.index, 'Name', '');

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
    this.index=this.index+1;
    this.model = new FamilyMember(this.index, '', '');
    
    console.log(this.FamilyList);
  }


  relation = new Relation(0, 1, 'father');

  relations: Array<Relation> = [];


  newRelation() {
    this.relations.push(this.relation);
    console.log(this.relations);


  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
