const save = {
    bc: function(key, value) {
        return localStorage.setItem(key, JSON.stringify(value))
    },
    dq: function(key) {
        return JSON.parse(localStorage.getItem(key))
    },
    qc: function(key) {
        localStorage.removeItem(key)
    }
}
module.exports = save