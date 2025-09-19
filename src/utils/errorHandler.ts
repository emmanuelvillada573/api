module.exports = (res, err) => {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: err.message });
};
