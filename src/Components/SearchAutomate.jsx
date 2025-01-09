import { useState, useEffect } from "react"

function SearchAutomate() {

    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const items = [
            'Apple',
            'Banana',
            'Orange',
            'Grapes',
            'Pineapple',
            'Mango',
          ];
          // Simulate API call with a timeout
          setTimeout(() => setData(items), 1000);
        };
        fetchData();
      }, []);

      useEffect(() => {
        const handler = setTimeout(() => {
          const result = data.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredData(result);
        }, 300); // 300ms debounce delay
    
        return () => clearTimeout(handler);
      }, [searchTerm, data]);
    
      const handleChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const highlightText = (text, highlight) => {
        if (!highlight) return text;
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} style={{ backgroundColor: 'yellow' }}>
              {part}
            </span>
          ) : (
            part
          )
        );
      };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li key={index}>{highlightText(item, searchTerm)}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  )
}

export default SearchAutomate