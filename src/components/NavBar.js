import React  from 'react';
import { TAB_TITLES } from '../util/nav_constants';

const NavBar = (props) => {
	return (
		<div className='file-folder-nav-bar' >
			{
				props.tabList.map((tabName) => {
					// Is this the active tab?
					const cssClass = 'file-folder-background nav-bar-tab' +
						(
							tabName === props.activeTab
								? ' active-tab'
								: ''
						);

					return (
						<span
							className={ cssClass }
							key={ tabName + '-header' }
							title={ TAB_TITLES[tabName] }
							onClick={() => props.tabSwapFn(tabName)}
						>
							{ tabName }
						</span>
					);
				})
			}
		</div>
	);
};
export default NavBar;
