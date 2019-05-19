import React from 'react';

import {
  Create,
  Edit,
  ReferenceArrayField,
  TabbedForm,
  FormTab,
  TextInput,
  ChipField,
  SingleFieldList,
  List,
  Datagrid,
  TextField,
  ArrayInput,
  SimpleFormIterator,
  BooleanInput,
  FormDataConsumer,
  SelectInput,
  required
} from 'react-admin';

import { Actions, validateTitle } from '../config';
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
        defaultValue='win'
        validate={required()}
      />

    </FormTab>

    <FormTab label="Instalações">
        <ArrayInput source="download">
        <SimpleFormIterator>

      <TextInput
        source="url"
        label="URL do Arquivo"
        validate={required()}
      />
        <BooleanInput source="check_integrity" defaultValue={false} label="Verificar Integridade" />

        <FormDataConsumer>
                        {({
                            formData, // The whole form data
                            scopedFormData, // The data for this item of the ArrayInput
                            getSource, // A function to get the valid source inside an ArrayInput
                            ...rest,
                        }) =>
                            scopedFormData.check_integrity ? (
                              <TextInput source={getSource("sha256")} defaultValue="" label="Hash SHA256" {...rest} />

                            ) : null
                        }
                    </FormDataConsumer>


        <BooleanInput source="run_file" defaultValue={false} label="Executar Arquivo (Windows)"></BooleanInput>
        <FormDataConsumer>
                        {({
                            formData, // The whole form data
                            scopedFormData, // The data for this item of the ArrayInput
                            getSource, // A function to get the valid source inside an ArrayInput
                            ...rest,
                        }) =>
                            scopedFormData.run_file ? (
                              <TextInput source={getSource("run_arguments")} defaultValue="" label="Argumentos da Linha de Comando" {...rest} />

                            ) : null
                        }
                    </FormDataConsumer>
      
    </SimpleFormIterator>
        </ArrayInput>
    
    
    </FormTab>


    <FormTab label="Comandos">

    <ArrayInput source="commands">
    <SimpleFormIterator>
      <TextInput
        source="command_to_run"
        label="Comando"
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
