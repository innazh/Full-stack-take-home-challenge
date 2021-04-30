import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { getUsers } from "../services/userService";
import TableRow from "./TableRow"

const Table = ({ type }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        if (type === "users") {
            getUsers().then(users => {
                setData(users)
            })
        }
        else if (type === "products") {
            getProducts().then(prods => {
                setData(prods)
            })
        }
    }, [type])

    return (
        <div className="container">
            <table className="table table-bordered table-hover">
                <thead className="table-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{type === "users" ? 'Username' : 'Product Id'}</th>
                        <th scope="col">{type === "users" ? 'Real Name' : 'Name'}</th>
                    </tr>
                </thead>
                {data.map((d, i) => (
                    <TableRow key={type === "users" ? d.username : d.id} data={d} id={i + 1} type={type} />
                ))}
            </table>
        </div>
    )
}
export default Table;