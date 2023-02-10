export const ICON_MAP = new Map();

addMapping([0, 1], "sun");
addMapping([2], "cloud-sun");
addMapping([3, 45, 48], "cloud");
addMapping([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "rain");
addMapping([71, 73, 75, 77, 85, 86], "snow");
addMapping([95, 96, 99], "thunder");

function addMapping(values: number[], icon: string) {
  values.forEach((value) => {
    ICON_MAP.set(value, icon);
  });
}
