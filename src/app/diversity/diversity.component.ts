import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diversity',
  templateUrl: './diversity.component.html',
  styleUrls: ['./diversity.component.css']
})
export class DiversityComponent implements OnInit {
  public quiz1: boolean;
  public remoteScore: number;
  public remoteOneValue: string;
  public remoteTwoValue: string;
  public remoteThreeValue: string;
  public remoteFourValue: string;
  public remoteFiveValue: string;
  public remoteSixValue: string;
  public remoteSevenValue: string;





  constructor() { }

  ngOnInit() {
    this.quiz1 = true;
  }

  runAssess() {
    const realRemoteNumOne = parseInt(this.remoteOneValue, 10);
    const realRemoteNumTwo = parseInt(this.remoteTwoValue, 10);
    const realRemoteNumThree = parseInt(this.remoteThreeValue, 10);
    const realRemoteNumFour = parseInt(this.remoteFourValue, 10);
    const realRemoteNumFive = parseInt(this.remoteFiveValue, 10);
    const realRemoteNumSix = parseInt(this.remoteSixValue, 10);
    const realRemoteNumSeven = parseInt(this.remoteSevenValue, 10);

    this.remoteScore = realRemoteNumOne + realRemoteNumTwo + realRemoteNumThree+ realRemoteNumFour+ realRemoteNumFive+ realRemoteNumSix+ realRemoteNumSeven;
    console.log('Your remote score is ' + this.remoteScore + ' out of 35.');



  }

}
