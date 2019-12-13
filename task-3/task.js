/**
 *
 * Your task is to write a function that can take a password string
 * and parse it into actual password numbers.
 *
 * @param {string} password
 * @return {number}
 *
 * Examples
 *
 *   ' _  _  _ \n' +
 *   '  ||_||_|\n' +   => 789
 *   '  ||_| _|\n'
 *
 *   ' _  _  _ \n' +
 *   '|_ |_   |\n' +   => 567
 *   ' _||_|  |\n',
 *
 *   ' _  _  _ \n' +
 *   '|_||_ |_ \n' +   => 856
 *   '|_| _||_|\n',
 *
 */

function openCookiesRoom(password) {
  let i=0;
  let result=0;
  const length=password.length/10;
  while(i<length){
    switch(password.substring(0+3*i,3+3*i)+password.substring(10+3*i,13+3*i)+password.substring(20+3*i,23+3*i)){
      case (' _ | ||_|' ): 
        result=result+0*Math.pow(10,length-i-1);
        break;
      case ("     |  |"): 
        result=result+Math.pow(10,length-i-1);
        break;
      case (" _  _||_ "): 
        result=result+2*Math.pow(10,length-i-1);
        break;
      case (" _  _| _|"): 
        result=result+3*Math.pow(10,length-i-1);
        break;
      case ("   |_|  |"): 
        result=result+4*Math.pow(10,length-i-1);
        break;
      case (" _ |_  _|"): 
        result=result+5*Math.pow(10,length-i-1);
        break;
      case (" _ |_ |_|"): 
        result=result+6*Math.pow(10,length-i-1);
        break;
      case (" _   |  |"): 
        result=result+7*Math.pow(10,length-i-1);
        break;
      case (" _ |_||_|"): 
        result=result+8*Math.pow(10,length-i-1);
        break;
      case (" _ |_| _|"): 
        result=result+9*Math.pow(10,length-i-1);
        break;
    }
    i++;
  }
  return result;
}
module.exports = { openCookiesRoom };
