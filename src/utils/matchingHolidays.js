export default function matchProvNHoliday(arr, id) {
  let matchingProvinces = [];
  arr.provinces.map((province) => {
    province.holidays.forEach((holiday) => {
      if (holiday.id === id.id) {
        matchingProvinces.push(province.id);
      }
    });
  });
  matchingProvinces.flat();
  const formatedProvs = matchingProvinces.map((prov) => `CA-${prov}`);
  return formatedProvs;
}
