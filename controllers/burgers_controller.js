const burger = require("../models/burger");

function router ( app ) {
    app.get("/", async function ( req , res ) {
        const available = await burger.getBurgers()
        const devoured = await burger.getEaten()

        res.render( 'index', { available , devoured})
    })

    app.get("/devour/:id", async function ( req , res ) {
        const result = await burger.devour ( req.params.id )

        res.redirect("/")
    })

    app.post("/", async function ( req , res ) {
        await burger.addBurger( req.body.burger )

        res.redirect("/")
    })
}

module.exports = router