import React, {useState} from 'react'
import styles from './SearchSection.module.css'
import {connect} from 'react-redux'
import Section from "../Section";
import SearchBar from "../SearchBar";
import Title from "../Title";

const SearchSection = ({
                         background,
                         padding,
                         title,
                         sub_title,
                         title_color,
                         title_border_color,
                         search_bar_border = true,
                         margin_bottom,
                         page_slug,
                         item_slug,
                         ident,
                         location,
                       }) => {

  const [searchStr, setSearchStr] = useState('')

  const path = location?.pathname?.substring(1)?.split('/').slice(1).join('/')

  const handleSubmitAll = () => {
    // getCurrentFilterSet(pageParamsStr)
    history.push(`/${language}/${path}?${searchStr}`)
  }

  return (
    <>
      <Section background={background} padding={padding}>
        {(title || sub_title) &&
          <Title title={title} sub_title={sub_title} color={title_color} border_color={title_border_color}/>}
        <SearchBar
          border={search_bar_border}
          margin_bottom={margin_bottom}
          page_slug={page_slug}
          item_slug={item_slug}
          ident={ident}
          location={location}
        />
      </Section>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection)