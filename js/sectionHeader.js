const sectionHeader = document.querySelector('.product-shipment .product-section-header.sm-only .icon-button')

sectionHeader.addEventListener('click', function () {
  const header = this.parentNode.parentNode
  header.classList.add('is-open')
})
