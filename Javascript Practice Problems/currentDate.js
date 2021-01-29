function dateFormat(){
   let date = new Date();
    let currentDate = (date.getMonth() +1) + '/' + date.getDate() + '/' + date.getFullYear();
    return currentDate;
}

console.log(dateFormat());