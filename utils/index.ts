export type DateResult = {
  date: number;
  day: string;
};

export const generateDate = (): DateResult[] => {
  const date = new Date();
  let weekday = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];
  let weekdays: DateResult[] = [];
  for (let i = 0; i < 7; i++) {
    let tempDate: DateResult = {
      date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
      day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()],
    };
    weekdays.push(tempDate);
  }
  return weekdays;
};

export type Seat = {
  number: number;
  taken: boolean;
  selected: boolean;
};

export const generateSeats = (): Seat[][] => {
  let numRow = 8;
  let numColumn = 3;
  let rowArray: Seat[][] = [];
  let start = 1;
  let reachnine = false;

  for (let i = 0; i < numRow; i++) {
    let columnArray: Seat[] = [];
    for (let j = 0; j < numColumn; j++) {
      let seatObject: Seat = {
        number: start,
        taken: Boolean(Math.round(Math.random())),
        selected: false,
      };
      columnArray.push(seatObject);
      start++;
    }
    if (i == 3) {
      numColumn += 2;
    }
    if (numColumn < 9 && !reachnine) {
      numColumn += 2;
    } else {
      reachnine = true;
      numColumn -= 2;
    }
    rowArray.push(columnArray);
  }
  return rowArray;
};

export const timeArray: string[] = [
  '10:30',
  '12:30',
  '14:30',
  '15:00',
  '19:30',
  '21:00',
];

export const generateOrderId = () => {
  const timestamp = Date.now().toString(); // Timestamp sebagai bagian dari order_id
  const randomNumber = Math.floor(Math.random() * 10000); // Nomor acak
  return `${timestamp}-${randomNumber}`;
};
