import logo from "./logo.svg";
import "./App.css";
import Basic_Table from "./Components/Basic_Table";
import SortingTable from "./Components/Sorting Tble/SortingTable";
import FilterTable from "./Components/Filter Table/FilterTable";
import FilterColumn from "./Components/Column Filtering/FilterColumn";
import PaginationTable from "./Components/Pagination/PaginationTable";
import RowSelection from "./Components/Row Selection/RowSelection";
import ColumnOrder from "./Components/Column Order/ColumnOrder";
import { ColumnHiding } from "./Components/Column Hiding/ColumnHiding";
import { StickyTable } from "./Components/Sticky Table/StickyTable";

function App() {
  return (
    <div className="App">
      <h1>Learning React Table Library</h1>
      <hr />
      <h1>Implementing Basic Table using React Table Library</h1>
      <Basic_Table />
      <hr />
      <br />

      <h1>
        Implementing Sorting in assending and descending order in Table using
        React Table Library
      </h1>
      <SortingTable />
      <hr />
      <br />
      <h1>Implementing Global Filtering for table using React Table library</h1>
      <FilterTable />
      <hr />
      <br />
      <h1>Implementing Column Filtering in Table using React Table Library</h1>
      <FilterColumn />
      <hr />
      <br />
      <h1>Implementing Pagination using React Table Library</h1>
      <PaginationTable />
      <hr />
      <br />
      <h1>Implemented Row Selection using React Table Library</h1>
      <RowSelection />
      <hr />
      <br />
      <h1>Changing column order using react table library</h1>
      <ColumnOrder />
      <hr />
      <br />
      <h1>Hiding column using react table library</h1>
      <ColumnHiding />
      <hr />
      <br />
      <h1>Implementing Sticky Columns in table using styled components</h1>
      <StickyTable />
      <br />
    </div>
  );
}

export default App;
