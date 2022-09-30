import React, {Fragment, useEffect, useRef, useState} from 'react'
import {connect} from 'react-redux'
import MetaTags from 'react-meta-tags'
import MainLayout from '../../layouts/MainLayout'
import {getLegalDoc} from "../../redux/actions/toursActions";

const PrivacyPolicy = ({match, getLegalDoc, doc, }) => {

  const {slug} = match.params

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if(slug) {
      getLegalDoc(slug)
    }
    window.scrollTo(0, 0)
  }, [slug])

  return (
    <>
      <MetaTags>
        <title>{doc && doc.docs_name}</title>
        <meta name='description' content={doc && doc.docs_meta_tag}/>
      </MetaTags>
      <MainLayout>
        <div className="wrapper">
          {
            doc &&
            <>
              <div className="docs-header">
                <h2>{doc && doc.docs_title}</h2>
                <h3>{doc && doc.docs_subtitle}</h3>
              </div>
              <div className="docs-body" dangerouslySetInnerHTML={{__html: doc && doc.docs_body}}/>
            </>
          }
        </div>
      </MainLayout>
    </>
)
}

const mapStateToProps = state => ({
  doc: state.tours.doc
})

export default connect(mapStateToProps, {getLegalDoc})(PrivacyPolicy)
