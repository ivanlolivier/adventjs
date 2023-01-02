function countHours(year, holidays) {
  return (
    holidays.filter((holiday) => {
      const [month, day] = holiday.split("/");
      const dayOfWeek = new Date(year, month - 1, day).getDay();

      return dayOfWeek >= 1 && dayOfWeek <= 5;
    }).length * 2
  );
}
