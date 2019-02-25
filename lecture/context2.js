function getNameForPhonebook(more) {
  return this.lastName + ', ' + this.firstName + more
}

module.exports = {
  getNameForPhonebook
}
