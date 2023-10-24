const resultCalc = document.getElementById('result');
const btn = document.querySelectorAll('button');
const operators = ['+', '-', '*', '/', '='];

let result = '';

// calculator btn

btn.forEach(function (button) {
   button.addEventListener('click', (e) => calculate(e.currentTarget.dataset.name));
});

function calculate(btnValues){
   if(btnValues === '=' && btnValues !== ''){
      result = eval(result);
   }else if(btnValues === 'del'){
      result = result.toString().slice(0, -1,);
   }else if(btnValues === 'reset'){
      result = ''
   }else{
      if(result === '' && operators.includes(btnValues)) return;
         result += btnValues;
   }

   resultCalc.innerHTML = result;
};



