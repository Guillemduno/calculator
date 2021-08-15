var items = new Array();
    var number_and_operators = [];

    function add_item_to_array_item(item){
        if (item == "suma") {
            number_and_operators.push(item);
            console.log(number_and_operators);
        }else{
            items.push(item);
            // add_items_to_numbers_and_operators(items);
            console.log(items);
        }
      
    }

    add_items_to_numbers_and_operators(items);

    function back_item(){
        items.pop();
        console.log(items);
    }

    function reset_item(){
        items = [];
        number_and_operators = [];
        console.log(items);
    }

    function add_items_to_numbers_and_operators(items){

        for (let index = 0; index < items.length; index++) {
    
                let singleNumber = Number(items.join(''));
                // singleNumbe = new Intl.NumberFormat('de-DE').format(singleNumber);
                number_and_operators.push(singleNumber);
                // console.log(number_and_operators);
            
            
        }

        console.log(number_and_operators);

    }

// old code
    // var number = new Array();
    // var array_of_numbers = new Array();

    // console.log(number);

    // function afegeix_nombre(num){
    //     number.push(num);
    //     showNumber(number);
    // }


    // function back_nombre(){
    //     number.pop();
    //     showNumber(number);
    // }
   
    // function reset_nombre(){
    //     number = [];
    //     array_of_numbers = [];
    //     document.getElementById('result').innerHTML= 0;
    //     showNumber(number);
    // }

    // function add_operation(operator){
    //     array_of_numbers.push(showNumber(number));
    //     let result = 0;
        
    //     for (let index = 0; index < array_of_numbers.length; index++) {
    //         if (operator == 'suma') {
    //             result = result + array_of_numbers[index]; 
    //         }
    //         if (operator == 'resta') {
    //             result = array_of_numbers[index] - result; 
    //         } 
    //     }

    //     console.log(array_of_numbers);
    //     console.log(result);
    //     document.getElementById('result').innerHTML= result;
    //     number = [];
    // }

    // function showNumber(number){
    //     let singleNumber = Number(number.join(''));
    //     singleNumbe = new Intl.NumberFormat('de-DE').format(singleNumber);
    //     document.getElementById('total').innerHTML = singleNumbe;
    //     return singleNumber;
    // }