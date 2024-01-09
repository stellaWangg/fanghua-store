import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    console.log(maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let currentProducts = [...filtered_products];
    if (sort === "price-lowest") {
      currentProducts = currentProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      currentProducts = currentProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      currentProducts = currentProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    if (sort === "name-z") {
      currentProducts = currentProducts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
    return {
      ...state,
      filtered_products: currentProducts,
    };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;

    let currentProducts = [...all_products];

    if (text) {
      currentProducts = currentProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    if (category !== "all") {
      currentProducts = currentProducts.filter((product) => {
        return product.category.toLowerCase() === category;
      });
    }
    if (company !== "all") {
      currentProducts = currentProducts.filter((product) => {
        return product.company.toLowerCase() === company;
      });
    }
    if (color !== "all") {
      currentProducts = currentProducts.filter((product) => {
        return product.colors.includes(color);
      });
    }
    if (price) {
      currentProducts = currentProducts.filter((product) => {
        return product.price <= price;
      });
    }
    if (shipping) {
      currentProducts = currentProducts.filter(
        (product) => product.shipping === true
      );
    }

    return { ...state, filtered_products: currentProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        text: "",
        ...state.filters,
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
