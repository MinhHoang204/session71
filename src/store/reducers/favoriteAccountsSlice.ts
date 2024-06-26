import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Account {
  id: number;
  name: string;
  isFavorite: boolean;
}

interface FavoriteAccountsState {
  accounts: Account[];
}

const initialState: FavoriteAccountsState = {
  accounts: [
    { id: 1, name: 'Nguyen Van A', isFavorite: false },
    { id: 2, name: 'Nguyen Van B', isFavorite: false },
    { id: 3, name: 'Nguyen Van C', isFavorite: false },
  ],
};

const favoriteAccountsSlice = createSlice({
  name: 'favoriteAccounts',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const account = state.accounts.find(account => account.id === action.payload);
      if (account) {
        account.isFavorite = !account.isFavorite;
      }
    },
  },
});

export const { toggleFavorite } = favoriteAccountsSlice.actions;
export default favoriteAccountsSlice.reducer;