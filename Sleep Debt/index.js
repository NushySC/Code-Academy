const getSleepHours = (day) => {
  
    if (day === 'monday') {
      return 7;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 4;
    } else if (day === 'thursday') {
      return 6;
    } else if (day === 'friday') {
      return 7;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 6;
    }
  };


const getActualSleepHours = () => {
 return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
}
  
const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours = idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealHours = getIdealSleepHours();  
  
  if (idealHours === actualSleepHours) {
    console.log('Perfect sleep');
  } else if ( actualSleepHours <= idealHours) {
    console.log('You need to sleep ' + (idealHours - actualSleepHours) +  ' hours more')
  }
else if (actualSleepHours >= idealHours) {
  console.log('You need to sleep ' + (idealHours - actualSleepHours) +  ' hours less')
};
}
console.log(calculateSleepDebt());