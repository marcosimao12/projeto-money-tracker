const IncomeSchema = require("../models/IncomeModel")

exports.addIncome = async (req, res) => {
    const { title, amount, type, category, description, date } = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try {
       // validações
       if (!title || !description || !category || !date) {
           return res.status(400).json({message: 'Please fill in all fields'})
       }
       if (amount < 0 || amount === 'number') {
        return res.status(400).json({message: 'must be a positive number'})
       }
        await income.save()
        res.status(200).json({message: 'Income added successfully'})
    } catch (error) {   

    }

    console.log(income)
}