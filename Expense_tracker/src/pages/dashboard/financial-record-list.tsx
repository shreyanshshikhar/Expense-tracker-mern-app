import React from 'react';
import { useTable, Column, CellProps } from 'react-table';
import { useFinancialRecords, FinancialRecord } from '../../context/financial-record-context';
import './financial-record.css';

export const FinancialRecordList: React.FC = () => {
  const { records, deleteRecord, updateRecord } = useFinancialRecords();

  const columns: Column<FinancialRecord>[] = React.useMemo(
    () => [
      {
        Header: 'Description',
        accessor: 'description',
        Cell: ({ value, row, column }: CellProps<FinancialRecord>) => (
          <input
            type="text"
            value={value}
            onChange={(e) => {
              const newValue = e.target.value;
              updateRecord(row.original._id!, {
                ...row.original,
                [column.id]: newValue,
              });
            }}
          />
        ),
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        Cell: ({ value, row, column }: CellProps<FinancialRecord>) => (
          <input
            type="number"
            value={value}
            onChange={(e) => {
              const newValue = parseFloat(e.target.value);
              updateRecord(row.original._id!, {
                ...row.original,
                [column.id]: newValue,
              });
            }}
          />
        ),
      },
      {
        Header: 'Category',
        accessor: 'category',
        Cell: ({ value, row, column }: CellProps<FinancialRecord>) => (
          <input
            type="text"
            value={value}
            onChange={(e) => {
              const newValue = e.target.value;
              updateRecord(row.original._id!, {
                ...row.original,
                [column.id]: newValue,
              });
            }}
          />
        ),
      },
      {
        Header: 'Payment Method',
        accessor: 'paymentMethod',
        Cell: ({ value, row, column }: CellProps<FinancialRecord>) => (
          <input
            type="text"
            value={value}
            onChange={(e) => {
              const newValue = e.target.value;
              updateRecord(row.original._id!, {
                ...row.original,
                [column.id]: newValue,
              });
            }}
          />
        ),
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: ({ value, row, column }: CellProps<FinancialRecord>) => (
          <input
            type="date"
            value={new Date(value).toISOString().split('T')[0]}
            onChange={(e) => {
              const newValue = new Date(e.target.value);
              updateRecord(row.original._id!, {
                ...row.original,
                [column.id]: newValue,
              });
            }}
          />
        ),
      },
      {
        Header: 'Actions',
        Cell: ({ row }: CellProps<FinancialRecord>) => (
          <button
            onClick={() => {
              deleteRecord(row.original._id!);
            }}
          >
            Delete
          </button>
        ),
      },
    ],
    [updateRecord, deleteRecord]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: records,
  });

  return (
    <div className="table-container">
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: 'center' }}>
                No records found
              </td>
            </tr>
          )}
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
