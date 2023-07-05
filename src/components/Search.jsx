

const Search = ({ formSubmit, handleSearch, search}) => {
  return (
    <>
      <form onSubmit={formSubmit} className="weather-search">
        <div className="search-icon">
          <i className="bx bx-search"></i>
        </div>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          className="weather-input"
          placeholder="Buscar..."
        />
      </form>
    </>
  );
};

export default Search;
