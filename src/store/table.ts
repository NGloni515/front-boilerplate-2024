import create from 'zustand';

type TableStore = {
  selectedRow: string;
  addSelectedRow: (selectedRow: string) => void;
  deleteSelectedRow: () => void;
};

export const useTableStore = create<TableStore>((set) => ({
  selectedRow: '',
  addSelectedRow: (selectedRow) =>
    set(() => ({
      selectedRow,
    })),
  deleteSelectedRow: () =>
    set(() => ({
      selectedRow: '',
    })),
}));
