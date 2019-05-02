import React from 'react';

import {
	TextInput,
	ArrayInput,
	SimpleFormIterator,
	SelectInput,
	required
} from 'react-admin';

import { withStyles } from '@material-ui/core/styles';

const styles = {
	image: { maxHeight: '3rem' },
	stock: { width: '5em' },
	price: { width: '5em' },
	width: { width: '5em' },
	widthFormGroup: { display: 'inline-block' },
	height: { width: '5em' },
	heightFormGroup: { display: 'inline-block', marginLeft: 32 },
	linkredes: { width: '50em' },
	linkredesFormGroup: { display: 'inline-block', marginLeft: 32 }
};

export const RedesSociais = withStyles(styles)(({ classes, permissions }) => (
	<ArrayInput source="redes_sociais">
		<SimpleFormIterator>
			<SelectInput
				source="tipo"
				label="Redes Sociais"
				choices={[
					{ id: 'facebook', name: 'Facebook' },
					{ id: 'instagram', name: 'Instagram' },
					{ id: 'whatsapp', name: 'Whatsapp' },
					{ id: 'twitter', name: 'Twitter' },
					{ id: 'site', name: 'Site' }
				]}
				validate={required()}
				className={classes.height}
				formClassName={classes.widthFormGroup}
			/>
			<TextInput
				source="url"
				label="Endereço (URL)"
				validate={required()}
				className={classes.linkredes}
				formClassName={classes.linkredesFormGroup}
			/>
		</SimpleFormIterator>
	</ArrayInput>
));

export const Links = withStyles(styles)(({ classes, permissions }) => (
	<ArrayInput source="links">
		<SimpleFormIterator>
			<TextInput source="nome" label="Nome do Site" />
			<TextInput source="url" label="Endereço (URL)" />
		</SimpleFormIterator>
	</ArrayInput>
));
