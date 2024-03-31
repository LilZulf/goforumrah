import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import style from './page.module.scss';
import TextInput from "@/components/TextInput";
import ButtonInput from "@/components/ButtonInput";



export default function Home() {

    return (
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className={`col ${style.sidebar} border-end p-0`}>
                        <div className="text-center text-white border-bottom p-0 mt-4">
                            <Image src="/img/Logo-light.svg" alt="Logo" className="mb-4" width="146" height="26" />
                        </div>
                        <ul className="nav nav-pills flex-column mb-auto fw-medium mt-3 px-2">
                            <li className="nav-item">
                                <a href="#" className={`nav-link ${style.nav_active}`} aria-current="page">
                                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link link-dark">
                                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
                                    Rates & Availability
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link link-dark">
                                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#table" /></svg>
                                    Room
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link link-dark">
                                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                                    Guest Review
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link link-dark">
                                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#people-circle" /></svg>
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={`col p-0 ${style.content}`}>
                        <div className={`${style.content_header} text-black border-bottom py-1`}>
                            <div className="d-flex px-4 align-items-center justify-content-between">
                                <div className="d-inline-flex align-items-center p-0 m-0">
                                    <Image src="/img/WesternUnion.svg" alt="Logo" style={{ borderRadius: '12px' }} width="48" height="48" />
                                    <div className="ms-2 d-inline-flex flex-column">
                                        <div className="fw-semibold fs-5">Big Makkah Hotel</div>
                                        <div>#10292827</div>
                                    </div>
                                    <div className="ms-3 fw-semibold text-primary">See your property</div>
                                </div>
                                <div className="d-inline-flex align-items-center p-0 m-0">
                                    <TextInput
                                        id="search"
                                        inputType="text"
                                        name="search"
                                        placeholder="search"
                                        classNameInput="my-0"
                                    />
                                    <Image src="/icons/Bell.svg" alt="bell" width="24" height="24" className="mx-3" />
                                    <div className="dropdown ">
                                        <button className="btn dropdown-toggle fw-semibold m-n4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <Image src="/icons/Avatar.svg" className="ms-0 me-2" alt="bell" width="32" height="32" />
                                            John Doe
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Profile</a></li>
                                            <li><a className="dropdown-item" href="#">Settings</a></li>
                                            <li><a className="dropdown-item" href="#">Logout</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: style.bgOffWhite }} className="p-5">
                            <div className="d-flex justify-content-between align-items-end">
                                <h3 className="fw-semibold m-0">
                                    Reservation Overview
                                </h3>
                                <ButtonInput
                                    buttonType="button"
                                    className="btn btn-outline-primary fw-medium text-black py-2"
                                    style={{ fontSize: '14px' }}
                                >See all reservation</ButtonInput>
                            </div>
                            <div className="d-flex flex-column bg-white rounded-4 mt-4 px-4 py-3">
                                <div className="col-3 flex-column m-0 p-0">
                                    <ul className="nav nav-underline">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Departure</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Arrival</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Stay over</a>
                                        </li>
                                    </ul>
                                    <hr className="m-0 border-secondary border-2" />
                                </div>
                                <hr className="m-0" />
                                <div className="d-flex align-items-center m-0 justify-content-between py-4">
                                    <div className="d-inline-flex align-items-center p-0 m-0">
                                        <Image src="/img/WesternUnion.svg" alt="Logo" style={{ borderRadius: '12px' }} width="48" height="48" />
                                        <div className="ms-4 d-inline-flex flex-column">
                                            <div className="fw-semibold fs-5">Guy Hawkins</div>
                                            <div className="d-flex text-secondary">
                                                <div>
                                                    #12029283
                                                </div>
                                                <div className="mx-4">
                                                    1 Night
                                                </div>
                                                <div>
                                                    5 Bedroom
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-5 fw-medium">31 October</div>
                                        <div className="ms-5 d-inline-flex flex-column">
                                            <div className="fs-6 text-secondary">7 Des 2021 - 8 Des 2021</div>
                                            <div className="d-flex text-secondary">
                                                Arrival : 1.00 PM - 1.00 PM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center p-0 m-0">
                                        <div className="fs-5 fw-semibold mx-5">
                                            $100.0
                                        </div>
                                        <div className="ms-3 fw-semibold text-primary">See your property</div>
                                    </div>
                                </div>
                                <hr className="m-0" />
                                <div className="d-flex align-items-center m-0 justify-content-between py-4">
                                    <div className="d-inline-flex align-items-center p-0 m-0">
                                        <Image src="/img/WesternUnion.svg" alt="Logo" style={{ borderRadius: '12px' }} width="48" height="48" />
                                        <div className="ms-4 d-inline-flex flex-column">
                                            <div className="fw-semibold fs-5">Guy Hawkins</div>
                                            <div className="d-flex text-secondary">
                                                <div>
                                                    #12029283
                                                </div>
                                                <div className="mx-4">
                                                    1 Night
                                                </div>
                                                <div>
                                                    5 Bedroom
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-5 fw-medium">31 October</div>
                                        <div className="ms-5 d-inline-flex flex-column">
                                            <div className="fs-6 text-secondary">7 Des 2021 - 8 Des 2021</div>
                                            <div className="d-flex text-secondary">
                                                Arrival : 1.00 PM - 1.00 PM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center p-0 m-0">
                                        <div className="fs-5 fw-semibold mx-5">
                                            $100.0
                                        </div>
                                        <div className="ms-3 fw-semibold text-primary">See your property</div>
                                    </div>
                                </div>
                                <hr className="m-0" />
                                <div className="d-flex align-items-center m-0 justify-content-between py-4">
                                    <div className="d-inline-flex align-items-center p-0 m-0">
                                        <Image src="/img/WesternUnion.svg" alt="Logo" style={{ borderRadius: '12px' }} width="48" height="48" />
                                        <div className="ms-4 d-inline-flex flex-column">
                                            <div className="fw-semibold fs-5">Guy Hawkins</div>
                                            <div className="d-flex text-secondary">
                                                <div>
                                                    #12029283
                                                </div>
                                                <div className="mx-4">
                                                    1 Night
                                                </div>
                                                <div>
                                                    5 Bedroom
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-5 fw-medium">31 October</div>
                                        <div className="ms-5 d-inline-flex flex-column">
                                            <div className="fs-6 text-secondary">7 Des 2021 - 8 Des 2021</div>
                                            <div className="d-flex text-secondary">
                                                Arrival : 1.00 PM - 1.00 PM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center p-0 m-0">
                                        <div className="fs-5 fw-semibold mx-5">
                                            $100.0
                                        </div>
                                        <div className="ms-3 fw-semibold text-primary">See your property</div>
                                    </div>
                                </div>
                                <hr className="m-0" />
                            </div>
                            <div className="d-flex justify-content-between mt-5 align-items-end">
                                <h3 className="fw-semibold m-0">
                                    Latest booking
                                </h3>
                                <ButtonInput
                                    buttonType="button"
                                    className="btn btn-outline-primary fw-medium text-black py-2"
                                    style={{ fontSize: '14px' }}
                                >See all reservation</ButtonInput>
                            </div>
                            <div className="d-flex flex-column bg-white rounded-4 mt-4 px-4 py-3">
                                <hr className="m-0" />
                                <div className="d-flex align-items-center m-0 justify-content-between py-4">
                                    <div className="d-inline-flex align-items-center p-0 m-0">
                                        <Image src="/img/WesternUnion.svg" alt="Logo" style={{ borderRadius: '12px' }} width="48" height="48" />
                                        <div className="ms-4 d-inline-flex flex-column">
                                            <div className="fw-semibold fs-5">Guy Hawkins</div>
                                            <div className="d-flex text-secondary">
                                                <div className="me-4">
                                                    1 Night
                                                </div>
                                                <div>
                                                    5 Bedroom
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-8 d-inline-flex flex-column">
                                            <div className="fw-medium fs-6 text-secondary">Check-out</div>
                                            <div className="fw-medium">8 Des 2021</div>
                                        </div>
                                        <div className="ms-5 me-8 d-inline-flex flex-column">
                                            <div className="fw-medium fs-6 text-secondary">Check-out</div>
                                            <div className="fw-medium">8 Des 2021</div>
                                        </div>
                                        <div className="me-8 d-inline-flex flex-column">
                                            <div className="fw-medium fs-6 text-secondary">Status</div>
                                            <span className="badge rounded-pill text-bg-success px-3 py-2">Confirmed</span>
                                        </div>
                                    </div>
                                    <div className="ms-3 fw-semibold text-primary">See your property</div>

                                </div>
                                <hr className="m-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
