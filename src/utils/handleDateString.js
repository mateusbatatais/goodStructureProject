const handleDate = (date) => {
  const dateFormated = new Date(date);
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const day = dateFormated.getDate().toString();
  const dayFull = day.length === 1 ? "0" + day : day;
  const month = [months[dateFormated.getDay()]];
  const year = dateFormated.getFullYear();

  return `${dayFull}-${month}-${year}`;
};

export default handleDate;
