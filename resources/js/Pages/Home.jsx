import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

export default function Home() {
    return (
        <div>
            <div className="p-5 mb-4 bg-slate-800">
                <div className="container-fluid py-5 text-white">
                    <h1 className="display-5 fw-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-500">
                        putrapantura.com
                    </h1>
                    <p className="col-md-8 fs-5">
                        Berbagi informasi seputar Dunia Komputer dan Gadget
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div class="bg-white shadow-sm p-3 rounded mb-3">
                            <img
                                src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
                                class="card-img-top mb-3 rounded"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p class="card-text">
                                    <small class="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="bg-white shadow-sm p-3 rounded mb-3">
                            <img
                                src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
                                class="card-img-top mb-3 rounded"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p class="card-text">
                                    <small class="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="bg-white shadow-sm p-3 rounded mb-3">
                            <img
                                src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
                                class="card-img-top mb-3 rounded"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p class="card-text">
                                    <small class="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="bg-white shadow-sm p-3 rounded mb-3">
                            <img
                                src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
                                class="card-img-top mb-3 rounded"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p class="card-text">
                                    <small class="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="bg-white shadow-sm p-3 rounded mb-3">
                            <img
                                src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
                                class="card-img-top mb-3 rounded"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p class="card-text">
                                    <small class="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="bg-white shadow-sm p-3 rounded mb-3">
                            <img
                                src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
                                class="card-img-top mb-3 rounded"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p class="card-text">
                                    <small class="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 ">
                    <nav aria-label="Page navigation example  ">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    Previous
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

Home.layout = (page) => (
    <HomeLayout
        children={page}
        appTitle="Berbagi informasi seputar Dunia Komputer dan Gadget"
    />
);
