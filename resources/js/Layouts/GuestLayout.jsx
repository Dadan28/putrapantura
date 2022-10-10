import React from "react";
import NavbarLayout from "./NavbarLayout";

export default function Guest({ children, authTitle }) {
    return (
        <>
            <NavbarLayout />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 mx-auto">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <h5>{authTitle}</h5>
                            </div>
                            <div className="card-body">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
