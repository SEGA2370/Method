function SpaceDate(Date1,Date2)
{
let result=Date2 - Date1
return result.toDate()
}
console.log(SpaceDate(new Date('2020-04-02'), new Date("2020-06-02")))