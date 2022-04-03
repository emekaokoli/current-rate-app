import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { InputGroup, Table } from 'react-bootstrap';

function TableData({
  order,
  orderBy,
  handleSelectAllClick,
  handleTableRowsClick,
  handleRequestSort,
  results,
  isSelected,
}) {
  return (
    <Table striped hover size='sm' responsive='sm'>
      <thead>
        <tr>
          <th className='thead' onClick={(e) => handleSelectAllClick(e)}>
            {' '}
          </th>
          <th className='th-sm' onClick={() => handleRequestSort('from')}>
            <span className='pointer'>From</span>
            {orderBy === 'from' && (
              <span className={`${order}`}>
                {order === 'desc' ? '\u2191' : '\u2193'}
              </span>
            )}
          </th>
          <th className='th-sm' onClick={() => handleRequestSort('to')}>
            <span className='pointer'>To</span>
            {orderBy === 'to' && (
              <span className={`${order}`}>
                {order === 'desc' ? '\u2191' : '\u2193'}
              </span>
            )}
          </th>
          <th className='th-sm' onClick={() => handleRequestSort('rate')}>
            <span className='pointer'>Rate</span>
            {orderBy === 'rate' && (
              <span className={`${order}`}>
                {order === 'desc' ? '\u2191' : '\u2193'}
              </span>
            )}
          </th>
          <th className='th-sm' onClick={() => handleRequestSort('min')}>
            <span className='pointer'>Min</span>
            {orderBy === 'min' && (
              <span className={`${order}`}>
                {order === 'desc' ? '\u2191' : '\u2193'}
              </span>
            )}
          </th>
          <th className='th-sm' onClick={() => handleRequestSort('max')}>
            <span className='pointer'>Max</span>
            {orderBy === 'max' && (
              <span className={`${order}`}>
                {order === 'desc' ? '\u2191' : '\u2193'}
              </span>
            )}
          </th>
          <th className='th-sm' onClick={() => handleRequestSort('minConf')}>
            <span className='pointer'>minConf</span>
            {orderBy === 'minConf' && (
              <span className={`${order}`}>
                {order === 'desc' ? '\u2191' : '\u2193'}
              </span>
            )}
          </th>
          <th className='th-sm' onClick={() => handleRequestSort('status')}>
            <span className='pointer'>Status</span>
            {orderBy === 'status' && (
              <span className={`${order}`}>
                {order === 'desc' ? '\u2191' : '\u2193'}
              </span>
            )}
          </th>
          <th className='th-sm' onClick={() => handleRequestSort('createdAt')}>
            <span className='pointer'>CreatedAt</span>
            {orderBy === 'createdAt' && (
              <span className={`${order}`}>
                {order === 'desc' ? '\u2191' : '\u2193'}
              </span>
            )}
          </th>
          <th className='th-sm' onClick={() => handleRequestSort('updatedAt')}>
            <span className='pointer'>UpdatedAt</span>
            {orderBy === 'updatedAt' && (
              <span className={`${order}`}>
                {order === 'desc' ? '\u2191' : '\u2193'}
              </span>
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {
          //! please note I intentionally used index here so as to identify the row,
          //! since id is not available in the api response data.
          results.map(
            (
              {
                to,
                from,
                createdAt,
                max,
                min,
                minConf,
                rate,
                status,
                updatedAt,
              },
              index,
            ) => (
              <tr
                key={min + max + from + to}
              >
                <InputGroup className='mb-3' as='td'>
                  <InputGroup.Checkbox
                    checked={isSelected(index)}
                    onChange={(e) => handleTableRowsClick(e, index)}
                    aria-label='Checkbox'
                    aria-describedby='click to checkbox'
                  />
                </InputGroup>
                <td>{from}</td>
                <td>{to}</td>
                <td>{rate}</td>
                <td>{min}</td>
                <td>{max}</td>
                <td>{minConf}</td>
                <td>{status}</td>
                <td>{dayjs(createdAt).format('MMMM D, YYYY h:mm A')}</td>
                <td>{dayjs(updatedAt).format('MMMM D, YYYY h:mm A')}</td>
              </tr>
            ),
          )
        }
      </tbody>
    </Table>
  );
}
TableData.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
  handleTableRowsClick: PropTypes.func,
  handleSelectAllClick: PropTypes.func,
  handleRequestSort: PropTypes.func,
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
  isSelected: PropTypes.func,
};
TableData.defaultProps = {
  order: 'asc',
  orderBy: '',
  handleSelectAllClick: () => {},
  handleTableRowsClick: () => {},
  handleRequestSort: () => {},
  isSelected: () => {},
};

export default TableData;
