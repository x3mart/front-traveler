import React, {useState} from "react";
import styles from './TourAccommodation.module.css';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const TourAccommodation = ({property_types=[], accomodation=[], images=[]}) => {


  const gallery = images.map(item => item.image)

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
          mainSrc={gallery[photoIndex]}
          nextSrc={gallery[(photoIndex + 1) % gallery.length]}
          prevSrc={gallery[(photoIndex + gallery.length - 1) % gallery.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % gallery.length)}
        />
      )}
      <div className={styles.tour_accommodation_container}>
        {Array.isArray(property_types) && property_types.length > 0 &&
          <>
            <h3>Тип размещения</h3>
            <ul>
              {property_types.map((item, index) => (
                <li key={index}>{item}</li>
                // <li key={index}>{item.name}</li>
              ))}
            </ul>
          </>
        }
        {Array.isArray(property_types) && property_types.length > 0 &&
          <>
            <h3>Фото мест проживания</h3>
            <div className={styles.gallery_wrapper}>
              {images.map((item, index) => (
                <div onClick={() => handleOpen(index)} key={index} className={styles.gallery_image} style={{backgroundImage: 'url(' + item.tmb_image + ')'}}/>
              ))}
            </div>
          </>
        }
      </div>
    </>
  )
}

export default TourAccommodation
