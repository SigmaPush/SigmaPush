import React, { Component } from 'react';

import Item from './Item';

class ItemList extends Component {
  render() {
    const { activeItems } = this.props;
    const items = activeItems.map((article) => {
      return <Item
          article={article}
          key={article.id}
        />
    });

    return (
      <div>
        <ul className="list-group border border-warning">
          {items}
        </ul>
      </div>
    );
  }
}

export default ItemList;
