import '../styles/SearchBar.css';

function SearchBar(){
    return (
        <div className="searchBar">
          <img src={ require('../assets/search.png') } alt='search'/>
        </div>
      );
}

export default SearchBar;