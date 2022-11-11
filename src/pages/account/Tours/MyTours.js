import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import ToursList from "../../../components/AccountTours/Components/ToursList";
import {Link, Redirect, useHistory} from 'react-router-dom'
import Account from "../../../layouts/account/account";
import {addTour, clearCurrentTour, getTours} from "../../../redux/actions/toursActions";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ReactPaginate from "react-paginate";
import AccountButtonsSet from "./AccountButtonsSet";
import {parseQs} from "../../../functions";

const MyTours = ({
                   language,
                   isAuthenticated,
                   addTour,
                   tour,
                   tours,
                   getTours,
                   clearCurrentTour,
                   location,
                 }) => {

  const [loading, setLoading] = useState(false)

  const [buttonText, setButtonText] = useState('Добавить путешествие')

  const [edit, setEdit] = useState(false)

  const [filter, setFilter] = useState('all')

  const [toursList, setToursList] = useState(null)

  const [current, setCurrent] = useState(null)

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  console.log(current)
  console.log(page)

  useEffect(() => {
    if(location?.search) {
      setPage(1)
      parseQs(location?.search)?.map(item => {
        if(item?.type === 'filter'){
          setCurrent(item?.data[0])
        } else if(item?.type === 'page'){
          setPage(item?.data[0])
        }
      })
    } else {
      setCurrent(null)
      setPage(1)
    }
  }, [location])

  useEffect(() => {
    getTours(
      `${current ? `private_statuses=${current}` : ''}${current ? `&` : ''}${page ? `page=${page}` : ''}`
    )
  }, [current, page])

  // useEffect(() => {
  //   if(current || page) {
  //     getTours(
  //       `${current ? `private_statuses=${current}` : ''}${current ? `&` : ''}${page ? `page=${page}` : ''}`
  //     )
  //   } else {
  //     getTours()
  //   }
  // }, [current, page])

  useEffect(() => {
    if (tours?.page_size) {
      setPageCount(Math.ceil(tours?.count / tours?.page_size))
    }
  }, [tours])

  useEffect(() => {
    // getTours()
    clearCurrentTour()
  }, [])

  // useEffect(() => {
  //   if (tours?.results && filter === 'all') {
  //     setToursList(tours?.results)
  //   } else if (tours?.results && filter === 'is_active') {
  //     setToursList(tours?.results?.filter(item => item.is_active))
  //   } else if (tours?.results && filter === 'on_moderation') {
  //     setToursList(tours?.results?.filter(item => item.on_moderation))
  //   } else if (tours?.results && filter === 'is_draft') {
  //     setToursList(tours?.results?.filter(item => item.is_draft))
  //   } else if (tours?.results && filter === 'is_archive') {
  //     setToursList(tours?.results?.filter(item => item.is_archive))
  //   }
  // }, [tours, filter])

  const history = useHistory()


  useEffect(() => {
    if (isNotEmptyObject(tour) && edit) {
      setEdit(false)
      history.push(`/account/tours/${tour.id}/edit/main`)
    }
  }, [tour])

  useEffect(() => {
    if (tour.id) {
      setButtonText('Продолжить редактирование')
    } else {
      setButtonText('Добавить путешествие')
    }
  }, [tour])

  if (!isAuthenticated) {
    return <Redirect to={`/login`}/>
  }

  const handleEditingButton = () => {
    setEdit(true)
    addTour()
  }

  const handlePaginate = n => {
    history.push(`/account/tours/list?${current ? `filter=${current}` : ``}${current ? `&` : ``}page=${n}`)
  }

  return (
    <>
      <Account title='Мои туры' menu_item='tours/list'>
        <main>
          <div className='global-h2-heading'>
            <h2>Мои туры</h2>
          </div>
          <div className='tours-list-add-button-wrapper'>
            <div className='tours-list-add-button-text'>
              Вам доступно безлимитное добавление туров и путешествий, более 2
              000 000 человек ждут их.
            </div>
            <div className='tours-list-add-button-button green' onClick={handleEditingButton}>
              <div>
                Добавить путешествие
              </div>
            </div>
          </div>
          <div className='control-buttons'>
            <AccountButtonsSet
              current={current}
            />
          </div>
          {/*{toursList && <ToursList tours={toursList}/>}*/}
          {tours && <ToursList tours={tours.results}/>}
          {pageCount > 1 && (<div className={'pagination'}>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={e => {
                handlePaginate(e.selected + 1)
              }}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              forcePage={page-1}
              // hrefAllControls={true}
              // hrefBuilder={(page, pageCount, selected) =>
              //   page >= 1 && page <= pageCount ? `/${language}/account/tours/list?${current ? `filter=${current}` : ``}${current ? `&` : ``}page=${page}` : '#'
              // }
            />
          </div>)}
        </main>
      </Account>
    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  isAuthenticated: state.auth.isAuthenticated,
  tour: state.tours.current_tour,
  tours: state.tours.tours,
})

export default connect(mapStateToProps, {
  addTour,
  getTours,
  clearCurrentTour,
})(MyTours)
