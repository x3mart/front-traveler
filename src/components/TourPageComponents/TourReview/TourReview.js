import React, {useEffect, useState} from "react";
import styles from './TourReview.module.css';

const TourReview = ({text, activities=[], video}) => {

  const [videoUrl, setVideoUrl] = useState('')

  useEffect(() => {
    if(video) {
      let arr = video.split('/')
      setVideoUrl(arr[arr.length-1])
    } else {
      setVideoUrl('')
    }
  }, [video])

  const returnText = (text) => {
    return {__html: text}

  }

  return (
    <>
      <div className={styles.tour_review_container}>
      <h3>Обзор тура</h3>
        <div dangerouslySetInnerHTML={{__html: text}} className={styles.tour_review_text}/>

      <h4>Чем мы займемся в туре</h4>
        {video && <div className={styles.video_wrapper}>
          <iframe width="730" height="400" src={`https://www.youtube.com/embed/${videoUrl}`} title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
        </div>}
        {activities.map((item, index) => (
          <div key={index} className={styles.activity_wrapper}>
            <div dangerouslySetInnerHTML={{__html: item.description}} className={styles.activity_text}/>
            {item && item.image && <div className={styles.activity_image} style={{backgroundImage: 'url(' + item.image.image + ')'}}/>}
          </div>
        ))}
      </div>

    </>)
}

export default TourReview
