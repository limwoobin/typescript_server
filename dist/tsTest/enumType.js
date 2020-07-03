"use strict";
class WeekDate {
    description() {
        console.log('description~~');
    }
}
const weekDate = new WeekDate();
weekDate.description();
var Week;
(function (Week) {
    Week["MON"] = "MON";
    Week["TUE"] = "TUE";
    Week["WEB"] = "WEB";
    Week["THU"] = "THU";
})(Week || (Week = {}));
console.log(Week.MON);
//# sourceMappingURL=enumType.js.map