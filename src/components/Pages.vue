<script setup lang="ts">
import { Ref, ref } from 'vue';
import { VueEditor } from 'vue2-editor';
import { Page, pages as DUMMY_DATA_PAGES } from '../data/dummy-data';

const searchInputText = ref('');
const dialog = ref(false);
const dialogDelete = ref(false);
const headers = ref([
  {
    text: 'Pages',
    align: 'start',
    sortable: false,
    value: 'title',
  },
  { text: 'Create date', value: 'createDate' },
  { text: 'Author', value: 'author' },
  { text: 'Actions', value: 'actions', sortable: false },
]);
const pages: Ref<Page[]> = ref(DUMMY_DATA_PAGES);
const editedIndex = ref(-1);
const editedItem: Ref<Page> = ref({
  title: '',
  titleSEO: '',
  description: '',
  descriptionSEO: '',
  createDate: '',
  author: '',
  keywords: '',
});
const defaultItem = {
  title: '',
  titleSEO: '',
  description: '',
  descriptionSEO: '',
  createDate: '',
  author: '',
  keywords: '',
};
const filteredPages: Ref<Page[]> = ref([]);

const formTitle = () => {
  return editedIndex.value === -1 ? 'New Item' : 'Edit Item';
};
const initialize = () => {
  searchInputText.value = '';
  filteredPages.value = pages.value;
};

const editItem = (item: Page) => {
  editedIndex.value = pages.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
};

const deleteItem = (item: Page) => {
  editedIndex.value = pages.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialogDelete.value = true;
};

const deleteItemConfirm = () => {
  pages.value.splice(editedIndex.value, 1);
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
    Object.assign(pages.value[editedIndex.value], editedItem.value);
  } else {
    pages.value.push(editedItem.value);
  }
  close();
};

const onFilterPages = () => {
  if (searchInputText.value.length === 0) {
    filteredPages.value = pages.value.map((page) => page);
    return;
  }
  filteredPages.value = pages.value.filter((page) =>
    [...Object.keys(page)].some((key) =>
      page[key as keyof Page]
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
    sort-by="title"
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
                      v-model="editedItem.title"
                      label="Title"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editedItem.titleSEO"
                      label="SEO title"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <label>Description</label>
                    <vue-editor v-model="editedItem.description"></vue-editor>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-textarea
                      counter
                      v-model="editedItem.descriptionSEO"
                      label="Desciption SEO"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editedItem.titleSEO"
                      label="Title SEO"
                    ></v-text-field>
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
