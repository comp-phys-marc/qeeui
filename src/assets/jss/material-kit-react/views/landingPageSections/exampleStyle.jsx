import { title } from '../../../material-kit-react.jsx'

const exampleStyle = {
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
  explanation: {
    color: '#808080',
    textAlign: 'left'
  },
  paddedContainer: {
    padding: '10%'
  },
  badgeBlock: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#ededed',
    padding: '1rem 1rem 1rem 6rem',
    height: '6rem'
  },
  titleBlock: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#ededed',
    padding: '2rem 1rem 1rem 1rem',
    height: '6rem'
  },
  centered: {
    margin: 'auto'
  },
  centeredBadge: {
    margin: 'auto'
  },
  codeblock: {
    textAlign: 'left !important',
    background: '#303030',
    color: '#f1f1f1',
    padding: '5px 5px',
    borderRadius: '2px',
    borderTop: '4px solid #059fff',
    boxShadow: 'inset 0 0 10px #000',
    display: 'block',
    fontSize: '13px',
    lineHeight: '20px',
    wordBreak: 'break-all',
    wordWrap: 'break-word',
    whiteSpace: 'pre'
  }
}

export default exampleStyle
