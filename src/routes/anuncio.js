import React from 'react';

import {
	Create,
	ImageInput,
	Edit,
	TabbedForm,
	FormTab,
	TextInput,
	List,
	Datagrid,
	TextField,
	UrlField,
	ImageField,
	Show,
	SimpleShowLayout
} from 'react-admin';


import { SaveButton, Toolbar } from 'react-admin';

const EditToolbar = (props) => (
	<Toolbar {...props}>
		<SaveButton />
	</Toolbar>
);

export const AnuncioShow = (props) => (
	<Show {...props}>
		<SimpleShowLayout>
			<ImageField source="imagem_url" />
			<TextField source="nome" />
			<UrlField source="link" />
		</SimpleShowLayout>
	</Show>
);

export const ANList = (props) => (
	<List {...props} title="Anúncio da Tela Inicial" bulkActionButtons={false} actions={false} pagination={false}>
		<Datagrid rowClick="edit">
			<ImageField source="imagem_url" label="Imagem" />
			<UrlField source="link" label="link" />
		</Datagrid>
	</List>
);

export const ANCreate = (props) => (
	<Create {...props}>
		<TabbedForm>
			<FormTab label="Categorias">
				<TextInput source="nome" label="Categoria" />
				<ImageInput source="imagem_url" label="Ícone da Categoria" accept="image/*">
					<ImageField source="src" title="title" />
				</ImageInput>
				<TextInput source="descricao" label="Descrição" />
			</FormTab>
		</TabbedForm>
	</Create>
);

export const ANEdit = (props) => (
	<Edit title="Editar Anuncio" {...props}>
		<TabbedForm toolbar={<EditToolbar />}>
			<FormTab label="Anúncio">
				<ImageInput source="imagem_url" label="Banner" accept="image/*">
					<ImageField source="src" title="title" />
				</ImageInput>

				<TextInput source="link" label="Link do Anunciante" />
			</FormTab>
		</TabbedForm>
	</Edit>
);
