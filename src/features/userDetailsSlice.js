import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const res = await fetch(
      "https://66e011c12fb67ac16f282f45.mockapi.io/crud",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "Application/json" },
      }
    );
    try {
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const res = await fetch("https://66e011c12fb67ac16f282f45.mockapi.io/crud");
    try {
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const res = await fetch(
      `https://66e011c12fb67ac16f282f45.mockapi.io/crud/${id}`,
      {
        method: "DELETE",
      }
    );
    try {
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userDetailsSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //create User
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // showUserDetails
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // deleteUser
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(
          (user) => user.id !== action.payload.id
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

// export const {} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
