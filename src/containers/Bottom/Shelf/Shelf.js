import React from 'react';
import {connect} from 'react-redux';
import classes from './Shelf.module.css';
import SmallVinyl from '../../VinylUI/SmallVinyl/SmallVinyl';

const Shelf = (props) => {
	return (
		<div className={classes.Shelf}>
			{props.vinyls.map(vinyl => <SmallVinyl key={vinyl.id} vinyl={vinyl}/>)}
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
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Shelf);