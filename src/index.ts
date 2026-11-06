export function roundRobin<T>(lists: readonly (readonly T[])[]): T[] {
  if (!Array.isArray(lists) || lists.some((list) => !Array.isArray(list)))
    throw new TypeError('Expected an array of arrays');
  const out: T[] = [];
  let remaining = true;
  for (let index = 0; remaining; index++) {
    remaining = false;
    for (const list of lists)
      if (index < list.length) {
        out.push(list[index]!);
        remaining = true;
      }
  }
  return out;
}
