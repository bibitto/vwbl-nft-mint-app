import { useStyles } from './logoDisplay.style';

export const LogoDisplay = () => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <img src="/vercel.svg" />
    </div>
  );
};
