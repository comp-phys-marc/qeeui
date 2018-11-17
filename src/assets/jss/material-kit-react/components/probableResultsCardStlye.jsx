import dashboardCardStyle from '../../material-dashboard-react/views/dashboardCardStyle.jsx'

const resultsStyle = {
  ...dashboardCardStyle,
  paddedContainer: {
    paddingLeft: '10%',
    paddingRight: '10%'
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
  }
}

export default resultsStyle
