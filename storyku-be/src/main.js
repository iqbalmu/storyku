import { web } from './app/web.js'

web.listen(8000, () => {
  console.log("server running on http://localhost:8000");
})