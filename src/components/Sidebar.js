import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [style, setStyle] = useState("navbar-nav dibooking-orange sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style === "navbar-nav dibooking-orange sidebar sidebar-dark accordion") {
            setStyle("navbar-nav dibooking-orange sidebar sidebar-dark accordion toggled");
        } else {
            setStyle("navbar-nav dibooking-orange sidebar sidebar-dark accordion");
        }
    }

    return (
        <div>
            {/* <!-- Sidebar --> */}
            <ul className={style} id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Dibooking</div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-clipboard-list"></i>
                        <span>Kelola Lapangan</span></Link>
                </li>

                {/* <!-- Nav Item - Tables --> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/konfirmasi">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Konfirmasi Pemesanan</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/detail">
                        <i className="fas fa-user-circle"></i>
                        <span>Detail Akun</span></Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="tables.html">
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Keluar</span></a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                </div>

            </ul>
            {/* <!-- End of Sidebar --> */}

        </div>
    )
}

export default Sidebar
