export function TranslateDate(date) {
  let temp = new Date(date * 1000);
  let tDay, tMonth, month, day, dayNumber, year;

  temp = temp.toDateString();
  day = temp.substring(0, 3);
  month = temp.substring(4, 7);
  dayNumber = temp.substring(8, 10);
  year = temp.substring(11, 15);

  switch (day) {
    case "Sun":
      tDay = "Dom";
      break;
    case "Mon":
      tDay = "Seg";
      break;
    case "Tue":
      tDay = "Ter";
      break;
    case "Wed":
      tDay = "Qua";
      break;
    case "Thu":
      tDay = "Qui";
      break;
    case "Fri":
      tDay = "Sex";
      break;
    case "Sat":
      tDay = "Sab";
      break;
    default:
      console.log("Erro!");
      tDay = "Erro";
  }

  switch (month) {
    case "Jan":
      tMonth = "Jan";
      break;
    case "Feb":
      tMonth = "Fev";
      break;
    case "Mar":
      tMonth = "Mar";
      break;
    case "Apr":
      tMonth = "Abr";
      break;
    case "May":
      tMonth = "Mai";
      break;
    case "Jun":
      tMonth = "Jun";
      break;
    case "Jul":
      tMonth = "Jul";
      break;
    case "Aug":
      tMonth = "Ago";
      break;
    case "Sep":
      tMonth = "Set";
      break;
    case "Oct":
      tMonth = "Out";
      break;
    case "Nov":
      tMonth = "Nov";
      break;
    case "Dec":
      tMonth = "Dez";
      break;
    default:
      tMonth = "Erro";
  }

  return `${tDay}, ${dayNumber} de ${tMonth} de ${year}`;
}
