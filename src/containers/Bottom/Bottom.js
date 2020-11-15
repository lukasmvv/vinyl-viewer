import React from 'react';
import classes from './Bottom.module.css';
import Shelf from './Shelf/Shelf';

const Bottom = (props) => {
	return (
		<div className={classes.Bottom}>
			<Shelf/>
		</div>
	);
}

export default Bottom;