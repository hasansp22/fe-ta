import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function SideBar() {
  const logout = () => {
    localStorage.removeItem("accessToken");
  };
  //   const { collapseSidebar } = useProSidebar();
  return (
    <div className="side-bar body">
      <Sidebar className="color">
        <Menu>
          <Link to={"/kategori-admin"} className="link-menuitem">
            <MenuItem
              icon={<MenuOutlinedIcon />}
              // onClick={() => {
              //   collapseSidebar();
              // }}
              style={{ paddingTop: "20px" }}
            >
              <h2>Admin</h2>
            </MenuItem>
          </Link>

          <Link to={"/kategori-admin"} className="link-menuitem">
            <MenuItem icon={<CategoryOutlinedIcon />}>Fungsi Laptop</MenuItem>
          </Link>

          <Link to={"/kriteria-admin"} className="link-menuitem">
            <MenuItem icon={<CategoryOutlinedIcon />}>Kriteria Laptop</MenuItem>
          </Link>

          <Link to={"/"} className="link-menuitem" onClick={logout}>
            <MenuItem icon={<LogoutOutlinedIcon />}>Log Out</MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;
