import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'

// ✅ Fetch all properties
export const fetchProperties = createAsyncThunk(
  "properties/fetch",
  async () => {
    const res = await api.get("/properties/");
    return res.data;
  }
);

// ✅ Create property (multipart form-data)
export const createProperty = createAsyncThunk(
  "properties/create",
  async (data) => {
    const res = await api.post("/properties/", data, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data;
  }
);

// ✅ Update property
export const updateProperty = createAsyncThunk(
  "properties/update",
  async ({ id, data }) => {
    const res = await api.patch(`/properties/${id}/`, data, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data;
  }
);

// ✅ Delete property
export const deleteProperty = createAsyncThunk(
  "properties/delete",
  async (id) => {
    await api.delete(`/properties/${id}/`);
    return id;
  }
);

const propertySlice = createSlice({
  name: "properties",
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      // create
      .addCase(createProperty.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      // update
      .addCase(updateProperty.fulfilled, (state, action) => {
        state.list = state.list.map(p =>
          p.id === action.payload.id ? action.payload : p
        );
      })
      // delete
      .addCase(deleteProperty.fulfilled, (state, action) => {
        state.list = state.list.filter(p => p.id !== action.payload);
      });
  }
});

export default propertySlice.reducer;
