import { container, title } from '../../material-kit-react.jsx'

const hardwarePageStyle = {
  container: {
    zIndex: '12',
    color: 'white',
    ...container
  },
  content: {
    backgroundColor: '#383D4A'
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: 'white',
    textDecoration: 'none'
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0'
  },
  main: {
    background: '#252836',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  video: {
    width: '80%',
    margin: 'auto',
    display: 'block',
    paddingTop: '100px'
  }
}

export default hardwarePageStyle
