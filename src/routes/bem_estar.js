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
	FormDataConsumer
} from 'react-admin';

//import RichTextInput from 'ra-input-rich-text';
import { Actions, NoBulkActions, validateEmail, validateTitle, MyDatagrid } from '../config';
import { withStyles } from '@material-ui/core/styles';
import { RedesSociais, Links } from './componentes';

/* tslint:disable:1109 */

const styles = {
	image: { maxHeight: '3rem' }
};

export const BSList = withStyles(styles)(({ classes, permissions, ...props }) => (
	<List title="Anúncios do Bem-Estar" {...props} actions={<Actions />}>
		<Datagrid rowClick="edit">
			<ImageField classes={classes} source="imagem_url" label="Imagem" />
			<TextField source="nome_anunciante" title="Anunciante" />
			<TextField source="nome_anuncio" title="Anúncio" />

			<ReferenceArrayField label="Categoria" source="categorias" reference="bem_estar_categorias">
				<SingleFieldList>
					<ChipField source="nome" />
				</SingleFieldList>
			</ReferenceArrayField>
		</Datagrid>
	</List>
));

const BSModify = (props) => (
	<TabbedForm {...props}>
		<FormTab label="Detalhes">
			<TextInput source="nome_anunciante" label="Nome do Anunciante" validate={validateTitle} />
			<TextInput source="nome_anuncio" label="Título do Anúncio" validate={validateTitle} />

			<ReferenceArrayInput source="categorias" reference="bem_estar_categorias" label="Categorias">
				<SelectArrayInput optionText="nome" />
			</ReferenceArrayInput>

			<ImageInput source="imagem_url" label="Imagem do Anúncio" accept="image/*">
				<ImageField source="src" title="title" />
			</ImageInput>

			<LongTextInput source="descricao" label="Descrição" options={{ multiLine: true }} />
		</FormTab>
		<FormTab label="Links e Telefones">
			<RedesSociais {...props}/>
			<Links {...props} />

			<ArrayInput source="telefones">
				<SimpleFormIterator>
					<TextInput source="nome" label="Descrição" />
					<TextInput source="url" label="Telefone" />
				</SimpleFormIterator>
			</ArrayInput>

			<BooleanInput source="usa_botao_acao" label="Botão de Chamada de Ação" />
			<FormDataConsumer>
				{({ formData, ...rest }) =>
					formData.usa_botao_acao && (
						<Fragment>
							<TextInput source="acao_titulo" title="Chamada da Ação" />
							<TextInput source="acao_url" title="Link da Ação" {...rest} />
						</Fragment>
					)}
			</FormDataConsumer>
		</FormTab>
	</TabbedForm>
);

export const BSCreate = (props) => (
	<Create title="Criar Anúncio" {...props}>
		<BSModify />
	</Create>
);

export const BSEdit = (props) => (
	<Edit title="Editar Anúncio" {...props}>
		<BSModify {...props} />
	</Edit>
);

// CATEGORIAS

export const BSCGList = withStyles(styles)(({ classes, permissions, ...props }) => (
	<List {...props} title="Categorias do Bem Estar" bulkActionButtons={false} actions={<Actions />}>
		<Datagrid rowClick="edit">
			<ImageField classes={classes} source="imagem_url" label="Imagem" />
			<TextField source="nome" label="Categoria" />
		</Datagrid>
	</List>
));

const BSCGModify = (props) => (
	<TabbedForm {...props}>
		<FormTab label="Categorias">
			<TextInput source="nome" label="Categoria" />
			<ImageInput source="imagem_url" label="Ícone da Categoria" accept="image/*">
				<ImageField source="src" title="title" />
			</ImageInput>
		</FormTab>
	</TabbedForm>
);

export const BSCGCreate = (props) => (
	<Create {...props}>
		<BSCGModify />
	</Create>
);

export const BSCGEdit = (props) => (
	<Edit title="Editar Categoria" {...props}>
		<BSCGModify />
	</Edit>
);
