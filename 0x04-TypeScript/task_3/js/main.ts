// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create updated row with age field
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Call updateRow and deleteRow
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
