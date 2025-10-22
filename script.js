// Close banner functionality
document.addEventListener("DOMContentLoaded", () => {
  const closeBanner = document.querySelector(".close-banner")
  const topBanner = document.querySelector(".top-banner")

  if (closeBanner && topBanner) {
    closeBanner.addEventListener("click", () => {
      topBanner.style.display = "none"
    })
  }

  // Quantity controls
  const quantityBtns = document.querySelectorAll(".quantity-btn")

  quantityBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const action = this.dataset.action
      const input = this.parentElement.querySelector('input[type="number"]')
      let value = Number.parseInt(input.value)

      if (action === "increase") {
        value = Math.min(value + 1, 99)
      } else if (action === "decrease") {
        value = Math.max(value - 1, 1)
      }

      input.value = value
    })
  })

  // Newsletter form submission
  const newsletterForms = document.querySelectorAll(".newsletter-form, .footer-newsletter")

  newsletterForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value
      alert(`Thank you for subscribing with ${email}!`)
      this.reset()
    })
  })

  // Add to cart functionality
  const addToCartBtn = document.querySelector(".product-actions .btn-primary")

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const quantity = document.querySelector("#quantity").value
      alert(`Added ${quantity} item(s) to cart!`)
    })
  }
})
