const express = require('express');
const helpers  = require('./helpers');
const { sortAdvisors, filterAdvisors } = require("./helpers");
const router = express.Router();

const DEFAULT_LIMIT = 15;

router.get('/advisors', (req, res) => {
    const limit = req.query.limit ?? DEFAULT_LIMIT;
    const sort = req.query.sort;
    const filters = req.query.filter;

    // Should be used for infinite scrolling
    // const offset = req.query.offset;
    let advisors = [];

    for (let i = 0; i < limit; i++) {
        const advisor = helpers.generateAdvisor();
        advisors.push(advisor);
    }

    if (filters) advisors = filterAdvisors(advisors, JSON.parse(filters));
    if (sort) advisors = sortAdvisors(advisors, sort);

    res.json(advisors);
})

module.exports = router;