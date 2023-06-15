/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { pesan } from '../data/DataPemesanan';

function Konfirmasi() {
    return (
        <div>
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Konfirmasi Pemesanan</h1>
                </div>

                <table className="table table-striped text-center">
                    <thead>
                        <tr className="dibooking-orange text-white">
                            <th scope="col">No.</th>
                            <th scope="col">Nama Lapangan</th>
                            <th scope="col">Penyewa</th>
                            <th scope="col">Lokasi</th>
                            <th scope="col">Waktu</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pesan.map((item, index) => (
                            <tr className="text-dark" key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.nama}</td>
                                <td>{item.penyewa}</td>
                                <td>{item.lokasi}</td>
                                <td>{item.waktu}</td>
                                <td>
                                    <button className="btn btn-sm text-white button-terima">Terima</button> | <button className="btn btn-sm text-white button-tolak">Tolak</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Konfirmasi
