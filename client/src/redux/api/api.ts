import axios from "axios";

const itemsInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000'
})

class Api {
  static fetchItems(sortBy : any = '', category: (string | null) = null): any {
    return itemsInstance.get(`items?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`);
  }
}

export {
  Api
}
