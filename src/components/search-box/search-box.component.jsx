import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ className, onChangeHandler, placeHolder }) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeHolder}
    onChange={onChangeHandler}
  ></input>
);

export default SearchBox;

// export default class SearchBox extends Component {
//   render() {
//     const { className, onChangeHandler, placeHolder } = this.props;
//     return (
//       <input
//         className={`search-box ${className}`}
//         type="search"
//         placeholder={placeHolder}
//         onChange={onChangeHandler}
//       ></input>
//     );
//   }
// }
