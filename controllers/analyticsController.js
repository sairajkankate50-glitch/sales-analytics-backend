import Analytics from "../models/schema.js";

export const getAnalytics = async(req,res)=>{

        const anayltics = await Analytics.find()
        res.json(anayltics)
}
export const addAnalytics = async (req, res) => {
  try {

    const { month, product, quantity, revenue } = req.body;

    const newData = new Analytics({
      month,
      product,
      quantity,
      revenue: revenue || 0
    });

    await newData.save();

    res.json(newData);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export const getMonthlyAnalytics = async (req, res) => {
  try {

    const data = await Analytics.aggregate([
      {
        $group: {
          _id: "$month",
          totalRevenue: { $sum: "$revenue" }
        }
      }
    ]);

    const formatted = data.map(item => ({
      month: item._id,
      totalRevenue: item.totalRevenue
    }));

    res.json(formatted);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};