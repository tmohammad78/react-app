export const currency = (number,showToman=true) => {
  if(showToman && number !==0){
    const realPrice=number;
    let final = realPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return toPersianNum(final) + " تومان";
  }
   else if(number !==0){
    const realPrice=number;
    let final = realPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return toPersianNum(final) +'%' ;
  }

};

export const discountPrice = (number,discountPercentage)=>{
  const discountPrice=number-number*(discountPercentage/100);
  let final = discountPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return toPersianNum(final) + " تومان";
}

export const truncate = (str, num = 5) => {
  const arrStr = str.split(" ");
  if (str.length > num) {
    return arrStr.slice(0, num).join(" ") + "...";
  } else {
    return str;
  }
};

export const toPersianNum = (value, dontTrim = false) => {
  let i = 0,
    num = dontTrim ? value.toString() : value.toString().trim(),
    len = value.length,
    res = "",
    pos,
    persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  for (; i < len; i++)
    if ((pos = persianNumbers[num.charAt(i)])) res += pos;
    else res += num.charAt(i);

  return res;
};
