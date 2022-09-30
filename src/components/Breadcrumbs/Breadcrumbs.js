import React, {Children, cloneElement} from 'react'
import styles from './Breadcrumbs.module.css'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

const Breadcrumbs = ({children}) => {

  const arrayChildren = Children.toArray(children);

  return (
    <>
      <ul
        className={styles.breadcrumbs_list}
      >
        {Children.map(arrayChildren, (child, index) => {
          const isLast = index === arrayChildren.length - 1;

          if (! isLast && ! child.props.link ) {
            throw new Error(
              `BreadcrumbItem child no. ${index + 1}
            should be passed a 'link' prop`
            )
          }

          return (
            <>
              {child.props.link ? (
                <Link
                  to={child.props.link}
                >
                  <div style={{ marginRight: "5px" }}>
                    {cloneElement(child, {
                      isLast,
                    })}
                  </div>
                </Link>
              ) : (
                <div style={{ marginRight: "5px" }}>
                  {cloneElement(child, {
                    isLast,
                  })}
                </div>
              )}
              {!isLast && (
                <div style={{ marginRight: "5px" }}>
                  -
                </div>
              )}
            </>
          );
        })}
      </ul>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs)