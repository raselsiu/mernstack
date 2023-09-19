const express = require('express')
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalController')
const router = express.Router()


router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);
 
// router.get('/', getGoals)
// router.post('/', setGoals)+
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoals)



module.exports = router;