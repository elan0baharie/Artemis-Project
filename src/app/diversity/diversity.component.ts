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
  public diversityOneValue: string;
  public diversityTwoValue: string;
  public diversityThreeValue: string;
  public diversityFourValue: string;
  public diversityFiveValue: string;
  public diversitySixValue: string;
  public diversitySevenValue: string;

  public employmentScore: number;
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

  public communicationScore: number;
  public communicationOneValue: string;
  public communicationTwoValue: string;
  public communicationThreeValue: string;

  public cultureScore: number;
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

  constructor() {}
  
  ngOnInit() {
    this.quiz1 = true;
    this.quiz2 = false;
    this.quiz3 = false;
    this.quiz4 = false;

  }

  scrollWin() {
    window.scrollTo(0, 0);
  }

  runAssess() {
    const realDiversityNumOne = parseInt(this.diversityOneValue, 10);
    const realDiversityNumTwo = parseInt(this.diversityTwoValue, 10);
    const realDiversityNumThree = parseInt(this.diversityThreeValue, 10);
    const realDiversityNumFour = parseInt(this.diversityFourValue, 10);
    const realDiversityNumFive = parseInt(this.diversityFiveValue, 10);
    const realDiversityNumSix = parseInt(this.diversitySixValue, 10);
    const realDiversityNumSeven = parseInt(this.diversitySevenValue, 10);

    const realEmploymentNumOne = parseInt(this.employmentOneValue, 10);
    const realEmploymentNumTwo = parseInt(this.employmentTwoValue, 10);
    const realEmploymentNumThree = parseInt(this.employmentThreeValue, 10);
    const realEmploymentNumFour = parseInt(this.employmentFourValue, 10);
    const realEmploymentNumFive = parseInt(this.employmentFiveValue, 10);
    const realEmploymentNumSix = parseInt(this.employmentSixValue, 10);
    const realEmploymentNumSeven = parseInt(this.employmentSevenValue, 10);
    const realEmploymentNumEight = parseInt(this.employmentEightValue, 10);
    const realEmploymentNumNine = parseInt(this.employmentNineValue, 10);
    const realEmploymentNumTen = parseInt(this.employmentTenValue, 10);
    const realEmploymentNumEleven = parseInt(this.employmentElevenValue, 10);
    const realEmploymentNumTwelve = parseInt(this.employmentTwelveValue, 10);

    const realCommunicationNumOne = parseInt(this.communicationOneValue, 10);
    const realCommunicationNumTwo = parseInt(this.communicationTwoValue, 10);
    const realCommunicationNumThree = parseInt(this.communicationThreeValue, 10);

    const realCultureNumOne = parseInt(this.cultureOneValue, 10);
    const realCultureNumTwo = parseInt(this.cultureTwoValue, 10);
    const realCultureNumThree = parseInt(this.cultureThreeValue, 10);
    const realCultureNumFour = parseInt(this.cultureFourValue, 10);
    const realCultureNumFive = parseInt(this.cultureFiveValue, 10);
    const realCultureNumSix = parseInt(this.cultureSixValue, 10);
    const realCultureNumSeven = parseInt(this.cultureSevenValue, 10);
    const realCultureNumEight = parseInt(this.cultureEightValue, 10);
    const realCultureNumNine = parseInt(this.cultureNineValue, 10);
    const realCultureNumTen = parseInt(this.cultureTenValue, 10);
    const realCultureNumEleven = parseInt(this.cultureElevenValue, 10);
    const realCultureNumTwelve = parseInt(this.cultureTwelveValue, 10);
    const realCultureNumThirteen = parseInt(this.cultureThirteenValue, 10);


    this.diversityScore = realDiversityNumOne + realDiversityNumTwo + realDiversityNumThree+ realDiversityNumFour+ realDiversityNumFive+ realDiversityNumSix+ realDiversityNumSeven;
    console.log('Your diversity score is ' + this.diversityScore + ' out of 35.');

    this.employmentScore = realEmploymentNumOne + realEmploymentNumTwo + realEmploymentNumThree+ realEmploymentNumFour + realEmploymentNumFive + realEmploymentNumSix + realEmploymentNumSeven + realEmploymentNumEight + realEmploymentNumNine + realEmploymentNumTen + realEmploymentNumEleven;
    console.log('Your employment score is ' + this.employmentScore + ' out of 55.');

    this.communicationScore = realCommunicationNumOne + realCommunicationNumTwo + realCommunicationNumThree;
    console.log('Your communication score is ' + this.communicationScore + ' out of 15.');

    this.cultureScore = realCultureNumOne + realCultureNumTwo + realCultureNumThree+ realCultureNumFour + realCultureNumFive + realCultureNumSix + realCultureNumSeven + realCultureNumEight + realCultureNumNine + realCultureNumTen + realCultureNumEleven + realCultureNumTwelve + realCultureNumThirteen;
    console.log('Your culture score is ' + this.cultureScore + ' out of 65.');

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
