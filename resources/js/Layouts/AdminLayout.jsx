import React from "react";
import NavbarLayout from "./NavbarLayout";

export default function AdminLayout({ children }) {
    return (
        <div>
            <NavbarLayout />
            <div className="container-fluiud">
                <div className="row">
                    <div className="col-md-12">{children}</div>
                </div>
            </div>
        </div>
    );
}
