import { Fragment } from 'react';

import HeaderImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Tasty Meals</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={HeaderImage} alt='Tasty Meals' />
      </div>
    </Fragment>
  );
};

export default Header;
