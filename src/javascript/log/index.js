export const log = function () {
    let logs = Array.from(arguments);
    logs.forEach((item) => {
        if (typeof item === 'object')
            console.log(item)
        else
            console.log(`%c ${item}`, `color:blue`)
    })

}
