import React, { useState } from "react";
import { Drawer, Tooltip, Divider } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AnalyticsOutlined,
  ArrowOutwardOutlined,
  AssessmentOutlined,
  DescriptionOutlined,
  HomeOutlined,
  NearMeOutlined,
  PaymentOutlined,
  Person2Outlined,
} from "@mui/icons-material";

const iconsdata = [
  { id: 1, title: "Home", icon: <HomeOutlined />, route: "/" },
  { id: 2, title: "Payouts", icon: <ArrowOutwardOutlined />, route: "/payouts" },
  { id: 3, title: "Account Statement", icon: <DescriptionOutlined />, route: "/account-statement" },
  { id: 4, title: "Contacts", icon: <Person2Outlined />, route: "/contacts" },
  { id: 5, title: "Vendor Payments", icon: <AssessmentOutlined />, route: "/vendor-payments" },
  { id: 6, title: "Tax Payments", icon: <AssessmentOutlined />, route: "/tax-payments" },
  { id: 7, title: "Payout Links", icon: <NearMeOutlined />, route: "/payout-links" },
  { id: 8, title: "Payroll", icon: <PaymentOutlined />, route: "/payroll" },
  { id: 9, title: "Reports", icon: <AnalyticsOutlined />, route: "/reports" },
];

const iconStyle = { fontSize: "20px" };

const Navbar = ({ setActivePath }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (value) => () => {
    setIsSideBarOpen(value);
  };

  return (
    <>
      <Drawer
        anchor="left"
        open={isSideBarOpen}
        hideBackdrop={true}
        onClose={toggleDrawer(false)}
      >
        <div className="h-full w-[272px] bg-[#242a4a] flex justify-between flex-col overflow-hidden" onMouseLeave={toggleDrawer(false)}>
          <div>
            <div className="p-4 flex justify-start items-center">
              <img
                className="h-28"
                src="https://static.businessworld.in/article/article_extra_large_image/1606392697_plwYdS_Webp_net_resizeimage_2_.png"
              />
            </div>
            <div className="pt-4 cursor-pointer">
              {iconsdata.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    navigate(item.route);
                    setActivePath(item);
                  }}
                  
                  className={`flex items-center px-4  py-2 mb-2 ${
                    location.pathname === item.route ? "bg-[#383e5a] " : "bg-[#242a4a]"
                  }`}
                >
                  <div
                    className={`mr-4 ${
                      location.pathname === item.route ? "text-[#f5f6f7]" : "text-[#9b9dab]"
                    }`}
                  >
                    {React.cloneElement(item.icon, { style: iconStyle })}
                  </div>
                  <p
                    className={`text-sm ${
                      location.pathname === item.route ? "text-[#f5f6f7]" : "text-[#9b9dab]"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
      <div className="h-full w-12 bg-[#080d29] flex justify-between flex-col" >
        <div>
          <div className="px-3 py-6 flex justify-center items-center ">
            <p
              className="logo-text font-bold capitalize text-[#2A6CED] text-xl cursor-pointer transition-all"            >
              {" "}
              AB
            </p>
          </div>
          <div className="px-2 cursor-pointer transition-all" onMouseEnter={toggleDrawer(true)}>
            {iconsdata.map((item) => (
              <Tooltip title={item.title} placement="right" key={item.id}>
                <div
                  onClick={() => {
                    navigate(item.route);
                    setActivePath(item);
                    
                  }}
                  className={`flex justify-center items-center px-4 py-2 mb-2 ${
                    location.pathname === item.route ? "bg-[#383e5a]" : "bg-[#080d29]"
                  }`}
                >
                  <div
                    className={`${
                      location.pathname === item.route ? "text-[#f5f6f7]" : "text-[#9b9dab]"
                    }`}
                  >
                    {React.cloneElement(item.icon, { style: iconStyle })}
                  </div>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
      <Divider orientation="vertical" />
    </>
  );
};

export default Navbar;
