import { title } from '../../../material-kit-react.jsx'
import { explanation } from '../../../common-styles.jsx'

const libraryStyle = {
  explanation: {
    ...explanation,
    marginTop: '30px'
  },
  section: {
    padding: '70px 0',
    textAlign: 'center'
  },
  title: {
    ...title,
    textAlign: 'center',
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none'
  },
  description: {
    color: '#808080'
  },
  libImage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '250px',
    margin: '70px'
  }
}

export default libraryStyle
