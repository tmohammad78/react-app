export const currancy = number => {
  const toman = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return toPersianNum(toman) + " تومان";
};

export const truncate = (str, num = 5) => {
  const arrStr = str.split(" ");
  if (str.length > num) {
    return arrStr.slice(0, num).join(" ") + "...";
  } else {
    return str;
  }
};

export const toPersianNum = (num, dontTrim) => {
  var i = 0,
    dontTrim = dontTrim || false,
    num = dontTrim ? num.toString() : num.toString().trim(),
    len = num.length,
    res = "",
    pos,
    persianNumbers =
      typeof persianNumber == "undefined"
        ? ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
        : persianNumbers;

  for (; i < len; i++)
    if ((pos = persianNumbers[num.charAt(i)])) res += pos;
    else res += num.charAt(i);

  return res;
};
