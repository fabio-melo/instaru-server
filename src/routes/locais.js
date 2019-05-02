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

export const LOCList = (props) => (
	<List {...props} title="Localidades Cadastradas" bulkActionButtons={false} actions={<Actions />}>
		<Datagrid rowClick="edit">
			<TextField source="cidade" label="Cidade" />
      <TextField source="estado" label="Estado" />
		</Datagrid>
	</List>
);

export const LOCCreate = (props) => (
	<Create title="Criar Local" {...props}>
<TabbedForm>
		<FormTab label="Local">
     <TextInput source="cidade" label="Cidade" validate={required()} />
      <TextInput source="estado" label="Estado" validate={required()} />
		</FormTab>
	</TabbedForm>	
  </Create>
);

export const LOCEdit = (props) => (
	<Edit title="Editar Local" {...props}>
<TabbedForm>
		<FormTab label="Local">
     <TextInput source="cidade" label="Cidade" validate={required()} />
      <TextInput source="estado" label="Estado" validate={required()} />
		</FormTab>
	</TabbedForm>	
  </Edit>
);

const LOCModify = (props) => (
	<TabbedForm>
		<FormTab label="Local">
     <TextInput source="cidade" label="Cidade" validate={required()} />
      <TextInput source="estado" label="Estado" validate={required()} />
		</FormTab>
	</TabbedForm>
);