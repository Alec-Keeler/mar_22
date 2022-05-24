const phoneExp = /^\(?\d{3}\)?\-?\d{3}\-\d{4}$/

// (123)456-7890
// 123-456-7890

// ABC-123-4567
// (123-456)-7890
// 1-234-567-8901

function checkPhoneNum(string) {
    console.log(phoneExp.test(string))
    if (phoneExp.test(string)) {
        return true
    } else {
        return false
    }
}

// checkPhoneNum('(123)456-7890')

function reformatPhone(string) {
    const isGood = checkPhoneNum(string);

    if (!isGood) {
        return "Please provide a valid phone number"
    } else {
        const replace = ''
        const remove = /[\(\)-]/g
        const newNum = string.replace(remove, replace)
        console.log(newNum)
        console.log(parseInt(newNum, 10))
    }
}

reformatPhone('(123)456-7890')