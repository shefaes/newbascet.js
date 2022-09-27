const totalPriceWrapper = document.getElementById('total-price');

const Action = {
     PLUS: 'plus',
     MINUS: 'minus'
};

const getItemSubTotalPrice = (input) => Number(input.value) * Number(input.dataset.price)

const setTotalPrice = (value) => {
    
    totalPriceWrapper.dataset.value = value;   
}
const init = () => {
    let totalCost = 0;

    [...document.querySelectorAll('.basket_item')].forEach((basketItem) => {
        totalCost += getItemSubTotalPrice(basketItem.querySelector('.input'));
    });
    
    setTotalPrice(totalCost);
};

const calculateSeparateItem = (basketItem, action) => {
      const input = basketItem.querySelector('.input');
      

      switch (action) {
        case Action.PLUS:
            input.value++;
            setTotalPrice(Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price));
            break;
        case Action.MINUS:
            input.value--;
            setTotalPrice(Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price));
            break; 

      }
     basketItem.querySelector('.subtotal').textContent = `${formatNumber(getItemSubTotalPrice(input))} man.`;
};

document.getElementById('#basket').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-minus')) {
        calculateSeparateItem(
            event.target.closest('.basket_item'),
            Action.MINUS
        );
    }
    if (event.target.classList.contains('btn-plus')) {
        
        calculateSeparateItem(
            event.target.closest('.basket_item'),
            Action.PLUS
        );
    }
});

  init();
