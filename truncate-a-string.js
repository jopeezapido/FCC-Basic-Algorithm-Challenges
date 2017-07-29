var strLength, newStr, knife, numEqualToStr, shiva, spl, unite, rep;

function truncateString(str, num) {
  strLength = str.length;
  knife = str.slice(0, (num-3)) + "...";//will appear if str is less than 2x greater than num
  spl = str.split("");
  unite = spl.toString();
  rep = unite.replace(/\W/ig,"");
  shiva = rep.slice(0,num) + "...";       
  numEqualToStr = str;//will appear if str is equal to num
  
  if (strLength > num && num >= 3){
    return knife;
  }
  else if(strLength > num && num <= 3 ){
    return shiva;
  }
  else if (strLength == num){
    return str;
  }
  else if (strLength <= num && num >= 3){
    return str;
  }
  
  //return shiva;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);