// Write your cade below:
module.exports = function main() {
    let args = Array.prototype.slice.call(arguments);
    let result = args[0] % args[1];
    return result;
};