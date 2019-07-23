import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { Link } from 'react-scroll';

class Category extends Component {
  // state = {
  //   galleryItems: [1, 2, 3].map(i => <h2 key={i}>{i}</h2>)
  // };
  // static renderItem(food) {
  //   return (
  //     <div>{food}</div>
  //     // <Link
  //     //   key={`${item.id}`}
  //     //   className=' indexbox'
  //     //   activeClass='activecategory'
  //     //   to={item.id.toString()}
  //     //   spy
  //     //   smooth
  //     //   offset={-70}
  //     // >
  //     //   <div className='i-w'>
  //     //     <span title={item.title}>
  //     //       <div className={`ic-c c-${item.logo}`} />
  //     //       <p>{item.title}</p>
  //     //     </span>
  //     //   </div>
  //     // </Link>
  //   );
  // }

  render() {
    // const { item } = this.props;
    // console.log(item);
    const responsive = {
      0: {
        items: 3
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };

    return (
      <div className='parent'>
        <div className='categories'>
          <div className='owl-item'>
            <AliceCarousel
              duration={200}
              autoPlay
              startIndex={1}
              fadeOutAnimation
              mouseDragEnabled
              playButtonEnabled
              responsive={responsive}
              autoPlayInterval={2000}
              autoPlayDirection='rtl'
              autoPlayActionDisabled
              onSlideChange={this.onSlideChange}
              onSlideChanged={this.onSlideChanged}
            >
              <div className='yours-custom-class'>
                <h2>1</h2>
              </div>
              <div className='yours-custom-class'>
                <h2>2</h2>
              </div>
              <div className='yours-custom-class'>
                <h2>3</h2>
              </div>
              <div className='yours-custom-class'>
                <h2>4</h2>
              </div>
              <div className='yours-custom-class'>
                <h2>5</h2>
              </div>
            </AliceCarousel>
          </div>
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  // item: PropTypes.object.isRequired
};
export default Category;
