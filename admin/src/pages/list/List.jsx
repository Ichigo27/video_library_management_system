import React, { useContext, useState } from "react";
import "./List.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateList } from "../../context/listsContext/apiCalls";
import { ListsContext } from "../../context/listsContext/ListContext";

const List = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const list = location.state.list;
    const { dispatch } = useContext(ListsContext);

    const { _id, title, genre, type} = list;

    const [titleInput, setTitleInput] = useState(title);
    const [genreInput, setGenreInput] = useState(genre);
    const [typeInput, setTypeInput] = useState(type);

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedState = { title: titleInput, genre: genreInput, type: typeInput};
        const listId = _id;
        updateList({ listId, ...updatedState }, dispatch);
        navigate("/lists");
    };

    return (
        <div className="list">
            <div className="listTitleContainer">
                <h1 className="listTitle">List</h1>
                <Link to="/newlist">
                    <button className="listAddButton">Create</button>
                </Link>
            </div>
            <div className="listTop">
                <div className="listTopRight">
                    <div className="listInfoTop">
                        <span className="listName">{list.title}</span>
                    </div>
                    <div className="listInfoBottom">
                        <div className="listInfoItem">
                            <span className="listInfoKey">id:</span>
                            <span className="listInfoValue">{list._id}</span>
                        </div>
                        <div className="listInfoItem">
                            <span className="listInfoKey">genre:</span>
                            <span className="listInfoValue">{list.genre}</span>
                        </div>
                        <div className="listInfoItem">
                            <span className="listInfoKey">type:</span>
                            <span className="listInfoValue">{list.type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listBottom">
                <form className="listForm">
                    <div className="listFormLeft">
                        <label>List Title</label>
                        <input
                            type="text"
                            placeholder={list.title}
                            onChange={(e) => {
                                setTitleInput(e.target.value);
                            }}
                        />
                        <label>Type</label>
                        <input
                            type="text"
                            placeholder={list.type}
                            onChange={(e) => {
                                setTypeInput(e.target.value);
                            }}
                        />
                        <label>Genre</label>
                        <input
                            type="text"
                            placeholder={list.genre}
                            onChange={(e) => {
                                setGenreInput(e.target.value);
                            }}
                        />
                    </div>
                    <div className="listFormRight">
                        <button className="listButton" onClick={handleUpdate}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default List;
