// show-alert
const showAlert = document.querySelector("[show-alert]");
if(showAlert){
    let time = showAlert.getAttribute("show-alert") || 3000;
    time = parseInt(time);

    setTimeout(() => {
        showAlert.classList.add("hidden");
    }, time);
}
// End show-alert

// Upload Image
const uploadImage = document.querySelector("[upload-image]");
if(uploadImage){
    const uploadImageInput = uploadImage.querySelector("[upload-image-input]");
    const uploadImagePreview = uploadImage.querySelector("[upload-image-preview]");

    uploadImageInput.addEventListener("change", () => {
        const file = uploadImageInput.files[0];
        console.log(file);
        if(file){
            uploadImagePreview.src = URL.createObjectURL(file);
        }
    });
}
// End Upload Image

// Cập nhật số lượng sản phẩm trong giỏ hàng
const listInputQuantity = document.querySelectorAll("[cart] input[name='quantity']");
if(listInputQuantity){
    listInputQuantity.forEach(input => {
        input.addEventListener("change", () => {
            const productId = input.getAttribute("product-id");
            const quantity = parseInt(input.value);
            
            if(productId && quantity > 0){
                window.location.href = `/cart/update/${productId}/${quantity}`;
            }
        });
    });
}
// Hết Cập nhật số lượng sản phẩm trong giỏ hàng