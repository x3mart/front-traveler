import React, { useState, useEffect, useRef } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";


const TextEditor = ({ action, name, value, required, error = {}, }) => {

  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}
  const [currentError, setCurrentError] = useState([])

  useEffect(() => {
    if(isNotEmptyObject(error) && error.detail) {
      let arr = []
      arr.push(error.detail)
      setCurrentError(arr)
    } else if(isNotEmptyObject(error) && name === 're_password') {
      setCurrentError(error['password'])
    } else if(error[name]) {
      setCurrentError(error[name])
    }
  }, [error, name])

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])


  const [data, setData] = useState('')

  useEffect(() => {
    if(value){
      setData(value)
    }
  }, [value])

  // const handleData = e => {
  //   setData(e.target.value)
  //   action(name, e.target.value)
  // }

  return editorLoaded ? (
    <div className={`ckeditor-textarea-wrapper with-errors-wrapper ${currentError.length > 0 ? 'error' : 'ok'}`} id={name}>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        value={data}
        config={{
          toolbar: [
            'bold',
            'italic',
            'blockQuote',
            '|',
            // 'link',
            'numberedList',
            'bulletedList',
            '|',
            // 'imageUpload',
            // 'mediaEmbed',
            // '|',
            'undo',
            'redo',
          ],
        }}
        onChange={(event, editor) => {
          setCurrentError([])
          const data = editor.getData()
          action(name, data)
        }}
        onBlur={(event, editor) => {
          const data = editor.getData()
          action(name, data === '<p></p>' ? '' : data)
        }}
      />
      <div className="errors-list">
        {/*{currentError}*/}
        <ul>
          { Array.isArray(currentError) && currentError.length > 0 && currentError.map((item, index) => (
            <li key={index} >{item}</li>
          ))
          }
        </ul>
      </div>
    </div>
  ) : (
    <div><CircularProgress/></div>
  )
}

export default TextEditor
