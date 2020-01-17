export const authentication = (req: any, res: any, next: any) => {
  if (req.headers.authorization === "token") {
    next();
  } else {
    res.status(400).send("Unauthorized");
  }
}