interface Autor {
    name: string
    lastname: string
  }
  
  interface Price {
    currency: string
    amount: number
    decimals: number
  }
  
  interface ItemInterface {
    id: string
    title: string
    price: Price
    picture: string
    condition: string
    free_shipping: boolean
  }
  
  interface ExtendedItem extends ItemInterface {
    sold_quantity: string
    description: string
    breadcrumbs: string[]
  }
  
  interface SearchResponse {
    autor: Autor
    categories: string[]
    items: ItemInterface[]
  }
  
  interface DetailResponse {
    autor: Autor
    item: ExtendedItem
  }