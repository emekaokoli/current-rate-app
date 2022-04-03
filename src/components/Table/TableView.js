import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableData from './TableData';
import Pagination from '../../views/Pagination';

function TableView({ results }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('from');
  const [selected, setSelected] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * pageSize;
  const indexOfFirstPost = indexOfLastPost - pageSize;
  const slicedPage = results.slice(indexOfFirstPost, indexOfLastPost);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === Math.ceil(results.length / pageSize);
  const totalItems = results.length;
  const PaginatedItems = slicedPage.length;

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleFirstPage = () => {
    setCurrentPage(1);
  };
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleLastPage = () => {
    setCurrentPage(Math.ceil(results.length / pageSize));
  };
  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value, 10));
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = results.map((data, index) => index);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleTableRowsClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };
  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <>
      <TableData
        order={order}
        orderBy={orderBy}
        handleSelectAllClick={handleSelectAllClick}
        handleTableRowsClick={handleTableRowsClick}
        handleRequestSort={handleRequestSort}
        results={slicedPage}
        isSelected={isSelected}
      />
      <Pagination
        results={results}
        handleFirstPage={handleFirstPage}
        handlePreviousPage={handlePreviousPage}
        handlePageSizeChange={handlePageSizeChange}
        handleNextPage={handleNextPage}
        handleLastPage={handleLastPage}
        isFirstPage={isFirstPage}
        currentPage={currentPage}
        pageSize={pageSize}
        isLastPage={isLastPage}
        PaginatedItems={PaginatedItems}
        totalItems={totalItems}
      />
    </>
  );
}

TableView.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        from: PropTypes.string,
        to: PropTypes.string,
        rate: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        minConf: PropTypes.number,
        status: PropTypes.string,
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
      }),
    ]),
  ).isRequired,
};
export default TableView;
