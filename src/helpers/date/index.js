export const getCurrentMonth = () => {
  let date = new Date();
  let month =
    parseInt(date.getMonth() + 1).toString().length === 1
      ? "0" + parseInt(date.getMonth() + 1)
      : parseInt(date.getMonth() + 1).toString();

  return month;
};

export const getCurrentYear = () => {
  let date = new Date();
  let year = parseInt(date.getFullYear());

  return year;
};

export const getMonthInWords = (month) => {
  let numberOfMonth = parseInt(month);
  let monthInWords;
  switch (numberOfMonth) {
    case 1:
      monthInWords = "January";
      break;
    case 2:
      monthInWords = "February";
      break;
    case 3:
      monthInWords = "March";
      break;
    case 4:
      monthInWords = "April";
      break;
    case 5:
      monthInWords = "May";
      break;
    case 6:
      monthInWords = "June";
      break;
    case 7:
      monthInWords = "July";
      break;
    case 8:
      monthInWords = "August";
      break;
    case 9:
      monthInWords = "September";
      break;
    case 10:
      monthInWords = "Octomber";
      break;
    case 11:
      monthInWords = "November";
      break;
    case 12:
      monthInWords = "December";
      break;

    default:
      break;
  }

  return monthInWords;
};

export const getDayInWords = (day) => {
  let dayInWords;
  switch (day) {
    case 0:
      dayInWords = "Sunday";
      break;
    case 1:
      dayInWords = "Monday";
      break;
    case 2:
      dayInWords = "Tuesday";
      break;
    case 3:
      dayInWords = "Wednesday";
      break;
    case 4:
      dayInWords = "Thursday";
      break;
    case 5:
      dayInWords = "Friday";
      break;
    case 6:
      dayInWords = "Saturday";
      break;

    default:
      break;
  }

  return dayInWords;
};

export const getAllDaysInMonth = (month, year) => {
  let date = new Date(year, parseInt(month) - 1, 1);
  const dates = [];

  while (parseInt(date.getMonth()) + 1 === parseInt(month)) {
    let day =
      new Date(date).getDate().toString().length === 1
        ? "0" + new Date(date).getDate().toString()
        : new Date(date).getDate().toString();
    let formatedMonth =
      String(parseInt(new Date(date).getMonth()) + 1).length === 1
        ? "0" + String(new Date(date).getMonth() + 1)
        : String(parseInt(new Date(date).getMonth()) + 1);
    let formatedYear = new Date(date).getFullYear();
    dates.push(formatedYear + "-" + formatedMonth + "-" + day);
    date.setDate(date.getDate() + 1);
  }

  return dates;
};

export const getFormattedDate = (year, month, day) => {
  let date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  let formattedYear = date.getFullYear();
  let dayInWord = getDayInWords(date.getDay());
  let dayInNumber = date.getDate();
  let monthInWords = getMonthInWords(parseInt(month));

  return (
    dayInWord + ", " + monthInWords + " " + dayInNumber + ", " + formattedYear
  );
};
