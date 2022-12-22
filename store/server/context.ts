import { shopifyAPI } from '~/shopify/client'
import { contentfulAPI } from '~/contentful/client'

export const getContext = () => ({
  shopify: shopifyAPI(),
  contentful: contentfulAPI()
})
