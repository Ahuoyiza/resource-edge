import React,{useState} from 'react';

import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

import PrimaryButton from 'components/buttons/PrimaryButton';
import SecondaryButton from 'components/buttons/SecondaryButton';

import 'stylesheet/nav.css'
const Navigation = () => {
    const [open, setOpen] = useState(false);
    const toggleNav = () => {
        setOpen(!open);
    }
    // const burgerRef = React.useRef()
    return (
        <>
        <div className="flex-space-between mx-large my-medium nav-header" style={{display:`${open ? 'none' : 'flex'}`}}>
            <header className="flex-row">
                <img className="mobile-hidden" src="https://res.cloudinary.com/sophire/image/upload/v1639298245/resources-edge/desktop/brand/logo-dt_sorbe2.svg" alt="resource edge logo" />
                <img className="hidden show-mobile" src="https://res.cloudinary.com/sophire/image/upload/v1639298446/resources-edge/mobile/brand/logo-mn_uebrge.svg" alt="resource edge logo"  />
                <nav className="flex-row mobile-hidden">
                    <a href="#features" className="mx-medium">Features</a>
                    <a href="#about">About</a>
                </nav>
            </header>
            <div className="mobile-hidden">
                <SecondaryButton ml="20px" text="Sign Up" />
                <PrimaryButton text="Sign In" />

            </div>
            <div
            // ref={burgerRef} onClick={onOpen}
            className="hidden show-mobile"
             onClick={toggleNav}
            >
                    <BiMenuAltRight style={{fontSize:'2em' }}/>
                    
            </div>
            
        </div>
        <div className="hidden nav-mobile   "  style={{display:`${open ? 'block' : 'none'}`}}>
                <header className="flex-space-between">
                    <img className="hidden show-mobile" src="https://res.cloudinary.com/sophire/image/upload/v1639298446/resources-edge/mobile/brand/logo-mn_uebrge.svg" alt="resource edge logo"  />
                    <div onClick={toggleNav}>
                    <IoCloseOutline style={{fontSize:'2em' }} />
                    </div>
                </header>
                <nav className="flex-column ">
                    <a href="#features" className="mb-medium mt-large">Features</a>
                    <a href="#about" className="mb-large ">About</a>
                </nav>
                <div className="nav-buttons">
                    <SecondaryButton bg="#F4F5F7" text="Sign Up" />
                    <PrimaryButton text="Sign In" mt="20px" mb="20px" />

                </div>

            </div>
        </>
    )
}

export default Navigation
