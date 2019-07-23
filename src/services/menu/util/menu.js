import _ from 'underscore';

function makeFoodItem(food) {
  return food.title
    ? {
        id: food.id,
        title: food.title,
        ingredient: food.ingredient || '',
        img: food.img || '',
        archive: typeof food.archive !== 'undefined' ? food.archive : false,
        price: food.price || 0,
        index: food.index || 0,
        discount: food.discount || 0,
        discountPercentage: food.discountPercentage || 0,
        foodTag: food.foodTag || [],
        available: typeof food.available !== 'undefined' ? food.available : true,
        unavailableText: food.unavailableText || '',
        // stock: typeof food.stock !== "undefined" ? food.stock : true,
        subFoods: food.subFoods || false,
        priceLabel: food.priceLabel || '',

        visible: true,
        quantity: 0
      }
    : false;
}

function subFoodData(foods) {
  let allPriceIsSame = true;

  const firstFood = foods[0];
  let lowPrice = firstFood.price;
  let maxDiscount = 0;
  let ingredient = '';

  for (let i = 0; i < foods.length; i++) {
    if (foods[i].discountPercentage > 0) {
      if (foods[i].discountPercentage > maxDiscount) {
        maxDiscount = foods[i].discountPercentage;
      }
      const priceWithDiscount = foods[i].price - foods[i].discount;
      if (priceWithDiscount < lowPrice) {
        lowPrice = priceWithDiscount;
      }
    } else if (foods[i].price < lowPrice) {
      lowPrice = foods[i].price;
    }

    if (foods[i].price !== firstFood.price) {
      allPriceIsSame = false;
    }

    if (foods[i].ingredient) {
      ingredient = foods[i].ingredient;
    }
  }
  return {
    ingredient,
    lowPrice,
    maxDiscount,
    samePrice: allPriceIsSame
  };
}

const parseMenu = (data, sort) => {
  const list = [];
  const categoryList = [];
  if (data.categories) {
    data.categories = _.sortBy(data.categories, c => c.index);

    data.categories.forEach(category => {
      const sectionList = category.sub;
      if (sectionList && sectionList.length) {
        let foodList = [];
        sectionList.forEach(section => {
          const foods = section.food;
          if (foods && foods.length) {
            if (section.id === 0) {
              foods.forEach(food => {
                const foodItem = makeFoodItem(food);
                if (foodItem) {
                  foodList.push(foodItem);
                }
              });
            } else {
              let subFoods = [];
              const subQuantity = 0;
              let subAvailable = false;
              let subUnavailableText = 'عدم موجودی';

              foods.forEach(food => {
                const foodItem = makeFoodItem(food);
                if (foodItem) {
                  subFoods.push(foodItem);

                  if (food.available) {
                    subAvailable = true;
                    subUnavailableText = '';
                  }
                }
              });

              subFoods = _.sortBy(subFoods, food => {
                return food.index;
              });

              if (subFoods.length > 0) {
                const subData = subFoodData(subFoods);
                let priceLabel = section.priceLabel && section.priceLabel.trim();
                if (!priceLabel) {
                  priceLabel = (subData.samePrice ? '' : ' از ') + subData.lowPrice;
                }
                const foodItemWithSub = makeFoodItem({
                  id: section.id,
                  title: section.title,
                  img: section.img,
                  index: section.index,
                  ingredient: section.description || '', // || subData.ingredient || "",
                  discountPercentage: subData.maxDiscount,
                  priceLabel,
                  // "discount": ,
                  // "price": ,
                  available: subAvailable,
                  unavailableText: subUnavailableText,

                  subFoods
                });

                if (subQuantity) {
                  foodItemWithSub.quantity = subQuantity;
                }

                foodList.push(foodItemWithSub);
              }
            }
          }
        });
        if (foodList.length > 0) {
          if (sort) {
            const sortType = sort === 'lowestprice' ? 1 : -1;
            foodList = _.sortBy(foodList, food => {
              return food.price * sortType;
            });
          } else {
            foodList = _.sortBy(foodList, food => {
              return food.index;
            });
          }

          foodList.forEach(item => {
            list.push({
              catId: category.id,
              categoryTitle: category.title,
              categoryIndex: category.index || 0,
              ...item
            });
          });
        }
      }

      categoryList.push({
        catId: category.id,
        catTitle: category.title,
        catLogo: category.logo,
        catIndex: category.index
      });
    });
  }

  return {
    foodList: list,
    categoryList
  };
};

export default parseMenu;
