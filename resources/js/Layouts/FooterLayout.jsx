import React from "react";

export default function FooterLayout() {
    const tahun = new Date().getFullYear();
    return (
        <div>
            <div className="container-fluiud">
                {/* <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a
                            href="/"
                            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                        ></a>
                        <span className="mb-3 mb-md-0 text-muted">
                            © {tahun} Putra Pantura
                        </span>
                    </div>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="text-muted" href="#">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="#">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="#">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </footer> */}
                <footer className="py-3 mt-5 bg-slate-800 ">
                    <ul className="nav justify-content-center border-b border-dashed pb-3 mb-3">
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-white">
                                Disclaimer
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-white">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-white">
                                Term of Service
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-white">
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-white">
                                About
                            </a>
                        </li>
                    </ul>
                    <p className="text-center text-white">
                        © {tahun} Putra Pantura
                    </p>
                </footer>
            </div>
        </div>
    );
}
