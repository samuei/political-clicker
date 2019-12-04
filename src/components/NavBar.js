import React, { Component }  from 'react';

class NavBar extends Component {
	render() {		
		return (
			<div className='file-folder-nav-bar' >
				{
					this.props.tabList.map((tabName) => {
						// Is this the active tab?
						const cssClass = 'file-folder-background nav-bar-tab' + 
							(
								tabName === this.props.activeTab
									? ' active-tab'
									: ''
							);
						
						return (
							<span className={ cssClass } key={ tabName + '-header' } onClick={() => this.props.tabSwapFn(tabName)} >
								{ tabName }
							</span>
						);
					})
				}
			</div>
		);
	}
}
export default NavBar;
