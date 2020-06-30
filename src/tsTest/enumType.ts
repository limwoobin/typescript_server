
interface CodeInfo {
    description(): void;
}

class WeekDate implements CodeInfo {
    public description() {
        console.log('description~~');
    }
}

const weekDate = new WeekDate();
weekDate.description();

enum Week{
    MON = 'MON',
    TUE = 'TUE',
    WEB = 'WEB',
    THU = 'THU'
}

console.log(Week.MON);

