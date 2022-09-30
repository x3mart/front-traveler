import React, {useEffect} from 'react'

import MainLayout from "../layouts/MainLayout";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

const Page404 = ({languages, language, match}) => {

  const lang_arr = ['ab', 'af', 'sq', 'cu', 'am', 'ar', 'hy', 'az', 'ae', 'ав', 'ay', 'bm', 'ba', 'eu', 'bn', 'bs', 'br', 'bg', 'my', 'bu', 'zh', 'cr', 'da', 'de', 'en', 'eo', 'et', 'ee', 'fo', 'fj', 'fi', 'fr', 'fy', 'gd', 'ka', 'el', 'gn', 'gu', 'ht', 'ha', 'he', 'hz', 'hi', 'иг', 'io', 'id', 'ia', 'ie', 'iu', 'ga', 'zu', 'is', 'it', 'ja', 'jv', 'yi', 'эс', 'kn', 'kr', 'kk', 'ks', 'ca', 'km', 'ky', 'ру', 'kv', 'ko', 'co', 'hr', 'ku', 'la', 'lv', 'lt', 'lb', 'ms', 'ml', 'mt', 'gv', 'mi', 'mr', 'mk', 'mo', 'mn', 'na', 'nv', 'ne', 'nl', 'no', 'or', 'os', 'pl', 'pt', 'qu', 'rm', 'ro', 'ru', 'sg', 'sa', 'sc', 'sv', 'sr', 'sk', 'sl', 'so', 'es', 'sw', 'tg', 'tt', 'te', 'th', 'bo', 'ti', 'cs', 'ce', 'cv', 'tr', 'tk', 'ug', 'uk', 'ur', 'uz', 'vi', 'wa', 'be', 'wo', 'yo']

  const history = useHistory()

  useEffect(() => {
    if (match.params[0]) {
      const lang = match.params[0].split('/')[1]
      if (lang && !lang_arr.includes(lang) && !languages.includes(lang)) {
        history.push(`/${language}${match.params[0]}`)
      } else if(!lang) {
        history.push(`/${language}`)
      }
    } else if(match.params.language){
      if (!lang_arr.includes(match.params.language) && !languages.includes(match.params.language)) {
        history.push(`/${language}/${match.params.language}`)
      }
    }
  }, [match])

  return (
    <MainLayout>
      <>
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 150,
          flexDirection: 'column'
        }}>
          <div style={{fontSize: 100, fontWeight: '600', marginBottom: 20}}>404</div>
          <div style={{fontSize: 26, fontWeight: '300'}}>Страница не найдена</div>
        </div>
      </>
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  languages: state.languages.languages,
  language: state.languages.language
})

export default connect(mapStateToProps)(Page404)
