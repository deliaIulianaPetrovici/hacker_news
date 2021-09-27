export const getRandomTopStories=(arr,length)=>{
  let randomStories=[];
  while(randomStories.length<length){
    let random=arr[Math.floor(Math.random()*arr.length)];
    if(!randomStories.includes(random))
       randomStories.push(random)

  }
  return randomStories;
  
}


export const convertMS=(milliseconds)=>{
  let year,month,week,day, hour, minute, second;
  second=Math.floor(milliseconds/1000);
  minute=Math.floor(second/60);
 
  second=second%60;
  hour=Math.floor(minute/60);

  minute=minute%60;
 
  day=Math.floor(hour/24);
  hour=hour%24;
  week=Math.floor(day/7);
  day=day%7;
  month=Math.floor(week/4);
  week=week%4;
  year=Math.floor(month/12);
  month=month%12;
  return{
   year:year,
   month:month,
   week:week,
   day: day,
   hour: hour,
   minute: minute,
   second: second,
  
  }
}

export const handleDate=(time)=>{
  let dateNow=Date.now();
  let jobPostDate=time;
  let date= convertMS(dateNow-jobPostDate);
  
  if(date.year>1) return `${date.year} years`;
  if(date.year===1) return `${date.year} year`;

  if(date.month>1) return `${date.month} months`;
  if(date.month===1) return `${date.month} month`;

  if(date.week>1) return `${date.week} weeks`;
  if(date.week===1) return `${date.week} week`;
  
  if(date.day>1) return `${date.day} days`;
  if(date.day===1) return `${date.day} day`;
  
  if(date.hour>1) return `${date.hour} hours`;
  if(date.hour===1) return `${date.hour} hour`;

  if(date.minute>1) return `${date.minute} minutes`;
  if(date.minute===1) return `${date.minute} minute`;
  
  if(date.second>1) return `${date.second} seconds`;
  if(date.second===1) return `${date.second} second`;

 }