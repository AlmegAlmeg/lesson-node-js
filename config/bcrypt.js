const bcrypt = require('bcryptjs')

const createHash = sisma =>{
    return bcrypt.hash(sisma, 10)
}

const compareHash = (sisma, hash) =>{
    return bcrypt.compare(sisma, hash)
}

module.exports = {
    createHash,
    compareHash
}