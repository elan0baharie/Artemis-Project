import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-diversity',
  templateUrl: './diversity.component.html',
  styleUrls: ['./diversity.component.css']
})
export class DiversityComponent implements OnInit {
  public quiz1: boolean;
  public quiz2: boolean;
  public quiz3: boolean;
  public quiz4: boolean;

  public diversityScore: number;
  public diversityAvg: number;
  public test: number;

  public diversityOneValue: string;
  public diversityTwoValue: string;
  public diversityThreeValue: string;
  public diversityFourValue: string;
  public diversityFiveValue: string;
  public diversitySixValue: string;
  public diversitySevenValue: string;
  public diversityEightValue: string;
  public diversityNineValue: string;
  public diversityTenValue: string;


  public employmentScore: number;
  public employmentAvg: number;

  public employmentOneValue: string;
  public employmentTwoValue: string;
  public employmentThreeValue: string;
  public employmentFourValue: string;
  public employmentFiveValue: string;
  public employmentSixValue: string;
  public employmentSevenValue: string;
  public employmentEightValue: string;
  public employmentNineValue: string;
  public employmentTenValue: string;
  public employmentElevenValue: string;
  public employmentTwelveValue: string;
  public employmentThirteenValue: string;
  public employmentFourteenValue: string;


  public communicationScore: number;
  public commAvg: number;

  public communicationOneValue: string;
  public communicationTwoValue: string;
  public communicationThreeValue: string;
  public communicationFourValue: string;
  public communicationFiveValue: string;


  public cultureScore: number;
  public cultureAvg: number;

  public cultureOneValue: string;
  public cultureTwoValue: string;
  public cultureThreeValue: string;
  public cultureFourValue: string;
  public cultureFiveValue: string;
  public cultureSixValue: string;
  public cultureSevenValue: string;
  public cultureEightValue: string;
  public cultureNineValue: string;
  public cultureTenValue: string;
  public cultureElevenValue: string;
  public cultureTwelveValue: string;
  public cultureThirteenValue: string;
  public cultureFourteenValue: string;
  public cultureFifteenValue: string;

  public showAssessment: boolean;

  constructor() {}

  ngOnInit() {
    this.quiz1 = true;
    this.quiz2 = false;
    this.quiz3 = false;
    this.quiz4 = false;

  }

  scrollWin() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  }


  runAssess() {
    const numDivOne = parseInt(this.diversityOneValue, 10);
    const numDivTwo = parseInt(this.diversityTwoValue, 10);
    const numDivThree = parseInt(this.diversityThreeValue, 10);
    const numDivFour = parseInt(this.diversityFourValue, 10);
    const numDivFive = parseInt(this.diversityFiveValue, 10);
    const numDivSix = parseInt(this.diversitySixValue, 10);
    const numDivSeven = parseInt(this.diversitySevenValue, 10);
    const numDivEight = parseInt(this.diversityEightValue, 10);
    const numDivNine = parseInt(this.diversityNineValue, 10);
    const numDivTen = parseInt(this.diversityTenValue, 10);

    const numEmpOne = parseInt(this.employmentOneValue, 10);
    const numEmpTwo = parseInt(this.employmentTwoValue, 10);
    const numEmpThree = parseInt(this.employmentThreeValue, 10);
    const numEmpFour = parseInt(this.employmentFourValue, 10);
    const numEmpFive = parseInt(this.employmentFiveValue, 10);
    const numEmpSix = parseInt(this.employmentSixValue, 10);
    const numEmpSeven = parseInt(this.employmentSevenValue, 10);
    const numEmpEight = parseInt(this.employmentEightValue, 10);
    const numEmpNine = parseInt(this.employmentNineValue, 10);
    const numEmpTen = parseInt(this.employmentTenValue, 10);
    const numEmpEleven = parseInt(this.employmentElevenValue, 10);
    const numEmpTwelve = parseInt(this.employmentTwelveValue, 10);
    const numEmpThirteen = parseInt(this.employmentThirteenValue, 10);
    const numEmpFourteen = parseInt(this.employmentFourteenValue, 10);

    const numCommOne = parseInt(this.communicationOneValue, 10);
    const numCommTwo = parseInt(this.communicationTwoValue, 10);
    const numCommThree = parseInt(this.communicationThreeValue, 10);
    const numCommFour = parseInt(this.communicationFourValue, 10);
    const numCommFive = parseInt(this.communicationFiveValue, 10);

    const numCulOne = parseInt(this.cultureOneValue, 10);
    const numCulTwo = parseInt(this.cultureTwoValue, 10);
    const numCulThree = parseInt(this.cultureThreeValue, 10);
    const numCulFour = parseInt(this.cultureFourValue, 10);
    const numCulFive = parseInt(this.cultureFiveValue, 10);
    const numCulSix = parseInt(this.cultureSixValue, 10);
    const numCulSeven = parseInt(this.cultureSevenValue, 10);
    const numCulEight = parseInt(this.cultureEightValue, 10);
    const numCulNine = parseInt(this.cultureNineValue, 10);
    const numCulTen = parseInt(this.cultureTenValue, 10);
    const numCulEleven = parseInt(this.cultureElevenValue, 10);
    const numCulTwelve = parseInt(this.cultureTwelveValue, 10);
    const numCulThirteen = parseInt(this.cultureThirteenValue, 10);
    const numCulFourteen = parseInt(this.cultureFourteenValue, 10);
    const numCulFifteen = parseInt(this.cultureFifteenValue, 10);

    this.diversityScore  = numDivOne + numDivTwo + numDivThree + numDivFour + numDivFive + numDivSix + numDivSeven+ numDivEight + numDivNine + numDivTen;
    console.log('Your diversity score is ' + this.diversityScore + ' out of 50.');

    this.diversityAvg = this.diversityScore / 10;

    this.employmentScore =
      numEmpOne + numEmpTwo + numEmpThree + numEmpFour + numEmpFive + numEmpSix +
      numEmpSeven + numEmpEight + numEmpNine + numEmpTen + numEmpEleven + numEmpTwelve + numEmpThirteen + numEmpFourteen;
    console.log('Your employment score is ' + this.employmentScore + ' out of 70.');

    this.employmentAvg = this.employmentScore / 14;

    this.communicationScore = numCommOne + numCommTwo + numCommThree + numCommFour + numCommFive;
    console.log('Your communication score is ' + this.communicationScore + ' out of 25.');

    this.commAvg = this.communicationScore / 5;

    this.cultureScore =
      numCulOne + numCulTwo + numCulThree + numCulFour + numCulFive + numCulSix +
      numCulSeven + numCulEight + numCulNine + numCulTen + numCulEleven +
      numCulTwelve + numCulThirteen + numCulFourteen + numCulFifteen;
    console.log('Your culture score is ' + this.cultureScore + ' out of 75.');

    this.cultureAvg = this.cultureScore / 15;

    this.quiz4 = false;
    this.showAssessment = true;
  }

  goQuizTwo() {
    this.quiz1 = false;
    this.quiz2 = true;
    this.quiz3 = false;
  }

  goQuizThree() {
    this.quiz1 = false;
    this.quiz2 = false;
    this.quiz3 = true;
  }

  goQuizFour() {
    this.quiz1 = false;
    this.quiz2 = false;
    this.quiz3 = false;
    this.quiz4 = true;
  }

}
