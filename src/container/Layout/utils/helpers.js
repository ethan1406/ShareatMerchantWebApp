export const currentdate = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  var month_name = function(dt) {
    var a = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return a[dt.getMonth()];
  };
  var month = month_name(new Date());
  today = month + " " + dd + " " + yyyy;
  return today;
};

export const yesterdayDate = () => {
  const prev_date = new Date();
  prev_date.setDate(prev_date.getDate() - 1);
  var day = prev_date.getDate();
  var mon = prev_date.getMonth() + 1;
  var year = prev_date.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (mon < 10) {
    mon = "0" + mon;
  }
  var month_name = function(dt) {
    var a = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return a[dt.getMonth()];
  };
  var monthyes = month_name(new Date());
  var yesterday = monthyes + " " + day + " " + year;

  return yesterday;
};

export const currentWeek = () => {
  Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  };
  var mydate = new Date();
  var week = mydate.getWeek();
  var yyyy = mydate.getFullYear();
  var currentweek = week + " " + yyyy;
  return currentweek;
};

export const lastWeek = () => {
  Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  };
  var mydate = new Date();
  var week = mydate.getWeek() - 1;
  var yyyy = mydate.getFullYear();
  var lastweek = week + " " + yyyy;
  return lastweek;
};

export const lastMonth = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() - 1;
  //alert(mm);
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  var month_name = function(dt) {
    var a = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return a[dt.getMonth()];
  };
  var mon = new Date();
  mon.setDate(1);
  mon.setMonth(mon.getMonth() - 1);
  //alert(x)
  var month = month_name(mon);
  today = month + " " + yyyy;
  //alert(today);
  return today;
};

export const currentMonth = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  var month_name = function(dt) {
    var a = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return a[dt.getMonth()];
  };
  var month = month_name(new Date());
  today = month + " " + yyyy;
  //alert(today);
  return today;
};

export const dateValue = () => {
  let now = new Date();
  let year = "" + now.getFullYear();
  let month = "" + (now.getMonth() + 1);
  if (month.length == 1) {
    month = "0" + month;
  }
  let day = "" + now.getDate();
  if (day.length == 1) {
    day = "0" + day;
  }
  let hour = "" + now.getHours();
  if (hour.length == 1) {
    hour = "0" + hour;
  }
  let minute = "" + now.getMinutes();
  if (minute.length == 1) {
    minute = "0" + minute;
  }
  let second = "" + now.getSeconds();
  if (second.length == 1) {
    second = "0" + second;
  }
  return (
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
  );
};

export const getStartDay = (w, y) => {
  var d = 1 + (w - 1) * 7; // 1st of January + 7 days for each week

  const ff = new Date(y, 0, d);

  var day = ff.getDay();
  const startD = new Date(
    ff.getFullYear(),
    ff.getMonth(),
    ff.getDate() + (day == 0 ? -6 : 1) - day
  );

  var dd = startD.getDate();
  var mm = startD.getMonth() + 1;
  var yyyy = startD.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  var month_name = function(dt) {
    var a = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return a[dt.getMonth()];
  };
  var month = month_name(new Date());
  let today = month + " " + dd;
  return today;
};

export const getEndDay = (w, y) => {
  var d = 1 + (w - 1) * 7; // 1st of January + 7 days for each week

  const ff = new Date(y, 0, d);

  var day = ff.getDay();
  let endD = new Date(
    ff.getFullYear(),
    ff.getMonth(),
    ff.getDate() + (day == 0 ? -6 : 7) - day
  );

  var dd = endD.getDate();
  var mm = endD.getMonth() + 1;
  var yyyy = endD.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  var month_name = function(dt) {
    var a = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return a[dt.getMonth()];
  };
  var month = month_name(new Date());
  let today = month + " " + dd;
  return today;
};

export const changeName = tabValue => {
  switch (tabValue) {
    case "day":
      return currentdate();
    case "week":
      return currentWeek();
    case "month":
      return currentMonth();
    default:
      return currentdate();
  }
};

export const changeYesterday = tabValue => {
  switch (tabValue) {
    case "day":
      return yesterdayDate();
    case "week":
      return lastWeek();
    case "month":
      return lastMonth();
    default:
      return yesterdayDate();
  }
};
