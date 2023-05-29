import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

function SideBar() {
  return (
    <div className="side-bar body">
      <Sidebar className="color">
        <Menu>
          <MenuItem icon={<MenuOutlinedIcon />} style={{ paddingTop: "20px" }}>
            <h2>Menu</h2>
          </MenuItem>

          <Link to={"/"} className="link-menuitem">
            <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          </Link>

          <Link to={"/tips"} className="link-menuitem">
            <MenuItem icon={<TipsAndUpdatesOutlinedIcon />}>
              Tips Membeli Laptop
            </MenuItem>
          </Link>

          <Link to={"/main"} className="link-menuitem">
            <MenuItem icon={<LaptopOutlinedIcon />}>
              Tentunkan Laptopmu!
            </MenuItem>
          </Link>

          <Link to={"/login-admin"} className="link-menuitem">
            <MenuItem icon={<PersonOutlinedIcon />}>Login Admin</MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;
