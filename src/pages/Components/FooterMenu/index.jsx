import { HomeFilled, HomeOutlined, SaveFilled, SaveOutlined, UserOutlined, UserSwitchOutlined, WalletFilled, WalletOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import React from 'react' 
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { IoMdSettings } from 'react-icons/io'
import { FaBrain, FaHome, FaRegChartBar } from 'react-icons/fa'
import { TiHome } from 'react-icons/ti'
import { MdAddCircle } from 'react-icons/md'

const FooterMenu = () => { 
    const location = useLocation() 

    return (
        <div className='footer-menu-container'>
          
            <Link to="/home" className={location.pathname === "/home" ? "footer-menu-item active" : "footer-menu-item"}>
                <TiHome className='footer-menu-icon' /> 
                <span>Home</span>
            </Link>  

            <Link className={location.pathname === "/adddata" ? "footer-menu-item active" : "footer-menu-item"}>
                <MdAddCircle className='footer-menu-icon' /> 
                <span>Add Data</span>
            </Link>  

            <Link to="/predict" className={location.pathname === "/predict" ? "footer-menu-item active" : "footer-menu-item"}>
                <FaBrain className='footer-menu-icon' /> 
                <span>Predict</span>
            </Link>

            <Link className={location.pathname === "/report" ? "footer-menu-item active" : "footer-menu-item"}>
                <FaRegChartBar className='footer-menu-icon' /> 
                <span>Report</span>
            </Link>

            <Link className={location.pathname === "/settings" ? "footer-menu-item active" : "footer-menu-item"}>
                <IoMdSettings className='footer-menu-icon' /> 
                <span>Settings</span>
            </Link>

        </div>
    )
}

export default FooterMenu