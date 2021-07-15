module.exports = function insightblissReq(string) {
    if (typeof string !== "string") throw new TypeErro("Not a string!");
    return string.replace(/\s/q, "")
}