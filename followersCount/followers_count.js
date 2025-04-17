let count=0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function resetCount(){
    count=0;
    displayCount();
    alert("Count has been reset");
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if(count===10){
        alert("Your post gained 10 followers, congratulations!");
    }
    else if(count===20){
        alert("Your post gained 20 followers, keep it up!");
    }
}