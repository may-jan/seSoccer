import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'
import { useState } from 'react'
import { tableData } from './tableData'
import { RankContainer } from './style'

function Rank() {
  const [data] = useState([...tableData])

  const columnHelper = createColumnHelper()
  const columns = [
    columnHelper.accessor('name', {
      header: '이름',
      size: '20%',
    }),
    columnHelper.accessor('id', {
      header: 'ID',
      size: '10%',
      enableSorting: false,
    }),
    columnHelper.accessor('totalPoints', {
      header: '총 포인트',
      size: '20%',
    }),
    columnHelper.accessor('howMany', {
      header: '맞춘 횟수',
      size: '20%',
    }),
    columnHelper.accessor('rank', {
      header: '순위',
      size: '20%',
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <RankContainer>
      <table
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
        }}
      >
        <thead
          style={{
            backgroundColor: '#891638',
            color: '#fff',
            height: '30px',
            fontSize: '1.6rem',
          }}
        >
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  style={{
                    cursor: header.column.getCanSort() ? 'pointer' : 'default',
                    padding: '5px 0 5px 0',
                  }}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  {
                    {
                      asc: <FaSortUp />,
                      desc: <FaSortDown />,
                    }[header.column.getIsSorted()]
                  }
                  {header.column.getCanSort() &&
                  !header.column.getIsSorted() ? (
                    <FaSort />
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody style={{ textAlign: 'center', fontSize: '1.4rem' }}>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} style={{ paddingTop: '20px' }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </RankContainer>
  )
}

export default Rank
