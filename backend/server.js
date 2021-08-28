const app = require('./src/app');

const port = process.env.NODE_PORT || 8000;

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});