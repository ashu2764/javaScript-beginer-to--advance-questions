const leapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {   
    console.log(true);
    return `${year} is a leap year`
  }else{
    console.log(false)
    return `${year} is not a leap year`
  }
};

console.log(leapYear(2024))