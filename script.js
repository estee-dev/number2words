
$(document).ready(function(){

    $('#in').click(function(){
        var single_number = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
            double_number = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen',];
            tens = ['','Ten','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
            hundreds = ['','One hundred','Two Hundred','Three Hundred','Four Hundred','Five Hundred','Six Hundred','Seven Hundred','Eight Hundred','Nine Hundred'];
            thousands =['','One thousand','Two thousand','Three thousand','Four thousand','Five thousand','Six thousand','Seven thousand','Eight thousand','Nine thousand'];
            ten_thousand = ['','Ten thousand','Twenty thousand','Thirty thousand','Forty thousand','Fifty thousand','Sixty thousand','Seventy thousand','Eighty Thousand',];
            
        let number = document.querySelector('input').value

        // Main Algorithm
        if (number < 0 ) {$('.display').text('Please enter number to proceed');} 
        if (number == 0 ) {$('.display').text(number+' in words is Zero');}
        if (number < 10) {
            word = single_number[number];
            $('.display').text(number+' in words is '+word);
        }
        if (number < 20) {
            word = double_number[number - 10];
            $('.display').text(number+' in words is  '+word);
        }
        if (number < 100) {
            word1 = tens[(number - number%10)/10];
            word2 = single_number[number%10];
            $('.display').text(number+' in words is  '+word1+' '+word2);
        }
        if (number < 1000) {
            word1 = hundreds[(number-number%100)/100];
            word2 = tens[((number%100)-((number%100)%10))/10];
            word3 = single_number[(number%100)%10];
            if (number%100 == 0) {
                $('.display').text(number+' in words is  '+word1);
            } else {
                $('.display').text(number+' in word is '+ word1 + ' and ' + word2 + ' ' + word3);
            }
        }
    });
});