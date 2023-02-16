import Header from './Header';
import Content from './Content';
import AddItem from './AddItem';
import Footer from './Footer';
import { useState } from 'react';

function App() {

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
      id: 3,
      checked: false,
      item: '250 grams of bacon'
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {
      ...item, checked: !item.checked
    } : item)
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  return (
    <div className="App">
      <Header title="Groceries" />
      <AddItem/>
      <Content
        items={items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
