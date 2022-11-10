import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { deleteUser, getUsers } from "../../context/userContext/apiCalls";

const UserList = () => {
    const { users, dispatch } = useContext(UserContext);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteUser(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 250 },
        {
            field: "user",
            headerName: "User",
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img
                            className="userListImg"
                            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                            alt=""
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 350 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link
                            to={{
                                pathname: "/user/" + params.row._id,
                            }}
                            state={{ user: params.row }}
                        >
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="user">
            <DataGrid
                rows={users}
                disableSelectionOnClick
                columns={columns}
                pageSize={5}
                checkboxSelection
                getRowId={(r) => r._id}
            />
        </div>
    );
};

export default UserList;
