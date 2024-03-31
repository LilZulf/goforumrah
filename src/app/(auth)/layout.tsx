import Image from "next/image";
import colors from './colors.module.scss';
import { getSession } from "@/lib/lib";



export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <nav style={{backgroundColor : colors.blueWhale}} className="navbar sticky-top navbar-dark py-md-3 px-md-6 p-sm-1">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image src="/img/Logo_goforumrah.svg" alt="Logo" width="146" height="37" />
                    </a>
                    <div className="d-flex align-items-center text-white">
                        <div className="align-items-center">
                            <Image src="/icons/Globe.svg" alt="Logo" width="24" height="24" /> En
                        </div>
                        <div className="m-2 mx-md-5">
                            <Image src="/icons/Separator.svg" alt="Separator" width="1" height="40" />
                        </div>
                        <div>
                            <button className="btn btn-outline-primary me-1 text-white fs-6 fw-medium px-4" type="button">Help</button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container-fluid">
                <div className="row p-0">
                    <div className="col-md-7 col-lg-6 ps-lg-10 pe-lg-7 ps-md-7 pe-md-5 ">
                        <div className="d-flex align-items-start flex-column" style={{ height: '100%' }}>
                            <div className="mb-auto">{children}</div>
                            <div className="p-md-2 p-0 fs-6 ">
                                <p className="text_light">All rights reserved. Copyright 2022 - GoForUmrah.com&trade; </p>
                            </div>
                        </div>
                    </div>
                    <div className="col p-0">
                        <div style={{ position: 'relative', height: '820px' }}>
                            <Image
                                src="/img/Business_Login-Img.jpg"
                                alt="Banner"
                                fill
                                sizes="(min-width: 808px) 50vw, 100vw"
                                style={{
                                    objectFit: 'cover', // cover, contain, none
                                }}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
