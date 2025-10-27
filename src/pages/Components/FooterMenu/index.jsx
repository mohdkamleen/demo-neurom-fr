import { HomeFilled, HomeOutlined, SaveFilled, SaveOutlined, UserOutlined, UserSwitchOutlined, WalletFilled, WalletOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import React from 'react' 
import { useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { IoMdSettings } from 'react-icons/io'
import { FaBrain, FaHome, FaRegChartBar } from 'react-icons/fa'
import { TiHome } from 'react-icons/ti'
import { MdAddCircle } from 'react-icons/md'

const FooterMenu = () => { 
    const location = useLocation()
    const navigate = useNavigate() 
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementsByClassName("footer-menu-container")[0].style.bottom = "0";
        } else {
            document.getElementsByClassName("footer-menu-container")[0].style.bottom = "-60px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <div className='footer-menu-container'>
          
            <div className={location.pathname === "/home" ? "footer-menu-item active" : "footer-menu-item"}>
                <TiHome className='footer-menu-icon' /> 
                <span>Home</span>
            </div>  

            <div className={location.pathname === "/adddata" ? "footer-menu-item active" : "footer-menu-item"}>
                <MdAddCircle className='footer-menu-icon' /> 
                <span>Add Data</span>
            </div>  

            <div className={location.pathname === "/predict" ? "footer-menu-item active" : "footer-menu-item"}>
                <FaBrain className='footer-menu-icon' /> 
                <span>Predict</span>
            </div>

            <div className={location.pathname === "/report" ? "footer-menu-item active" : "footer-menu-item"}>
                <FaRegChartBar className='footer-menu-icon' /> 
                <span>Report</span>
            </div>

            <div className={location.pathname === "/settings" ? "footer-menu-item active" : "footer-menu-item"}>
                <IoMdSettings className='footer-menu-icon' /> 
                <span>Settings</span>
            </div>

        </div>
    )
}

export default FooterMenu