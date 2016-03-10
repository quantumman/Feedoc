const u = {
  single: (array, pred) => {
    const x = u.singleOrDefault(array, pred);
    if (!x) {
      throw new Error('One or more elements are found');
    }

    return x;
  },

  singleOrDefault: (array, pred) => {
    const xs = array.filter(pred);
    if (xs.length !== 1) {
      return undefined;
    }

    return xs[0];
  },
};

export default u;
