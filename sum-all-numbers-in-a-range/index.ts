export const sumAll = (arr: number[]): number => {
  const [start, end] = arr.sort((a, b) => a - b);
  let incNumber: number = 0;

  for(let i = start; i <= end; i++ ) incNumber += i;

return incNumber;
}
