import './search-box.styles.css'

const SearchBox = ({onChangeHandler , placeholder ,  className})=> (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      id='search'
      onChange={onChangeHandler}
    />
  </div>
    
  )

 
export default SearchBox;