import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function NavbarLayout() {
    const { auth } = usePage().props;
    return (
        <div>
            <>
                <nav
                    className="navbar navbar-expand-lg fixed-top navbar-dark bg-slate-900 border-b border-dashed border-green-900"
                    aria-label="Main navigation"
                >
                    <div className="container-fluid  ">
                        <Link
                            href={route("home")}
                            className="navbar-brand text-decoration-none"
                        >
                            <a>Putra Pantura</a>
                        </Link>
                        <button
                            className="navbar-toggler p-0 border-0"
                            type="button"
                            // id="navbarSideCollapse"
                            aria-label="Toggle navigation"
                            onClick={() => {
                                document
                                    .querySelector(".offcanvas-collapse")
                                    .classList.toggle("open");
                            }}
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="navbar-collapse offcanvas-collapse"
                            id="navbarsExampleDefault"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        href={route("home")}
                                        className="text-decoration-none"
                                    >
                                        <a className="nav-link active" href="#">
                                            <i className="fa-solid fa-house"></i>{" "}
                                            Home
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Aplikasi
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Hardware
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Tutorial
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        News
                                    </a>
                                </li>
                            </ul>

                            {auth.user !== null ? (
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dadan Nurmaulana
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link
                                                    href={route("dashboard")}
                                                    className="text-decoration-none"
                                                >
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Dashboard
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Add Article
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Setting
                                                </a>
                                            </li>
                                            <li>
                                                <Link
                                                    href={route("logout")}
                                                    className="text-decoration-none"
                                                    method="post"
                                                    as="button"
                                                >
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Logout
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            ) : (
                                <form className="d-flex" role="search">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button
                                        className="btn btn-outline-success"
                                        type="submit"
                                    >
                                        Search
                                    </button>
                                </form>
                                // <ul className="navbar-nav mb-2 mb-lg-0">
                                //     <li className="nav-item">
                                //         <Link
                                //             href={route("login")}
                                //             className="text-decoration-none"
                                //         >
                                //             <a className="nav-link">
                                //                 <i className="fa-solid fa-right-to-bracket"></i>{" "}
                                //                 login
                                //             </a>
                                //         </Link>
                                //     </li>
                                // </ul>
                            )}
                        </div>
                    </div>
                </nav>
                {/* <div className="nav-scroller bg-body shadow-sm">
                    <div className="container-fluid">
                        <nav className="nav" aria-label="Secondary navigation">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                About
                            </a>
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                            <a className="nav-link" href="#">
                                Disclaimer
                            </a>
                            <a className="nav-link" href="#">
                                Privacy Policy
                            </a>
                            <a className="nav-link" href="#">
                                Term of Service
                            </a>
                            <a className="nav-link" href="#">
                                FAQ?
                            </a>
                        </nav>
                    </div>
                </div> */}
            </>
        </div>
    );
}
