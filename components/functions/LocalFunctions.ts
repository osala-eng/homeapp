import { now } from "moment";

export const UP = true;
export const DW = false;

export const Timeago =(oldTime: number):string =>{
    const timePassedms = now() - oldTime;
    const timePassedSecs = Math.round((timePassedms + 1) / 1000);
    const timePassedMins = Math.round((timePassedSecs + 1) / 60);
    const timePassedHours = Math.round((timePassedMins + 1) / 60);
    const timePassedDays = Math.round((timePassedHours + 1) / 24);
    const timePassedWeeks = Math.round((timePassedDays + 1) / 7);
    const timePassedMonths = Math.round((timePassedDays + 1) / 30);
    const timePassedYears = Math.round((timePassedMonths + 1) / 12);

    if(timePassedSecs < 10) return `moments ago`; 
    else if(timePassedSecs < 60) return `${timePassedSecs.toString()} seconds ago`; 
    else if (timePassedMins === 1) return `a minute ago`;
    else if (timePassedMins > 1 && timePassedMins < 60) return `${timePassedMins} minutes ago`;
    else if (timePassedHours === 1) return `an hour ago`;
    else if (timePassedHours > 1 && timePassedHours < 24) return `${timePassedHours} hours ago`;
    else if (timePassedWeeks === 1) return `a week ago`;
    else if (timePassedWeeks > 1 && timePassedWeeks < 5) return `${timePassedWeeks} weeks ago`;
    else if (timePassedMonths === 1) return `a month ago`
    else if (timePassedMonths < 12) return `${timePassedMonths} months ago`;
    else if (timePassedYears === 1) return `a year ago`;
    else return `${timePassedYears} years ago`;
};

export const TwodigitString = (num: number): string=>{
    if (num <= 0) return `MIN`;
    else if (num < 10) return `0${num}`;
    else if (num < 99) return `${num}`;
    else return `MAX`
}