import handleDate from "./handleDateString";

const handleRenewDate = (type, payDate) => {
  const dateFormated = new Date(payDate);

  const addDays = (days) => {
    let renewDate = dateFormated.setDate(dateFormated.getDate() + days);
    return new Date(renewDate);
  };

  if (type === "annual") {
    return handleDate(addDays(365));
  }

  if (type === "monthly") {
    return handleDate(addDays(31));
  }

  if (type === "weekly") {
    return handleDate(addDays(7));
  }

  if (type === "biweekly") {
    return handleDate(addDays(15));
  }

  //need to check all this type to write this in the best way.
};

export default handleRenewDate;
