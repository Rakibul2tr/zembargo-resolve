import { PAGE_LIST_FAIL, PAGE_LIST_REQUEST, PAGE_LIST_SUCCESS } from "../constants/pageConstants";

export const pageListReducer = (state = { pages: [] }, action) => {
    switch (action.type) {
        case PAGE_LIST_REQUEST:
            return { loading: true };
        case PAGE_LIST_SUCCESS:
            return { loading: false, pages: action.payload };
        case PAGE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
