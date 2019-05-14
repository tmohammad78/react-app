import _ from "underscore";
import { currency } from "../../../helper/index";

export const parseMenu = (data) => {
  let flatList = {};
  let menuList = [];
  let categoryList = [];
  if (data.categories) {
    data.categories.forEach(category => {
      let sectionList = category.sub;
      if (sectionList && sectionList.length) {
        let foodList = [];
        sectionList.forEach(section => {
          let foods = section.food;
          if (foods && foods.length) {
            if (section.id == 0) {
              foods.forEach(food => {
                let foodItem = makeFoodItem(food);
                if (foodItem) {

                  foodList.push(foodItem);
                  flatList[`${category.id}-${food.id}`] = {
                    count: 0,
                    visible: true
                  };
                }
              });
            } else {
              let subFoods = [],
                subQuantity = 0,
                subAvailable = false,
                subUnavailableText = "عدم موجودی";

              foods.forEach(food => {
                let foodItem = makeFoodItem(food);
                if (foodItem) {
                  subFoods.push(foodItem);
                  flatList[`${category.id}-${section.id}-${foodItem.id}`] = {
                    count: 0,
                    visible: true
                  };

                  if (food.available) {
                    subAvailable = true;
                    subUnavailableText = "";
                  }
                }
              });

              subFoods = _.sortBy(subFoods, food => {
                return food.index;
              });

              if (subFoods.length > 0) {
                let subData = subFoodData(subFoods);
                let priceLabel =
                  section.priceLabel && section.priceLabel.trim();
                if (!priceLabel) {
                  priceLabel =
                    (subData.samePrice ? "" : " از ") +
                    currency(subData.lowPrice);
                }
                let foodItemWithSub = makeFoodItem({
                  id: section.id,
                  title: section.title,
                  img: section.img,
                  index: section.index,
                  ingredient: section.description || "", //|| subData.ingredient || "",
                  discountPercentage: subData.maxDiscount,
                  priceLabel: priceLabel,
                  //"discount": ,
                  //"price": ,
                  available: subAvailable,
                  unavailableText: subUnavailableText,

                  subFoods: subFoods
                });

                if (subQuantity) {
                  foodItemWithSub.quantity = subQuantity;
                }

                foodList.push(foodItemWithSub);
                flatList[`${category.id}-${section.id}-`] = {
                  title: section.title,
                  count: 0,
                  visible: true
                };
              }
            }
          }
        });

        if (foodList.length > 0) {
          flatList[`${category.id}-`] = {
            visibleChild: 0,
            visible: true,
            title: category.title
          };
          foodList = _.sortBy(foodList, food => {
            return food.index;
          });
          menuList.push({
            id: category.id,
            title: category.title,
            index: category.index || 0,
            active: category.isActive || false,
            logo: category.logo,
            foods: foodList,
            visible: true,
            visibleChild: 0
          });
        }
      }
    });

    menuList = _.sortBy(menuList, menuSection => {
      return menuSection.index;
    });

    categoryList = [];
    menuList.forEach(cat => {
      categoryList.push({
        id: cat.id,
        title: cat.title,
        index: cat.index || 0,
        active: false, //cat.isActive || false,
        logo: cat.logo
      });
    });
  }


  return {
    menuList,
    categoryList
  };
};

function makeFoodItem(food) {
  return food.title
    ? {
        id: food.id,
        title: food.title,
        ingredient: food.ingredient || "",
        img: food.img || "",
        archive: typeof food.archive !== "undefined" ? food.archive : false,
        price: food.price || 0,
        index: food.index || 0,
        discount: food.discount || 0,
        discountPercentage: food.discountPercentage || 0,
        foodTag: food.foodTag || [],
        available:
          typeof food.available !== "undefined" ? food.available : true,
        unavailableText: food.unavailableText || "",
        //stock: typeof food.stock !== "undefined" ? food.stock : true,
        subFoods: food.subFoods || false,
        priceLabel: food.priceLabel || "",

        visible: true,
        quantity: 0
      }
    : false;
}

function subFoodData(foods) {
  let allPriceIsSame = true;

  let firstFood = foods[0];
  let lowPrice = firstFood.price;
  let maxDiscount = 0;
  let ingredient = "";

  for (var i = 0; i < foods.length; i++) {
    if (foods[i].discountPercentage > 0) {
      if (foods[i].discountPercentage > maxDiscount) {
        maxDiscount = foods[i].discountPercentage;
      }
      let priceWithDiscount = foods[i].price - foods[i].discount;
      if (priceWithDiscount < lowPrice) {
        lowPrice = priceWithDiscount;
      }
    } else {
      if (foods[i].price < lowPrice) {
        lowPrice = foods[i].price;
      }
    }

    if (foods[i].price != firstFood.price) {
      allPriceIsSame = false;
    }

    if (foods[i].ingredient) {
      ingredient = foods[i].ingredient;
    }
  }
  return {
    ingredient: ingredient,
    lowPrice: lowPrice,
    maxDiscount: maxDiscount,
    samePrice: allPriceIsSame
  };
}