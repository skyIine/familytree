import { Component } from '@angular/core';

import { FamilyMember } from '../family-member';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SourceMember } from '../source-member';
import { TargetMember } from '../target-member';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FamilyMemberClassComponent {

  FamilyList: Array<FamilyMember> = [];
  familyNumber: number;
  familynumberList: Array<number> = [];

  myimage: string = "assets/tree.png";


  relationType = ['mother', 'father', 'sister', 'brother'];


  model = new FamilyMember(18, 'Name');

  title: string = "";
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
    this.model = new FamilyMember(42, '');
    console.log(this.FamilyList);
  }

  sourceMembers: Array<FamilyMember> = [];
  targetMembers: Array<FamilyMember> = [];

  sourceModel = new SourceMember(0,"ex");
  targetModel = new TargetMember(0,"ex2")

  newSourceMember() {
    this.sourceMembers.push(this.sourceModel);
    console.log(this.sourceModel);
  }
  
  newTargetMember() {
    this.targetMembers.push(this.targetModel);
    console.log(this.targetModel);
  }
  // relations: Array<FamilyMember | string | number> = [];


  // makeRelations() {
  //   this.relations.push(this.model.id, this.model);
  // }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
