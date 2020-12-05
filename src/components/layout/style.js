import { makeStyles } from '@material-ui/core/styles'
export default makeStyles(theme => ({
  root: {
    width: '100%',
    // backgroundColor: colors.red[500],
    minHeight: '100vh'
    // backgroundImage: 'url(images/bkg.jpg)',
    // backgroundSize: 300
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    right: theme.spacing(1),
    fontSize: '.85rem',
    zIndex: -1
    // color: colors.red[500]
  }
}))
