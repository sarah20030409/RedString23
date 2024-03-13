import React from 'react'
import { Link } from 'react-router-dom'



 function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
        
        return (
          <li className={path === href ? "active" : ""}>
            <Link to={href} {...props}>
              {children}
            </Link>
          </li>
        )
      
      }



export default CustomLink