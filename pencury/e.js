        $(document).ready(function() {
            $('#no').novacancy({
                'reblinkProbability': 0,
                'blinkMin': 0,
                'blinkMax': 0,
                'loopMin': 8,
                'loopMax': 10,
                'color': '#ffffff',
                'glow': ['0 0 80px #ffffff', '0 0 30px #4d0000', '0 0 6px #ffffff']
            }); 

            $('#vacancy').novacancy({
                'blink': 0,
                'off': 0,
                'color': '#ff0000',
                'glow': ['0 0 80px #ff0000', '0 0 30px #4d0000', '0 0 6px #ff0000']
            });
        });
