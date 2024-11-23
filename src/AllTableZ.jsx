import DataTable from "react-data-table-component";
import { Data } from "./Data";
import { useState } from "react";


const columns = [

    {
        name: "title",
        selector: row => row.title

    },
    {
        name: "director",
        selector: row => row.director

    },
    {
        name: "year",
        selector: row => row.year,
        sortable: true

    },
    {
        name: "action",
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

    const [record, setRecords] = useState(Data)

    const handleChange = (e) =>{

    let query = e.target.value 
    const newRecord = Data.filter( item => item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    setRecords(newRecord)

    }

    return (
        <div className=" mt-10 mb-10 ml-16 mr-16 ">

            <div className=" mb-5 flex justify-between items-center gap-32">
              <p className=" text-2xl text-black ">ITEMLIST</p>
              <input className=" h-[40px] w-full border-[1px] p-2 rounded-md "
               type="search" name="search" onChange={handleChange} placeholder="search" id="" />
            </div>

             <DataTable columns={columns} data={record} customStyles={customStyles} pagination ></DataTable>
            
        </div>
    );
};

export default AllTableZ;