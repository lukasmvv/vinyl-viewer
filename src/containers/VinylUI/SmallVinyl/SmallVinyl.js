import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './SmallVinyl.module.css';

const SmallVinyl = (props) => {

	const onVinylHover = () => {
		const activeVinyl = props.vinyls.filter(vinyl => vinyl.id===props.vinyl.id);
		props.setActiveVinyl(activeVinyl[0]);
	}
	return (
		<div className={classes.SmallVinylDiv} onMouseEnter={onVinylHover} onMouseLeave={() => props.removeActiveVinyl()}>
			<span className={classes.SideInfo}>
				{props.vinyl.artist} - {props.vinyl.album}
			</span>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		vinyls: state.vinylStore.vinyls
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removeActiveVinyl: () => dispatch(actions.removeActiveVinyl()),
		setActiveVinyl: (id) => dispatch(actions.setActiveVinyl(id))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SmallVinyl);