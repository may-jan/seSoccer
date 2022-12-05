// 아직 경기를 하지 않았다는 상태(경기전)를 false로 지정
export function checkDate(obj) {
  let toDay = new Date();
  if (obj) {
    const matchDayYear = 2022;
    const matchDayMonth = parseInt(obj.date.split("월")[0]) - 1;
    const matchDayDay = parseInt(obj.date.split("월")[1].split("일"));
    const matchTime = parseInt(obj.time.split(":")[0]);
    const matchMinute = parseInt(obj.time.split(":")[1]);

    let matchDay = new Date(
      matchDayYear,
      matchDayMonth,
      matchDayDay,
      matchTime,
      matchMinute
    );

    // 경기날짜가 오늘날짜보다 이르다면 경기를 이미 했으니 inMatch를 true로 바꿔준다
    if (matchDay < toDay) {
      return true;
    } else {
      return false;
    }
  }
}
