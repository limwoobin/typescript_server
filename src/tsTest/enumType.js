var WeekDate = /** @class */ (function () {
    function WeekDate() {
    }
    WeekDate.prototype.description = function () {
        console.log('description~~');
    };
    return WeekDate;
}());
var weekDate = new WeekDate();
weekDate.description();
var Week;
(function (Week) {
    Week["MON"] = "MON";
    Week["TUE"] = "TUE";
    Week["WEB"] = "WEB";
    Week["THU"] = "THU";
})(Week || (Week = {}));
console.log(Week.MON);
