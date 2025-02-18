import React from 'react'
import Link from 'next/link'
import CarouselSVG from '@/assets/Svgs/CarouselSVG'
import EditSVG from '@/assets/Svgs/EditSVG'
import IconSVG from '@/assets/Svgs/IconSVG'
import AiSVG from '@/assets/Svgs/AiSVG'
import IdeaIcon from '@/assets/Svgs/IdeaIcon'
import CopyIcon from '@/assets/Svgs/CopyIcon'
import TrendingIcon from '@/assets/Svgs/TrendingIcon'
import UserProfileIcon from '@/assets/Svgs/UserProfileIcon'
import ScheduleIcon from '@/assets/Svgs/ScheduleIcon'
import PreferencesIcon from '@/assets/Svgs/PreferencesIcon'
import FeatureIcon from '@/assets/Svgs/FeatureIcon'
import UpgradeIcon from '@/assets/Svgs/UpgradeIcon'

const navbarData = {
    nav: [
        {
            id: 1,
            name: "Write Post",
            path: "/",
            isButton: true,
            icon: <EditSVG />
        }, {
            id: 2,
            name: "Post Generator",
            path: "#",
            icon: <AiSVG />
        },
        {
            id: 3,
            name: "Ideas Generator",
            path: "#",
            icon: <IdeaIcon />
        },
        {
            id: 4,
            name: "Carousel Maker",
            path: "#",
            icon: <CarouselSVG />
        },
        {
            id: 5,
            name: "Posts",
            path: "#",
            icon: <CopyIcon />

        },
        {
            id: 6,
            name: "Content Inspiration",
            path: "#",
            icon: <TrendingIcon />
        },
        {
            id: 7,
            name: "Posts for you",
            path: "#",
            icon: <UserProfileIcon />
        },
        {
            id: 7,
            name: "Schedule",
            path: "#",
            icon: <ScheduleIcon />
        }

    ],
    navFooter: [
        // {
        //     id: 1,
        //     name: 'Preferances',
        //     icon: <PreferencesIcon />
        // },
        // {
        //     id: 2,
        //     name: 'Features Requets',
        //     icon: <FeatureIcon />
        // }
    ]

}



const Sidebar: React.FC = () => {
    const { nav, navFooter } = navbarData
    return (
        <>
            <nav className={`navbar navbar-expand-md p-0 navbar-light w-100  border-sm-0   rounded`} >
                <div className="container-fluid  mt-4 px-0 w-100">
                    <div className='d-flex d-md-none w-100 justify-content-between p-0'>
                        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand d-md-none align-items-center gap-1" href="#" >
                            Text Editor
                        </a>
                    </div>
                    <div className="sidenav offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close  border-0 shadow-none outline-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-flex flex-column justify-content-between mt-4" style={{ height: '92vh' }}>
                            <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-start flex-column justify-content-bewteen flex-wrap px-2">
                                {nav.map((item) => (
                                    <Link
                                        href={item.path}
                                        key={item.id}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            textDecoration: 'none',
                                        }}
                                        className={`drawer-link nav-item d-flex align-items-center text-dark fw-bold gap-2 ${item.isButton ? 'btn btn-color  text-white d-flex w-100 justify-content-center' : ''}`}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                ))}
                            </ul>
                            <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-start flex-column justify-content-bewteen text-wrap flex-wrap px-2">
                                {/* {navFooter && navFooter.map((item) => (
                                    <Link
                                        href={'#'}
                                        key={item.id}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            textDecoration: 'none',
                                        }}
                                        className={`drawer-link text-wrap nav-item d-flex align-items-center text-dark fw-bold gap-2`}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                ))} */}
                                {/* <div className='card w-100 '>
                                    <div className='card-body d-flex gap-2 flex-column'>
                                        <div className='d-flex align-items-center  justify-content-between'>
                                            <span className='fw-bold' style={{ fontSize: '0.8rem' }}>
                                                Words Generated <IconSVG />
                                            </span>
                                            <span className='fw-bold' style={{ fontSize: '0.8rem' }}>
                                                1.25k / 50k
                                            </span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <span className='text-secondary' style={{ fontSize: '0.8rem' }}>
                                            Monthly usage resets in 29 days
                                        </span>
                                        <button className='btn border-1 fw-bold border-secondary'>
                                            <UpgradeIcon /> Upgrade Plan
                                        </button>
                                    </div>
                                </div> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar