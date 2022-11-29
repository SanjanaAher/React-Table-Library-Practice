import { format } from "date-fns";
import ColumnFilter from "./Column Filtering/ColumnFilter";
export const COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
    // Filter: ColumnFilter,
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    // Filter: ColumnFilter,
    sticky: "left",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    // Filter: ColumnFilter,
    sticky: "left",
  },
  {
    Header: " Email",
    Footer: "Email",
    accessor: "email",
    // Filter: ColumnFilter,
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    // Filter: ColumnFilter,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    // Filter: ColumnFilter,
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
        Filter: ColumnFilter,
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: " Email",
        Footer: "Email",
        accessor: "email",
        Filter: ColumnFilter,
      },
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
        cell: ({ value }) => {
          return format(new Date(value), "dd/MM/yyyy");
        },
        Filter: ColumnFilter,
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
        Filter: ColumnFilter,
      },
    ],
  },
];
