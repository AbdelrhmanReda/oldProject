function check ()
{
   if(test.getPass.value == "")
   {
       alert("Please,Enter the Password : ");
       test.getPass.focus();
       return false ;
   }
   if((test.getPass.value).length != 8)
   {
    alert("Please,Password must be 8 charcters only");
    test.getPass.focus();
    return false ;
   }
   if(test.rePass.value=="")
   {
       alert("Please,You should confirm the password");
       return false;
   }
   if(test.rePass.value!=test.getPass.value)
    {
        alert("Password does not match  ");
        return false;
    }
    return true ;


}
