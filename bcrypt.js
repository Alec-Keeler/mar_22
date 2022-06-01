const bcrypt = require('bcryptjs');

async function generateHash(password) {
    const hash = await bcrypt.hash(password, 12)

    console.log(hash)
}

// generateHash('password')

const hashedPass = '$2a$12$VsrHKlufHtd/jrLIRTQDK.d3PVYqLZIUCCw.yCVmSn4Gn56IBVu/2'

async function checkPassword(password, hashedPass) {
    const isPass = await bcrypt.compare(password, hashedPass)

    console.log(isPass)
}

checkPassword('password', hashedPass)