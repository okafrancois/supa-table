import React, {useEffect, useState} from 'react';
import './style.css';
import {filterState, TableData, TableHeader } from './index.types';
import PropTypes from 'prop-types';

/**
 * Configuration
 */


/**
 * Main component
 */
const TableComponent: React.FC<TableData> = ({headers, data, limit, sortKey, currentPage, onPageChange, onLimitChange, totalResults, totalPages}) => {
    const [tableEntries, setTableEntries]: any = useState<[]>([]);
    const [showPagination, setShowPagination] = useState<boolean>(true);
    const [search, setSearch] = useState<string>('');
    const [activeFilter, setActiveFilter] = useState<filterState>({
        key: null,
        direction: null
    });

    const applyFilter = (data: any[]) => {
        return [...data].sort((a: object, b: object) => {
            if (activeFilter.direction === 'dsc') {
                return a[activeFilter.key as string] > b[activeFilter.key as string] ? -1 : 1;
            } else {
                return a[activeFilter.key as string] > b[activeFilter.key as string] ? 1 : -1;
            }
        })
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

        setTableEntries([...filteredData]);
    }
    const handleFilterClick = (value: any) => {
        setActiveFilter({
            key: value,
            direction: activeFilter.direction === 'asc' ? 'dsc' : 'asc'
        })
    }

    const handleLimitChange = function(e: any) {
        const {value} = e.target;
        onLimitChange(parseInt(value));
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

    const handleSubmit = function(e: any) {
        e.preventDefault();
    }
    const handleSearch = function(e: any) {
        setSearch(e.target.value)
    }


    useEffect(() => {
        const filteredData = activeFilter.key ? applyFilter(data) : data;

        setTableEntries(filteredData);

        if (search && search.length > 0) {
            applySearch(search);
        }

        if(limit && totalResults) {
            setShowPagination(limit <= totalResults)
        }

    }, [data, limit, sortKey, currentPage, totalResults, totalPages, search, activeFilter]);

    return (
        <div className={"table-component"}>
            <form onSubmit={handleSubmit} className={"table-component-form"}>
                <div className="table-component-form__headings">
                    <label className={"table-component-form__field search"}>
                        <input
                            type="search"
                            className={"input"}
                            placeholder={"Search"}
                            value={search}
                            onChange={handleSearch}
                        />
                    </label>
                    <label className={"table-component-form__field entries"}>
                        <span>Entries to show</span>
                        <div className="custom-select">
                            <select className={"input"} name={"limit"} value={limit} onChange={handleLimitChange}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                    </label>
                </div>
            </form>
            <table className="table-component__table">
                <thead className="table-component__headers">
                <tr>
                    {
                        headers.map((header, index) => (
                            <th key={`table-item-${index + 1}`} className="table-component__header">
                                <div className={`table-component__header-content ${header.key === activeFilter.key ? '--active ' + activeFilter.direction : ''}`}>
                                    <span>{header.name}</span>
                                    {
                                        header.sortable &&
                                        <button className={"table-component-filter"} onClick={() => {
                                            handleFilterClick(header.key)}
                                        }/>
                                    }
                                </div>
                            </th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    tableEntries && tableEntries.map((item: any, index: number) => (
                        <tr className="table-component__row" key={`${index}-content-row`}>
                            {
                                headers.map((header: TableHeader, index: number) => (
                                    <td key={`table-cell${index + 1}`} className={`table-component__cell`}>
                                        <div className="table-component__cell-content">
                                            {item[header.key]}
                                        </div>
                                    </td>
                                ))

                            }
                        </tr>
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

const Pagination: ({totalPages, loadPrevPage, loadNextPage, handlePageChange, currentPage}: { totalPages: any; loadPrevPage: any; loadNextPage: any; handlePageChange: any, currentPage: any }) => JSX.Element = ({totalPages, loadPrevPage, loadNextPage, handlePageChange, currentPage}) => {
    return (
        <div className={"table-component__pagination pagination"}>
            <button className={"pagination__prev"} onClick={loadPrevPage} disabled={currentPage - 1 <= 0}>
                {`<`}
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
                {`>`}
            </button>
        </div>
    )
}

/**
 * Typings
 */

TableComponent.propTypes = {
    // @ts-ignore
    headers: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        sortable: PropTypes.bool.isRequired,
    })).isRequired,
    data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    limit: PropTypes.number,
    sortKey: PropTypes.string,
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
    onLimitChange: PropTypes.func.isRequired,
    totalResults: PropTypes.number,
    totalPages: PropTypes.number,
    searchKey: PropTypes.string,
};

/**
 * Init and export
 */


export default TableComponent;
