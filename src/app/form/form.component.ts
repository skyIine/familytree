import { Component } from '@angular/core';
 
import { FamilyMember } from '../family-member';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
 
 
export class FamilyMemberClassComponent {
 
  FamilyList: Array<FamilyMember> = [];
 familyNumber: number;
 familynumberList: Array<number> = [];
 
 
 
  relation = ['me', 'mother', 'father', 'sister', 'brother', 'daughter', 'son', 'uncle', 'aunt',
            'grandmother', 'grandfather', 'niece', 'nephew', 'cousin'];
 
 
  model = new FamilyMember(18, 'Name', 'Surname', this.relation[0]);
 
 
  submitted = false;
 
 add() {
    this.FamilyList.push(this.model);
    console.log(this.model);
  }
 
  onSubmit() { this.submitted = true;
  }
 
  CreateFamNumberArray() {
    for (let index = 0; index < this.familyNumber; index++) {
      this.familynumberList.push(index);
    }
  }
 
 
  newFamilyMember() {
  this.add();
  this.model = new FamilyMember(42, '', '', '');
  }
 
 
 
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}