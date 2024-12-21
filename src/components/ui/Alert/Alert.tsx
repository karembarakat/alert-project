import { X } from 'lucide-react';

import "./index.scss"
import { ReactNode } from 'react';
import { AlertTypes } from '../../../types';
interface IProps {
    type: AlertTypes,
    icon: ReactNode,
    title: string,
    desc?: string;
    children?: ReactNode;
}

const Alert = ({ type = "alert-default",icon , title,desc,children}: IProps) => {
    return (
        <div className={type}>
            <div className="alert-wrapper">
                <div className="alert-header">
                    <div className="title">
                        {icon}
                        <h4> {title}</h4>
                    </div>
                    <span> <X /></span>
                </div>
                
                {children ? children : <p>{desc}</p> }
            </div>
        </div>
    )
}

export default Alert 