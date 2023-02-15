import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: '500 grams of pasta'
        },
        {
            id: 2,
            checked: false,
            item: 'tomato sauce'
        },
        {
            id: 1,
            checked: false,
            item: '250 grams of bacon'
        }
    ]);

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <FaTrashAlt 
                            role="button" 
                            tabIndex="0" 
                        />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Content;