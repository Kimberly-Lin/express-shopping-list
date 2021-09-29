"use strict";

const express = require("express");

const db = require("./fakeDb");
const router = new express.Router();

router.get("", function (req, res) {
    return res.json({ items: db.items });
});

router.post("", function (req, res) {
    const itemName = req.body.name;
    const itemPrice = req.body.price;
    let newItem = { "name": itemName, "price": itemPrice };
    db.items.push(newItem);
    return res.json({ added: newItem });
})

router.get("/:name", function (req, res) {
    let allItems = db.items;
    for (let item of allItems) {
        if (item.name = req.params.name) {
            return res.json(item);
        }
    }
})

router.patch("/:name", function (req, res) {
    let allItems = db.items;
    for (let item of allItems) {
        if (item.name === req.params.name) {
            item.name = req.body.name || item.name;
            item.price = req.body.price || item.price;
            return res.json({ updated: item });
        }
    }
})

router.delete("/:name", function (req, res) {
    for (let i = 0; i < db.items.length; i++) {
        if (db.items[i].name === req.params.name) {
            db.items.splice(i, 1);
            return res.json({ message: "Deleted" })
        }
    }
})

module.exports = router;