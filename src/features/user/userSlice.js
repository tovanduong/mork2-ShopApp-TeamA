import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { delItem, getAllProduct, getCartById, getCate, getProductId, getSearchProduct, patchUpdateCart, postCreateCart, postItemToCart, postVerify } from '../../api/userAPI';

const initialState = {
    status: '',
    productId: [],
    loading: false,
    product: [],
    search: [],
    cart: {},
    updateCart: {},
    isUpdate: false,
    isDel: false,
    category: []
}


export const fetchPostVerify = createAsyncThunk(
    "users/postVerify",
    async (payload) => {
        const response = await postVerify(payload)
        return response
    }
)

export const fetchGetProductId = createAsyncThunk(
    "users/getProductId",
    async (payload) => {
        const response = await getProductId(payload)
        return response
    }
);

export const fetchGetAllProduct = createAsyncThunk(
    "users/getAllProduct",
    async (payload) => {
        const response = await getAllProduct(payload)
        return response
    }
);

export const fetchSearchProduct = createAsyncThunk(
    "users/getSearchProduct",
    async (payload) => {
        const response = await getSearchProduct(payload)
        return response
    }
);

export const fetchCreateCart = createAsyncThunk(
    "users/postCreateCart",
    async (payload) => {
        const response = await postCreateCart(payload)
        localStorage.setItem('createCartUser', JSON.stringify(response))
        return response
    }
);

export const fetchUpdateCart = createAsyncThunk(
    "users/patchUpdateCart",
    async (payload) => {
        const response = await patchUpdateCart(payload)
        return response
    }
);

export const fetchGetCartById = createAsyncThunk(
    "users/getCartById",
    async (payload) => {
        const response = await getCartById(payload)
        localStorage.setItem('cartUser', JSON.stringify(response))
        return response
    }
);

export const fetchAddItemToCart = createAsyncThunk(
    "users/postItemToCart",
    async (payload) => {
        const response = await postItemToCart(payload)
        return response
    }
);

export const fetchDelItem = createAsyncThunk(
    "users/delItem",
    async (payload) => {
        const response = await delItem(payload)
        return response
    }
);

export const fetchGetAllCategory = createAsyncThunk(
    "users/getCate",
    async (payload) => {
        const response = await getCate(payload)
        return response
    }
);

export const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },

    extraReducers: {
        [fetchGetProductId.pending]: (state) => {
            state.status = 'loading';
            state.loading = true
        },
        [fetchGetProductId.fulfilled]: (state, action) => {
            state.status = 'success';
            state.productId = action.payload;
        },
        [fetchGetAllProduct.fulfilled]: (state, action) => {
            state.status = 'success';
            state.product = action.payload;
            state.loading = false;
        },
        [fetchSearchProduct.fulfilled]: (state, action) => {
            state.status = 'success';
            state.search = action.payload;
            state.loading = false;
        },
        [fetchUpdateCart.pending]: (state) => {
            state.status = 'loading';
            state.isUpdate = false
        },
        [fetchUpdateCart.fulfilled]: (state, action) => {
            state.status = 'success';
            state.updateCart = action.payload;
            state.isUpdate = true;
        },
        [fetchGetCartById.fulfilled]: (state, action) => {
            state.status = 'success';
            state.cart = action.payload;
            state.loading = false;
        },
        [fetchDelItem.fulfilled]: (state, action) => {
            state.status = 'success';
            state.isDel = true
        },
        [fetchGetAllCategory.fulfilled]: (state, action) => {
            state.status = 'success';
            state.category = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { productCart } = UserSlice.actions

export default UserSlice.reducer