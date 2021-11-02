import React, { useMemo } from 'react';
import { useTable, usePagination, useRowSelect } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './table.css';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from '@mui/material';
import { Form } from 'react-bootstrap';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Checkbox } from './Checkbox';

function PaginationTable() {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

  const { 
      getTableProps, 
      getTableBodyProps, 
      headerGroups, 
      page, 
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageOptions,
      state,
      gotoPage,
      pageCount,
      setPageSize,

      prepareRow,
      selectedFlatRows,
    } = useTable (
        {
            columns,
            data,
        }, 
        usePagination,
        useRowSelect, 
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return [
                    {
                        id: 'selection',
                        Header: ({ getToggleAllRowsSelectedProps }) => (
                            <Checkbox {...getToggleAllRowsSelectedProps()} />
                        ),
                        cell: ({ row }) => (
                            <Checkbox {...row.getToggleRowSelectedProps}/>
                        ) 
                    },
                    ...columns
                ]   
            })
        }
    )
    
    const { pageIndex, pageSize } = state

  return (
      <>
    <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getFooterGroupProps()}>

                {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
                ))}

        </thead>
        <tbody {...getTableBodyProps()}>
        {
            page.map(row => {
                prepareRow(row)
                return (
            <tr {...row.getRowProps()}>
            {
                row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })
            }

            </tr>
                )
            })}

        </tbody>
    </table>
    <div className="pagination-section">
    <div className="pagination-item-1">
        <div className="flex-1">
            Page {''}
            <strong>
                { pageIndex + 1 } of { pageOptions.length} (113 items)
            </strong>

                <ButtonGroup className="ml-2" aria-label="First group">
                    <button className="back-page" variant="outline-primary" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                    <button variant="outline-primary" onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                        <Button className="apply-1" variant="outline-primary">1</Button> 
                        <Button className="apply" variant="outline-primary">2</Button> 
                        <Button className="apply" variant="outline-primary">3</Button> 
                        <Button className="apply" variant="outline-primary">4</Button>
                    <button variant="outline-primary" onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                    <button variant="outline-primary" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>   
                </ButtonGroup>

        </div>
        
        <div className="flex-2">

        </div> 
        <div className="flex-3">
            <p>Page No:{' '} 
            <input type="number" defaultValue={pageIndex + 1}
            onChange={e => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
            }}
            style={{width: '50px'}} />
            <button className="btn btn-goto">Goto</button></p>
        </div> 
    </div>
    <div className="pagination-item-2">
        Page Size: 
        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>

            {
                [10, 25, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                    </option>
                ))}
        </select>
            <ButtonGroup className="ml-2" aria-label="First group">
                <Button className="apply">Apply</Button> 
                <Button className="apply">Show/Hide Fields</Button> 
            <Form.Check className="apply"label="Horizontal Scroll" />
            <Form.Check className="apply"label="Row Filter"/>
            </ButtonGroup> 
    </div>
    <div>

    </div><hr></hr>
    <database />
    <FilterAltIcon /><a className="footer-part" href="#">Create Filter</a>
    </div>
    </>
  );
}

export default PaginationTable;
