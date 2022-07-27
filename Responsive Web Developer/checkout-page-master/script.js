formatChanger = (num) => {
    return parseFloat(num.innerHTML.replace("$", ""))
}

priceUpdate = () => {
    const object_1 = document.getElementById("price-1")
    const price_1 = formatChanger(object_1)
    const quantity_1 = document.getElementById("quantity-1")
    if (quantity_1.value < 1){
        quantity_1.value = 1
    }

    const object_2 = document.getElementById("price-2")
    const price_2 = formatChanger(object_2)
    const quantity_2 = document.getElementById("quantity-2")
    if (quantity_2.value < 1){
        quantity_2.value = 1
    }

    const shipping = document.getElementById("shipping-amount")
    const shipping_amount = formatChanger(shipping)

    const total = shipping_amount + price_1 * quantity_1.value + price_2 * quantity_2.value
    const total_amount = document.getElementById("total-amount")
    total_amount.innerHTML = "$" + total.toFixed(2)
}

stepDownUp = (num, downUp) => {
    const id = downUp + "-button-" + num
    const button = document.getElementById(id)
    button.onclick = (e) => {
        e.preventDefault()
        const quantity_input = document.getElementById("quantity-" + num)
        if (downUp == "stepDown"){
            quantity_input.stepDown()
        }
        else{
            quantity_input.stepUp()
        }
        priceUpdate()
    }
}

quantityChange = (num) => {
    const quantity = document.getElementById("quantity-" + num)
    quantity.onchange = (e) => {
        e.preventDefault()
        priceUpdate()
    }
}

window.onload = () => {
    priceUpdate()
    stepDownUp(1, "stepDown")
    stepDownUp(1, "stepUp")
    stepDownUp(2, "stepDown")
    stepDownUp(2, "stepUp")
    quantityChange(1)
    quantityChange(2)

    const form = document.getElementById("checkout-form")
    form.addEventListener("submit", (e) => {
            e.preventDefault()
            alert("Successful Checkout!")
        }
    )
}