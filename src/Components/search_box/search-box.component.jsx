// import { Component } from "react";
// import '../search_box/search-box.styles.css'
import './search-box.styles.css'

const SearchBox = ({className, placeholder, onChangeHandler}) => (
    <input 
        className={`search-box ${className}`}
        type="search" 
        placeholder={placeholder} 
        onChange={onChangeHandler}>
    </input>
);


// class SearchBox extends Component {

//     render() {

//         const { className, placeholder, onChangeHandler } = this.props;

//         return (
//             <input 
//                 className={`search-box ${className}`}
//                 type="search" 
//                 placeholder={placeholder} 
//                 onChange={onChangeHandler}>
//             </input>
//         );

//     }

// }

export default SearchBox;