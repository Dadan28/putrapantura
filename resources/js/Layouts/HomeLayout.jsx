import React from "react";
import FooterLayout from "./FooterLayout";
import NavbarLayout from "./NavbarLayout";
import { Head } from "@inertiajs/inertia-react";

export default function HomeLayout({ children, appTitle }) {
    return (
        <div>
            <Head title={appTitle} />
            <NavbarLayout />
            <div className="container-fluiud">
                <div className="row">
                    <div className="col-md-12">{children}</div>
                </div>
            </div>
            <FooterLayout />
        </div>
    );
}
