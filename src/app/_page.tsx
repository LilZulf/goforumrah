import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import style from './page.module.scss';


export default function Home() {

  return (
    <main>
      <div className="row m-0">
        <div className="col-md-2 p-0 m-0">
          <div className="d-flex flex-column flex-shrink-0 bg-white border-end" style={{ height: '100vh', position: 'fixed', top: 0, left: 0 }}>
            <div className="d-flex align-items-center justify-content-center pt-4 mb-3">
              <Image src="/img/Logo-light.svg" alt="Logo" width="146" height="26" />
            </div>
            <hr />
            <div className="d-flex ps-4 fw-medium">
              <ul className="nav nav-pills flex-column mb-auto">
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
          </div>
        </div>
        <div className="col-md-10 offset">
          <div style={{ height: '88px' }} className="row bg-white border-bottom">
            <div className="d-flex px-4 align-items-center">
              <div className="d-inline-flex align-items-center p-0 m-0">
                <Image src="/img/WesternUnion.svg" alt="Logo" style={{ borderRadius: '12px' }} width="48" height="48" />
                <div className="ms-2 d-inline-flex flex-column">
                  <div>tes</div>
                  <div>tes</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-primary" style={{ overflowY: 'scroll', height : '100vh'}}>
            tes
          </div>
        </div>
      </div>

    </main>
  );
}
