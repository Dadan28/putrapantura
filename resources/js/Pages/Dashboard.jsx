import React from "react";
import { Head } from "@inertiajs/inertia-react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="p-5 mb-4 bg-light">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Dashboard</h1>
                    <p className="col-md-8 fs-4">
                        Selamat datang di Halaman Administrator{" "}
                        <strong>putrapantura.com</strong>
                    </p>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <AdminLayout children={page} />;
