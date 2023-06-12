// /* eslint-disable react/jsx-no-undef */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from 'react';
// import './Dashboard.css';

// function Dashboard() {
//     const [style, setStyle] = useState("navbar-nav dibooking-orange sidebar sidebar-dark accordion");

//     const changeStyle = () => {
//         if (style === "navbar-nav dibooking-orange sidebar sidebar-dark accordion") {
//             setStyle("navbar-nav dibooking-orange sidebar sidebar-dark accordion toggled");
//         } else {
//             setStyle("navbar-nav dibooking-orange sidebar sidebar-dark accordion");
//         }
//     }

//     const hamburgerButton = () => {
//         if (style === "navbar-nav dibooking-orange sidebar sidebar-dark accordion") {
//             setStyle("navbar-nav dibooking-orange sidebar sidebar-dark accordion hamburger");
//         } else {
//             setStyle("navbar-nav dibooking-orange sidebar sidebar-dark accordion");
//         }
//     }
//     return (
//         <div>
//             <body id="page-top">

//                 {/* <!-- Page Wrapper --> */}
//                 <div id="wrapper">

//                     {/* <!-- Sidebar --> */}
//                     <ul className={style} id="accordionSidebar">

//                         {/* <!-- Sidebar - Brand --> */}
//                         <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
//                             <div className="sidebar-brand-icon rotate-n-15">
//                                 <i className="fas fa-laugh-wink"></i>
//                             </div>
//                             <div className="sidebar-brand-text mx-3">Dibooking</div>
//                         </a>

//                         {/* <!-- Divider --> */}
//                         <hr className="sidebar-divider my-0" />

//                         {/* <!-- Nav Item - Dashboard --> */}
//                         <li className="nav-item active">
//                             <a className="nav-link" href="index.html">
//                                 <i className="fas fa-clipboard-list"></i>
//                                 <span>Kelola Lapangan</span></a>
//                         </li>

//                         {/* <!-- Nav Item - Tables --> */}
//                         <li className="nav-item">
//                             <a className="nav-link" href="tables.html">
//                                 <i className="fas fa-shopping-cart"></i>
//                                 <span>Konfirmasi Pemesanan</span></a>
//                         </li>

//                         <li className="nav-item">
//                             <a className="nav-link" href="tables.html">
//                                 <i className="fas fa-user-circle"></i>
//                                 <span>Detail Akun</span></a>
//                         </li>

//                         <li className="nav-item">
//                             <a className="nav-link" href="tables.html">
//                                 <i className="fas fa-sign-out-alt"></i>
//                                 <span>Keluar</span></a>
//                         </li>

//                         {/* <!-- Divider --> */}
//                         <hr className="sidebar-divider d-none d-md-block" />

//                         {/* <!-- Sidebar Toggler (Sidebar) --> */}
//                         <div className="text-center d-none d-md-inline">
//                             <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
//                         </div>

//                     </ul>
//                     {/* <!-- End of Sidebar --> */}

//                     {/* <!-- Content Wrapper --> */}
//                     <div id="content-wrapper" className="d-flex flex-column">

//                         {/* <!-- Main Content --> */}
//                         <div id="content">

//                             {/* <!-- Topbar --> */}
//                             <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

//                                 {/* <!-- Sidebar Toggle (Topbar) --> */}
//                                 <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={hamburgerButton}>
//                                     <i className="fa fa-bars icon-color"></i>
//                                 </button>

//                                 {/* <!-- Topbar Navbar --> */}
//                                 <ul className="navbar-nav ml-auto">

//                                     {/* <!-- Nav Item - User Information --> */}
//                                     <li className="nav-item dropdown no-arrow">
//                                         <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
//                                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                             <span className="mr-2 d-none d-lg-inline text-gray-600 small">Jakselmania FC</span>
//                                             <img className="img-profile rounded-circle"
//                                                 src="img/undraw_profile.svg" />
//                                         </a>
//                                         {/* <!-- Dropdown - User Information --> */}
//                                         <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
//                                             aria-labelledby="userDropdown">
//                                             <a className="dropdown-item" href="#">
//                                                 <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
//                                                 Profile
//                                             </a>
//                                             <a className="dropdown-item" href="#">
//                                                 <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
//                                                 Settings
//                                             </a>
//                                             <a className="dropdown-item" href="#">
//                                                 <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
//                                                 Activity Log
//                                             </a>
//                                             <div className="dropdown-divider"></div>
//                                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
//                                                 <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//                                                 Logout
//                                             </a>
//                                         </div>
//                                     </li>

//                                 </ul>

//                             </nav>
//                             {/* <!-- End of Topbar --> */}

//                             {/* <!-- Begin Page Content --> */}
//                             <div className="container-fluid">

//                                 {/* <!-- Page Heading --> */}
//                                 <div className="d-sm-flex align-items-center justify-content-between mb-4">
//                                     <h1 className="h3 mb-0 text-gray-800">Kelola Lapangan</h1>
//                                     <a href="#" className="d-sm-inline-block btn btn-md btn-outline-dark shadow-sm"><i className="fas fa-plus"></i> Tambah Lapangan</a>
//                                 </div>

//                                 <table class="table table-striped">
//                                     <thead>
//                                         <tr className="dibooking-orange text-white">
//                                             <th scope="col">No.</th>
//                                             <th scope="col">Nama Lapangan</th>
//                                             <th scope="col">Kategori Lapangan</th>
//                                             <th scope="col">Lokasi</th>
//                                             <th scope="col">Harga</th>
//                                             <th scope="col">Detail</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr className="text-dark">
//                                             <th scope="row">1</th>
//                                             <td>Lapangan Futsal Jakselmania</td>
//                                             <td>Futsal</td>
//                                             <td>Jakarta Selatan</td>
//                                             <td>Rp 75.000</td>
//                                             <td><button className="btn btn-sm text-white button-detail">Detail</button></td>
//                                         </tr>
//                                         <tr className="text-dark">
//                                             <th scope="row">2</th>
//                                             <td>Lapangan Futsal Jakselmania</td>
//                                             <td>Futsal</td>
//                                             <td>Jakarta Selatan</td>
//                                             <td>Rp 75.000</td>
//                                             <td><button className="btn btn-sm text-white button-detail">Detail</button></td>
//                                         </tr>
//                                         <tr className="text-dark">
//                                             <th scope="row">3</th>
//                                             <td>Lapangan Futsal Jakselmania</td>
//                                             <td>Futsal</td>
//                                             <td>Jakarta Selatan</td>
//                                             <td>Rp 75.000</td>
//                                             <td><button className="btn btn-sm text-white button-detail">Detail</button></td>
//                                         </tr>
//                                         <tr className="text-dark">
//                                             <th scope="row">4</th>
//                                             <td>Lapangan Futsal Jakselmania</td>
//                                             <td>Futsal</td>
//                                             <td>Jakarta Selatan</td>
//                                             <td>Rp 75.000</td>
//                                             <td><button className="btn btn-sm text-white button-detail">Detail</button></td>
//                                         </tr>
//                                         <tr className="text-dark">
//                                             <th scope="row">5</th>
//                                             <td>Lapangan Futsal Jakselmania</td>
//                                             <td>Futsal</td>
//                                             <td>Jakarta Selatan</td>
//                                             <td>Rp 75.000</td>
//                                             <td><button className="btn btn-sm text-white button-detail">Detail</button></td>
//                                         </tr>
//                                         <tr className="text-dark">
//                                             <th scope="row">6</th>
//                                             <td>Lapangan Futsal Jakselmania</td>
//                                             <td>Futsal</td>
//                                             <td>Jakarta Selatan</td>
//                                             <td>Rp 75.000</td>
//                                             <td><button className="btn btn-sm text-white button-detail">Detail</button></td>
//                                         </tr>
//                                         <tr className="text-dark">
//                                             <th scope="row">7</th>
//                                             <td>Lapangan Futsal Jakselmania</td>
//                                             <td>Futsal</td>
//                                             <td>Jakarta Selatan</td>
//                                             <td>Rp 75.000</td>
//                                             <td><button className="btn btn-sm text-white button-detail">Detail</button></td>
//                                         </tr>
//                                         <tr className="text-dark">
//                                             <th scope="row">8</th>
//                                             <td>Lapangan Futsal Jakselmania</td>
//                                             <td>Futsal</td>
//                                             <td>Jakarta Selatan</td>
//                                             <td>Rp 75.000</td>
//                                             <td><button className="btn btn-sm text-white button-detail">Detail</button></td>
//                                         </tr>
//                                         <tr className="text-dark">
//                                             <th scope="row">9</th>
//                                             <td>Lapangan Futsal Jakselmania</td>
//                                             <td>Futsal</td>
//                                             <td>Jakarta Selatan</td>
//                                             <td>Rp 75.000</td>
//                                             <td><button className="btn btn-sm text-white button-detail">Detail</button></td>
//                                         </tr>
//                                         <tr className="text-dark">
//                                             <th scope="row">10</th>
//                                             <td>Lapangan Futsal Jakselmania</td>
//                                             <td>Futsal</td>
//                                             <td>Jakarta Selatan</td>
//                                             <td>Rp 75.000</td>
//                                             <td><button className="btn btn-sm text-white button-detail">Detail</button></td>
//                                         </tr>
//                                     </tbody>
//                                 </table>

//                             </div>
//                             {/* <!-- /.container-fluid --> */}

//                         </div>
//                         {/* <!-- End of Main Content --> */}

//                         {/* <!-- Footer --> */}
//                         <footer className="sticky-footer bg-white">
//                             <div className="container my-auto">
//                                 <div className="copyright text-center my-auto">
//                                     <span>Copyright &copy; Dibooking 2023</span>
//                                 </div>
//                             </div>
//                         </footer>
//                         {/* <!-- End of Footer --> */}

//                     </div>
//                     {/* <!-- End of Content Wrapper --> */}

//                 </div>
//                 {/* <!-- End of Page Wrapper --> */}

//                 {/* <!-- Scroll to Top Button--> */}
//                 <a className="scroll-to-top rounded" href="#page-top">
//                     <i className="fas fa-angle-up"></i>
//                 </a>

//             </body>
//         </div>
//     )
// }

// export default Dashboard
