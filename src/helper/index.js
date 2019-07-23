// export const currency = (number, showToman = true) => {
//   if (showToman && number !== 0) {
//     const realPrice = number;
//     const final = realPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
//     return `${toPersianNum(final)} تومان`;
//   }
//   // else if ( showToman===false &&  number !== 0) {
//   //     const realPrice = number;
//   //     let final = realPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
//   //     return toPersianNum(final) + "%";
//   //   }
//   if (showToman === false) {
//     const realPrice = number;
//     const final = realPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
//     return toPersianNum(final);
//   }
// };

export const discountPrice = (number, discountPercentage) => {
  const price = number - number * (discountPercentage / 100);
  const final = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return `${toPersianNum(final)} تومان`;
};

export const truncate = (str, num = 5) => {
  const arrStr = str.split(' ');
  if (str.length > num) {
    return `${arrStr.slice(0, num).join(' ')} ...`;
  }

  return str;
};

export const toPersianNum = (value, dontTrim = false) => {
  let i = 0;
  const num = dontTrim ? value.toString() : value.toString().trim();
  const len = value.length;
  let res = '';
  let pos;
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  for (; i < len; i++) pos = persianNumbers[num.charAt(i)];
  if (pos) res += pos;
  else res += num.charAt(i);

  return res;
};
