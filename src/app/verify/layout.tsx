import Image from "next/image";
import './style.scss';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <>
            <nav className="navbar navbar-dark bg-navbar-1 py-md-3 px-md-6 p-sm-1">
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
                {children}
            </div>
        </>
    );
}
