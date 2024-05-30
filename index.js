// JavaScript to reveal content after video ends
        document.querySelector('video').addEventListener('ended', function() {
            document.querySelector('.content').style.display = 'block';
            document.querySelector('.fullscreen-video').style.display = 'none'; // Optionally hide the video element
        });
// JavaScript to handle transition after video ends
 document.querySelector('video').addEventListener('ended', function() {
    document.body.classList.add('blur-transition');
    setTimeout(function() {
        window.location.href = 'home.html'; // Replace with the URL of the next page
    }, 2000); // Delay for transition duration
});

//Javascript to tying like effect 
document.addEventListener("DOMContentLoaded",function(){
    const text ="this is a typing effect demostration";
    const word =" ";
    const typingElement = document.getElementById("typing");
    let index = 0;

    function type(){
        if(index < word.length){
            typingElement.textContent += (index>0 ?" ":"") + word[index];
            index++;
            setTimeout(type,500);
        }
    }
    type();

function showList() {
    var list = document.getElementById("myList");
    if (list.style.display === "none") {
        list.style.display = "block";
    } 
    else {
          list.style.display = "none";
    }
}
});