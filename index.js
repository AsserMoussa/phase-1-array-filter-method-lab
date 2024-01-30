

  function findMatching(mydrivers, s){

const result = mydrivers.filter((driver)=>driver.toLowerCase()===s.toLowerCase())
return result;
   }

   function fuzzyMatch(mydrivers, s){
    const result = mydrivers.filter((driver)=>driver.startsWith(s))
return result;
   }

   function matchName(mydrivers, s){
    const result = mydrivers.filter((driver)=>driver.name === s)
return result;
   }