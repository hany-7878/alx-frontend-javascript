import { RowID, RowElement } from './interface';

// Use RowElement and RowID in function definitions
export declare function insertRow(row: RowElement): RowID;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;
export declare function deleteRow(rowId: number): void; // Note: RowID type could also be used
