import { useState } from "react"

function DragDrop() {

    const [items, setItems] = useState([
        'item 1',
        'item 2',
        'item 3',
        'item 4'
    ])

    const handleDragStart = (e,index) => {
        e.dataTransfer.setItem('draggedItem', index)
    }

    const handleDrop = (e, dropIndex) => {
        const draggedIndex = e.dataTransfer.getData('draggedItem');
        const updatedItems = [...items];
        const [draggedItem] = updatedItems.splice(draggedIndex, 1);
        updatedItems.splice(dropIndex, 0, draggedItem);
    
        setItems(updatedItems);
      };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    

  return (
    <div className="text-center items-center justify-center flex-col p-10">
        <h1 className="mb-5  text-3xl bg-orange-300 p-3 rounded-md">Drag and drop</h1>
        <div className="p-5 grid grid-cols-2 gap-2 font-semibold">
            {items.map((item, index) => (
                <div
                    className="cursor-pointer p-3 flex border-2 border-black mb-4"
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e,index)}
                    onDrop={(e) => handleDrop(e,index)}
                    onDragOver={handleDragOver}
                >
                    {item}
                </div>
            ))}
        </div>
    </div>
  )
}

export default DragDrop