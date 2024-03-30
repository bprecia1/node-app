import express from "express"
import {fetch} from "../controller/employeeController.js"
import {create, fetch} from "../controller/employeeController.js"

const route = express.Router()

route.post("/create", create)
route.get("/fetch", fetch)

export default route