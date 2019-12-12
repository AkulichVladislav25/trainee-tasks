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
  let k=0;
  let result=0;
  while(i<(password.length/10)){
    if ((password[1+3*i]==' ')&&(password[10+3*i]=='|'))  result=result+4*Math.pow(10,2-i); else if ((password[1+3*i]==' ')&&(password[10+3*i]==' '))  result=result+Math.pow(10,2-i);
    if ((password[1+3*i]=='_')&&(password[10+3*i]=='|')&&(password[11+3*i]=='_')&&(password[12+3*i]=='|')&&(password[20+3*i]=='|')&&(password[21+3*i]=='_')&&(password[22+3*i]=='|'))  result=result+8*Math.pow(10,2-i);
    if ((password[1+3*i]=='_')&&(password[10+3*i]=='|')&&(password[11+3*i]=='_')&&(password[12+3*i]=='|')&&(password[20+3*i]==' ')&&(password[21+3*i]=='_')&&(password[22+3*i]=='|'))  result=result+9*Math.pow(10,2-i);
    if ((password[1+3*i]=='_')&&(password[10+3*i]=='|')&&(password[11+3*i]=='_')&&(password[12+3*i]==' ')&&(password[20+3*i]=='|')&&(password[21+3*i]=='_')&&(password[22+3*i]=='|'))  result=result+6*Math.pow(10,2-i);
    if ((password[1+3*i]=='_')&&(password[10+3*i]=='|')&&(password[11+3*i]=='_')&&(password[12+3*i]==' ')&&(password[20+3*i]==' ')&&(password[21+3*i]=='_')&&(password[22+3*i]=='|'))  result=result+5*Math.pow(10,2-i);
    if ((password[1+3*i]=='_')&&(password[10+3*i]==' ')&&(password[11+3*i]=='_')&&(password[12+3*i]=='|')&&(password[20+3*i]=='|')&&(password[21+3*i]=='_')&&(password[22+3*i]==' '))  result=result+2*Math.pow(10,2-i);
    if ((password[1+3*i]=='_')&&(password[10+3*i]==' ')&&(password[11+3*i]=='_')&&(password[12+3*i]=='|')&&(password[20+3*i]==' ')&&(password[21+3*i]=='_')&&(password[22+3*i]=='|'))  result=result+3*Math.pow(10,2-i); 
    if ((password[1+3*i]=='_')&&(password[10+3*i]==' ')&&(password[11+3*i]==' ')&&(password[12+3*i]=='|')&&(password[20+3*i]==' ')&&(password[21+3*i]==' ')&&(password[22+3*i]=='|'))  result=result+7*Math.pow(10,2-i);
    i++;
  }
  return result;
}
module.exports = { openCookiesRoom };
