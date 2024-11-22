import DataTable from "react-data-table-component";
import { Data } from "./Data";


const columns = [

    {
        name: "TITLE",
        selector: row => row.title

    },
    {
        name: "DIRECTOR",
        selector: row => row.director

    },
    {
        name: "YEAR",
        selector: row => row.year

    },
    {
        name: "ACTION",
        selector: row => row.action

    }

]

const customStyles = {

   headCells: {
      style: {
         backgroundColor: "black",
         color: "white",
         fontsize: "15px",
         fontWeight:"bolder"
      }
   }
   

}



const AllTableZ = () => {
    return (
        <div className=" mt-10 mb-10 ml-16 mr-16 ">

             <DataTable columns={columns} data={Data} customStyles={customStyles} ></DataTable>
            
        </div>
    );
};

export default AllTableZ;