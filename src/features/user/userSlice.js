import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    delItem,
    getAllProduct,
    getCartById,
    getCate,
    getOrder,
    getProductId,
    getSearchProduct,
    patchContact,
    patchEmail,
    patchUpdateCart,
    postCreateCart,
    postItemToCart,
    postOrder,
    postVerify
} from '../../api/userAPI';

const initialState = {
    status: '',
    productId: [],
    loading: false,
    product: [],
    search: [],
    searchProduct: '',
    cart: {},
    count: 0,
    updateCart: {},
    isUpdate: false,
    isDel: false,
    category: [],
    order: [],
    myOrder: [],
    isEdit: false,
    filter: {
        size: 4,
        currentPage: 1,
        totalPages: 6
    }
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

export const fetchOrder = createAsyncThunk(
    "users/postCheckOut",
    async (payload) => {
        const response = await postOrder(payload)
        return response
    }
);

export const fetchGetOrder = createAsyncThunk(
    "users/getRecentOrder",
    async (payload) => {
        const response = await getOrder(payload)
        return response
    }
);

export const fetchEditContact = createAsyncThunk(
    "users/patchContact",
    async (payload) => {
        const response = await patchContact(payload)
        localStorage.setItem('user', JSON.stringify(response))
        return response
    }
);

export const fetchEditEmail = createAsyncThunk(
    "users/patchEmail",
    async (payload) => {
        const response = await patchEmail(payload)
        localStorage.setItem('user', JSON.stringify(response))
        return response
    }
);

export const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        searchProduct(state, action) {
            state.searchProduct = action.payload
        },
        setFilter(state, action) {
            state.filter = action.payload
        },
        countIncrease(state) {
            state.status = 'success'
            state.count = state.count + 1
            localStorage.setItem('count', state.count)
        },
        countRemove(state, action) {
            state.status = 'success'
            state.count = state.count - 1
            localStorage.setItem('count', state.count)
        }
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
        },
        [fetchOrder.fulfilled]: (state, action) => {
            state.status = 'order success';
            state.order = action.payload
            state.count = 0
            localStorage.removeItem('createCartUser')
            localStorage.removeItem('cartUser')
            localStorage.removeItem('count')
        },
        [fetchGetOrder.fulfilled]: (state, action) => {
            state.status = 'success';
            state.myOrder = action.payload
        },
        [fetchEditContact.pending]: (state, action) => {
            state.isEdit = false;
        },
        [fetchEditContact.fulfilled]: (state, action) => {
            state.isEdit = true;

        },
        [fetchEditEmail.fulfilled]: (state, action) => {
            state.isEdit = true;
        }

    },
})

// Action creators are generated for each case reducer function
export const { setFilter, searchProduct, countIncrease, countRemove } = UserSlice.actions

export default UserSlice.reducer