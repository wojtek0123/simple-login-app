<script setup lang="ts">
import { Ref, ref } from 'vue';
import { User, users as DUMMY_DATA_USERS } from '../data/dummy-data';

const searchInputText = ref('');
const dialog = ref(false);
const dialogDelete = ref(false);
const typeOfAccounts = ['User', 'Admin', 'Moderator'];
const headers = ref([
  {
    text: 'Users',
    align: 'start',
    sortable: false,
    value: 'firstName',
  },
  { text: 'Lastname', value: 'lastName' },
  { text: 'Email', value: 'email' },
  { text: 'Create date', value: 'createDate' },
  { text: 'Account type', value: 'typeOfAccount' },
  { text: 'Author', value: 'author' },
  { text: 'Actions', value: 'actions', sortable: false },
]);
const users: Ref<User[]> = ref(DUMMY_DATA_USERS);
const editedIndex = ref(-1);
const editedItem = ref({
  firstName: '',
  lastName: '',
  author: '',
  createdDate: '',
  email: '',
  note: '',
  typeOfAccount: 'User',
});

const defaultItem: User = {
  firstName: '',
  lastName: '',
  email: '',
  typeOfAccount: 'User',
  createdDate: '',
  author: '',
  note: '',
};
const filteredPages: Ref<User[]> = ref([]);

const formTitle = () => {
  return editedIndex.value === -1 ? 'New Item' : 'Edit Item';
};
const initialize = () => {
  searchInputText.value = '';
  filteredPages.value = users.value;
};

const editItem = (item: User) => {
  editedIndex.value = users.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
};

const deleteItem = (item: User) => {
  editedIndex.value = users.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialogDelete.value = true;
};

const deleteItemConfirm = () => {
  users.value.splice(editedIndex.value, 1);
  initialize();
  closeDelete();
};

const close = () => {
  dialog.value = false;
  editedItem.value = Object.assign({}, defaultItem);
  editedIndex.value = -1;
};

const closeDelete = () => {
  dialogDelete.value = false;
  editedItem.value = Object.assign({}, defaultItem);
  editedIndex.value = -1;
};

const save = () => {
  if (editedIndex.value > -1) {
    Object.assign(users.value[editedIndex.value], editedItem.value);
  } else {
    users.value.push(editedItem.value as User);
  }
  close();
};

const onFilterPages = () => {
  if (searchInputText.value.length === 0) {
    filteredPages.value = users.value.map((user) => user);
    return;
  }
  filteredPages.value = users.value.filter((user) =>
    [...Object.keys(user)].some((key) =>
      user[key as keyof User]
        .toLowerCase()
        .includes(searchInputText.value.toLowerCase())
    )
  );
};

initialize();
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="filteredPages"
    sort-by="firstName"
    class="elevation-1"
    width="100%"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-text-field
          v-model="searchInputText"
          label="Search"
          @input="onFilterPages()"
        ></v-text-field>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="800px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle() }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editedItem.firstName"
                      label="Firstname"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editedItem.lastName"
                      label="Lastname"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      :items="typeOfAccounts"
                      label="Type of account"
                      v-model="editedItem.typeOfAccount"
                      dense
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-textarea
                      counter
                      v-model="editedItem.note"
                      label="Note"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<style></style>
