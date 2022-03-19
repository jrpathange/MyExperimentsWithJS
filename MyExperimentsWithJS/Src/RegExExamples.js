function VowelsAndConsonants(s)
{
  var vowelsArray = [];
  var consonantsArray = [];
  
  vowelsArray = s.match(/[aeiou]/g);
  for(var vowelChar of vowelsArray)
  {
    console.log(vowelChar);
  }
  
  consonantsArray = s.match(/[^aeiou$]/g);
  for(var consonantChar of consonantsArray)
  {
    console.log(consonantChar);
  }
}
