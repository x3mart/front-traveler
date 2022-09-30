import React, {useState} from "react";
import styles from './TourGallery.module.css';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const TourGallery = ({gallery = []}) => {

  const images = gallery.map(item => item.image)

  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = i => {
    setPhotoIndex(i)
    setIsOpen(true)
  }

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
      <div className={styles.tour_gallery_container}>
        <h3>Галерея</h3>
        <div className={styles.gallery_wrapper}>
          {gallery.map((item, index) => (
            <div key={index} onClick={() => handleOpen(index)} className={styles.gallery_image} style={{backgroundImage: 'url(' + item.tmb_image + ')'}}/>

          ))}
        </div>
      </div>

    </>)
}

export default TourGallery
