
let titleCount = 1;
let totalPrice = 0;
let count = 0;
let isSelected = false;
const cardsBtn = document.querySelectorAll('.card .btn');

for(let cardBtn of cardsBtn){
    cardBtn.addEventListener('click', function(e){
        if( isSelected === false){
            e.target.setAttribute("disabled", true);
        }
        else{
            e.target.setAttribute("disabled", "");
        }
        
        // product count 
        count++
        const productCount = document.getElementById('product-count');
        productCount.innerText = count;

        // get the title and price value 
        const title = cardBtn.parentNode.childNodes[3].childNodes[3].innerText;
        const priceText = cardBtn.parentNode.childNodes[3].childNodes[5].innerText.split(' ')[1];
        const price = parseFloat(priceText);
        
        // appending title in the title container 
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = titleCount + '. ' + title;
        titleContainer.appendChild(p);
        titleCount++
        
        // calculate price 
        totalPrice += price;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
        
        

    })
    
}

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function(){
    const couponElement = document.getElementById('input-field').value;
    const coupon = couponElement.split(' ').join('').toUpperCase();
    console.log(coupon)
   if( totalPrice >= 200 ){
        if( coupon === 'SELL200' ){
            
            // get 20% discount 
            const discountElement = document.getElementById('discountPrice')
            const discount = totalPrice * 20 / 100;
            // set discount 
            discountElement.innerText = discount.toFixed(2);

            // get rest total price 
            const restTotal = totalPrice - discount;
            // set rest total price 
            const total = document.getElementById('total');
            total.innerText = restTotal.toFixed(2);
            document.getElementById('input-field').value = '';
        }else if( coupon === '' ){
            alert('Use Promo Code')
        }
        else{
            alert('Invalid Coupon')
            document.getElementById('input-field').value = '';
        }

   }else {
    alert('Must Purchase over $200 for discount!');
    document.getElementById('input-field').value = '';
   }

})



