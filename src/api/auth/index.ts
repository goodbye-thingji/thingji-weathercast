import express from "express";

import * as ctrl from "./ctrl";

const auth = express.Router();

// TODO: Must be removed before production env.
auth.get("/test", ctrl.testPage);

export default auth;
