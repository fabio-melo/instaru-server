import React, { Fragment } from 'react';

import {
	Create,
	FileInput,
	FileField,
	ImageInput,
	Edit,
	SimpleForm,
	ReferenceArrayField,
	TabbedForm,
	FormTab,
	DisabledInput,
	TextInput,
	DateInput,
	LongTextInput,
	ChipField,
	ArrayField,
	SingleFieldList,
	ReferenceManyField,
	ReferenceArrayInput,
	SelectArrayInput,
	AutocompleteInput,
	List,
	Datagrid,
	TextField,
	DateField,
	EditButton,
	EmailField,
	UrlField,
	ImageField,
	ArrayInput,
	SimpleFormIterator,
	BooleanInput,
	FormDataConsumer,
	SelectInput,
	NumberInput,
	DateTimeInput,
	CheckboxGroupInput,
	maxValue,
	minValue,
	required
} from 'react-admin';

import { Actions, validateEmail, validateTitle, normalizeTime, verifyTime } from '../config';
import { withStyles } from '@material-ui/core/styles';
import { RedesSociais, Links } from './componentes';

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

export const PerfList = withStyles(styles)(({ classes, permissions, ...props }) => (
	<List title="Perfis de Usuário" {...props} actions={<Actions />}>
		<Datagrid rowClick="edit">
			<TextField source="name" label="Nome" />			
			<TextField source="description" label="Descrição" />

			<TextField source="system" label="Sistema Operacional" />
			<ReferenceArrayField label="Tags" source="tags" reference="tags">
				<SingleFieldList>
					<ChipField source="nome" />
				</SingleFieldList>
			</ReferenceArrayField>
		</Datagrid>
	</List>
));

const PerfModify = withStyles(styles)(({ classes, permissions, ...props }) => (
	<TabbedForm {...props}>
		<FormTab label="Detalhes do Perfil">
			<TextInput source="name" label="Nome" validate={validateTitle} />
			<TextInput source="description" label="Descrição (Opcional)" validate={validateTitle} />
			<SelectInput
				source="system"
				label="Sistema Operacional"
				choices={[
					{ id: 'win', name: 'Windows' },
					{ id: 'mac', name: 'Mac' },					
					{ id: 'lin', name: 'Linux' }
				]}
				validate={required()}
			/>
			<ReferenceArrayInput label="Tags" source="nome" reference="tags">
				<SelectArrayInput optionText="nome" />
			</ReferenceArrayInput>

		</FormTab>

		<FormTab label="Comandos">

		<ArrayInput source="commands">
		<SimpleFormIterator>
			<SelectInput
				source="type"
				label=""
				choices={[
					{ id: 'dwn', name: 'Download' },
					{ id: 'cmd', name: 'Comando' }
				]}
				validate={required()}
			/>
			<TextInput
				source="action"
				label="Ação"
				validate={required()}

			/>
		</SimpleFormIterator>
	</ArrayInput>


		</FormTab>

	</TabbedForm>
));

export const PerfCreate = (props) => (
	<Create title="Cadastrar Perfil" {...props}>
		<PerfModify />
	</Create>
);

export const PerfEdit = (props) => (
	<Edit title="Editar Perfil" {...props}>
		<PerfModify />
	</Edit>
);

export const TagList = withStyles(styles)(({ classes, permissions, ...props }) => (
	<List {...props} title="Especialidades Médicas" bulkActionButtons={false} actions={<Actions />}>
		<Datagrid rowClick="edit">
			<ImageField classes={classes} source="imagem_url" label="Imagem" />
			<TextField source="nome" label="Especialidade" />
		</Datagrid>
	</List>
));



const TagModify = (props) => (
	<TabbedForm {...props} 	>
		<FormTab label="Especialidades">
			<TextInput source="nome" label="Especialidade" />
			<ImageInput source="imagem_url" label="Ícone da Especialidade" accept="image/*">
				<ImageField source="src" title="title" />
			</ImageInput>
		</FormTab>
	</TabbedForm>
);

export const TagCreate = (props) => (
	<Create {...props}>
		<PerfModify />
	</Create>
);

export const TagEdit = (props) => (
	<Edit title="Editar Especialidade" {...props}>
		<PerfModify />
	</Edit>
);
