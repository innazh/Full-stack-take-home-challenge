import { useHistory } from 'react-router-dom'

const TableRow = ({ data, id, type }) => {
    const history = useHistory();

    const handleClick = () => {
        let path = '/' + type
        if (type === "users") path += "/" + data.username
        else if (type === "products") path += "/" + data.id

        history.push(path, { data: data })
    }

    return (
        <tbody>
            {type === "users" ? (
                <tr onClick={handleClick}>
                    <th>{id}</th>
                    <td>{data.username}</td>
                    <td>{data.realname}</td>
                </tr>
            )
                : (
                    <tr onClick={handleClick}>
                        <th>{id}</th>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                    </tr>
                )}
        </tbody>
    )
}
export default TableRow;