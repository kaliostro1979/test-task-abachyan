const largeImage = document.querySelector('.product-main__image')
const thumbs = document.querySelectorAll('.thumbs-item')

thumbs.forEach((image)=>{
    image.addEventListener('click', ()=>{
        let currentImage = image.getAttribute('style')
        largeImage.setAttribute('style', currentImage)
    })
})