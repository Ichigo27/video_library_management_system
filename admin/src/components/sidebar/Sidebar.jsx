import { PlayCircleOutline } from "@mui/icons-material";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddToQueueOutlinedIcon from "@mui/icons-material/AddToQueueOutlined";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
      <div className="sidebar">
          <div className="sidebarWrapper">
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Dashboard</h3>
                  <ul className="sidebarList">
                      <Link to="/" className="link">
                          <li className="sidebarListItem active">
                              <LineStyleIcon className="sidebarIcon" />
                              Home
                          </li>
                      </Link>
                      <Link to="/users" className="link">
                          <li className="sidebarListItem ">
                              <PermIdentityIcon className="sidebarIcon" />
                              Users
                          </li>
                      </Link>
                      <Link to="/movies" className="link">
                          <li className="sidebarListItem">
                              <PlayCircleOutline className="sidebarIcon" />
                              Movies
                          </li>
                      </Link>
                      <Link to="/lists" className="link">
                          <li className="sidebarListItem">
                              <ListOutlinedIcon className="sidebarIcon" />
                              Lists
                          </li>
                      </Link>
                      <Link to="/newUser" className="link">
                          <li className="sidebarListItem">
                              <PersonAddIcon className="sidebarIcon" />
                              Add User
                          </li>
                      </Link>
                      <Link to="/newMovie" className="link">
                          <li className="sidebarListItem">
                              <AddToQueueOutlinedIcon className="sidebarIcon" />
                              Add Movie
                          </li>
                      </Link>
                      <Link to="/newList" className="link">
                          <li className="sidebarListItem">
                              <PlaylistAddIcon className="sidebarIcon" />
                              Add Movie List
                          </li>
                      </Link>
                  </ul>
              </div>
          </div>
      </div>
  );
};

export default Sidebar;
