import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
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
  mintButton: {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    width: '100%',
    fontSize: 18,
    borderRadius: 38,
    '&:hover': {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
      opacity: 0.6,
    },
  },
}));
