import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../Modal/index';
import Food from './food/index';
import SearchBar from './searchBar/searchBar';
import SubFood from '../subFoodModal/subFood';
import FoodListTitle from './FoodListTitle';

import './style.scss';

const FoodListTable = ({ items }) => {
  //   const originalItems = [...items];
  //   const [foodList, setFoodList] = useState(items);
  const [searchKey, setSearchKey] = useState('');
  const [inStock, setInStock] = useState(false);
  const [subFood, setSubFood] = useState(null);

  useEffect(() => {
    search(searchKey, inStock);
  }, []);

  const search = (stock, list = items) => {
    let newlist = list;
    if (stock) {
      newlist = newlist.filter((x) => x.available);
    }
    // if (query) {
    //   newList = newList.filter(x => x.subFoods.length === 0);
    //   newList = newList.filter(x => x.title.indexOf(query) > -1);
    // } else {
    //   newList = newList.filter(x => x.parent === 0);
    // }
    // setFoodList(newlist);
  };

  const searchHandler = () => {
    search(text, inStock);
    setSearchKey(text);
  };

  const stockHandler = (value) => {
    search(searchKey, value);
    setInStock(value);
  };

  const row = [];
  let lastCategory = null;

  if (items) {
    items.forEach((food) => {
      if (food.categoryTitle !== lastCategory) {
        row.push(<FoodListTitle category={food.categoryTitle} id={food.categoryId} />);
      }
      row.push(<Food food={food} onShowsubFoodModal={(foodItem) => setSubFood(foodItem)} />);
      lastCategory = food.categoryTitle;
    });
  }
  return (
    <div className='food_menu clearfix'>
      <SearchBar
        filterText={searchKey}
        onfilterText={searchHandler}
        inStock={inStock}
        onChangeStock={stockHandler}
      />
      <Modal open={subFood} onClose={() => setSubFood(null)} className='subFoodModal'>
        <SubFood item={subFood} />
      </Modal>
      <div className='food-list'>{row}</div>
    </div>
  );
};

FoodListTable.propTypes = {
  foodList: PropTypes.array,
  addFood: PropTypes.func,
  removeFood: PropTypes.func,
  productToUpdate: PropTypes.object
};

// const mapStateToProps = state => ({
//   foodList: state.menu.foodList,
//   productToUpdate: state.menu.productToUpdate
// });

export default FoodListTable;

// class FoodListTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       TextInSearchBar: '',
//       inStock: false,
//       subFood: null
//     };
//     this.onfilterText = this.onfilterText.bind(this);
//     this.onChangeStock = this.onChangeStock.bind(this);

//     this.filterBySearch = memoize((list, searchValue) =>
//       list.filter(food => food.title.indexOf(searchValue) > -1)
//     );

//     this.filterByStock = memoize(list => list.filter(food => food.available));
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.productToUpdate !== this.props.productToUpdate) {
//       this.updateProduct(nextProps.productToUpdate);
//     }
//   }

//   onfilterText(TextInSearchBar) {
//     this.setState({
//       TextInSearchBar
//     });
//   }

//   onChangeStock(inStock) {
//     this.setState({
//       inStock
//     });
//   }

//   updateProduct(item) {
//     const { foodList } = this.props;
//     const Product = foodList.find(x => x.id === item.id);
//     if (Product) {
//       Product.quantity = item.quantity;
//     }
//   }

//   render() {
//     const { foodList, addFood: addFoodItem, removeFood: removeFoodItem } = this.props;
//     const row = [];
//     let lastCategory = null;

//     let foodListItems = foodList;
//     if (this.state.inStock) {
//       foodListItems = this.filterByStock(foodListItems);
//     }
//     foodListItems = this.filterBySearch(foodListItems, this.state.TextInSearchBar);

//     foodListItems.forEach(food => {
//       if (food.categoryTitle !== lastCategory) {
//         row.push(<FoodListTitle category={food.categoryTitle} key={food.catId} />);
//       }
//       row.push(
//         <Food
//           food={food}
//           addFood={addFoodItem}
//           removeFood={removeFoodItem}
//           onShowsubFoodModal={subFood => {
//             this.setState({ subFood });
//           }}
//         />
//       );
//       lastCategory = food.categoryTitle;
//     });

//     return (
//       <div className='food_menu clearfix'>
//         <SearchBar
//           filterText={this.state.TextInSearchBar}
//           onfilterText={this.onfilterText}
//           inStock={this.state.inStock}
//           onChangeStock={this.onChangeStock}
//         />
//         <Modal
//           open={this.state.subFood}
//           onClose={() => {
//             this.setState({ subFood: null });
//           }}
//           className='subFoodModal'
//         >
//           <SubFood item={this.state.subFood} addFood={addFoodItem} removeFood={removeFoodItem} />
//         </Modal>
//         <div className='food-list'>{row}</div>
//       </div>
//     );
//   }
// }
