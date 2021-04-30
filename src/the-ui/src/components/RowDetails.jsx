import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router";

const RowDetails = ({ type }) => {
    let { id } = useParams();
    const [list, setList] = useState([])
    const location = useLocation()

    useEffect(() => {
        //TODO: get data
        //1. Get product name from products join products_users where username=username;
        //2. Get username from users join products_users where id=id
    })

    return (
        <div className="container">
            {type === "users" ?
                (<div>
                    <h4>User {id} is using the following products:</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>) :
                (<div><h4>Product {location.state.data.name} is used by the following users:</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul></div>)
            }
        </div>
    )
}
export default RowDetails