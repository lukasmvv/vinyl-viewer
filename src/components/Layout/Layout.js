import React, {useEffect} from 'react';
import classes from './Layout.module.css';
import Top from '../../containers/Top/Top';
import Bottom from '../../containers/Bottom/Bottom';

const Layout = (props) => {
	useEffect(() => {
		console.log('MOUNT LAYOUT COMPONENT');
	}, []);
	return (
		<div className={classes.Layout}>
			<Top/>
			<Bottom/>
		</div>
	);
}

export default Layout;