import React, {useEffect, useState} from 'react'

import {connect} from 'react-redux'
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";

import {styled} from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {getUserInn, resetUserInn} from "../../../redux/actions/profileActions";
import {
  update_local_user, setPage, getRecipientInnData, resetRecipientInnData, updateLegalVerificationData,
  updateIndividualVerificationData, clear_verification_status, update_user, load_user, clear_errors, upload_docs,
} from "../../../redux/actions/authActions";
import TextArea from "../../../components/AccountTours/FormFields/TextArea";
import {getCountries} from "../../../redux/actions/toursActions";
import ObjectFileInput from "../../../components/AccountTours/FormFields/ObjectFileInput";

const BpIcon = styled('span')(({theme}) => ({
  borderRadius: '50%',
  width: 24,
  height: 24,
  boxShadow: theme.palette.mode === 'dark' ? '0 0 0 1px rgb(16 22 26 / 40%)' : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage: theme.palette.mode === 'dark' ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))' : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)', outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none', background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#84BB59',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 24,
    height: 24,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#84BB59',
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (<Radio
    sx={{
      '&:hover': {
        bgcolor: 'transparent',
      }, '&.MuiRadio-root': {
        paddingRight: '20px', marginLeft: '8px',
      },
    }}
    disableRipple
    color="default"
    checkedIcon={<BpCheckedIcon/>}
    icon={<BpIcon/>}
    {...props}
  />);
}


const Legal = ({
                 user,
                 error,
                 inn_data,
                 update_local_user,
                 getRecipientInnData,
                 countries,
                 resetRecipientInnData,
                 clear_errors,
                 upload_docs,
                 docs,
               }) => {

  const {legal_verification} = user

  const [active, setActive] = useState(1)
  const [spinner, setSpinner] = useState(false)
  const [clear, setClear] = useState(false)
  // const [legalVerification, setLegalVerification] = useState(null)

  // useEffect(() => {
  //   if(user && user.bank_transaction) {
  //     setLegalVerification({
  //       ...legalVerification,
  //       recipient_inn: user.bank_transaction.recipient_inn,
  //       recipient_name: user.bank_transaction.recipient_name,
  //       recipient_ogrn: user.bank_transaction.recipient_ogrn,
  //       recipient_legal_address: user.bank_transaction.recipient_legal_address,
  //       license: 'yes',
  //     })
  //   }
  // }, [user])


  useEffect(() => {
    const scrollTo = (el) => {
      let anchor = document.getElementById(el)
      anchor && anchor.scrollIntoView({block: "center", behavior: "smooth"})
    }
    if (error) {
      let field_key = Object.keys(error)[0]
      scrollTo(field_key)
      return console.error(error)
    }
    return () => clear_errors()
  }, [error])

  // useEffect(() => {
  //   update_local_user({
  //     ...user,
  //     legal_verification: {
  //       ...user.legal_verification,
  //       ...legalVerification,
  //     }
  //   })
  // }, [legalVerification])

  // useEffect(() => {
  //   if (inn_data) {
  //     setLegalVerification({
  //       ...legalVerification,
  //       ...inn_data,
  //     })
  //   }
  // }, [inn_data])

  // useEffect(() => {
  //   if (inn_data) {
  //     update_local_user({
  //       ...user,
  //       legal_verification: {
  //         ...user.legal_verification,
  //         ...inn_data,
  //       }
  //     })
  //   }
  // }, [inn_data])

  useEffect(() => {
    if (spinner) {
      let timer = setTimeout(() => setSpinner(false), 500)
      if (inn_data) {
        update_local_user({
          ...user, legal_verification: {
            ...inn_data
          },
        })
        setSpinner(false)
        clearTimeout(timer)
      } else {
        update_local_user({
          ...user, legal_verification: {
            recipient_inn: '',
            recipient_name: '',
            recipient_ogrn: '',
            recipient_status: '',
            recipient_registration_date: '',
          },
        })
      }
    }

  }, [inn_data, spinner])

  const handleDocChange = (file) => {
    upload_docs(file)
  }

  // const handleChange = (name, value) => {
  //   setLegalVerification({
  //     ...legalVerification,
  //     [name]: value,
  //   })
  // }

  const handleChange = (name, value) => {
    update_local_user({
      ...user,
      legal_verification: {
        ...user.legal_verification,
        [name]: value,
      }
    })
  }

  const handleInnChange = (name, value) => {
    setSpinner(true)
    if (value.length === 10 || value.length === 12) {
      setClear(false)
      getRecipientInnData({[name]: value})
    } else if (value.length !== 10 || value.length !== 12) {
      setClear(true)
      resetRecipientInnData()
    }
  }

  return (
    <>
      <DoubleWrapper full={true} margin={0}>
        <Input
          disabled={true}
          error={error}
          label={'ИНН (Заполняется в реквизитах)'}
          action={handleInnChange}
          name='recipient_inn'
          value={legal_verification && legal_verification.recipient_inn}
        />
        <Input
          clear={clear}
          spinner={spinner}
          label={'ОГРН (ОГРНИП)'}
          action={handleChange}
          name='recipient_ogrn'
          value={legal_verification && legal_verification.recipient_ogrn}
          error={error}
        />
      </DoubleWrapper>
      <SingleWrapper label='Наименование Юр. лица' width={'100%'} margin={'0'}>
        <Input
          error={error}
          clear={clear}
          spinner={spinner}
          label={'Наименование Юр. лица'}
          action={handleChange}
          name='recipient_name'
          value={legal_verification && legal_verification.recipient_name}
        />
      </SingleWrapper>
      <SingleWrapper label='Юридический адрес' width={'100%'} margin={'0'}>
        <Input
          error={error}
          label={'Юридический адрес'}
          action={handleChange}
          name='recipient_legal_address'
          value={legal_verification && legal_verification.recipient_legal_address}
        />
      </SingleWrapper>
      <SingleWrapper label='Фактический адрес' width={'100%'} margin={'0'}>
        <Input
          error={error}
          label={'Фактический адрес'}
          action={handleChange}
          name='recipient_real_address'
          value={legal_verification && legal_verification.recipient_real_address}
        />
      </SingleWrapper>
      <SingleWrapper label='Сканы уставных документов (ИНН, ОГРН)' width={'70%'} margin={'0'}>
        <ObjectFileInput
          accept_all={true}
          error={error}
          label={'Сканы уставных документов (ИНН, ОГРН)'}
          action={handleDocChange}
          name='user_docs'
          value={legal_verification && legal_verification.scans}
        />
      </SingleWrapper>


      <SingleWrapper margin={0} label={'Резидентом какой страны вы являетесь?'} width={'100%'}>
        <SelectInput
          error={error}
          label={'Резидентом какой страны вы являетесь?'}
          action={handleChange}
          name='residency'
          val={legal_verification && legal_verification.residency}
          options={countries}
        />
      </SingleWrapper>
      <div className="team-subtitle">
        Есть ли у вас лицензия туроператора?
      </div>
      <div className="radio-set">
        <FormControl>
          <RadioGroup
            defaultValue={'yes'}
            aria-labelledby="demo-customized-radios"
            name="license"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            <FormControlLabel
              checked={legal_verification && legal_verification.license === 'yes'}
              value={'yes'}
              control={<BpRadio/>}
              label="Да"
            />
            <FormControlLabel
              checked={legal_verification && legal_verification.license === 'no'}
              value={'no'}
              control={<BpRadio/>}
              label="Нет"
            />

          </RadioGroup>
        </FormControl>
      </div>
      <div className="team-subtitle">
        Вы уже проводили туры на коммерческой основе?
      </div>
      <div className="radio-set">
        <FormControl>
          <RadioGroup
            defaultValue={'no'}
            aria-labelledby="demo-customized-radios"
            name="commercial_tours"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            <FormControlLabel
              checked={legal_verification && legal_verification.commercial_tours === 'yes'}
              value={'yes'}
              control={<BpRadio/>}
              label="Да"
            />
            <FormControlLabel
              checked={legal_verification && legal_verification.commercial_tours === 'no'}
              value={'no'}
              control={<BpRadio/>}
              label="Нет"
            />

          </RadioGroup>
        </FormControl>
      </div>
      {legal_verification && legal_verification.commercial_tours === 'yes' && (<>
        <div className="team-subtitle">
          Сколько туров вы проводите в год?
        </div>
        <div className="radio-set">
          <FormControl>
            <RadioGroup
              defaultValue={"до 5"}
              aria-labelledby="demo-customized-radios"
              name="commercial_tours_yearly"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              <FormControlLabel
                checked={legal_verification && legal_verification.commercial_tours_yearly === 'до 5'}
                value="до 5"
                control={<BpRadio/>}
                label="до 5"
              />
              <FormControlLabel
                checked={legal_verification && legal_verification.commercial_tours_yearly === '5-12'}
                value="5-12"
                control={<BpRadio/>}
                label="5-12"
              />
              <FormControlLabel
                checked={legal_verification && legal_verification.commercial_tours_yearly === '13-20'}
                value="13-20"
                control={<BpRadio/>}
                label="13-20"
              />
              <FormControlLabel
                checked={legal_verification && legal_verification.commercial_tours_yearly === '21-30'}
                value="21-30"
                control={<BpRadio/>}
                label="21-30"
              />
              <FormControlLabel
                checked={legal_verification && legal_verification.commercial_tours_yearly === '30+'}
                value="30+"
                control={<BpRadio/>}
                label="30+"
              />

            </RadioGroup>
          </FormControl>
        </div>
        <SingleWrapper
          label='Укажите ссылки на отзывы'
          comment='Вводите через запятую'
          name='reviews_links'
        >
          <TextArea
            action={handleChange}
            name='reviews_links'
            label=''
            value={legal_verification && legal_verification.reviews_links}
            rows='7'
            error={error}
          />
        </SingleWrapper>

      </>)}

      <SingleWrapper margin={0} label={'В какие страны вы планируете организовывать туры?'} width={'100%'}>
        <SelectInput
          error={error}
          label={'В какие страны вы планируете организовывать туры?'}
          action={handleChange}
          name='tours_countries'
          val={legal_verification && legal_verification.tours_countries}
          options={countries}
          multiple={true}
        />
      </SingleWrapper>
      <SingleWrapper
        label='Укажите ссылки на ресурсы (Социальные сети, Сайты), где размещены ваши туры'
        comment='Вводите через запятую'
        name='tours_links'
      >
        <TextArea
          action={handleChange}
          name='tours_links'
          label=''
          value={legal_verification && legal_verification.tours_links}
          rows='7'
          error={error}
        />
      </SingleWrapper>
      <div className="team-subtitle">
        Возникали ли у вас конфликтные ситуации с участниками тура?
      </div>
      <div className="radio-set">
        <FormControl>
          <RadioGroup
            defaultValue={'no'}
            aria-labelledby="demo-customized-radios"
            name="conflicts"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            <FormControlLabel
              checked={legal_verification && legal_verification.conflicts === 'yes'}
              value={'yes'}
              control={<BpRadio/>}
              label="Да"
            />
            <FormControlLabel
              checked={legal_verification && legal_verification.conflicts === 'no'}
              value={'no'}
              control={<BpRadio/>}
              label="Нет"
            />

          </RadioGroup>
        </FormControl>
      </div>
      {legal_verification && legal_verification.conflicts === 'yes' &&
        <SingleWrapper
          label='Опишите вкратце ситуацию'
          comment=''
          name='conflicts_review'
        >
          <TextArea
            action={handleChange}
            name='conflicts_review'
            label=''
            value={legal_verification && legal_verification.conflicts_review}
            rows='7'
            error={error}
          />
        </SingleWrapper>}
      <div className="team-subtitle">
        Имеются ли у вас юридические ограничения?
      </div>
      <div className="radio-set">
        <FormControl>
          <RadioGroup
            defaultValue={'no'}
            aria-labelledby="demo-customized-radios"
            name="legal_restrictions"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            <FormControlLabel
              checked={legal_verification && legal_verification.legal_restrictions === 'yes'}
              value={'yes'}
              control={<BpRadio/>}
              label="Да"
            />
            <FormControlLabel
              checked={legal_verification && legal_verification.legal_restrictions === 'no'}
              value={'no'}
              control={<BpRadio/>}
              label="Нет"
            />

          </RadioGroup>
        </FormControl>
      </div>
      {legal_verification && legal_verification.legal_restrictions === 'yes' && <SingleWrapper
        label='Опишите вкратце ситуацию'
        comment=''
        name='legal_restrictions_review'
      >
        <TextArea
          action={handleChange}
          name='legal_restrictions_review'
          label=''
          value={legal_verification && legal_verification.legal_restrictions_review}
          rows='7'
          error={error}
        />
      </SingleWrapper>}
    </>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  docs: state.auth.docs,
  inn_data: state.auth.inn_data,
  update_verification_status: state.auth.update_verification_status,
  status: state.auth.status,
  error: state.auth.error,
  countries: state.tours.countries,
})

export default connect(mapStateToProps, {
  setPage,
  getUserInn,
  resetUserInn,
  update_local_user,
  getCountries,
  getRecipientInnData,
  resetRecipientInnData,
  updateLegalVerificationData,
  updateIndividualVerificationData,
  clear_verification_status,
  update_user,
  load_user,
  clear_errors,
  upload_docs,
})(Legal)
