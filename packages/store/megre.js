export default (keys, rows) => {
  let dataMap = {};
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    let combineValues = [];
    keys.forEach(key => {
      combineValues.push(row[key]);
    });
    const key = combineValues.join("_$_");
    if (!dataMap[key]) {
      dataMap[key] = { row, children: [] };
    }
    dataMap[key].children.push(row);
  }
  let dataList = [];
  for (const key in dataMap) {
    const { row, children } = dataMap[key];
    let newRow = Object.assign({ MERGE_DETAILROWS: children }, row);
    dataList.push(newRow);
  }
  return dataList;
};

export const getMegreDetailRows = row => {
  return row["MERGE_DETAILROWS"];
};
