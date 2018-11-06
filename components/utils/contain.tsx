// tslint:disable
export default (root: any, n: any, excludes?: any[]) => {
  let node = n;
  while (node) {
    if (excludes) {
      if (excludes.indexOf(node) !== -1) {
        return true;
      }
    }
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};
