//create a javascript program that converts arabic numbers into roman numbers where all the roman numbers should be in capital letters
   //
   function convertToRoman(num){
       var roman = '';
         var romanNum = [
              [1000, 'M'],
                [900, 'CM'],
                [500, 'D'],
                [400, 'CD'],
                [100, 'C'],
                [90, 'XC'],

                [50, 'L'],
                [40, 'XL'],
                [10, 'X'],
                [9, 'IX'],
                [5, 'V'],
                [4, 'IV'],
                [1, 'I']
            ];
            for (var i = 0; i < romanNum.length; i++) {
                while (num >= romanNum[i][0]) {
                    roman += romanNum[i][1];
                    num -= romanNum[i][0];
                }
            }
            return roman;
            
   }
