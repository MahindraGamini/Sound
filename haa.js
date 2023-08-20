document.addEventListener('DOMContentLoaded', function() {
    var audioA = document.getElementById('A');
    var audioS = document.getElementById('S');
    var audioD = document.getElementById('D');
    var audioF = document.getElementById('F');
    var audioG = document.getElementById('G');
    var audioH = document.getElementById('H');
    var audioJ = document.getElementById('J');
    var audioK = document.getElementById('K');
    var audioL = document.getElementById('L');

    document.body.addEventListener('keydown', function(e) {
        var keyCode = e.keyCode || e.which;

        switch (keyCode) {
            case 65: // 'A'
            case 97: // 'a'
                console.log("A is clicked");
                playAudio(audioA);
                var a=document.getElementById("show");
                
                
                a.style.boxShadow = "2px 2px 5px yellow";
                
              
                break;
            case 83: // 'S'
            case 115: // 's'
                console.log("S is clicked");
                var a=document.getElementById("cli");
                
                playAudio(audioS);
               
                a.style.boxShadow = "2px 2px 5px yellow";
                
                
                break;
            case 68:
            case 100:
                console.log("D is clicked");
                playAudio(audioD);
                var a=document.getElementById("display");
                
               
                a.style.boxShadow = "2px 2px 5px yellow";
                
                break;
                
            case 70:
            case 102:
                console.log("F is clicked");
                playAudio(audioF);
                var a=document.getElementById("displa");
                
                
                a.style.boxShadow = "2px 2px 5px yellow";
                
                break;
                
            case 71:
            case 103:
                console.log("G is clicked");
                playAudio(audioG);
                var a=document.getElementById("displ");
                
            
                a.style.boxShadow = "2px 2px 5px yellow";
               
                break;
                
            case 72:
            case 104:
                console.log("H is clicked");
                playAudio(audioH);
                var a=document.getElementById("disp");
                
               
                a.style.boxShadow = "2px 2px 5px yellow";
                
                break;
                
            case 74:
            case 106:
                console.log("J is clicked");
                playAudio(audioJ);
                var a=document.getElementById("dis");
                
               
                a.style.boxShadow = "2px 2px 5px yellow";
                
                break;
                
            case 75:
            case 107:
                    console.log("K is clicked");
                    playAudio(audioK);
                    var a=document.getElementById("di");
                
                
                    a.style.boxShadow = "2px 2px 5px yellow";
               
                break;
                   
            case 76:
            case 108:
                  console.log("L is clicked");
                  playAudio(audioL);
                  var a=document.getElementById("d");
                
                
                  a.style.boxShadow = "2px 2px 5px yellow";
              
                break;
                  
            default:
                alert("Click only the second row keys");
                break;
        }
    });
   
    

    function playAudio(audioElement) {
        if (audioElement) {
            audioElement.currentTime = 0; 
            audioElement.play();
        }
    }
    document.addEventListener('keyup', function(e) {
        var keyCode = e.keyCode || e.which;
    
        switch (keyCode) {
            case 65: // 'A'
            case 97: // 'a'
                console.log("A key released");
                clearBoxShadow("show");
                break;
            case 83: // 'S'
            case 115: // 's'
                console.log("S key released");
                clearBoxShadow("cli");
                break;
            case 68:
            case 100:
                console.log("D key released");
                clearBoxShadow("display");
                break;
            case 70:
            case 102:
                console.log("F key released");
                clearBoxShadow("displa");
                break;
            case 71:
            case 103:
                console.log("G key released");
                clearBoxShadow("displ");
                break;
            case 72:
            case 104:
                console.log("H key released");
                clearBoxShadow("disp");
                break;
            case 74:
            case 106:
                console.log("J key released");
                clearBoxShadow("dis");
                break;
            case 75:
            case 107:
                console.log("K key released");
                clearBoxShadow("di");
                break;
            case 76:
            case 108:
                console.log("L key released");
                clearBoxShadow("d");
                break;
        }
    });
    
    function clearBoxShadow(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.style.boxShadow = "none";
        }
    }
    
});
