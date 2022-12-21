import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import "./styles.css";

interface Props {
    options: any;
    data: any;
    title: string;
}



const renderTable = (item:any, data:any) => {
  const className:any = [];
  let itemSelected = data[item];

    return <span className={className.join(" ")}>{String(itemSelected)}</span>;
  
};

const TableCustom = ({ options, data, title}:Props) => {
  return (
    <div className="table_container">
      <div
        style={{
          margin: "30px 0 20px 0",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <h1 className="h1Tittle"> {title}</h1>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              {options &&
                options.map((item:any) => (
                  <TableCell key={item.id} align="center">
                    {item}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row:any) => (
              <TableRow key={row.id}>
                {options.map((item:any) => (
                  <TableCell align="center">{renderTable(item, row)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableCustom;
