import { Request, Response } from "express";
import { getList } from "../services/products";
import { getDetail } from "../services/products";

exports.getList = async function ( req: Request, res: Response ) {
  const take = +req.query.limit;
  const skip = +req.query.offset;
  const responseData = await getList( take, skip );
  res.send( responseData );
};

exports.getDetail = async function ( req: Request, res: Response ) {
  const id = req.params.id;
  const responseData = await getDetail( id );
  res.send( responseData );
};
