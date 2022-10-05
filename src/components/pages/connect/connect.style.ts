import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      opacity: 0.6,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  container: {
    marginTop: 0,
    display: 'flex',
  },
  content: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(30, 6),
    width: 375,
    height: '100vh',
    marginRight: theme.spacing(45),
  },
  connectWalletCard: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
    padding: theme.spacing(8, 7),
    borderRadius: 30,
    marginTop: theme.spacing(16),
  },
  connectButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: '100%',
    borderRadius: 38,
    fontSize: 18,
    '&:hover': {
      opacity: 0.6,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  installWalletCard: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
    padding: theme.spacing(8, 7),
    borderRadius: 30,
    marginTop: theme.spacing(10),
  },
  installWalletButton: {
    width: '100%',
    border: '1px solid #090909',
    borderRadius: 38,
    fontSize: 18,
    marginTop: theme.spacing(4),
  },
  '&:hover': {
    opacity: 0.6,
    backgroundColor: theme.palette.primary.contrastText,
  },
}));
