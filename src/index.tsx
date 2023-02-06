import React, {useEffect, useState} from 'react';
import './style.css';
import { TableData, TableHeader } from './index.types';

/**
 * Configuration
 */

/**
 * Main component
 */
const TableComponent: React.FC<TableData> = ({headers, data, limit, sortKey, currentPage, onPageChange, totalResults, totalPages, searchKey}) => {
    const [tableEntries, setTableEntries]: any = useState(null);
    const [showPagination, setShowPagination] = useState(true);

    const applyFilter = (sortKey: string) => {
        const sortedData = [...tableEntries].sort((a: any, b: any) => {
            return a[sortKey] > b[sortKey] ? 1 : -1;
        })
        setTableEntries([...sortedData]);
    }
    const applySearch = (searchKey: string) => {
        const filteredData = [...data].filter((item: any) => {
            let result = false;

            // @ts-ignore
            Object.keys(item).forEach((key: any) => {
                if (item[key].toString().toLowerCase().includes(searchKey.toLowerCase())) {
                    result = true;
                    return result;
                }
            })

            return result;
        })

        console.log(filteredData)
        setTableEntries([...filteredData]);
    }
    const handleFilterClick = (value: any) => {
        applyFilter(value);
    }

    const loadNextPage = () => {
        if (onPageChange && currentPage) {
            onPageChange(currentPage + 1);
        }
    }

    const loadPrevPage = () => {
        if (onPageChange && currentPage) {
            onPageChange(currentPage - 1);
        }
    }

    const handlePageChange = (e: any) => {
        const {value} = e.target;
        if (onPageChange) {
            onPageChange(value);
        }
    }

    useEffect(() => {
        setTableEntries(data);

        if (searchKey && searchKey.length > 0) {
            applySearch(searchKey);
        }

        if(limit && totalResults) {
            setShowPagination(limit <= totalResults)
        }

    }, [data, limit, sortKey, currentPage, totalResults, totalPages, searchKey]);

    return (
        <div className={"table-component"}>
            <table className="table-component__table">
                <thead className="table-component__headers">
                <tr>
                    {
                        headers.map((header, index) => (
                            <th key={`table-item-${index + 1}`} className="table-component__header">
                                <span>{header.name}</span>
                                {
                                    header.sortable &&
                                    <button className={"table-component-filter"} onClick={() => {
                                        handleFilterClick(header.key)}
                                    }>
                                        <i className="fa-solid fa-sort"></i>
                                    </button>
                                }
                            </th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    tableEntries && tableEntries.map((item: any, index: number) => (
                        <TableRow key={`table-row-${index + 1}`} data={item} headers={headers}/>
                    ))
                }
                </tbody>
            </table>
            {
                showPagination &&
                <Pagination
                    totalPages={totalPages}
                    loadPrevPage={loadPrevPage}
                    loadNextPage={loadNextPage}
                    handlePageChange={handlePageChange}
                    currentPage={currentPage}
                />
            }
        </div>
    );
};

/**
 * Local functions
 */


/**
 * Local components
 */
const TableRow = ({data, headers}: any) => {
    return (
        <tr className="table-component__row">
            {
                headers.map((header: TableHeader, index: number) => (
                    <td key={`table-cell${index + 1}`} className="table-component__cell">
                        {data[header.key]}
                    </td>
                ))

            }
        </tr>
    );
};


const Pagination: ({totalPages, loadPrevPage, loadNextPage, handlePageChange, currentPage}: { totalPages: any; loadPrevPage: any; loadNextPage: any; handlePageChange: any, currentPage: any }) => JSX.Element = ({totalPages, loadPrevPage, loadNextPage, handlePageChange, currentPage}) => {
    return (
        <div className={"table-component__pagination pagination"}>
            <button className={"pagination__prev"} onClick={loadPrevPage} disabled={currentPage - 1 <= 0}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="pagination__pages">
                {
                    [...Array(totalPages)].map((item, index) => (
                        <button
                            key={`pagination-item-${item}-${index + 1}`}
                            className={`pagination__page ${currentPage === index + 1 ? '--active': ''}`}
                            value={index + 1} onClick={handlePageChange}>
                            {index + 1}
                        </button>
                    ))
                }
            </div>
            <button className={"pagination__next"} onClick={loadNextPage} disabled={currentPage >= totalPages}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    )
}

/**
 * Init and export
 */

export default TableComponent;
