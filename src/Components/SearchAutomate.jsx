import { useState } from "react"

function SearchAutomate() {

    const list = [
        "apple",
        "mango",
        "banana",
        "kiwi",
        "pear",
        "grapes",
        "oranges"
    ]

    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filterSearch = list.filter((item) => item.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
        <input 
            type="text" 
            placeholder="search..."
            value={search}
            onChange={handleChange}
        />
        <ul>
            {filterSearch.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default SearchAutomate