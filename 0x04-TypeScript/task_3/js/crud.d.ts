// task_3/js/crud.d.ts

import { RowID, RowElement } from './interface';

// Declare the CRUD functions with the correct types
export declare function insertRow(row: RowElement): number;
export declare function deleteRow(rowId: number): void;
export declare function updateRow(rowId: number, row: RowElement): number;
