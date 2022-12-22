import { shopifyAPI } from '~/shopify/client'

export const getContext = () => ({
  shopify: shopifyAPI()
})
