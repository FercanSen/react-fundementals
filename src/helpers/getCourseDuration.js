function getCourseDuration(duration) {
  let hh = Math.floor(duration / 60);
  let mm = duration - hh * 60;
  let hours = "hours";

  if (duration == undefined) {
    return "No duration given.";
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (hh == 1) {
    hours = "hour";
  }

  let formattedDuration = hh + ":" + mm + " " + hours;
  return formattedDuration;
}

export default getCourseDuration;
