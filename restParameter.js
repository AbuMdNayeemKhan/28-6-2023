// ... Rest parameter diye all data pass kor jay.

function restParr(a, b, c, ...data){
    console.log(...data);
};
restParr(1, 2, 3, 4, 5, 6, 7, 8, 9,);