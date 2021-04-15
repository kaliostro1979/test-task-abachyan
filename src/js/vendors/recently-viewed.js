import $ from 'jquery'
import './jquery.products.min'




$(document).ready(() => {

  const selectors = {
    recentlyReviewContainer: '[data-section-type="recently-viewed"]',
    productContainer: '[data-section-type="product"]'
  }
  const $recentlyReviewContainer = $(selectors.recentlyReviewContainer)
  const $productContainer = $(selectors.productContainer)
  if ($productContainer.length) {
    recordRecentlyViewed()
  }

  if ($recentlyReviewContainer.length) {
    showRecentlyViewed()
  }
})

function recordRecentlyViewed () {
  Shopify.Products.recordRecentlyViewed()
}

function showRecentlyViewed () {
  Shopify.Products.showRecentlyViewed({ howManyToShow: 10 })
}




