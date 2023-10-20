   
    $(document).ready(function(){

        $('#in').click(function(){

            var single_number = ['','One','Two','Three','Four','five','six','seven','eight','Nine'];
                double_number = ['Ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',];
                tens = ['','Ten','Twenty','Thirty','Forthy','Fifty','Sixty','Seventy','Eighty','Ninety'];
                hundreds = ['','One hundred','Two Hundred','Three Hundred','Four Hundred','Five Hundred','Six Hundred','Seven Hundred','Eight Hundred','Nine Hundred'];
                thousands =['','One thousand','Two thousand','Three thousand','Four thousand','Five thousand','Six thousand','Seven thousand','Eight thousand','Nine thousand'];
                ten_thousand = ['','Ten thousand','Twenty thousand','Thirty thousand','Fourty thousand','Fifty thousand','Sixty thousand','Seventy thousand','Eighty Thousand',]
            
            let number = document.querySelector('input').value

            if (number < 0 ) {
                $('.display').text('Please enter number to proceed');
            } 
            if (number == 0 ) {
                $('.display').text('The number in words is: Zero');
            } 
            else {
                if (number < 10) {
                    word = single_number[number];
                    $('.display').text('The number in words is: '+ word);
                } else {
                    if (number < 20) {
                        word = double_number[number - 10];
                        $('.display').text('The number in words is:  '+ word);
                    } else {
                        if (number < 100) {
                            word1 = tens[(number - number%10)/10];
                            word2 = single_number[number%10];
                            $('.display').text('The number in word is:  '+ word1 + ' ' + word2);
                        } else {
                            if (number < 1000) {
                                word1 = hundreds[(number-number%100)/100];
                                word2 = tens[((number%100)-((number%100)%10))/10];
                                word3 = single_number[(number%100)%10];
                                if (number%100 == 0) {
                                    $('.display').text('The number in word is:  '+ word1);
                                } else {
                                    $('.display').text('The number in word is:  '+ word1 + ' and ' + word2 + ' ' + word3);
                                }
                            } else {
                                if (number <10000) {
                                    word1 = thousands[(number-number%1000)/1000];
                                    word2 = hundreds[((number%1000)-((number%1000)%100))/100];
                                    word3 = tens[(((number%1000)%100)-(((number%1000)%100)%10))/10];
                                    word4 = single_number[((number%1000)%100)%10];
                                    if (number%1000 == 0) {
                                        $('.display').text('The number in word is:  '+ word1);
                                    } else {
                                        if (((number%1000)%100) == 0) {
                                            $('.display').text('The number in word is:  '+ word1 + ', ' + word2);
                                        } else {
                                            $('.display').text('The number in word is:  '+ word1 + ', ' + word2 + ' and ' + word3+ ' ' + word4);   
                                        }
                                    }
                                } else {
                                    if (number < 100000) {
                                        word1 = ten_thousand[(number-number%10000)/10000]
                                        word2 = thousands[((number%10000)-((number%1000)%1000))/1000];
                                        word3 = hundreds[(((number%1000)%1000)-(((number%1000)%1000)%100))/100];
                                        word4 = tens[((((number%1000)%1000)%100)-(((number%1000)%1000)%100)%10)/10];
                                        word5 = single_number[(((number%1000)%1000)%100)%10];
                                        if (number%10000 == 0) {
                                            $('.display').text('The number in word is:  '+ word1);
                                        } 
                                        
                                        // else {
                                        //     if (((number%1000)%1000) == 0) {
                                        //         $('.display').text('The number in word is:  '+ word1 + ', ' + word2);
                                        //     } else {
                                        //         $('.display').text('The number in word is:  '+ word1 + ', ' + word2 + ' and ' + word3+ ' ' + word4);   
                                        //     }
                                        // }
                                    }
                                    if (number == 10000) {
                                        $('.display').text();
                                        $('.display').text('The number in word is:  Ten thousand');
                                    } else {
                                        // if (number > 10000) {
                                        //     $('.display').text('Sorry!, you have exceeded the limit of numbers required');
                                        // }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            $('#in').hide();
            $('#out').show();
            $('input').hide();

        });

        $('#out').click(function(){
            $('#in').show();
            $('#out').hide();
            $('.display').text(null);
            $('input').show();
            document.querySelector('input').value = null
        });

    });
