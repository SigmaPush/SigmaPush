import React, { Component } from 'react';

import ItemList from './ItemList';
import Pagination from './Pagination';

class ItemPagination extends Component {
  render() {
    const { activeItems } = this.props;
    const { filteredItems, activePage, itemsPerPage, pageNumberBound } = this.props;
    const { onClick } = this.props;

    return (
      <div>
        <ItemList activeItems={activeItems} />
        <Pagination
          filteredItems={filteredItems}
          activePage={activePage}
          itemsPerPage={itemsPerPage}
          pageNumberBound={pageNumberBound}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default ItemPagination;
