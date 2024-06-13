const reverseStar = (starNum) => {
    for (let i = 0; i < starNum; i++) {
        starPattern="";
        for (let j = 1; j <= starNum * 2; j++){
            if (j >= starNum * 2 - i *2 && j %2 ===0) {
                starPattern += "*";
            } else {
                starPattern += " ";
            }     
        }
        console.log(starPattern);
    }
};


reverseStar(5);