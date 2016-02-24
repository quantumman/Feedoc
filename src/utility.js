export default {
  single: (array, pred) => {
    const xs = array.filter(pred);
    if (xs.length !== 1) {
      throw new Error('One or more elements are found');
    }

    return xs[0];
  },
};
