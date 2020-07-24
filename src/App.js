import React, { Component } from 'react';
import './App.css';
import logo from './images/bridgitb-w.svg';
import AddItem from './components/item/AddItem'
import ItemList from './components/itemList/ItemList'
import FilterCategory from './components/itemList/Filter';


class App extends Component {
  render() {
    return (
      <div>
        <header className="app-header">
          <img src={logo} alt="logo" />
          <div className="app-header-title">Bridgit - Frontend code challenge</div>
        </header>
        <section className="app-content">
          <AddItem />
          <FilterCategory />
          <ItemList />
        </section>
      </div>
    );
  }
}
export default App;