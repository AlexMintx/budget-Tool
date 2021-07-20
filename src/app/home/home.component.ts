import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  totalIncome: number | undefined;
  totalExpense: number | undefined;
  totalUtilities: number | undefined;

  constructor(private fb: FormBuilder) {}

  income = this.fb.group({
    incomeInput: this.fb.array(
      [
        this.fb.control('')
      ]),
  });

  expense = this.fb.group({
    expenseInput: this.fb.array([this.fb.control('')]),
  });

  utilities = this.fb.group({
    utilitiesInput: this.fb.array([this.fb.control('')]),
  });

  ngOnInit(): void {

  }


  get getIncome() {
    return this.income.get('incomeInput') as FormArray;
  }

  get getExpense() {
    return this.expense.get('expenseInput') as FormArray;
  }

  get getUtilities() {
    return this.utilities.get('utilitiesInput') as FormArray;
  }

  addAnotherIncome() {
    this.getIncome.push(
      this.fb.control(''));
  }

  addAnotherExpense() {
    this.getExpense.push(this.fb.control(''));
  }

  addUtility() {
    this.getUtilities.push(this.fb.control(''));
  }

  keyupSumOfIncome() {
    const incomeArray = this.income.get('incomeInput')?.value;

    console.log(incomeArray.reduce((a: any, b: any) => a + b, 0));
    this.totalIncome = incomeArray.reduce((a: any, b: any) => a + b, 0);
  }

  keyupSumOfExpense() {
    const expenseArray = this.expense.get('expenseInput')?.value;
    this.totalExpense = expenseArray.reduce((a: any, b: any) => a + b, 0);
  }

  keyupSumOfUtilities() {
    const utilitiesArray = this.utilities.get('utilitiesInput')?.value;
    this.totalUtilities = utilitiesArray.reduce((a: any, b: any) => a + b, 0);
  }
}
