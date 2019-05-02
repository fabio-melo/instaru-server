import React, { Fragment } from 'react';

import {
	Create,
	ImageInput,
	Edit,
	ReferenceArrayField,
	TabbedForm,
	FormTab,
	TextInput,
	LongTextInput,
	ChipField,
	SingleFieldList,
	List,
	Datagrid,
	TextField,
	ImageField,
	BooleanInput,
	FormDataConsumer} from 'react-admin';

//import RichTextInput from 'ra-input-rich-text';
import { Actions, validateTitle } from '../config';
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


export const ESTList = (props) => (
	<List title='' {...props} actions={<Actions />}>
		<Datagrid rowClick="edit">
			<ImageField source="imagem_url" label="Imagem" />
			<TextField source="nome_estabelecimento" title="Nome do Estabelecimento" />

			<ReferenceArrayField label="Categoria" source="categorias" reference="bem_estar_categorias">
				<SingleFieldList>
					<ChipField source="nome" />
				</SingleFieldList>
			</ReferenceArrayField>


		</Datagrid>
	</List>
);

const ESTModify = withStyles(styles)(({ classes, permissions, ...props }) => (
	<TabbedForm {...props}>
			<FormTab label="Detalhes">
				<TextInput source="nome_estabelecimento" label="Nome do Estabelecimento" validate={validateTitle} />


				<ImageInput source="imagem_url" label="Imagem do Anúncio" accept="image/*">
					<ImageField source="src" title="title" />
				</ImageInput>

				<LongTextInput source="descricao" label="Descrição" options={{ multiLine: true }} />
			</FormTab>

			<FormTab label="Links e Redes Sociais">
			<RedesSociais {...props}/>
			<Links {...props} />
		</FormTab>


			<FormTab label="Chamada de Ação">

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

));


export const ESTCreate = (props) => (
	<Create title="Criar" {...props}><ESTModify/></Create>
);

export const ESTEdit = (props) => (
	<Edit title="Editar Anúncio" {...props}><ESTModify/></Edit>);

