import React from 'react'
import cn from 'classnames'
import Htag from '../Htag/Htag'

const Sale = ({ children, ...props }) => {
  return (
    <div className={cn(styles.sale, className, {})} {...props}>
      {children}
      <Htag tag='h4'>-50%</Htag>
      <Htag tag='h3'>SALE</Htag>
    </div>
  )
}

export default Sale
