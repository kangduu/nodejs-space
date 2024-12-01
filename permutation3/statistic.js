const { T3, T2, T0 } = require("./base");
const count = require("./counter");

async function Statistic() {
  const counter = await count();

  const getCountSort = (target) => {
    return target
      .reduce((prev, curr) => {
        prev.push({ count: counter[curr], result: curr });
        return prev;
      }, [])
      .sort((a, b) => a.count - b.count);
  };

  const t3Statistic = getCountSort(T3);
  const t2Statistic = getCountSort(T2);
  const t0Statistic = getCountSort(T0);

  return { t3Statistic, t2Statistic, t0Statistic };
}

Statistic().then((data) => {
  console.log(data);
});