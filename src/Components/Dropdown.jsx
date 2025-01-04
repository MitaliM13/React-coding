import React, { useRef, useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const menuRef = useRef(null);

  const options = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Kiwi',
    'Mango',
    'Orange',
    'Peach',
    'Pear',
    'Pineapple',
    'Strawberry',
    'Watermelon',
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setCurrentIndex((prev) => (prev + 1) % options.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setCurrentIndex((prev) => (prev - 1 + options.length) % options.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (currentIndex >= 0) {
          console.log(`Selected: ${options[currentIndex]}`);
          setIsOpen(false);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleItemClicked = (index) => {
    console.log(`Selected: ${options[index]}`);
    setIsOpen(false);
  };

  return (
    <div
      className="relative flex flex-col items-center p-4 bg-slate-600 text-white font-bold"
      onKeyDown={handleKeyDown}
    >
      <button
        className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={toggleDropdown}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        Select Fruit
      </button>
      {isOpen && (
        <ul
          className="absolute top-16 text-center mt-2 w-52 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden z-10"
          role="menu"
          ref={menuRef}
        >
          {options.map((item, index) => (
            <li
              className={`px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white ${
                currentIndex === index ? 'bg-blue-500 text-white' : ''
              }`}
              key={index}
              role="menuitem"
              tabIndex={currentIndex === index ? 0 : -1}
              onMouseEnter={() => setCurrentIndex(index)}
              onClick={() => handleItemClicked(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
