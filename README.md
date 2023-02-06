[![NPM](https://img.shields.io/npm/v/supa-table.svg)](https://www.npmjs.com/package/supa-table)

# TableComponent
A table component for React applications. It allows for custom header and data configuration and supports sorting, searching, and pagination.

**Contains:**
- Children
- Title
- Close button

## Installation
To install:
```
npm install supa-modal
```

## Usage

To use the component, import it into your React code and pass in the necessary props:

```js
import TableComponent from 'supa-table';

function MyComponent() {
    const headers = [
        {name: 'Name', key: 'name', sortable: true},
        {name: 'Age', key: 'age', sortable: true},
        {name: 'Occupation', key: 'occupation', sortable: true}
    ];
    const data = [
        {name: 'John Doe', age: 30, occupation: 'Developer'},
        {name: 'Jane Doe', age: 28, occupation: 'Designer'},
        {name: 'Bob Smith', age: 32, occupation: 'Manager'}
    ];
    const limit = 10;
    const sortKey = '';
    const currentPage = 1;
    const onPageChange = (page: number) => {
        console.log(page);
    };
    const totalResults = data.length;
    const totalPages = Math.ceil(totalResults / limit);
    const searchKey = '';

    return (
        <TableComponent
            headers={headers}
            data={data}
            limit={limit}
            sortKey={sortKey}
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalResults={totalResults}
            totalPages={totalPages}
            searchKey={searchKey}
        />
    );
}
```

## Props
- The headers prop is an array of objects that define the table headers, with each object having a name, key, and sortable property.
- The data prop is an array of objects that define the table data.
- The limit prop sets the number of results to be shown per page, and the sortKey prop sets the key to sort the data by.
- The currentPage prop sets the current page number, and the onPageChange prop is a function that is called when the page is changed.
- The totalResults prop sets the total number of results, and the totalPages prop sets the total number of pages.
- The searchKey prop allows for searching the table data and will automatically filter the table content.
- The onPaginate prop is a function that is called when the pagination is changed.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
