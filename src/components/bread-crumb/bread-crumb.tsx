import React from 'react'
import { Link } from 'react-router-dom'
import './bread-crumb.scss'

type BreadCrumbProps = {

    text: React.ReactNode | string;
    path: string
}

const BreadCrumb = ({text, path } : BreadCrumbProps) => {
    return (
        <div className="breadcrumb">
            <div className="breadcrumb__container">
                <div className="breadcrumb__arrow">
                    <Link href="#" className="breadcrumb__link" to={path}>
                        <span className="breadcrumb__left"></span>
                    </Link>
                </div>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default BreadCrumb
