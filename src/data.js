export const APPLICATION_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `JWT ${localStorage.getItem('access')}`,
    Accept: 'application/json',
  },
}

export const COUNTRIES =
  [
    {
      name: "Afghanistan",
      native_name: "افغانستان",
      code: "93",
      iso: "AF",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/af.svg",
      mask: "99-999-9999"
    },
    {
      name: "Aland Islands",
      native_name: "Åland Islands",
      code: "358",
      iso: "AX",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ax.svg",
      mask: "(999)999-99-99"
    },
    {
      name: "Albania",
      native_name: "Shqipëri",
      code: "355",
      iso: "AL",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/al.svg",
      mask: "(999)999-999"
    },
    {
      name: "Algeria",
      native_name: "الجزائر",
      code: "213",
      iso: "DZ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/dz.svg",
      mask: "99-999-9999"
    },
    {
      name: "American Samoa",
      native_name: "American Samoa",
      code: "1",
      iso: "AS",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/as.svg",
      mask: "(684)999-9999"
    },
    {
      name: "Andorra",
      native_name: "Andorra",
      code: "376",
      iso: "AD",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ad.svg",
      mask: "999-999"
    },
    {
      name: "Angola",
      native_name: "Angola",
      code: "244",
      iso: "AO",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ao.svg",
      mask: "(999)999-999"
    },
    {
      name: "Anguilla",
      native_name: "Anguilla",
      code: "1",
      iso: "AI",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ai.svg",
      mask: "(264)999-9999"
    },
    {
      name: "Antarctica",
      native_name: "Antarctica",
      code: "672",
      iso: "AQ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/aq.svg",
      mask: "199-999"
    },
    {
      name: "Antigua and Barbuda",
      native_name: "Antigua and Barbuda",
      code: "1",
      iso: "AG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ag.svg",
      mask: "(268)999-9999"
    },
    {
      name: "Argentina",
      native_name: "Argentina",
      code: "54",
      iso: "AR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ar.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Armenia",
      native_name: "Հայաստան",
      code: "374",
      iso: "AM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/am.svg",
      mask: "99-999-999"
    },
    {
      name: "Aruba",
      native_name: "Aruba",
      code: "297",
      iso: "AW",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/aw.svg",
      mask: "999-9999"
    },
    {
      name: "Ascension Island",
      native_name: "Ascension Island",
      code: "247",
      iso: "AC",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sh.svg",
      mask: "9999"
    },
    {
      name: "Australia",
      native_name: "Australia",
      code: "61",
      iso: "AU",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/au.svg",
      mask: "9-9999-9999"
    },
    {
      name: "Austria",
      native_name: "Österreich",
      code: "43",
      iso: "AT",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/at.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Azerbaijan",
      native_name: "Azərbaycan",
      code: "994",
      iso: "AZ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/az.svg",
      mask: "99-999-99-99"
    },
    {
      name: "Bahamas",
      native_name: "Bahamas",
      code: "1",
      iso: "BS",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bs.svg",
      mask: "(242)999-9999"
    },
    {
      name: "Bahrain",
      native_name: "البحرين",
      code: "973",
      iso: "BH",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bh.svg",
      mask: "9999-9999"
    },
    {
      name: "Bangladesh",
      native_name: "বাংলাদেশ",
      code: "880",
      iso: "BD",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bd.svg",
      mask: "1999-999999"
    },
    {
      name: "Barbados",
      native_name: "Barbados",
      code: "1",
      iso: "BB",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bb.svg",
      mask: "(246)999-9999"
    },
    {
      name: "Belarus",
      native_name: "Беларусь",
      code: "375",
      iso: "BY",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/by.svg",
      mask: "(99)999-99-99"
    },
    {
      name: "Belgium",
      native_name: "België",
      code: "32",
      iso: "BE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/be.svg",
      mask: "(999)999-999"
    },
    {
      name: "Belize",
      native_name: "Belize",
      code: "501",
      iso: "BZ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bz.svg",
      mask: "999-9999"
    },
    {
      name: "Benin",
      native_name: "Bénin",
      code: "229",
      iso: "BJ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bj.svg",
      mask: "99-99-9999"
    },
    {
      name: "Bermuda",
      native_name: "Bermuda",
      code: "1",
      iso: "BM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bm.svg",
      mask: "(441)999-9999"
    },
    {
      name: "Bhutan",
      native_name: "འབྲུག",
      code: "975",
      iso: "BT",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bt.svg",
      mask: "99-999-999"
    },
    {
      name: "Bolivia",
      native_name: "Bolivia",
      code: "591",
      iso: "BO",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bo.svg",
      mask: "9-999-9999"
    },
    {
      name: "Bosnia and Herzegovina",
      native_name: "Босна и Херцеговина",
      code: "387",
      iso: "BA",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ba.svg",
      mask: "99-99999"
    },
    {
      name: "Botswana",
      native_name: "Botswana",
      code: "267",
      iso: "BW",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bw.svg",
      mask: "99-999-999"
    },
    {
      name: "Brazil",
      native_name: "Brasil",
      code: "55",
      iso: "BR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/br.svg",
      mask: "(99)99999-9999"
    },
    {
      name: "British Indian Ocean Territory",
      native_name: "British Indian Ocean Territory",
      code: "246",
      iso: "IO",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/io.svg",
      mask: "999-9999"
    },
    {
      name: "Brunei Darussalam",
      native_name: "Brunei Darussalam",
      code: "673",
      iso: "BN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bn.svg",
      mask: "999-9999"
    },
    {
      name: "Bulgaria",
      native_name: "България",
      code: "359",
      iso: "BG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bg.svg",
      mask: "(999)999-999"
    },
    {
      name: "Burkina Faso",
      native_name: "Burkina Faso",
      code: "226",
      iso: "BF",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bf.svg",
      mask: "99-99-9999"
    },
    {
      name: "Burundi",
      native_name: "Uburundi",
      code: "257",
      iso: "BI",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bi.svg",
      mask: "99-99-9999"
    },
    {
      name: "Cambodia",
      native_name: "កម្ពុជា",
      code: "855",
      iso: "KH",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/kh.svg",
      mask: "99-999-999"
    },
    {
      name: "Cameroon",
      native_name: "Cameroun",
      code: "237",
      iso: "CM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cm.svg",
      mask: "9999-9999"
    },
    {
      name: "Canada",
      native_name: "Canada",
      code: "1",
      iso: "CA",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ca.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Cape Verde",
      native_name: "Kabu Verdi",
      code: "238",
      iso: "CV",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cv.svg",
      mask: "(999)99-99"
    },
    {
      name: "Cayman Islands",
      native_name: "Cayman Islands",
      code: "1",
      iso: "KY",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ky.svg",
      mask: "(345)999-9999"
    },
    {
      name: "Central African Republic",
      native_name: "République centrafricaine",
      code: "236",
      iso: "CF",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cf.svg",
      mask: "99-99-9999"
    },
    {
      name: "Chad",
      native_name: "Tchad",
      code: "235",
      iso: "TD",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/td.svg",
      mask: "99-99-99-99"
    },
    {
      name: "Chile",
      native_name: "Chile",
      code: "56",
      iso: "CL",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cl.svg",
      mask: "9-9999-9999"
    },
    {
      name: "China",
      native_name: "中国",
      code: "86",
      iso: "CN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cn.svg",
      mask: "(999)9999-9999",
    },
    {
      name: "Christmas Island",
      native_name: "Christmas Island",
      code: "61",
      iso: "CX",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cx.svg",
      mask: "9-9999-9999"
    },
    {
      name: "Cocos (Keeling) Islands",
      native_name: "Cocos (Keeling) Islands",
      code: "61",
      iso: "CC",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cc.svg",
      mask: "9-9999-9999"
    },
    {
      name: "Colombia",
      native_name: "Colombia",
      code: "57",
      iso: "CO",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/co.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Comoros",
      native_name: "جزر القمر",
      code: "269",
      iso: "KM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/km.svg",
      mask: "99-99999"
    },
    {
      name: "Congo",
      native_name: "Congo-Brazzaville",
      code: "242",
      iso: "CG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cg.svg",
      mask: "99-99999"
    },
    {
      name: "Cook Islands",
      native_name: "Cook Islands",
      code: "682",
      iso: "CK",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ck.svg",
      mask: "99-999"
    },
    {
      name: "Costa Rica",
      native_name: "Costa Rica",
      code: "506",
      iso: "CR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cr.svg",
      mask: "9999-9999"
    },
    {
      name: "Croatia",
      native_name: "Hrvatska",
      code: "385",
      iso: "HR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/hr.svg",
      mask: "99-999-999"
    },
    {
      name: "Cuba",
      native_name: "Cuba",
      code: "53",
      iso: "CU",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cu.svg",
      mask: "9-999-9999"
    },
    {
      name: "Cyprus",
      native_name: "Κύπρος",
      code: "357",
      iso: "CY",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cy.svg",
      mask: "99-999-999"
    },
    {
      name: "Czech Republic",
      native_name: "Česká republika",
      code: "420",
      iso: "CZ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cz.svg",
      mask: "(999)999-999"
    },
    {
      name: "Democratic Republic of the Congo",
      native_name: "Jamhuri ya Kidemokrasia ya Kongo",
      code: "243",
      iso: "CD",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/cd.svg",
      mask: "(999)999-999"
    },
    {
      name: "Denmark",
      native_name: "Danmark",
      code: "45",
      iso: "DK",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/dk.svg",
      mask: "99-99-99-99"
    },
    {
      name: "Djibouti",
      native_name: "Djibouti",
      code: "253",
      iso: "DJ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/dj.svg",
      mask: "99-99-99-99"
    },
    {
      name: "Dominica",
      native_name: "República Dominicana)",
      code: "1",
      iso: "DM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/dm.svg",
      mask: "(767)999-9999"
    },
    {
      name: "Dominican Republic",
      native_name: "Dominican Republic",
      code: "1",
      iso: "DO",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/do.svg",
      mask: "(899)999-9999",
    },
    {
      name: "Ecuador",
      native_name: "Ecuador",
      code: "593",
      iso: "EC",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ec.svg",
      mask: "99-999-9999"
    },
    {
      name: "Egypt",
      native_name: "مصر",
      code: "20",
      iso: "EG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/eg.svg",
      mask: "(999)999-9999"
    },
    {
      name: "El Salvador",
      native_name: "El Salvador",
      code: "503",
      iso: "SV",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sv.svg",
      mask: "99-99-9999"
    },
    {
      name: "Equatorial Guinea",
      native_name: "Guinea Ecuatorial",
      code: "240",
      iso: "GQ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gq.svg",
      mask: "99-999-9999"
    },
    {
      name: "Eritrea",
      native_name: "Eritrea",
      code: "291",
      iso: "ER",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/er.svg",
      mask: "9-999-999"
    },
    {
      name: "Estonia",
      native_name: "Eesti",
      code: "372",
      iso: "EE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ee.svg",
      mask: "9999-9999"
    },
    {
      name: "Eswatini",
      native_name: "Eswatini",
      code: "268",
      iso: "SZ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sz.svg",
      mask: "99-99-9999"
    },
    {
      name: "Ethiopia",
      native_name: "Ethiopia",
      code: "251",
      iso: "ET",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/et.svg",
      mask: "99-999-9999"
    },
    {
      name: "Falkland Islands (Malvinas)",
      native_name: "Islas Malvinas",
      code: "500",
      iso: "FK",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/fk.svg",
      mask: "99999"
    },
    {
      name: "Faroe Islands",
      native_name: "Føroyar",
      code: "298",
      iso: "FO",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/fo.svg",
      mask: "999-999"
    },
    {
      name: "Fiji",
      native_name: "Fiji",
      code: "679",
      iso: "FJ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/fj.svg",
      mask: "99-99999"
    },
    {
      name: "Finland",
      native_name: "Suomi",
      code: "358",
      iso: "FI",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/fi.svg",
      mask: "(999)999-99-99"
    },
    {
      name: "France",
      native_name: "France",
      code: "33",
      iso: "FR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/fr.svg",
      mask: "(999)999-999"
    },
    {
      name: "French Guiana",
      native_name: "Guyane française",
      code: "594",
      iso: "GF",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gf.svg",
      mask: "99999-9999"
    },
    {
      name: "French Polynesia",
      native_name: "Polynésie française",
      code: "689",
      iso: "PF",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/pf.svg",
      mask: "99-99-99"
    },
    {
      name: "Gabon",
      native_name: "Gabon",
      code: "241",
      iso: "GA",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ga.svg",
      mask: "9-99-99-99"
    },
    {
      name: "Gambia",
      native_name: "Gambia",
      code: "220",
      iso: "GM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gm.svg",
      mask: "(999)99-99"
    },
    {
      name: "Georgia",
      native_name: "საქართველო",
      code: "995",
      iso: "GE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ge.svg",
      mask: "(999)999-999"
    },
    {
      name: "Germany",
      native_name: "Deutschland",
      code: "49",
      iso: "DE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/de.svg",
      mask: "(999)999-9999",
    },
    {
      name: "Ghana",
      native_name: "Gaana",
      code: "233",
      iso: "GH",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gh.svg",
      mask: "(999)999-999"
    },
    {
      name: "Gibraltar",
      native_name: "Gibraltar",
      code: "350",
      iso: "GI",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gi.svg",
      mask: "999-99999"
    },
    {
      name: "Greece",
      native_name: "Ελλάδα",
      code: "30",
      iso: "GR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gr.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Greenland",
      native_name: "Kalaallit Nunaat",
      code: "299",
      iso: "GL",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gl.svg",
      mask: "99-99-99"
    },
    {
      name: "Grenada",
      native_name: "Grenada",
      code: "1",
      iso: "GD",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gd.svg",
      mask: "(473)999-9999"
    },
    {
      name: "Guadeloupe",
      native_name: "Guadeloupe",
      code: "590",
      iso: "GP",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gp.svg",
      mask: "(999)999-999"
    },
    {
      name: "Guam",
      native_name: "Guam",
      code: "1",
      iso: "GU",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gu.svg",
      mask: "(671)999-9999"
    },
    {
      name: "Guatemala",
      native_name: "Guatemala",
      code: "502",
      iso: "GT",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gt.svg",
      mask: "9-999-9999"
    },
    {
      name: "Guernsey",
      native_name: "Guernsey",
      code: "44",
      iso: "GG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gg.svg",
      mask: "(9999)999999"
    },
    {
      name: "Guinea",
      native_name: "Guinée",
      code: "224",
      iso: "GN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gn.svg",
      mask: "99-999-999"
    },
    {
      name: "Guinea-Bissau",
      native_name: "Guiné Bissau",
      code: "245",
      iso: "GW",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gw.svg",
      mask: "9-999999"
    },
    {
      name: "Guyana",
      native_name: "Guyana",
      code: "592",
      iso: "GY",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gy.svg",
      mask: "999-9999"
    },
    {
      name: "Haiti",
      native_name: "Haiti",
      code: "509",
      iso: "HT",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ht.svg",
      mask: "99-99-9999"
    },
    {
      name: "Holy See (Vatican City State)",
      native_name: "Holy See (Vatican City State)",
      code: "39",
      iso: "VA",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/va.svg",
      mask: "06 69899999"
    },
    {
      name: "Honduras",
      native_name: "Honduras",
      code: "504",
      iso: "HN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/hn.svg",
      mask: "9999-9999"
    },
    {
      name: "Hong Kong",
      native_name: "香港",
      code: "852",
      iso: "HK",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/hk.svg",
      mask: "9999-9999"
    },
    {
      name: "Hungary",
      native_name: "Magyarország",
      code: "36",
      iso: "HU",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/hu.svg",
      mask: "(999)999-999"
    },
    {
      name: "Iceland",
      native_name: "Ísland",
      code: "354",
      iso: "IS",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/is.svg",
      mask: "999-9999"
    },
    {
      name: "India",
      native_name: "भारत",
      code: "91",
      iso: "IN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/in.svg",
      mask: "(9999)999-999"
    },
    {
      name: "Indonesia",
      native_name: "Indonesia",
      code: "62",
      iso: "ID",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/id.svg",
      mask: "(899)999-99-999"
    },
    {
      name: "Iran",
      native_name: "ایران",
      code: "98",
      iso: "IR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ir.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Iraq",
      native_name: "العراق",
      code: "924",
      iso: "IQ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/iq.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Ireland",
      native_name: "Ireland",
      code: "353",
      iso: "IE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ie.svg",
      mask: "(999)999-999"
    },
    {
      name: "Isle of Man",
      native_name: "Isle of Man",
      code: "44",
      iso: "IM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/im.svg",
      mask: "(9999)999999"
    },
    {
      name: "Israel",
      native_name: "ישראל",
      code: "972",
      iso: "IL",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/il.svg",
      mask: "9-999-9999",
    },
    {
      name: "Italy",
      native_name: "Italia",
      code: "39",
      iso: "IT",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/it.svg",
      mask: "(999)9999-999"
    },
    {
      name: "Ivory Coast / Cote d'Ivoire",
      native_name: "Ivory Coast / Cote d'Ivoire",
      code: "225",
      iso: "CI",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ci.svg",
      mask: "99-999-999"
    },
    {
      name: "Jamaica",
      native_name: "Jamaica",
      code: "1",
      iso: "JM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/jm.svg",
      mask: "(876)999-9999"
    },
    {
      name: "Japan",
      native_name: "日本",
      code: "81",
      iso: "JP",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/jp.svg",
      mask: "(999)999-999",
    },
    {
      name: "Jersey",
      native_name: "Jersey",
      code: "44",
      iso: "JE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/je.svg",
      mask: "(9999)9999-999999"
    },
    {
      name: "Jordan",
      native_name: "الأردن",
      code: "962",
      iso: "JO",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/jo.svg",
      mask: "9-9999-9999"
    },
    {
      name: "Kazakhstan",
      native_name: "Казахстан",
      code: "77",
      iso: "KZ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/kz.svg",
      mask: "(999)999-99-99",
    },
    {
      name: "Kenya",
      native_name: "Kenya",
      code: "254",
      iso: "KE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ke.svg",
      mask: "999-999999"
    },
    {
      name: "Kiribati",
      native_name: "Kiribati",
      code: "686",
      iso: "KI",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ki.svg",
      mask: "99-999"
    },
    {
      name: "Korea, Democratic People's Republic of Korea",
      native_name: "조선 민주주의 인민 공화국",
      code: "850",
      iso: "KP",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/kp.svg",
      mask: "9999-9999999999999"
    },
    {
      name: "Korea, Republic of South Korea",
      native_name: "대한민국",
      code: "82",
      iso: "KR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/kr.svg",
      mask: "99-999-9999"
    },
    {
      name: "Kosovo",
      native_name: "Kosovo",
      code: "383",
      iso: "XK",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/xk.svg",
      mask: "999-999-999"
    },
    {
      name: "Kuwait",
      native_name: "الكويت",
      code: "965",
      iso: "KW",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/kw.svg",
      mask: "9999-9999"
    },
    {
      name: "Kyrgyzstan",
      native_name: "Кыргызстан",
      code: "996",
      iso: "KG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/kg.svg",
      mask: "(999)999-999"
    },
    {
      name: "Laos",
      native_name: "ລາວ",
      code: "856",
      iso: "LA",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/la.svg",
      mask: "99-999-999",
    },
    {
      name: "Latvia",
      native_name: "Latvija",
      code: "371",
      iso: "LV",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/lv.svg",
      mask: "99-999-999"
    },
    {
      name: "Lebanon",
      native_name: "لبنان",
      code: "961",
      iso: "LB",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/lb.svg",
      mask: "99-999-999"
    },
    {
      name: "Lesotho",
      native_name: "Lesotho",
      code: "266",
      iso: "LS",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ls.svg",
      mask: "9-999-9999"
    },
    {
      name: "Liberia",
      native_name: "Liberia",
      code: "231",
      iso: "LR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/lr.svg",
      mask: "99-999-999"
    },
    {
      name: "Libya",
      native_name: "ليبيا",
      code: "218",
      iso: "LY",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ly.svg",
      mask: "99-999-999",
    },
    {
      name: "Liechtenstein",
      native_name: "Liechtenstein",
      code: "423",
      iso: "LI",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/li.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Lithuania",
      native_name: "Lietuva",
      code: "370",
      iso: "LT",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/lt.svg",
      mask: "(999)99-999"
    },
    {
      name: "Luxembourg",
      native_name: "Luxembourg",
      code: "352",
      iso: "LU",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/lu.svg",
      mask: "(999)999-999"
    },
    {
      name: "Macau",
      native_name: "澳門",
      code: "853",
      iso: "MO",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mo.svg",
      mask: "9999-9999"
    },
    {
      name: "Madagascar",
      native_name: "Madagasikara",
      code: "261",
      iso: "MG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mg.svg",
      mask: "99-99-99999"
    },
    {
      name: "Malawi",
      native_name: "Malawi",
      code: "265",
      iso: "MW",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mw.svg",
      mask: "9-9999-9999"
    },
    {
      name: "Malaysia",
      native_name: "Malaysia",
      code: "60",
      iso: "MY",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/my.svg",
      mask: "(999)999-999",
    },
    {
      name: "Maldives",
      native_name: "Maldives",
      code: "960",
      iso: "MV",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mv.svg",
      mask: "999-9999"
    },
    {
      name: "Mali",
      native_name: "Mali",
      code: "223",
      iso: "ML",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ml.svg",
      mask: "99-99-9999"
    },
    {
      name: "Malta",
      native_name: "Malta",
      code: "356",
      iso: "MT",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mt.svg",
      mask: "9999-9999"
    },
    {
      name: "Marshall Islands",
      native_name: "Marshall Islands",
      code: "692",
      iso: "MH",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mh.svg",
      mask: "999-9999"
    },
    {
      name: "Martinique",
      native_name: "Martinique",
      code: "596",
      iso: "MQ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mq.svg",
      mask: "(999)99-99-99"
    },
    {
      name: "Mauritania",
      native_name: "موريتانيا",
      code: "222",
      iso: "MR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mr.svg",
      mask: "99-99-9999"
    },
    {
      name: "Mauritius",
      native_name: "Moris",
      code: "230",
      iso: "MU",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mu.svg",
      mask: "999-9999"
    },
    {
      name: "Mayotte",
      native_name: "Mayotte",
      code: "262",
      iso: "YT",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/yt.svg",
      mask: "99999-9999"
    },
    {
      name: "Mexico",
      native_name: "México",
      code: "52",
      iso: "MX",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mx.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Micronesia, Federated States of Micronesia",
      native_name: "Micronesia, Federated States of Micronesia",
      code: "691",
      iso: "FM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/fm.svg",
      mask: "999-9999"
    },
    {
      name: "Moldova",
      native_name: "Republica Moldova",
      code: "373",
      iso: "MD",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/md.svg",
      mask: "9999-9999"
    },
    {
      name: "Monaco",
      native_name: "Monaco",
      code: "377",
      iso: "MC",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mc.svg",
      mask: "(999)999-999"
    },
    {
      name: "Mongolia",
      native_name: "Монгол",
      code: "976",
      iso: "MN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mn.svg",
      mask: "99-99-9999"
    },
    {
      name: "Montenegro",
      native_name: "Crna Gora",
      code: "382",
      iso: "ME",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/me.svg",
      mask: "99-999-999"
    },
    {
      name: "Montserrat",
      native_name: "Montserrat",
      code: "1",
      iso: "MS",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ms.svg",
      mask: "(664)999-9999"
    },
    {
      name: "Morocco",
      native_name: "المغرب",
      code: "212",
      iso: "MA",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ma.svg",
      mask: "99-9999-999"
    },
    {
      name: "Mozambique",
      native_name: "Moçambique",
      code: "258",
      iso: "MZ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mz.svg",
      mask: "99-999-999"
    },
    {
      name: "Myanmar",
      native_name: "မြန်မာ",
      code: "95",
      iso: "MM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mm.svg",
      mask: "99-999-999"
    },
    {
      name: "Namibia",
      native_name: "Namibië",
      code: "224",
      iso: "NA",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/na.svg",
      mask: "99-999-9999"
    },
    {
      name: "Nauru",
      native_name: "Nauru",
      code: "674",
      iso: "NR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/nr.svg",
      mask: "999-9999"
    },
    {
      name: "Nepal",
      native_name: "नेपाल",
      code: "977",
      iso: "NP",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/np.svg",
      mask: "99-999-999"
    },
    {
      name: "Netherlands",
      native_name: "Nederland",
      code: "31",
      iso: "NL",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/nl.svg",
      mask: "99-999-9999"
    },
    {
      name: "Netherlands Antilles",
      native_name: "Netherlands Antilles",
      code: "599",
      iso: "AN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/an.svg",
      mask: "9999-9999"
    },
    {
      name: "New Caledonia",
      native_name: "Nouvelle-Calédonie",
      code: "687",
      iso: "NC",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/nc.svg",
      mask: "99-9999"
    },
    {
      name: "New Zealand",
      native_name: "New Zealand",
      code: "24",
      iso: "NZ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/nz.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Nicaragua",
      native_name: "Nicaragua",
      code: "505",
      iso: "NI",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ni.svg",
      mask: "9999-9999"
    },
    {
      name: "Niger",
      native_name: "Nijar",
      code: "227",
      iso: "NE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ne.svg",
      mask: "99-99-9999"
    },
    {
      name: "Nigeria",
      native_name: "Nigeria",
      code: "234",
      iso: "NG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ng.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Niue",
      native_name: "Niue",
      code: "683",
      iso: "NU",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/nu.svg",
      mask: "9999"
    },
    {
      name: "Norfolk Island",
      native_name: "Norfolk Island",
      code: "672",
      iso: "NF",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/nf.svg",
      mask: "399-999"
    },
    {
      name: "North Macedonia",
      native_name: "Македонија",
      code: "389",
      iso: "MK",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mk.svg",
      mask: "99-999-999"
    },
    {
      name: "Northern Mariana Islands",
      native_name: "Northern Mariana Islands",
      code: "1",
      iso: "MP",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mp.svg",
      mask: "(670)999-9999"
    },
    {
      name: "Norway",
      native_name: "Norge",
      code: "47",
      iso: "NO",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/no.svg",
      mask: "(999)99-999"
    },
    {
      name: "Oman",
      native_name: "عُمان",
      code: "968",
      iso: "OM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/om.svg",
      mask: "99-999-999"
    },
    {
      name: "Pakistan",
      native_name: "پاکستان",
      code: "92",
      iso: "PK",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/pk.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Palau",
      native_name: "Palau",
      code: "680",
      iso: "PW",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/pw.svg",
      mask: "999-9999"
    },
    {
      name: "Palestine",
      native_name: "فلسطين",
      code: "970",
      iso: "PS",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ps.svg",
      mask: "99-999-9999"
    },
    {
      name: "Panama",
      native_name: "Panamá",
      code: "507",
      iso: "PA",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/pa.svg",
      mask: "999-9999"
    },
    {
      name: "Papua New Guinea",
      native_name: "Papua New Guinea",
      code: "675",
      iso: "PG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/pg.svg",
      mask: "(999)99-999"
    },
    {
      name: "Paraguay",
      native_name: "Paraguay",
      code: "595",
      iso: "PY",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/py.svg",
      mask: "(999)999-999"
    },
    {
      name: "Peru",
      native_name: "Perú",
      code: "51",
      iso: "PE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/pe.svg",
      mask: "(999)999-999"
    },
    {
      name: "Philippines",
      native_name: "Philippines",
      code: "63",
      iso: "PH",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ph.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Pitcairn",
      native_name: "Pitcairn",
      code: "870",
      iso: "PN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/pn.svg",
      mask: "999-999-999"
    },
    {
      name: "Poland",
      native_name: "Polska",
      code: "48",
      iso: "PL",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/pl.svg",
      mask: "(999)999-999"
    },
    {
      name: "Portugal",
      native_name: "Portugal",
      code: "351",
      iso: "PT",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/pt.svg",
      mask: "99-999-9999"
    },
    {
      name: "Puerto Rico",
      native_name: "Puerto Rico",
      code: "1",
      iso: "PR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/pr.svg",
      mask: "(999) 999 9999"
    },
    {
      name: "Qatar",
      native_name: "قطر",
      code: "974",
      iso: "QA",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/qa.svg",
      mask: "9999-9999"
    },
    {
      name: "Reunion",
      native_name: "La Réunion",
      code: "262",
      iso: "RE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/re.svg",
      mask: "99999-9999"
    },
    {
      name: "Romania",
      native_name: "România",
      code: "40",
      iso: "RO",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ro.svg",
      mask: "99-999-9999"
    },
    {
      name: "Russia",
      native_name: "Россия",
      code: "7",
      iso: "RU",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ru.svg",
      mask: "(999) 999-99-99"
    },
    {
      name: "Rwanda",
      native_name: "Rwanda",
      code: "250",
      iso: "RW",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/rw.svg",
      mask: "(999)999-999"
    },
    {
      name: "Saint Barthelemy",
      native_name: "Saint Barthelemy",
      code: "590",
      iso: "BL",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bl.svg",
      mask: "999-99-99-99"
    },
    {
      name: "Saint Helena, Ascension and Tristan Da Cunha",
      native_name: "Saint Helena, Ascension and Tristan Da Cunha",
      code: "290",
      iso: "SH",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sh.svg",
      mask: "9999"
    },
    {
      name: "Saint Kitts and Nevis",
      native_name: "Saint Kitts and Nevis",
      code: "1",
      iso: "KN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/kn.svg",
      mask: "(869)999-9999"
    },
    {
      name: "Saint Lucia",
      native_name: "Saint Lucia",
      code: "1",
      iso: "LC",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/lc.svg",
      mask: "(758)999-9999"
    },
    {
      name: "Saint Martin",
      native_name: "Saint-Martin (partie française)",
      code: "590",
      iso: "MF",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/mf.svg",
      mask: "(999)999-999"
    },
    {
      name: "Saint Pierre and Miquelon",
      native_name: "Saint-Pierre-et-Miquelon",
      code: "508",
      iso: "PM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/pm.svg",
      mask: "99-9999"
    },
    {
      name: "Saint Vincent and the Grenadines",
      native_name: "Saint Vincent and the Grenadines",
      code: "1",
      iso: "VC",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/vc.svg",
      mask: "(784)999-9999"
    },
    {
      name: "Samoa",
      native_name: "Samoa",
      code: "685",
      iso: "WS",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ws.svg",
      mask: "99-9999"
    },
    {
      name: "San Marino",
      native_name: "San Marino",
      code: "378",
      iso: "SM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sm.svg",
      mask: "9999-999999"
    },
    {
      name: "Sao Tome and Principe",
      native_name: "São Tomé e Príncipe",
      code: "239",
      iso: "ST",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/st.svg",
      mask: "99-99999"
    },
    {
      name: "Saudi Arabia",
      native_name: "المملكة العربية السعودية",
      code: "966",
      iso: "SA",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sa.svg",
      mask: "99-9999-9999"
    },
    {
      name: "Senegal",
      native_name: "Sénégal",
      code: "221",
      iso: "SN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sn.svg",
      mask: "99-999-9999"
    },
    {
      name: "Serbia",
      native_name: "Србија",
      code: "381",
      iso: "RS",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/rs.svg",
      mask: "99-999-9999"
    },
    {
      name: "Seychelles",
      native_name: "Seychelles",
      code: "248",
      iso: "SC",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sc.svg",
      mask: "9-999-999"
    },
    {
      name: "Sierra Leone",
      native_name: "Sierra Leone",
      code: "232",
      iso: "SL",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sl.svg",
      mask: "99-999999"
    },
    {
      name: "Singapore",
      native_name: "Singapore",
      code: "65",
      iso: "SG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sg.svg",
      mask: "9999-9999"
    },
    {
      name: "Sint Maarten",
      native_name: "Sint Maarten",
      code: "1",
      iso: "SX",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sx.svg",
      mask: "(721)999-9999"
    },
    {
      name: "Slovakia",
      native_name: "Slovensko",
      code: "421",
      iso: "SK",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sk.svg",
      mask: "(999)999-999"
    },
    {
      name: "Slovenia",
      native_name: "Slovenija",
      code: "386",
      iso: "SI",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/si.svg",
      mask: "99-999-999"
    },
    {
      name: "Solomon Islands",
      native_name: "Solomon Islands",
      code: "677",
      iso: "SB",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sb.svg",
      mask: "999-9999"
    },
    {
      name: "Somalia",
      native_name: "Soomaaliya",
      code: "252",
      iso: "SO",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/so.svg",
      mask: "99-999-999"
    },
    {
      name: "South Africa",
      native_name: "South Africa",
      code: "27",
      iso: "ZA",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/za.svg",
      mask: "99-999-9999"
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      native_name: "South Georgia and the South Sandwich Islands",
      code: "500",
      iso: "GS",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gs.svg",
      mask: "99999"
    },
    {
      name: "South Sudan",
      native_name: "جنوب السودان",
      code: "211",
      iso: "SS",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ss.svg",
      mask: "99-999-9999"
    },
    {
      name: "Spain",
      native_name: "España",
      code: "34",
      iso: "ES",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/es.svg",
      mask: "(999)999-999"
    },
    {
      name: "Sri Lanka",
      native_name: "ශ්‍රී ලංකාව",
      code: "94",
      iso: "LK",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/lk.svg",
      mask: "99-999-9999"
    },
    {
      name: "Sudan",
      native_name: "السودان",
      code: "249",
      iso: "SD",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sd.svg",
      mask: "99-999-9999"
    },
    {
      name: "Suriname",
      native_name: "Suriname",
      code: "597",
      iso: "SR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sr.svg",
      mask: "999-9999"
    },
    {
      name: "Svalbard and Jan Mayen",
      native_name: "Svalbard and Jan Mayen",
      code: "47",
      iso: "SJ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sj.svg",
      mask: "(999)99-999"
    },
    {
      name: "Sweden",
      native_name: "Sverige",
      code: "46",
      iso: "SE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/se.svg",
      mask: "99-999-9999"
    },
    {
      name: "Switzerland",
      native_name: "Schweiz",
      code: "41",
      iso: "CH",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ch.svg",
      mask: "99-999-9999"
    },
    {
      name: "Syrian Arab Republic",
      native_name: "سوريا",
      code: "963",
      iso: "SY",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sy.svg",
      mask: "99-9999-999"
    },
    {
      name: "Taiwan",
      native_name: "台灣",
      code: "886",
      iso: "TW",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/tw.svg",
      mask: "9-9999-9999"
    },
    {
      name: "Tajikistan",
      native_name: "Tajikistan",
      code: "992",
      iso: "TJ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/tj.svg",
      mask: "99-999-9999"
    },
    {
      name: "Tanzania, United Republic of Tanzania",
      native_name: "Tanzania, United Republic of Tanzania",
      code: "255",
      iso: "TZ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/tz.svg",
      mask: "99-999-9999"
    },
    {
      name: "Thailand",
      native_name: "ไทย",
      code: "66",
      iso: "TH",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/th.svg",
      mask: "99-999-9999"
    },
    {
      name: "Timor-Leste",
      native_name: "Timor-Leste",
      code: "670",
      iso: "TL",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/tl.svg",
      mask: "999-99999",
    },
    {
      name: "Togo",
      native_name: "Togo",
      code: "228",
      iso: "TG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/tg.svg",
      mask: "99-999-999"
    },
    {
      name: "Tokelau",
      native_name: "Tokelau",
      code: "690",
      iso: "TK",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/tk.svg",
      mask: "9999"
    },
    {
      name: "Tonga",
      native_name: "Tonga",
      code: "676",
      iso: "TO",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/to.svg",
      mask: "99999"
    },
    {
      name: "Trinidad and Tobago",
      native_name: "Trinidad and Tobago",
      code: "1",
      iso: "TT",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/tt.svg",
      mask: "(868)999-9999"
    },
    {
      name: "Tunisia",
      native_name: "تونس",
      code: "216",
      iso: "TN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/tn.svg",
      mask: "99-999-999"
    },
    {
      name: "Turkey",
      native_name: "Türkiye",
      code: "90",
      iso: "TR",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/tr.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Turkmenistan",
      native_name: "Turkmenistan",
      code: "993",
      iso: "TM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/tm.svg",
      mask: "9-999-9999"
    },
    {
      name: "Turks and Caicos Islands",
      native_name: "Turks and Caicos Islands",
      code: "1",
      iso: "TC",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/tc.svg",
      mask: "(249)999-999"
    },
    {
      name: "Tuvalu",
      native_name: "Tuvalu",
      code: "688",
      iso: "TV",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/tv.svg",
      mask: "999999"
    },
    {
      name: "Uganda",
      native_name: "Uganda",
      code: "256",
      iso: "UG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ug.svg",
      mask: "(999)999-999"
    },
    {
      name: "Ukraine",
      native_name: "Україна",
      code: "380",
      iso: "UA",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ua.svg",
      mask: "(99)999-99-99"
    },
    {
      name: "United Arab Emirates",
      native_name: "الإمارات العربية المتحدة",
      code: "971",
      iso: "AE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ae.svg",
      mask: "99-999-9999",
    },
    {
      name: "United Kingdom",
      native_name: "United Kingdom",
      code: "44",
      iso: "GB",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/gb.svg",
      mask: "99-9999-9999"
    },
    {
      name: "United States",
      native_name: "United States",
      code: "1",
      iso: "US",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/us.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Uruguay",
      native_name: "Uruguay",
      code: "598",
      iso: "UY",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/uy.svg",
      mask: "9-999-99-99"
    },
    {
      name: "Uzbekistan",
      native_name: "Oʻzbekiston",
      code: "998",
      iso: "UZ",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/uz.svg",
      mask: "99-999-9999"
    },
    {
      name: "Vanuatu",
      native_name: "Vanuatu",
      code: "678",
      iso: "VU",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/vu.svg",
      mask: "99-99999"
    },
    {
      name: "Venezuela, Bolivarian Republic of Venezuela",
      native_name: "Venezuela, Bolivarian Republic of Venezuela",
      code: "58",
      iso: "VE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ve.svg",
      mask: "(999)999-9999"
    },
    {
      name: "Vietnam",
      native_name: "Việt Nam",
      code: "84",
      iso: "VN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/vn.svg",
      mask: "(999)9999-999"
    },
    {
      name: "Virgin Islands, British",
      native_name: "Virgin Islands, British",
      code: "1",
      iso: "VG",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/vg.svg",
      mask: "(284)999-9999"
    },
    {
      name: "Virgin Islands, U.S.",
      native_name: "Virgin Islands, U.S.",
      code: "1",
      iso: "VI",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/vi.svg",
      mask: "(340)999-9999"
    },
    {
      name: "Wallis and Futuna",
      native_name: "Wallis-et-Futuna",
      code: "681",
      iso: "WF",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/wf.svg",
      mask: "99-9999"
    },
    {
      name: "Yemen",
      native_name: "اليمن",
      code: "967",
      iso: "YE",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/ye.svg",
      mask: "999-999-999"
    },
    {
      name: "Zambia",
      native_name: "Zambia",
      code: "260",
      iso: "ZM",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/zm.svg",
      mask: "99-999-9999"
    },
    {
      name: "Zimbabwe",
      native_name: "Zimbabwe",
      code: "263",
      iso: "ZW",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/zw.svg",
      mask: "9-999999"
    }
  ]