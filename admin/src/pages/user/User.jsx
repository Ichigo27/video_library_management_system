import React, { useContext, useState } from "react";
import "./User.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

export default function User() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state.user;
    console.log(user);
    const { dispatch } = useContext(UserContext);

    const {email, username} = user;

    const [emailInput, setEmailInput] = useState(email);
    const [usernameInput, setUsernameInput] = useState(username);
    const [passwordInput, setPasswordInput] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedState = { email: emailInput, username: usernameInput, password: passwordInput };
        const userId = user._id;
        updateUser({ userId, ...updatedState }, dispatch);
        navigate("/users");
    };

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder={user.username}
                                    className="userUpdateInput"
                                    onChange={(e) => setUsernameInput(e.target.value)}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="userUpdateInput"
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder={user.email}
                                    className="userUpdateInput"
                                    onChange={(e) => setEmailInput(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <button className="userUpdateButton
                            " onClick={handleUpdate}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
