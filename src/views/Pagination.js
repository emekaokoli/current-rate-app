import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import '../styles/pagination.scss';

function Pagination({
  results,
  handleFirstPage,
  handlePreviousPage,
  handlePageSizeChange,
  handleNextPage,
  handleLastPage,
  isFirstPage,
  currentPage,
  pageSize,
  isLastPage,
  PaginatedItems,
  totalItems,
}) {
  return (
    <div className='pagination-container'>
      <div className='pagination-controls'>
        <div className='pagination-controls-left'>
          <div className='pagination-controls-left-first'>
            <Button
              type='button'
              variant='secondary'
              className='m-1'
              onClick={handleFirstPage}
              disabled={isFirstPage}
              size='sm'
            >
              First
            </Button>
            <Button
              type='button'
              variant='secondary'
              onClick={handlePreviousPage}
              disabled={isFirstPage}
              size='sm'
            >
              Previous
            </Button>
          </div>
          <div className='pagination-controls-left-middle'>
            <span>
              {'  '}
              {currentPage}
              {'  '}
              of
              {'  '}
              {Math.ceil(results.length / pageSize)}
            </span>
          </div>
          <div className='pagination-controls-left-last'>
            <Button
              type='button'
              variant='secondary'
              className='m-1'
              onClick={handleNextPage}
              disabled={isLastPage}
              size='sm'
            >
              Next
            </Button>
            <Button
              type='button'
              variant='secondary'
              onClick={handleLastPage}
              disabled={isLastPage}
              size='sm'
            >
              Last
            </Button>
          </div>
        </div>
        <div className='pagination-controls-right'>
          <div className='pagination-controls-right-first'>
            <span className='rows-per-page'>
              <span className='rows-span-text'>Page:</span>
              {'   '}
              {'   '}
              <select
                className='form-control form-control-sm'
                onChange={handlePageSizeChange}
                value={pageSize}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
              {'  '}
            </span>
          </div>
          <div className='pagination-controls-right-last'>
            <span>
              {PaginatedItems}
              {'   '}
              of
              {'   '}
              {totalItems}
              {'   '}
              entries
              {'   '}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
Pagination.propTypes = {
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
  handleFirstPage: PropTypes.func.isRequired,
  handlePreviousPage: PropTypes.func.isRequired,
  handlePageSizeChange: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handleLastPage: PropTypes.func.isRequired,
  isFirstPage: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  PaginatedItems: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
};
export default Pagination;
