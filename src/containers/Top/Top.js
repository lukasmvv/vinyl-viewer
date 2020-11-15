import React from 'react';
import {connect} from 'react-redux';
import classes from './Top.module.css';

const Top = (props) => {
	let active = null;
	if (props.activeVinyl!==null) {
		active = (
			<div className={classes.ActiveVinyl}>
				{props.activeVinyl.cover}
			</div>
		);
	}
	
	return (
		<div className={classes.Top}>
			{active}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		vinyls: state.vinylStore.vinyls,
		activeVinyl: state.vinylStore.activeVinyl
	}
}

export default connect(mapStateToProps,null)(Top);