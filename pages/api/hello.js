export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}
// To request  http://localhost:3000/api/hello, render json 'Hello'
