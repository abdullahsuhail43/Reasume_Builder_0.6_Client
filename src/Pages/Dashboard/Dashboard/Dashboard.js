import React from "react";
import { FcSelfServiceKiosk } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import { RiAdminLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import "../../../Css/CarrerCounceling.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div class="drawer drawer-mobile md:px-12 ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content no-scroll ">
          {/* <!-- Page content here --> */}

          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side md:shadow-2xl mr-6">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className=" hover:text-white rounded-md">
              <NavLink
                className="hover:bg-primary text-black poppins-r uppercase pr-2 mx-2"
                to="/dashboard/all-user"
              >
                <HiUserGroup className="-mr-1 text-[20px]" />
                All-USER
              </NavLink>
            </li>
            <li className=" hover:text-white rounded-md mt-2">
              <NavLink
                className="hover:bg-primary text-black poppins-r uppercase pr-2 mx-2"
                to="/dashboard/all-admin"
              >
                <RiAdminLine className="-mr-1 text-[20px]" />
                ADMIN
              </NavLink>
            </li>
            <li className=" hover:text-white rounded-md mt-2">
              <NavLink
                className="hover:bg-primary text-black poppins-r uppercase pr-2 mx-2"
                to="/dashboard/booking-service"
              >
                <FcSelfServiceKiosk className="-mr-1 text-[20px]" />
                BOOKING SERVICE
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
