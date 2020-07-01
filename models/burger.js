const orm = require('../config/orm.js')

// function to get burgers that are not eaten
async function getBurgers() {
    const burgerList = await orm.selectAll()
    return burgerList.filter( burger => burger.devoured == false )
}

async function getEaten() {
    const burgerList = await orm.selectAll()
    return burgerList.filter( burger => burger.devoured == true )
}

function addBurger ( name ) {
    return orm.insertOne( name )
}

function devour( id ) {
    return orm.updateOne( id, "devoured", true )
}

module.exports = { getBurgers, getEaten, addBurger, devour }