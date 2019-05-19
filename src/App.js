import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import createHistory from 'history/createBrowserHistory';
import portugueseMessages from 'ra-language-portuguese';

import { theme, FireData, FireAuth } from './config';

import { Layout } from 'react-admin';
import AppBar from './layout/appbar';

// Sections
import Login from './routes/login';


import { PerfList, PerfCreate, PerfEdit } from './routes/perfis.js'


import UserIcon from '@material-ui/icons/Group';

const history = createHistory();
const messages = { pt: portugueseMessages };
const i18nProvider = (locale) => messages[locale];

const CustomLayout = (props) => <Layout appBar={AppBar} {...props} />;

/*       authProvider={FireAuth} */

class App extends Component {
	render() {
		return (
			<Admin
				history={history}
				title="Instare"
				theme={theme}
				loginPage={Login}
				dataProvider={FireData}
				locale="pt"
				i18nProvider={i18nProvider}
				appLayout={CustomLayout}
				authProvider={FireAuth}
			>
				<Resource
					name="profiles"
					icon={UserIcon}
					list={PerfList}
					create={PerfCreate}
					edit={PerfEdit}
					options={{ label: 'Perfis de Instalação' }}
				/>
				
			</Admin>
		);
	}
}

export default App;
