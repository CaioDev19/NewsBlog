module.exports = {
  convertToBase64Url(buffer) {
    const base64 = buffer.toString('base64');
    return `data:image/jpeg;base64,${base64}`;
  },
};
