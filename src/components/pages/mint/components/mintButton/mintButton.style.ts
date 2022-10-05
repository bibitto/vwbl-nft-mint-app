import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
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
